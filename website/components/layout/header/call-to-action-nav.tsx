import React from 'react';
import styled from 'styled-components';
import { Button } from '../../base/button';

const StyledButton = styled(Button)`
	border-radius: 20px;    
	text-transform: uppercase;
	max-width: 150px;
	height: 40px;
	font-size:12px;
	padding:10px 15px;
	@media (max-width: 1024px) {
        margin-left: 0;
    }

`;

const CallToActionNavigation = ({
    buttonText = 'Make a Donation',
    buttonLink = '/check-availability'
}) => {
    return (
        <>
            <StyledButton
                bgColor="primary"
                color="tertiary"
                href={buttonLink}
                title={buttonText}
				target="_blank"
            >
                {buttonText}
            </StyledButton>
        </>
    );
};
export default CallToActionNavigation;
