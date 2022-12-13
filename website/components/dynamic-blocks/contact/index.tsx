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

    &.contentBox {
        padding:60px;
    }
`;

const StyledTitle = styled(Title)`
	width: 100%;
	@media ${device.desktop} {
		margin-bottom: ${(p) => p.theme.spacing.inset};
	}
`;

const StyledButton = styled(Button)`
	margin-top: ${(p) => p.theme.spacing.doubleInset};
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
    justify-content:${p=>p.theme.justifyContent.start};
	width: 200px;
    margin-bottom:0px;
    list-style-type:none;
    margin:0;
    padding:0;

	@media ${device.tablet} {
		width: 250px;
	}
	&:last-child {
		> div {
			margin: 0;
		}
	}
`;

const ListItem = styled.li`
    display:flex;
    flex-direction:row;
    margin:0 0 15px 0;
`;

const StyledDescription = styled(Description)`
	> p {
		margin:0 0 15px 0;
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
						alignItems="start"
						justifyContent="center"
                        className="contentBox"
					>
                        <StyledTitle
                            color="defaultSecondary"
                            title={title}
                            textAlign="left"
                            variant="H2"
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
                            variant="H3"
                            className="asH2"
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
                            variant="H3"
                            className="asH2"
                        />
                        <Container
                            direction="column"
                            alignItems="start"
                            justifyContent="start"
                        >
                            <List>
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
                                            <ListItem key={'item' + i}>
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
                                            </ListItem>
                                        );
                                    }
                                )}
                            </List>
                        </Container>
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
				</StyledRow>
			</Container>
		</>
	);
}
