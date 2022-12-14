import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../../base';
import NextImage from 'next/image';
import { Button } from '../../base/button';
import { Description } from '../../base/description';
import Title from '../../base/heading';
import { device } from '../../base/mediaquery';

const StyledContainer = styled(Container).attrs({
    as: 'section'
})`
    height: 100%;
	//added opacity 25% smilar to design
	background-color: ${(p) => p.theme.colors[p.bgColor!]}40;

`;
const StyledTitle = styled(Title)`
    width: 100%;

    @media(max-width:800px) {
        text-align:center !important;
        margin-top:30px;
        margin-bottom:15px;
    }
`;

const StyledColumn = styled(Column)`
    padding: 0 60px;
    &.left {
        padding: 0;
    }

    &.center-column {
        @media ${device.tablet} {
            padding: 0;
        }
    }

    &.right {
        padding: 0;
    }
`;
const StyledRow = styled(Row)``;

const StyledButton = styled(Button)`
    @media(max-width:800px) {
        margin-top:30px;
    }
`;


export default function SponsorSection(props: {
    buttonText: string;
    buttonLink: string;
    description: string;
    logo: { url: string };
    title: string;
}) {
    const { buttonText, buttonLink, description, logo, title } = props || {};

    return (
        <StyledContainer
            justifyContent="center"
            alignItems="center"
            direction="column"
            bgColor="tertiary"
            pt="tripleInset"
            pb="tripleInset"
        >
            <StyledRow
                justifyContent="center"
                alignItems="center"
                direction="row"
            >
                <StyledColumn width="20%" justifyContent="end" className="left">
                    <NextImage src={logo.url} width="150px" height="150px" alt="Mondriaan Fonds" />
                </StyledColumn>
                <StyledColumn
                    width="60%"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    className="center-column"
                >
                    <StyledTitle
                        color="defaultSecondary"
                        title={title}
                        textalign="center"
                    />
                    <Description
                        color="primary"
                        textalign="center"
                        description={description}
                        mb="0"
                    />
                </StyledColumn>
                <StyledColumn
                    width="20%"
                    justifyContent="start"
                    className="right"
                >
                    <StyledButton
                        href={buttonLink ? buttonLink : '#'}
                        bgColor="defaultSecondary"
                        bgColorHover="primary"
                        color="defaultPrimary"
                        colorHover="secondary"
                        target="_blank"
                        title="Go to Mondriaan Fonds website"
                    >
                        {buttonText}
                    </StyledButton>
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    );
}
