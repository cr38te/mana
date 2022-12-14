import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../base/grid';
import { device } from '../../base/mediaquery';
import { ParagraphCSS } from '../../base/typography';
import ThreeColumn from './three-column';
import { IFooter } from '../../../utils/interface';

const StyledAside = styled(Container).attrs({
    as: 'aside'
})`
    position: relative;
    width: 100%;
`;

const StyledFooter = styled(Container).attrs({
    as: 'footer'
})`
    /* padding-top: ${(p) => p.theme.spacing.inset}; */
    overflow: hidden;
    height: 75px;
    @media ${device.laptop} {
        height: unset;
    }
    @media(max-width:800px) {
        padding-top:15px;
        padding-bottom:15px;
    }
`;

const StyledColumn = styled(Column)`
    @media ${device.laptop} {
        margin-bottom: ${(p) => p.theme.spacing.inset};
    }

    @media ${device.mobileL} {
        text-align: center;
    }
`;

type ParagraphProps = {
    color: string;
};
const Paragraph = styled.div<ParagraphProps>`
    ${ParagraphCSS}
    color:${(p) => p.theme.colors[p.color]};
    font-family: ${(p) => p.theme.fonts.bodyFont};
    font-weight: ${(p) => p.theme.fontWeight.light};
    font-size: 14px;
    @media ${device.mobileL} {
        text-align: center;
    }
`;

const ExternalLink = styled.a<ParagraphProps>`
    ${ParagraphCSS}
    color:${(p) => p.theme.colors[p.color]}!important;
    font-family: ${(p) => p.theme.fonts.bodyFont};
    font-weight: ${(p) => p.theme.fontWeight.light};
    font-size: 14px;
    margin-left: 5px;
    text-decoration: none!;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Aside({ newsletter, ...props }: IFooter) {
    const { contactColumns, contactSection, socials } = props || {};

    const contactItems = { ...contactSection, ...contactColumns };
    return (
        <>
            <StyledAside
                id="aside"
                role="complementary"
                bgColor="secondary"
                justifyContent="center"
                alignItems="center"
                pt="tripleInset"
                pb="tripleInset"
            >
                <ThreeColumn
                    contactInfo={contactItems}
                    newsLetter={newsletter}
					socials={socials}
                />
            </StyledAside>
            <StyledFooter
                id="footer"
                direction="column"
                alignItems="center"
                justifyContent="center"
                bgColor="defaultPrimary"
            >
                <Row alignItems="center" justifyContent="center">
                    <StyledColumn width="50%" justifyContent="start">
                        <Paragraph color="primary">
                            <ExternalLink
                                href="/api/sitemap.txt"
                                title="By: CR38TE"
                                target="_blank"
                                color="primary"
                            >
                                Sitemap
                            </ExternalLink>
                        </Paragraph>
                    </StyledColumn>

                    <StyledColumn width="50%" justifyContent="end">
                        <Paragraph color="primary">
                            &copy;
                            {` Copyright ${new Date().getFullYear()} | National Archaeological Museum Aruba. All rights reserved.`}
                        </Paragraph>
                    </StyledColumn>
                </Row>
            </StyledFooter>
        </>
    );
}
