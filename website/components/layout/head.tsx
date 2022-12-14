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
            <meta name="robots" content="index,follow" />
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
        </NextHead>
    );
}
