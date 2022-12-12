import NextHead from 'next/head';
import { BASE_URL, MAIN_DOMAIN } from '../../utils';

export default function Head({
    title = '',
    postTitle = '',
    description = '',
    image = { url: '' },
	permalink
}: any) {
    return (
        <NextHead>
            <title>{title || postTitle}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image?.url} />
            <meta name="robots" content="noindex,nofollow" />
            <meta name="author" content="CR38TE - DEFINE.DESIGN.DEVELOP"></meta>
            <meta property="og:url" content={permalink} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || postTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image?.url} />
            <meta property="og:site_name" content={title || postTitle} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=5"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />

            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" 
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
        </NextHead>
    );
}
