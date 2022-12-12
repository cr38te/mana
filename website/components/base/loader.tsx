import styled from 'styled-components'

const StyledContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
`;

const StyledPreloader = styled.img`
    width:150px;
    height:150px;
    display:block;
`;

export default function Preloader(props:any) {
    return (
        <StyledContainer {...props}>
            <StyledPreloader src={``} alt="loading..." />
        </StyledContainer>
    )
}