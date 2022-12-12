import styled from 'styled-components';
import { Container } from '../components/base/grid';
import {  IOptions } from '../utils/interface';
const Main = styled(Container).attrs({
    as: 'main'
})``;

const Wrapper = styled.div`
    position: relative;
`;

export default function Page({
    postData,
    options
}: {
    postData: {
        acf: any;
    };
    options?: IOptions;
}) {
    return <Main>SLugs</Main>;
}

// export async function getStaticPaths() {
//     const url = `${BASE_URL}/wp-json/${API_NAMESPACE}/v1/post-slugs/page`;
//     const res = await fetch(url);
//     const respJson = await res.json();
//     const paths = respJson.data;
//     return {
//         paths,
//         fallback: 'blocking'
//     };
// }

// export async function getStaticProps({
//     params
// }: {
//     params: { slugs: string[] };
// }) {
//     const { slugs }: { slugs: string[] } = params;

//     const url = `${BASE_URL}/wp-json/${API_NAMESPACE}/v1/object-by-slug/?post_type=page${slugs
//         .map((s: string) => `&path[]=${s}`)
//         .join('')}`;
//     const res = await fetch(url);
//     const post = await res.json();

//     const rest = await fetch(
//         `${BASE_URL}/wp-json/${API_NAMESPACE}/v1/site-options`
//     );
//     const options = await rest.json();

//     return {
//         props: {
//             postData: {
//                 ...post.data
//             },
//             options: {
//                 ...options.data
//             }
//         },
//         revalidate: 10
//     };
// }
