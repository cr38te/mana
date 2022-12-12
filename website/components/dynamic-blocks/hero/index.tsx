import React, { useState } from 'react';
import styled from 'styled-components';
import { IHero, ISlide } from '../../../utils/interface';
import { Column, Container, Row } from '../../base/grid';
import HeroImage from './image';
import { device } from '../../base/mediaquery';
import HeroSmallCard from './card';

type ContainerProps = {
    fullScreen?: boolean;
    direction?: string;
};

const StyledContainer = styled.div<ContainerProps>`
    width: 100%;
    height: calc(${(p) => (p.fullScreen ? '100vh' : '50vh')}) !important;
    position: relative;
`;

const Slides = styled.div`
    display: block;
    width: 100%;
`;

const Slide2 = styled.div`
    width: 30%;
    position: absolute;
    bottom: -50px;
    left: 18%;
    z-index: 1;
    @media ${device.mobileL} {
        width: 60%;
    }
`;
const Cards = styled.div`
    width: 30%;
    @media ${device.mobileL} {
        width: 60%;
    }
`;

export const HeroComponent = (heroArea: IHero) => {
    console.log('heroArea', heroArea);
    const { classes, fullScreen, ...props } = heroArea || {};
	
    return (
        <section>
            <>
                <StyledContainer fullScreen={fullScreen} direction="column">
                    <HeroImage {...props} fullScreen={fullScreen} />
                </StyledContainer>
            </>
        </section>
    );
};
