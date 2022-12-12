import React from 'react';
import Envelope from '../../../icons/envelope';
import Telephone from '../../../icons/telephone';
import MapMarkerIcon from '../../../icons/map-marker';
import styled, { DefaultTheme } from 'styled-components';
import { ParagraphCSS } from '../../base/typography';
import { device } from '../../base/mediaquery';
import TelephoneIcon from '../../../icons/telephone';
import EnvelopeIcon from '../../../icons/envelope';
import { Description } from '../../base/description';

const SocialIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    padding-bottom: 60px;
    @media ${device.mobileL} {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    > svg {
        &:hover {
            color: ${(p) => p.theme.colors.primary};
        }
    }
`;

const SocialIndividual = styled.div`
    display: flex;

    > svg {
        &:hover {
            color: ${(p) => p.theme.colors.primary};
        }
    }
`;

const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
`;

type ParagraphProps = {
    color?: string;
    pt?: keyof DefaultTheme['spacing'];
    pb?: keyof DefaultTheme['spacing'];
};

const Paragraph = styled.div<ParagraphProps>`
    margin-left: 15px;
    ${ParagraphCSS}
    color:${(p) => p.theme.colors[p.color!]};
    font-family: ${(p) => p.theme.fonts.bodyFont};
    font-weight: ${(p) => p.theme.fontWeight.light};
    padding-top: ${(p) => p.theme.spacing[p.pt!]};
    padding-bottom: ${(p) => p.theme.spacing[p.pb!]};

    font-size: 14px;
    @media ${device.mobileL} {
        text-align: center;
    }
`;

const IconWrapper = styled.div`
    > div {
        min-width: 55px;
        width: 55px;
        max-width: 55px;
        height: 55px;
        min-height: 55px;
        max-height: 55px;
    }
`;

const StyledDescription=styled(Description)`
		font-weight:bold;
`;

export default function UserInfo({ contactList, isInfoMap }: any) {
    const { contactColumns } = contactList || {};
    contactColumns;
    return (
        <SocialIcons>
            <SocialIndividual>
                <Items>
                    <IconWrapper>
                        <MapMarkerIcon iconColor={'secondary'} />
                    </IconWrapper>
                    <StyledDescription
                        description="Address"
                        color="defaultSecondary"
                        mb="0"
					
                    />
                    <Description
                        description={contactColumns.address}
                        color="tertiary"
                        mb="0"
                    />
                </Items>
            </SocialIndividual>
            <SocialIndividual>
                <Items>
                    <IconWrapper>
                        <Telephone iconColor={'secondary'} />
                    </IconWrapper>
                    <StyledDescription
                        description="Telephone"
                        color="defaultSecondary"
                        mb="0"
                    />
                    <Description
                        description={contactColumns.phone}
                        color="tertiary"
                        mb="0"
                    />
                </Items>
            </SocialIndividual>
            <SocialIndividual>
                <Items>
                    <IconWrapper>
                        <Envelope iconColor={'secondary'} />
                    </IconWrapper>
                    <StyledDescription
                        description="Email"
                        color="defaultSecondary"
                        mb="0"
                    />
                    <Description
                        description={contactColumns.email}
                        color="tertiary"
                        mb="0"
                    />
                </Items>
            </SocialIndividual>
        </SocialIcons>
    );
}
