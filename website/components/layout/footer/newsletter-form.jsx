import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button } from '../../base/button';
import { device } from '../../base/mediaquery';
import useSubmitFormData from '../../../utils/use-submit-form-data';

const StyledForm = styled.form`
	display: flex;
	flex-direction: ${(props) => props.theme.direction.column};
	align-items: ${(props) => props.theme.alignItems.start};
	width: 100%;

	@media ${device.mobileL} {
		flex-direction: ${(props) => props.theme.direction.column};
		align-items: ${(props) => props.theme.alignItems.center};
		width: 100%;
	}

	&.alert {
		border: 1px solid #990000;
	}

	@media ${device.laptop} {
		width: 100%;
		margin-bottom: 0;
	}
`;

// type FormGroup = {
//     alignItems?: string;
// };
const FormGroup = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: ${(p) => p.theme.alignItems[p.alignItems]};
	justify-content: ${(p) => p.theme.justifyContent[p.justifyContent]};
	margin: 0;

	@media ${device.tablet} {
		flex-direction: column;
	}
`;

const TextField = styled.input`
	height: 40px;
	border: 0;
	background-color: ${(p) => p.theme.colors.defaultPrimary};
	padding-left: ${(props) => props.theme.spacing.inset};
	padding-top: 0;
	padding-bottom: 0;
	width: 100%;
	border-radius: 6px;
	margin-bottom: 30px;
	&:first-child {
		margin-right: 15px;
	}

	@media ${device.laptopL} {
		width: 150px;
	}
	@media ${device.laptopL} {
		width: 100px;
	}
	@media ${device.tablet} {
		width: 200px;
		margin-bottom: ${(props) => props.theme.spacing.doubleInset};
		font-size: 14px;
	}
	@media ${device.mobileL} {
		margin-bottom: ${(props) => props.theme.spacing.inset};
		width: 100%;
	}

	&:focus {
		outline: none;
	}
`;

const StyledButton = styled(Button).attrs({
	as: 'button',
})`
	border: 0;
	text-transform: uppercase;
	max-width: 49%;
	margin-right: 15px;

	/* height: 40px; */

	@media ${device.mobileL} {
		position: relative;
		border-radius: 30px;
		margin-top: 0px;
		margin-left: 0;
	}
`;

const MessageDone = styled.p`
	background-color: ${(p) => p.theme.colors.defaultSecondary};
	color: ${(p) => p.theme.colors.defaultPrimary};
	font-weight: bold;
	border-radius: 8px;
	padding: ${(p) => p.theme.spacing.inset};
	letter-spacing: 0.42px;
	font-size: 14px;
	line-height: 24px;
	font-weight: ${(p) => p.theme.fontWeight.regular};
`;

const AS = styled.div`
	display: none;
`;

const Hidden = styled.div`
	display: none;
`;

export default function NewsletterForm({
	buttonText = 'Subscribe',
	emailPlaceholderText = 'Email',
	namePlaceholderText = 'Full name',
	// contactFormOptions = []
}) {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const [response, loading, error, submit, newsletterState] =
		useSubmitFormData('handle_newsletter_form_submission', 'newsletter');

	if (newsletterState === 'submitting') {
		buttonText = 'sending...';
	}

	return (
		<StyledForm onSubmit={handleSubmit(submit)}>
			<FormGroup>
				<TextField
					id="email"
					type="email"
					placeholder={emailPlaceholderText}
					name="email"
					{...register('email', { required: true })}
					className={errors.email ? 'alert' : ''}
				/>
				<TextField
					id="name"
					type="text"
					placeholder={namePlaceholderText}
					name="name"
					{...register('name', { required: false })}
				/>
			</FormGroup>
			<FormGroup alignItems="center" justifyContent="start">
				<Hidden>
					<TextField
						type="text"
						name="hp"
						id="hp"
						{...register('hp')}
					/>
					<TextField
						type="hidden"
						name="list"
						{...register('list')}
						value="EHgTKgO1sjfnxJp0GPQ1Ug"
					/>
					<TextField
						type="hidden"
						name="subform"
						value="yes"
						{...register('subform')}
					/>
					<TextField
						type="hidden"
						name="boolean"
						value="true"
						{...register('boolean')}
					/>
				</Hidden>
				<StyledButton
					type={'submit'}
					bgColor="defaultSecondary"
                    bgColorHover="primary"
					color="defaultPrimary"
                    colorHover="secondary"
					style={{
						display: `${
							newsletterState === 'done' ? 'none' : 'block'
						}`,
					}}
				>
					{buttonText}
				</StyledButton>
			</FormGroup>
			<FormGroup>
				<AS>
					<TextField
						type="text"
						id="url"
						placeholder="Leave this empty"
						{...register('url')}
					/>
				</AS>
			</FormGroup>
			<FormGroup>
				<MessageDone
					style={{
						display: `${
							newsletterState === 'done' ? 'block' : 'none'
						}`,
					}}
				>
					Thank you for subscribing to our newsletter.
				</MessageDone>
			</FormGroup>
		</StyledForm>
	);
}
