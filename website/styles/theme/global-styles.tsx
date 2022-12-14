import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
	font-family: "Nilland-Black";
	src: url(${`/fonts/Nilland-Black.ttf`}) format('truetype');
	font-display: swap;
}

@font-face {
	font-family: "Futura-Book-Regular";
	src: url(${`/fonts/Futura-Book-Regular.otf`}) format('opentype');
    font-display: swap;
}

    *,
    *:after,
    *:before {
        box-sizing:border-box;
    }
    html { scroll-behavior: smooth; }
    body {
        margin:0;
        padding:0;
        font-family: ${props => props.theme.fonts.paragraphFont};
        color: ${props => props.theme.colors.defaultPrimary};
        background-color: ${props => props.theme.colors.quaternary};
        font-size: 12px;
        line-height:12px;
        top:0;
        position:relative;
        font-weight: ${props => props.theme.fontWeight.regular};
        font-display:fallback;
        transition:all 0.1s linear;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.fonts.headingFont};
        font-weight:${p=>p.theme.fontWeight.light};
        font-display:fallback;
        margin-top:0;
        margin-bottom:${props => props.theme.spacing.inset};
        text-transform:none;
        letter-spacing:1.8px;
    }
    h1 { font-size: clamp(2rem, -0.875rem + 8.333333vw, 2.5rem); }
    h2 { font-size: clamp(1rem, -0.875rem + 8.333333vw, 2rem); }
    h3 { font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.17em); }
    h4, h5, h6 { font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.12em); }
	span{font-size: clamp(1.3rem, -0.875rem + 8.333333vw, 2rem);}
    p, 
    ul > li {
        margin-top:0;
        margin-bottom:0;
        font-weight:${p=>p.theme.fontWeight.regular};

    }
    .sub-container > div > div {
        padding-left:0;
        padding-right:0;
    }
`;