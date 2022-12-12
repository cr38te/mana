import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { IIcon } from '../utils/interface';

const Container = styled.div`
    min-width: 15px;
    width: 15px;
    max-width: 15px;
    height: 15px;
    min-height: 15px;
    max-height: 15px;
    color: grey;
    user-select: none;

    @media (max-width: 1024px) {
        min-width: 20px;
        width: 20px;
        max-width: 20px;
        height: 20px;
        min-height: 20px;
        max-height: 20px;
    }
`;

type SVGProps = {
    fontColor?: keyof DefaultTheme['colors'];
    iconBg?: keyof DefaultTheme['colors'];
};

const SVG = styled.svg<SVGProps>`
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors[props.fontColor!]};
    background: ${(props) => props.theme.colors[props.iconBg!]};
    transition: ${(props) => props.theme.transition.linear};
`;

const ClockIcon = ({ className, iconColor = 'defaultPrimary' }: IIcon) => (
    <Container className={className}>
        <SVG
            fontColor={iconColor}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="clock"
            className="svg-inline--fa fa-clock fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
            />
        </SVG>
    </Container>
);

export default ClockIcon;
