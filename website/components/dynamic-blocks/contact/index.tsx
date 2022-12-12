import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../base/grid';

import Form from './form';
import { IContactInfo, IOptions } from '../../../utils/interface';
import UserInfo from './user-info';
import GoogleMaps from '../maps/map';
import Title from '../../base/heading';
import { Description } from '../../base/description';
import ClockIcon from '../../../icons/clock';
import { Button } from '../../base/button';
import { device } from '../../base/mediaquery';

const StyledRow = styled(Row)`
	max-width: 100%;
	width: 100%;
`;

type StyledColumnProps = {
	bgColor?: string;
};
const StyledColumn = styled(Column)<StyledColumnProps>`
	padding: 0;

	background-color: ${(p) => p.theme.colors[p.bgColor!]};
	&.mobile {
		@media ${device.tablet} {
			padding-top: 30px;
			padding-bottom: 30px;
		}
	}
	@media ${device.mobileL} {
		max-width: 100%;
	}
`;

const StyledTitle = styled(Title)`
	width: 100%;
	@media ${device.desktop} {
		margin-bottom: ${(p) => p.theme.spacing.inset};
	}
`;

const IconWrapper = styled.div`
	margin-bottom: ${(p) => p.theme.spacing.doubleInset};
	> div {
		min-width: 55px;
		width: 55px;
		max-width: 55px;
		height: 55px;
		min-height: 55px;
		max-height: 55px;
	}
`;

const StyledButton = styled(Button)`
	margin-top: ${(p) => p.theme.spacing.doubleInset};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 200px;

	@media ${device.tablet} {
		width: 250px;
	}
	&:last-child {
		> div {
			margin: 0;
		}
	}
`;

const StyledDescription = styled(Description)`
	> p {
		@media ${device.desktop} {
			margin-bottom: ${(p) => p.theme.spacing.inset};
		}
		@media ${device.mobileL} {
			margin-bottom: ${(p) => p.theme.spacing.inset};
		}
	}
	@media ${device.desktop} {
		margin-bottom: ${(p) => p.theme.spacing.inset};
	}
	&.description {
		@media ${device.mobileL} {
			text-align: center;
		}
	}
	&.last {
		margin-bottom: 0;
	}
`;

export default function Contact(props: any) {
	const {
		options: {
			contactInfo: { openingHours, contactColumns },
		},
	} = props || {};

	const { map, title, description, showButton, buttonText, buttonLink }: any =
		props || {};

	return (
		<>
			<Container
				justifyContent="center"
				direction="column"
				alignItems="center"
			>
				<StyledRow direction="row">
					<StyledColumn width="50%">
						<GoogleMaps {...map} {...contactColumns} />
					</StyledColumn>
					<StyledColumn
						width="50%"
						bgColor="defaultPrimary"
						direction="column"
						alignItems="center"
						justifyContent="center"
					>
						<StyledColumn
							width="80%"
							justifyContent="center"
							alignItems="start"
							direction="column"
							className="mobile"
						>
							<StyledTitle
								color="defaultSecondary"
								title={title}
								textAlign="left"
							/>
							<StyledDescription
								color="primary"
								textAlign="left"
								description={description}
								mb="30px"
							/>

							<StyledTitle
								color="defaultSecondary"
								title={'Address'}
								textAlign="left"
							/>
							<StyledDescription
								color="primary"
								textAlign="left"
								description={contactColumns?.address}
								mb="30px"
								mt="0px"
								className="description"
							/>

							<StyledTitle
								color="defaultSecondary"
								title={'Opening Hours'}
								textAlign="left"
							/>

							{openingHours?.length > 0 &&
								openingHours?.map(
									(
										{
											date,
											time,
										}: { date: string; time: string },
										i: number
									) => {
										return (
											<Wrapper key={'item' + i}>
												<StyledDescription
													color="primary"
													textAlign="left"
													mb="0"
													mt="0"
													description={date}
												/>
												<StyledDescription
													color="primary"
													textAlign="left"
													mb="0"
													mt="0"
													description={time}
												/>
											</Wrapper>
										);
									}
								)}
							{showButton && (
								<StyledButton
									bgColor="defaultSecondary"
									color="defaultPrimary"
									href={
										(buttonLink && buttonLink?.slug) || ''
									}
									title={buttonText}
									className="button"
									hoverColor="primary"
									bgHoverColor="defaultSecondary"
								>
									{buttonText}
								</StyledButton>
							)}
						</StyledColumn>
					</StyledColumn>
				</StyledRow>
			</Container>
		</>
	);
}
