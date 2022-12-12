import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../base/grid';
import { device } from '../../base/mediaquery';
import NextLink from 'next/link';
import Logo from '../../../assets/logo-small.png';

import { IFooter } from '../../../utils/interface';
import ListLink from './list-link';
import Newsletter from './newsletter';
import ContactSection from './contact-section';
import Title from '../../base/heading';

const StyledColumn = styled(Column)`
    display: flex;

    flex: 1;
    min-height: 200px;
    @media ${device.laptopL} {
        min-height: 215px;
    }
    @media ${device.laptop} {
        width: ${(p) => (p.width ? [p.width] : '100%')};
        max-width: ${(p) => (p.width ? [p.width] : '100%')};
        align-items: ${(p) => p.theme.alignItems.start};
    }

    @media (max-width: 835px) and (min-width: 426px) {
        width: calc(calc(100% / 2) - 30px);
        max-width: calc(calc(100% / 2) - 30px);
        align-items: ${(p) => p.theme.alignItems.center};
        justify-content: ${(p) => p.theme.justifyContent.center};
        margin-bottom: ${(p) => p.theme.spacing.doubleInset};
    }

    @media ${device.mobileL} {
        width: calc(100% - 30px);
        max-width: calc(100% - 30px);
        align-items: ${(p) => p.theme.alignItems.center};
        margin-bottom: ${(p) => p.theme.spacing.doubleInset};

        &:last-child {
            margin-bottom: 0;
        }
    }

	&.hide-mobile{
		@media ${device.laptopL}{
			display:none;
		}
	}
`;
const Wrapper = styled.div`
    flex-grow: 1;

    /* @media ${device.mobileL} {
        z-index: 10000;
    } */
`;

const StyledRow = styled(Row)`
    @media (max-width: 1024px) {
        flex-direction: row;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ThreeColumn = ({
    contactInfo,
    socialLinks,
    footerLinks,
    newsLetter, socials
}: any) => {
    const { title } = contactInfo || {};
    return (
        <StyledRow justifyContent="center" alignItems="center" direction="row">
            <StyledColumn
                width="45%"
                justifyContent="start"
                alignItems="start"
                direction="column"
            >
                <Newsletter newsLetter={newsLetter} socialLinks={socialLinks} />
            </StyledColumn>
            <StyledColumn width="10%" className="hide-mobile" />
            <StyledColumn
                width="45%"
                justifyContent="start"
                alignItems="start"
                direction="column"
            >
                <Wrapper>
                    {title && (
                        <Title
                            variant="h2"
                            color="defaultSecondary"
                            title={title}
                            textTransform="none"
                            className="asH2"
                        />
                    )}
                    <ContactSection contactInfo={contactInfo} socials={socials}/>
                </Wrapper>
            </StyledColumn>
        </StyledRow>
    );
};
export default ThreeColumn;
