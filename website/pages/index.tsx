import styled from 'styled-components';
import { Container } from '../components/base';
import DynamicBlocks from '../components/dynamic-blocks';
import Contact from '../components/dynamic-blocks/contact';
import { HeroComponent } from '../components/dynamic-blocks/hero';
import Layout from '../components/layout';
// import { IOptions, IWPPostData } from '../utils/interface';
import data from '../utils/dataHome.json';
const Main = styled(Container).attrs({
    as: 'main'
})`
    position: relative;
`;

export default function Home({
    postData,
    options
}: {
    postData: any;
    options?: any;
}) {
    const { acf = {}, permalink}: any = postData || {};
    return (
        <Layout options={options} seo={acf?.seo} permalink={permalink}>
            <Main direction="column">
                <HeroComponent {...acf?.heroArea} />
                <DynamicBlocks options={options} postData={postData} />
            </Main>
        </Layout>
    );
}

export async function getStaticProps() {
    const {
        NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_API_NAMESPACE,
        NEXT_PUBLIC_API_VERSION
    } = process.env;
    const res = await fetch(
        `${NEXT_PUBLIC_API_URL}/wp-json/${NEXT_PUBLIC_API_NAMESPACE}/${NEXT_PUBLIC_API_VERSION}/object-by-slug/?post_type=page&path[]=home`
    );
    const post = await res.json();
    const rest = await fetch(
        `${NEXT_PUBLIC_API_URL}/wp-json/${NEXT_PUBLIC_API_NAMESPACE}/${NEXT_PUBLIC_API_VERSION}/site-options`
    );
    const options = await rest.json();
    return {
        props: {
            postData: {
                ...post.data
            },
            options: {
                ...options.data
            }
        },
        revalidate: 10
    };
}
