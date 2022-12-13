import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../../base';
import NextImage from 'next/image';
import { Button } from '../../base/button';
import { Description } from '../../base/description';
import Title from '../../base/heading';
import { device } from '../../base/mediaquery';

const StyledContainer = styled(Container)`
    height: 100%;
	//added opacity 25% smilar to design
	background-color: ${(p) => p.theme.colors[p.bgColor!]}40;

`;
const StyledTitle = styled(Title)`
    width: 100%;
`;

const StyledColumn = styled(Column)`
    padding: 0 60px;
	
    &.left {
		margin-bottom:0;
        padding: 0;
		@media ${device.mobileL}{
		margin-bottom:30px;
		
	}
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
export default function SponsorSection(props: {
    buttonText: string;
    buttonLink: string;
    description: string;
    logo: { url: string };
    title: string;
}) {
    const { buttonText, buttonLink, description, logo, title } = props || {};
    return (
		<section>
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
                    <NextImage src={logo.url} width="150px" height="150px" />
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
                        textAlign="center"
						variant='h1'
						className="asH1"
                    />
                    <Description
                        color="primary"
                        textAlign="center"
                        description={description}
                        mb="0"
                    />
                </StyledColumn>
                <StyledColumn
                    width="20%"
                    justifyContent="start"
                    className="right"
                >
                    <Button
                        href={buttonLink ? buttonLink : '#'}
                        bgColor="defaultSecondary"
                        bgColorHover="primary"
                        color="defaultPrimary"
                        colorHover="secondary"
                        target="_blank"
                    >
                        {buttonText}
                    </Button>
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
		</section>
    );
}
