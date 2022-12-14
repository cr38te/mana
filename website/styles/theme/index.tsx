import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type ThemeProps = {
    children?: any;
};

const Theme = ({ children }: ThemeProps) => {
    const theme: DefaultTheme = {
        colors: {
            defaultPrimary: '#FFFFFF', // linen
            defaultSecondary: '#4C2432', // whitesmoke
            primary: '#383838', // bisque
            secondary: '#FF9E1B', // chocolate
            tertiary: '#FFD478', // white,
            quaternary: '#F7F7F7',
            quinary: '#383838'
        },
        fonts: {
            paragraphFont: 'Futura-Book-Regular',
            headingFont: 'Nilland-Black',
            bodyFont: 'Futura-Book-Regular'
        },
        fontWeight: {
            light: '300',
            regular: '400',
            bold: '700'
        },
        fontSizes: {
            extraSmall: '14px',
            small: '28px',
            medium: '50px',
            large: '60px',
            extraLarge: '90px',
            paragraph: '18px',
            subTitle: '40px'
        },
        spacing: {
            inset: '15px',
            doubleInset: '30px',
            tripleInset: '60px',
            quarterlyInset: '90px',
            megaInset: '120px',
            none: '0px'
        },
        textalign: {
            center: 'center',
            left: 'left',
            right: 'right',
            justify: 'justify'
        },
        direction: {
            column: 'column',
            row: 'row',
            columnReverse: 'column-reverse',
            rowReverse: 'row-reverse'
        },
        alignItems: {
            start: 'flex-start',
            center: 'center',
            end: 'flex-end',
            spaceBetween: 'space-between',
            stretch: 'stretch',
            baseLine: 'baseline'
        },
        justifyContent: {
            start: 'flex-start',
            center: 'center',
            end: 'flex-end',
            spaceBetween: 'space-between',
            spaceAround: 'space-around',
            spaceEvenly: 'space-evenly'
        },
        position: {
            relative: 'relative',
            fixed: 'fixed',
            sticky: 'sticky',
            absolute: 'absolute'
        },
        transition: {
            linear: 'all 0.3s linear',
            fastLinear: 'all 0.15s linear'
        }
    };
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
