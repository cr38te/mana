import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Container, Row, Column } from '../../base/grid';
import { device } from '../../base/mediaquery';
import Title from '../../base/heading';
import { Button } from '../../base/button';
import { ISlide } from '../../../utils/interface';
import { Description } from '../../base/description';

type ContainerProps = {
    bgImage: string;
    fullScreen: boolean;
    ref?: any;
};

const StyledContainer = styled(Container)<ContainerProps>`
    height: calc(${(p) => (p.fullScreen ? '100vh' : '50vh')}) !important;
    width: 100%;
    background-image: url(${(props) => [props.bgImage]});
    background-position: center;
    background-attachment:fixed;
    position: relative;
    background-size:cover;

    @media ${device.laptopL} {
        background-repeat: none;
        background-size: cover;
        background-position: center;
        align-items:center;
    }
    @media ${device.tablet} {
        background-repeat: none;
        background-size: cover;
        background-position: center;
        align-items:flex-end;
    }
    @media(max-width:800px) {
        background-attachment:scroll;
        align-items:flex-end;
    }
    &:after {
        content: '';
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: ${(p) => p.theme.colors.defaultSecondary};
        opacity: 0.3;
    }
`;

const StyledRow = styled(Row)`
    max-width: 100%;

    &.logo {
        max-height: 300px;
        padding-top: ${(p) => p.theme.spacing.tripleInset};
    }

    @media ${device.laptop} {
        justify-content: center;
    }
`;

type TextProps = {
    color?: keyof DefaultTheme['colors'];
    textalign?: keyof DefaultTheme['textalign'];
};

const StyledColumn = styled(Column)`
    z-index: 1;
	&.hero-content{

		@media ${device.laptopL}{
			width:75%;
			max-width: 75%;
		}
	
	}
`;
const StyledTitle = styled(Title)`
    text-align: center;

    @media ${device.mobileL} {
        text-align: center;
    }
`;


export default function HeroImage({
    slides,
    fullScreen
}: {
    slides?:any;
    fullScreen: boolean;
}) {
    const {
        addLink,
        description,
        image,
        link,
        linkText,
        title,
        mobileImage,
        className
    }: any = slides[0] || {};

    return (
        <StyledContainer
            fullScreen={fullScreen}
            className={`${className}`}
            bgImage={image?.url}
            justifyContent="center"
            alignItems="center"
            direction="row"
        >
            <StyledRow justifyContent="center" alignItems="center">
                <StyledColumn
                    width="35%"
                    justifyContent="center"
                    alignItems="start"
					className="hero-content"
                >
                    {title && (
                        <StyledTitle
                            variant="h1"
                            color="defaultPrimary"
                            title={title}
                            mb="doubleInset"
                            texttransform="none"
                            className="asH1"
                        />
                    )}
                    {description && (
                        <Description
                            className="description"
                            color="tertiary"
                            description={description}
                            textalign="start"
                            mb="15px"
                        />
                    )}
                    {addLink && (
                        <Button
                            bgColor="primary"
                            color="tertiary"
                            href={link}
                            title={linkText}
                            className="button-hero"
                            colorHover="primary"
                            bgColorHover="defaultSecondary"
                        >
                            {linkText}
                        </Button>
                    )}
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    );
}
