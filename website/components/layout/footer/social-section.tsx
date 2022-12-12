import React from 'react';
import styled from 'styled-components';
import { ISocial } from '../../../utils/interface';
import { device } from '../../base/mediaquery';

import FacebookSquaredIcon from '../../../icons/facebook-squared';
import InstagramIcon from '../../../icons/instagram';

import LinkedinIcon from '../../../icons/linkedin';
import TwitterIcon from '../../../icons/twitter';
import { Container } from '../../base';
import YoutubeIcon from '../../../icons/youtube';
const StyledContainer = styled(Container)`
    display: flex;
	flex-direction:row;
    height: 100%;
    width: 100%;

    @media ${device.tablet} {
        margin-top: ${(p) => p.theme.spacing.inset};
        justify-content: center;
        align-items: center;
    }
`;

const IconWrapper = styled.div`
    transition: ${(props) => props.theme.transition.linear};
    padding: 0;
    margin-right: 14px;
    margin-left: 0;
    align-self: center;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: ${(p) => p.theme.direction.row};
    justify-content: ${(p) => p.theme.justifyContent.center};
    align-items: ${(p) => p.theme.alignItems.center};

    > a {
        > div {
            margin: 20px 0;
            min-width: 20px;
            width: 20px;
            max-width: 20px;
            height: 20px;
            min-height: 20px;
            max-height: 20px;
            > svg {
                &:hover {
                    color: ${(p) => p.theme.colors.primary};
                }
            }
        }
    }
    &:hover {
        svg {
            color: ${(props) => props.theme.colors.primary};
        }
    }


	@media ${device.tablet}{
		margin-bottom:0;
	}
`;

const NextLink = styled.a``;

const Icons: any = {
    facebook: FacebookSquaredIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon
};

const SocialSection = ({links}:{links: ISocial[]}) => {
    return (
        <StyledContainer
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            {links?.length > 0 &&
                links?.map(({ type, title, link }: any, i: number) => {
                    const Icon: any = Icons[type]
                        ? Icons[type]
                        : Icons['facebook'];

                    return (
                        <IconWrapper key={'social-' + i + type}>
                            <NextLink
                                href={link || '#'}
                                title={title}
                                target="_blank"
                                rel="noopener"
                            >
                                <Icon iconColor="defaultPrimary" />
                            </NextLink>
                        </IconWrapper>
                    );
                })}
        </StyledContainer>
    );
};
export default SocialSection;
