import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../../icons/close';
import Title from '../../base/heading';
import { ParagraphCSS } from '../../base/typography';
import { device } from '../../base/mediaquery';
import { Button } from '../../base/button';
import { Description } from '../../base/description';
import UserInfo from '../contact/user-info';
import ContactSection from '../../layout/footer/contact-section';

const CloseContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999999999 !important;
    cursor: pointer;

    > div > svg {
        transition: 0.5s all ease-in-out;
        &:hover {
            color: ${(p) => p.theme.colors.primary};
        }
    }
`;

const InfoWindowContainer = styled.div`
    z-index: 1;
    background-color: ${(p) => p.theme.colors.tertiary};
    border: 1px solid rgba(0,0,0,0.30);
    padding: ${(p) => p.theme.spacing.inset};
    position: absolute;
    bottom: calc(100% + 25px);
    left: -150px;
    min-width: 325px;
    border-radius: 0;
    display: none;
    @media ${device.tablet} {
        left: -25px;
    }

    &.hidden {
        display: none;
    }
    &.show {
        display: block;
    }

    &::before {
        width: 0;
        content: '';
        border-style: solid;
        transform: rotate(0);
        border:0;
        position: absolute;
        bottom: -12px;
        left: 143px;
        z-index: 9999999999;

        @media ${device.tablet} {
            left: 19px;
        }
        /* @media (max-width: 1240px) and (min-width: 320px) {
            display:none;
        } */
    }
`;

const StyledTitle = styled(Title)`
    line-height: 28px;

    @media (max-width: 480px) {
        font-size: 21px !important;
        line-height: 42px !important;
        text-align: left;
    }
`;

const StyledButton = styled(Button)`
    padding: 10px;
`;

const ButtonWrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
        font-weight: bold;
        max-width: 100%;
        @media ${device.laptop} {
            min-width: 100px;
            &:first-child {
                margin-right: 10px;
            }
        }
    }
`;

export const InfoWindow = ({
    selected,
    acf,
    link,
    onClose,
    contactInfo,
    lat,
    lng,
    ...props
}: {
    selected: boolean;
    acf: {
        title: string;
        locationList: object[];
        googlemap: {
            lat: string;
            lng: string;
        };
        location: { lat: number; lng: number };

        buttonText: string;
        link: string;
        text: string;
    };
    link: string;
    onClose: any;
    contactInfo: any;
    lat?: any;
    lng?: any;
}) => {

    const handleClick = () => {
        onClose();
    };

    const googleLink = `https://www.google.com/maps?saddr=My+Location&daddr=${lat},${lng}`;
    return (
        <InfoWindowContainer
            className={`info-item ${selected ? 'show' : 'hidden'}`}
        >
            <CloseContainer onClick={handleClick}>
                <CloseIcon iconColor="defaultPrimary" />
            </CloseContainer>
            <StyledTitle
                variant="h3"
                color="defaultSecondary"
                title={'Visit Us!'}
                mb="inset"
            />

            <ContactSection contactInfo={contactInfo} />
            <ButtonWrapper>
                <StyledButton
                    href={`${googleLink}`}
                    target={'_blank'}
                    bgColor="defaultSecondary"
                    color="defaultPrimary"
                >
                    {'DIRECTION'}
                </StyledButton>
            </ButtonWrapper>
        </InfoWindowContainer>
    );
};
