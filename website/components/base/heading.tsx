import React from 'react';
import styled from 'styled-components';
import { device } from './mediaquery';
import { H1 } from './typography';

type StyleTitleProps = {
    mb: string;
    texttransform: string;
    textalign: string;
    fonts: string;
    as?: any;
};

const StyledTitle = styled(H1)<StyleTitleProps>`
    margin-bottom: ${(p) => p.theme.spacing[p.mb]};
    line-height: 38px;
    text-transform: ${(p) => [p.texttransform]};
    text-align: ${(p) => p.theme.textalign[p.textalign]};
    font-family: ${(p) => p.theme.fonts[p.fonts]};
	font-weight: bold;

    &.asH1 {
        font-size: clamp(2rem, -0.875rem + 8.333333vw, 3rem);
        line-height: 100%;
    }
    &.asH2 {
        font-size: clamp(1.5rem, -0.875rem + 8.333333vw, 2.5rem);
        line-height: 100%;

        @media(max-width:800px) {
            font-size:21px;
            line-height:32px;
        }
    }
    &.asH3 {
        font-size: clamp(2rem, -0.875rem + 8.333333vw, 2.5rem);
        line-height: 100%;
    }

    &.asSpan {
        font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.17rem);
		font-weight: 400;
    }

    @media(max-width:800px) {
        text-align:left;
    }
`;

// type TitleProps = {
//     title?: string|undefined;
//     variant?: string|undefined;
//     color?: string|undefined;
//     mb?: string|undefined;
//     texttransform?: string|undefined;
//     className?: string|undefined;
//     textalign?: string|undefined;
//     fonts?: string|undefined;
// };

export default function Title({
    title,
    variant,
    color,
    mb = 'doubleInset',
    texttransform = 'none',
    className,
    textalign,
    fonts
}: any) {
    return (
        <StyledTitle
            fonts={fonts}
            mb={mb}
            as={variant}
            color={color}
            texttransform={texttransform}
            className={className}
            textalign={textalign}
        >
            {title}
        </StyledTitle>
    );
}
