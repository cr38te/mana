import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { IIcon } from '../utils/interface';

const Container = styled.div`
	min-width: 20px;
	width: 20px;
	max-width: 20px;
	height: 20px;
	min-height: 20px;
	max-height: 20px;
	color: grey;
	user-select: none;
`;

type SVGProps = {
	fontColor?: keyof DefaultTheme['colors'];
	iconBg?: keyof DefaultTheme['colors'];
};

const SVG = styled.svg<SVGProps>`
	width: 100%;
	height: 100%;
	color: ${(props) => props.theme.colors[props.fontColor!]};
`;

const TripadvisorIcon = ({
	className,
	iconColor = 'defaultPrimary',
}: IIcon) => (
	<Container className={className}>
		<SVG
			fontColor={iconColor}
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="tripadvisor"
			className="svg-inline--fa fa-tripadvisor fa-w-18"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
		>
			<path
				fill="currentColor"
				d="M528.91,178.82,576,127.58H471.66a326.11,326.11,0,0,0-367,0H0l47.09,51.24A143.911,143.911,0,0,0,241.86,390.73L288,440.93l46.11-50.17A143.94,143.94,0,0,0,575.88,285.18h-.03A143.56,143.56,0,0,0,528.91,178.82ZM144.06,382.57a97.39,97.39,0,1,1,97.39-97.39A97.39,97.39,0,0,1,144.06,382.57ZM288,282.37c0-64.09-46.62-119.08-108.09-142.59a281,281,0,0,1,216.17,0C334.61,163.3,288,218.29,288,282.37Zm143.88,100.2h-.01a97.405,97.405,0,1,1,.01,0ZM144.06,234.12h-.01a51.06,51.06,0,1,0,51.06,51.06v-.11A51,51,0,0,0,144.06,234.12Zm287.82,0a51.06,51.06,0,1,0,51.06,51.06A51.06,51.06,0,0,0,431.88,234.12Z"
			></path>
		</SVG>
	</Container>
);

export default TripadvisorIcon;
