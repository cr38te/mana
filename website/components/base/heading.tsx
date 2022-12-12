import React from 'react';
import styled from 'styled-components';
import { device } from './mediaquery';
import { H1 } from './typography';

type StyleTitleProps = {
    mb: string;
    textTransform: string;
    textAlign: string;
    fonts: string;
    as?: any;
};

const StyledTitle = styled(H1)<StyleTitleProps>`
    margin-bottom: ${(p) => p.theme.spacing[p.mb]};
    line-height: 38px;
    text-transform: ${(p) => [p.textTransform]};
    text-align: ${(p) => p.theme.textAlign[p.textAlign]};
    font-family: ${(p) => p.theme.fonts[p.fonts]};
	font-weight: bold;

    &.asH1 {
        font-size: clamp(2rem, -0.875rem + 8.333333vw, 3rem);
        line-height: 100%;
    }
    &.asH2 {
        font-size: clamp(1rem, -0.875rem + 8.333333vw, 2rem);
        line-height: 100%;
    }
    &.asH3 {
        font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.75em);
        line-height: 100%;
    }

    &.asSpan {
        font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.17rem);
		font-weight: 400;
    }

	@media ${device.tablet} {
		text-align: center;
	}
`;

// type TitleProps = {
//     title?: string|undefined;
//     variant?: string|undefined;
//     color?: string|undefined;
//     mb?: string|undefined;
//     textTransform?: string|undefined;
//     className?: string|undefined;
//     textAlign?: string|undefined;
//     fonts?: string|undefined;
// };

export default function Title({
    title,
    variant,
    color,
    mb = 'doubleInset',
    textTransform = 'none',
    className,
    textAlign,
    fonts
}: any) {
    return (
        <StyledTitle
            fonts={fonts}
            mb={mb}
            as={variant}
            color={color}
            textTransform={textTransform}
            className={className}
            textAlign={textAlign}
        >
            {title}
        </StyledTitle>
    );
}
