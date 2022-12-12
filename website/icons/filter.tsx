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

const FilterIcon = ({
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
            <path
                fill="currentColor"
                d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"
            />
        </SVG>
    </Container>
);

export default FilterIcon;
