import type { AppProps } from 'next/app';
import Theme from '../styles/theme';
import GlobalStyles from '../styles/theme/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Theme>
            <GlobalStyles />
            <Component {...pageProps} />
        </Theme>
    );
}

export default MyApp;
