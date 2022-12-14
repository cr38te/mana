import styled, { css, DefaultTheme } from 'styled-components';

type HProps={
	color:keyof DefaultTheme['colors']
}

export const H1 = styled.h1<HProps>`
    font-weight:${p=>p.theme.fontWeight.light};
    line-height:100%;
    color:${p=>p.theme.colors[p.color]};
    text-align:${p=>p.theme.textalign.left};
`;

export const H2 = styled(H1).attrs({
    as: "h2"
})`
    font-weight:${p=>p.theme.fontWeight.regular};
`;

export const H3 = styled(H1).attrs({
    as: "h3"
})`
    font-weight:${p=>p.theme.fontWeight.regular};
`;

export const H4 = styled(H1).attrs({
    as: "h4"
})`
    font-weight:${p=>p.theme.fontWeight.regular};
`;

export const H5 = styled(H1).attrs({
    as: "h5"
})`
    font-weight:${p=>p.theme.fontWeight.regular};
`;

export const H6 = styled(H1).attrs({
    as: "h6"
})`
    font-weight:${p=>p.theme.fontWeight.regular};
`;


type ParagraphProps={
	textalign?:keyof DefaultTheme["textalign"]
}
export const ParagraphCSS = css<ParagraphProps>`
    font-size:${p=>p.theme.fontSizes.extraSmall};
    line-height:21px;
    text-align:${p=>p.theme.textalign[p.textalign!]};
    font-weight:${p=>p.theme.fontWeight.light};
    align-items:${p=>p.theme.alignItems.center};

    a {
        color:${p=>p.theme.colors.primary};
        text-decoration:underline;
        line-height:20px;
    }
`;

export const Paragraph = styled.p`
    ${ParagraphCSS}
`;
