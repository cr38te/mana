import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { IIcon } from '../utils/interface';

type ContainerProps = {
    iconSize: string;
};
const Container = styled.div<ContainerProps>`
    min-width: ${(props) => [props.iconSize]};
    width: ${(props) => [props.iconSize]};
    max-width: ${(props) => [props.iconSize]};
    height: ${(props) => [props.iconSize]};
    min-height: ${(props) => [props.iconSize]};
    max-height: ${(props) => [props.iconSize]};
    color: grey;
    user-select: none;
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

const ChevronRightIcon = ({
    className,
    iconColor = 'defaultPrimary',
    iconSize = '15px', onClick,
}: IIcon) => (
    <Container className={className} iconSize={iconSize} onClick={onClick}>
        <SVG
            fontColor={iconColor}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            />
        </SVG>
    </Container>
);

export default ChevronRightIcon;
