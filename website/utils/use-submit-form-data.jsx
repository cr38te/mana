import { format } from 'path';
import { useState } from 'react';
import { BASE_URL } from '.';
import { gtagEvent } from './google';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE =
	process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE;

export default function useSubmitContactFormData(
	handle = '',
	reCaptchaAction = 'homepage',
	title,
	post_name
) {
	const [response, setResponse] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [newsletterState, setNewsletterState] = useState('initial');
	const submit = (data) => {
		const gtagLabel = data?.subject;
		gtagEvent({
			action: 'submit_contact_form',
			category: 'Contact',
			label: gtagLabel,
		});
		const grecaptcha = window?.grecaptcha;
		if (!grecaptcha) {
			setError(`ReCaptcha object not defined`);
			throw 'ReCaptcha object not defined';
		}
		if (!handle) {
			setError(`No handle function provided`);
			throw 'No handle function provided';
		}
		setLoading(true);
		setNewsletterState('submitting');
		grecaptcha.ready(async function () {
			try {
				const token = await grecaptcha.execute(
					NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE,
					{ action: reCaptchaAction }
				);
				let formData = new FormData();
				for (const property in data) {
					formData.set(property, data[property]);
				}
				formData.set('title', title);
				formData.set('post_name', post_name);
				formData.set('action', handle);
				formData.set('token', token);
				formData.set('recaptcha-action', reCaptchaAction);
				let responseL = null;
				if (reCaptchaAction === 'contactpage') {
					responseL = await fetch(
						`${NEXT_PUBLIC_API_URL}/wp-admin/admin-ajax.php`,
						{
							method: 'POST',
							body: formData,
						}
					);
					const responseJson = await responseL.json();
					setResponse(responseJson);
				}
				if (reCaptchaAction === 'newsletter') {
					responseL = await fetch(
						'https://admin.mailklik.com/subscribe',
						{
							method: 'POST',
							body: formData,
							contentType: 'application/json',
							mode: 'no-cors',
						}
					);
					setNewsletterState('done');
					setResponse(responseL);
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		});
	};
	return [response, loading, error, submit, newsletterState];
}
