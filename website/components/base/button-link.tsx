import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { device } from './mediaquery';

type ButtonProps = {
    bgColor?:
        | keyof import('styled-components').DefaultTheme['colors']
        | undefined;
    color?: keyof DefaultTheme['colors'] | undefined;
    bgHoverColor?: keyof DefaultTheme['colors'] | undefined;
    hoverColor?: keyof DefaultTheme['colors'] | undefined;
	to?:string;
};

const StyledButtonLink = styled.a<ButtonProps>`
	font-size:14px;
	background-color:${(props) => props.theme.colors[props.bgColor!]};
    color: ${(props) => props.theme.colors[props.color!]};
    font-weight: ${(props) => props.theme.fontWeight.light};
    letter-spacing: 0.8px;
    display: flex;
    flex-direction: ${(props) => props.theme.direction.row};
    align-items: ${(props) => props.theme.alignItems.center};
    cursor: pointer;
    transition: ${(props) => props.theme.transition.linear};
	padding:15px 30px;

    &:hover {
        text-decoration: underline;
    }

    div {
        margin-right: 8px;
    }

    @media (max-width: 846px) {
        margin-bottom: ${(props) => props.theme.spacing.doubleInset};
    }

	@media ${device.mobileL}{
		margin-bottom:0px;
	}
`;

const ButtonLink = ({
    buttonText = 'View all amenities',
    buttonLink = '#',
    color = 'tertiary',
    className = '',
	bgColor
}: {
    buttonText: string;
    buttonLink: string;
    color?: string;
    className?: string;
	bgColor?:string;
}) => {
    return (
        <StyledButtonLink
            color={color}
            to={buttonLink}
            title={buttonText}
            className={className}
			bgColor={bgColor}
        >
            {buttonText}
        </StyledButtonLink>
    );
};

export default ButtonLink;
