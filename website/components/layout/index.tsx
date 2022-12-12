import Head from './head';
import Header from './header';
import { IOptions } from '../../utils/interface';
import Footer from './footer/index';

export default function Layout({
    options, seo,permalink,
    children,
   
}: {
    options?: {};
    children: React.ReactNode;
    seo?: { image: object };
	permalink:any;
}) {
    const { footer, contactInfo }: any = options || {};
    return (
        <>
            <Head {...seo} permalink={permalink} />
            {/* <Header/> */}
            {children}
            <Footer {...footer} {...contactInfo} />
        </>
    );
}
