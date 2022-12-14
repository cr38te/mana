import React from 'react';
import { text } from 'stream/consumers';
import styled, { DefaultTheme } from 'styled-components';
import { device } from './mediaquery';
import { ParagraphCSS } from './typography';

type TextProps = {
    color: keyof DefaultTheme['colors'];
    textalign?: keyof DefaultTheme['textalign'];
    width: string;
    mt?: string;
    mb?: string;
};

const Text = styled.div<TextProps>`
    ${ParagraphCSS}
    color:${(p) => p.theme.colors[p.color]};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${(p) => (p.mb ? p.mb : p.theme.spacing.tripleInset)};
    margin-top: ${(p) => (p.mt ? p.mt : p.theme.spacing.inset)};
	width: ${(p) => p.width};

    p {
        text-align: ${(p) => p.theme.textalign[p.textalign!]};
		margin-bottom: ${(p) => (p.mb ? p.mb : p.theme.spacing.tripleInset)};
        color: ${(p) => p.theme.colors[p.color]};
    }

    @media ${device.laptop} {
        font-size: 16px;
        line-height: 24px;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 15px;
        &.mobileDescription {
            margin-bottom: 15px;
        }
    }

	@media ${device.mobileL}{
		font-size: 16px;
        line-height: 24px;
	}
`;

export const Description = ({
    description,
    color = 'quinary',
    width = '100%',
    textalign = 'center',
    className,
    mt,
    mb
}: {
    description: string;
    color?: string;
    width?: string;
    textalign?: string;
    className?: string;
    mt?: string;
    mb?: string;
}) => {
    return (
        <Text
            color={color}
            width={width}
            textalign={textalign}
            className={className}
            mt={mt}
            mb={mb}
            dangerouslySetInnerHTML={{ __html: description }}
        />
    );
};
