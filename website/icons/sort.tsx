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

const SortIcon = ({
    className,
    iconColor = 'defaultPrimary',
    iconSize = '15px'
}: IIcon) => (
    <Container className={className} iconSize={iconSize}>
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
        
		<path  fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
		</SVG>
    </Container>
);

export default SortIcon;
