const {
    NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_NAMESPACE,
    NEXT_PUBLIC_API_VERSION,
    NEXT_PUBLIC_MAIN_DOMAIN
} = process.env;
export default async (req, res) => {
    try {
        const fetchData = await fetch(
            `${NEXT_PUBLIC_API_URL}/wp-json/${NEXT_PUBLIC_API_NAMESPACE}/${NEXT_PUBLIC_API_VERSION}/post-slugs/page`
        );

        const postData = await fetchData.json();
        const data = postData.data.filter(
            ({ params }) => params.slugs.indexOf('options') < 0
        );
        const links = data.map(({ params }) => params);
        const slugsInside = links.map(({ slugs }) => {
            if (slugs.length > 1) {
                return { item: '/' + slugs[0] + '/' + slugs[1] };
            } else {
                return { item: '/' + slugs[0] };
            }
        });

        const replacedLink = slugsInside
            .map(({ item }) => {
                return item?.replace('', NEXT_PUBLIC_MAIN_DOMAIN);
            })
            .join('\n');

        res.statusCode = 200;
        res.setHeader('content-Disposition', 'filename="sitemap.txt"');
        res.setHeader('content-Type', 'text/plain; charset=utf-8');
        res.setHeader('accept-ranges', 'bytes');
        res.setHeader('cache-control', 'private');
        res.setHeader(
            'vary',
            'Origin,cookie,need-authorization, x-fh-requested-host, accept-encoding'
        );
        res.send(replacedLink);
    } catch (e) {
        res.end(e);
    }
};
