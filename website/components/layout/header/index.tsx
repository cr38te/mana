import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../base/grid';
import { device } from '../../base/mediaquery';
import NextLink from 'next/link';
import Logo from '../../../assets/logo-small.png';
import { IHeader } from '../../../utils/interface';

const StyledHeader = styled(Container).attrs({
	as: 'header',
})`
	position: fixed;
	z-index: 999;
	background-color: transparent;

	transition: 0.5s all ease;

	&.animateHeader {
		background-color: ${(p) => p.theme.colors.defaultSecondary};
	}
`;
type ContainerProps = {
	bgColor?: string;
	position?: string;
	top?: string;
};

const ContainerHeader = styled(Container)<ContainerProps>`
	position: ${(p) => [p.position]};
	top: ${(p) => [p.top]};
	width: 100%;

	transition: all 0.01s ease-in;
	justify-content: center;
`;

const StyledRow = styled(Row)`
	/* max-width: 100%;
    width: 100%; */
	/* padding-top: 15px; */

	@media (max-width: 1024px) {
		margin: 0 auto;
	}

	@media (max-width: 390px) {
		&.styledRow {
			flex-direction: row;
			justify-content: center;
			/* max-width: calc(100% - 30px);
            width: calc(100% - 30px); */
			margin: 0 auto;
		}
	}
`;

const LogoImg = styled.img`
	width: 120px;
	height: auto;
	display: block;
	cursor: pointer;
	z-index: 10000;
	transition: 0.5s all ease;

	&.animateHeader {
		width: 100px;
	}

	@media ${device.mobileL} {
		z-index: 10000;
	}
`;

const ColumnWrapper = styled(Column)`
	padding: 0;

	@media ${device.tablet} {
		justify-content: end;
		align-items: end;
		width: 50%;
	}
`;

const StyledColumn = styled(Column)`
	@media ${device.tablet} {
		padding: 0;

		width: 50%;
	}
`;

// const BodyHeading = styled.h1`
// 	font-size: 12px;
// 	text-transform: uppercase;
// 	color: white;
// 	text-indent: -9999px;
// `;
export default function Header({ menuItems, ...props }: any) {
	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setSmall(window.pageYOffset > 1)
			);
		}
	}, []);

	return (
		<StyledHeader
			direction="column"
			alignItems="center"
			justifyContent="center"
			role="header"
			className={`${small ? 'animateHeader' : ''}`}
		>
		
			<ContainerHeader className={'main-navigation'}>
				<StyledRow
					className="styledRow"
					justifyContent="center"
					alignItems="center"
				>
			
					<StyledColumn
						width="100%"
						justifyContent="start"
						alignItems="start"
					>
						<NextLink href="/" passHref>
							<LogoImg
								src={Logo}
								alt="Mana"
								className={` ${small ? 'animateHeader' : ''}`}
							/>
						</NextLink>
					</StyledColumn>
				
					{/* <ColumnWrapper
                        width="90%"
                        align-items="start"
                        justifyContent="spaceBetween"
                    >
                        <MainNav
                            menuItems={menuItems}
                            socialLinks={socialLinks}
                            {...props}
                        />
                    </ColumnWrapper> */}
				</StyledRow>
			</ContainerHeader>
		</StyledHeader>
	);
}
