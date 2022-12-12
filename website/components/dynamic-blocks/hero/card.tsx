import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Container, Row } from '../../base/grid';
import { device } from '../../base/mediaquery';
import { Button } from '../../base/button';
import ArrowRightIcon from '../../../icons/chevron-right';

type ContainerProps = {
    bgImage: string;
};

const StyledContainer = styled(Container)<ContainerProps>`
    width: 260px;
    cursor: pointer;
    height: 200px;
    background-image: url(${(props) => [props.bgImage]});
    background-position: center center;
    position: relative;
    background-size: cover;
    background-repeat: none;
    border-radius: 0 60px 0 60px;
    overflow: hidden;

    @media ${device.mobileL} {
        width: 130px;
        height: 100px;
    }
`;

const StyledRow = styled(Row)`
    max-width: 100%;

    @media ${device.tablet} {
        justify-content: end;
    }
`;

type ButtonProps = {
    hoverColor?: keyof DefaultTheme['colors'];
};
const StyledButton = styled(Button)<ButtonProps>`
    max-width: 60px;
    width: 60px;
    height: 50px;
    border-radius: 0 17px 0 0;

    flex-direction: row;
    display: flex;
    justify-content: center;

    @media ${device.mobileL} {
        max-width: 30px;

        width: 30px;
        height: 25px;
    }

    .arrow {
        margin-left: 15px;

        min-width: 20px;
        width: 20px;
        max-width: 20px;
        height: 20px;
        min-height: 20px;
        max-height: 20px;
    }
`;

const Text = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
`;

export default function HeroSmallCard({
    isDog,
    thumbImage,
    thumbText,
    thumbLink
}: any) {
    return (
        <StyledContainer bgImage={thumbImage?.url}>
            {thumbText && (
                <StyledRow alignItems="end" justifyContent="start">
                    <StyledButton
                        bgColor={isDog ? 'defaultSecondary' : 'primary'}
                        color={isDog ? 'defaultPrimary' : 'tertiary'}
                        href={thumbLink}
                        title={thumbText}
                        className="button-thumb"
                        hoverColor={isDog ? 'tertiary' : 'primary'}
                        bgHoverColor={isDog ? 'primary' : 'defaultSecondary'}
                    >
                        <Text>{thumbText}</Text>
                        <ArrowRightIcon
                            iconColor={isDog ? 'defaultPrimary' : 'tertiary'}
                            className="arrow"
                        />
                    </StyledButton>
                </StyledRow>
            )}
        </StyledContainer>
    );
}
