import React from 'react';
import styled from 'styled-components';
import Envelope from '../../../icons/envelope';
import Telephone from '../../../icons/telephone';
import MapMarkerIcon from '../../../icons/map-marker';
import { device } from '../../base/mediaquery';
import Title from '../../base/heading';
import { IContactInfo } from '../../../utils/interface';
import SocialSection from './social-section';
import FacebookSquaredIcon from '../../../icons/facebook-squared';
import InstagramIcon from '../../../icons/instagram';
import TripAdvisorIcon from '../../../icons/tripadvisor';

const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	/* padding-right: ${(p) => p.theme.spacing.tripleInset}; */
	width: 100%;
	@media ${device.tablet} {
		border-right: 0;
		padding-right: 0;
		border-bottom: 1px solid ${(p) => p.theme.colors.defaultSecondary};
	}
`;

const ListItem = styled.li`
	margin-bottom: 15px;
	color: ${(p) => p.theme.colors.defaultSecondary};
	display: flex;
	flex-direction: ${(p) => p.theme.direction.row};
	align-items: ${(p) => p.theme.alignItems.start};
	line-height: 21px;
	font-size: ${(p) => p.theme.fontSizes.extraSmall};
	font-family: ${(p) => p.theme.fonts.paragraphFont};

	div:first-child {
		margin-right: ${(p) => p.theme.spacing.inset};
		display: inline-block;
		margin-top: 3px;
	}

	> div {
		margin-right: 15px;
		display: inline-block;
		> svg {
			color: ${(p) => p.theme.colors.defaultSecondary};
		}
	}

	@media ${device.laptopL} {
		font-size: ${(p) => p.theme.fontSizes.extraSmall};
	}

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const LinkItem = styled.a`
	text-decoration: none;
	display: flex;
	flex-direction: ${(props) => props.theme.direction.row};
	align-items: ${(props) => props.theme.alignItems.start};
	font-family: ${(p) => p.theme.fonts.extraSmall};
	color: ${(p) => p.theme.colors.defaultSecondary};
	> div {
		margin-right: 15px;
		display: inline-block;
		> svg {
			color: ${(p) => p.theme.colors.defaultSecondary};
		}
	}
`;

const ListAddressInfo = styled.div`
	display: flex;
	flex-direction: ${(p) => p.theme.direction.column};
	font-family: ${(p) => p.theme.fonts.paragraphFont};
	font-size: ${(p) => p.theme.fontSizes.extraSmall};
	line-height: 21px;
`;

const Span = styled.span`
	font-family: ${(p) => p.theme.fonts.paragraphFont};
	font-size: 16px;
	line-height: 28px;
`;
const NextLink = styled.a``;

const IconWrapper = styled.div`
	transition: ${(props) => props.theme.transition.linear};
	padding: 0;
	/* margin-right: 14px; */
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
			min-width: 25px;
			width: 25px;
			max-width: 25px;
			height: 25px;
			min-height: 25px;
			max-height: 25px;
			> svg {
				&:hover {
					color: ${(p) => p.theme.colors.defaultPrimary};
				}
			}
		}
	}
	&:hover {
		svg {
			color: ${(props) => props.theme.colors.defaultPrimary};
		}
	}

	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

const SocialsWrapper = styled.div`
	display: flex;
`;
export default function ContactSection({
	contactInfo,
	socials,
}: {
	contactInfo: IContactInfo;
	socials?: any;
}) {
	const { address, email, phone } = contactInfo || {};
	console.log('socials', socials);

	const Icons: any = {
		facebook: FacebookSquaredIcon,
		instagram: InstagramIcon,
		tripAdvisor: TripAdvisorIcon,
	};

	return (
		<List>
			{/* <ListItem>
                <MapMarkerIcon iconColor="defaultSecondary" />
                <ListAddressInfo>
                    <Span
                        dangerouslySetInnerHTML={{
                            __html: address
                        }}
                    />
                </ListAddressInfo>
            </ListItem> */}
			<ListItem>
				<LinkItem href={`tel:${phone}`} title={`tel:${phone}`}>
					<Telephone iconColor="defaultSecondary" />
					<Span
						dangerouslySetInnerHTML={{
							__html: phone,
						}}
					/>
				</LinkItem>
			</ListItem>
			<ListItem>
				<LinkItem href={`mailto:${email}`} title={`${email}`}>
					<Envelope iconColor="defaultSecondary" />
					<Span
						dangerouslySetInnerHTML={{
							__html: email,
						}}
					/>
				</LinkItem>{' '}
			</ListItem>
			<SocialsWrapper>
				{socials?.length > 0 &&
					socials?.map(({ type, link }: any, i: number) => {
						const Icon = Icons[type]
							? Icons[type]
							: Icons['facebook'];
						return (
							<ListItem key={'social-' + i}>
								<IconWrapper>
									<NextLink
										href={link}
										title={'title'}
										target="_blank"
										rel="noopener"
									>
										<Icon iconColor="defaultSecondary" />
									</NextLink>
								</IconWrapper>
							</ListItem>
						);
					})}
			</SocialsWrapper>
		</List>
	);
}
