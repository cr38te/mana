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

const FacebookIcon = ({ className, iconColor='defaultPrimary' }:IIcon) => (
    <Container className={className}>
        <SVG fontColor={iconColor} className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></SVG>
    </Container>
);

export default FacebookIcon;