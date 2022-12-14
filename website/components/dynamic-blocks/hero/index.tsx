import React, { useState } from 'react';
import styled from 'styled-components';
import { IHero, ISlide } from '../../../utils/interface';
import HeroImage from './image';
import { device } from '../../base/mediaquery';
import Brand from '../../../assets/logo-small.png';

type ContainerProps = {
    fullScreen?: boolean;
    direction?: string;
};

const StyledContainer = styled.div<ContainerProps>`
    width: 100%;
    height: calc(${(p) => (p.fullScreen ? '100vh' : '50vh')}) !important;
    position: relative;
`;

const ContainerBrand = styled.div`
    position:absolute;
    top:15px;
    left:50%;
    margin-left:-100px;
    z-index:20;

    @media(max-width:800px) {
        margin-left:-75px;
    }
`;

const LogoImg = styled.img`
    width: 200px;
    height: auto;
    display: block;
    z-index: 10000;
    transition: 0.5s all ease;

    @media(max-width:800px) {
        width:150px;
    }

    &.animateHeader {
        width: 100px;
    }

    @media ${device.mobileL} {
        z-index: 10000;
    }
`;

export const HeroComponent = (heroArea: IHero) => {
    const { classes, fullScreen, ...props } = heroArea || {};
	
    return (
        <section>
            <>
                <StyledContainer fullScreen={fullScreen} direction="column">
                    <ContainerBrand>
                        <LogoImg src={Brand} alt="National Archaeological Museum Aruba" width="200" height="200" />
                    </ContainerBrand>
                    <HeroImage {...props} fullScreen={fullScreen} />
                </StyledContainer>
            </>
        </section>
    );
};
