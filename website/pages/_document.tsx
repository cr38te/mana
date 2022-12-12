import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID, GOOGLE_RECAPTCHA_CLIENT_CODE } from '../utils/google';
import { randomBytes } from 'crypto';

const prod = process.env.NODE_ENV == 'production';
const NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE =
	process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE;

function getCsp() {
	let csp = ``;
	// csp += `${prod ? `base-uri 'none';` : ''}`;
	// csp += `${
	//     prod
	//         ? `frame-src 'self' https://*.youtube.com https://*.google.com https://*.googleapis.com;`
	//         : ''
	// }`;
	// csp += `style-src 'self' 'unsafe-inline' *.googleapis.com *.cloudflare.com;`;
	// csp += `img-src * data: blob:;`;
	// csp += `media-src * blob: data:;`;
	// csp += `connect-src *;`;
	// csp += `font-src 'self' *.gstatic.com *.cloudflare.com;`;
	// csp += `form-action 'none';`;
	// csp += `object-src 'none';`;
	return csp;
}

let referrer = 'strict-origin';

export default class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		const nonce = randomBytes(8).toString('base64');
		return (
			<Html lang="en">
				<Head nonce={nonce}>
					<meta
						httpEquiv="Content-Security-Policy"
						content={getCsp()}
					/>
					<meta name="referrer" content={referrer} />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<script
						async
						defer
						src={`https://www.google.com/recaptcha/api.js?render=${NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE}`}
						nonce={nonce}
					/>
					<style
						dangerouslySetInnerHTML={{
							__html: `
                            .grecaptcha-badge {
                                display: none !important
                            }
                        `,
						}}
						nonce={nonce}
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					{/* <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                        `
                        }}
                    /> */}
					{/* <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Inter&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    /> */}
					{/* <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
