import styled, { DefaultTheme } from 'styled-components';

type ButtonProps = {
    bgColor?:
        | keyof import('styled-components').DefaultTheme['colors']
        | undefined;
    color?: keyof DefaultTheme['colors'] | undefined;
    bgColorHover?: keyof DefaultTheme['colors'] | undefined;
    colorHover?: keyof DefaultTheme['colors'] | undefined;
};

export const Button = styled.a<ButtonProps>`
    background-color: ${(props) => props.theme.colors[props.bgColor!]};
    color: ${(props) => props.theme.colors[props.color!]};
    font-size: 14px;
    line-height: 18px;
    min-width: 170px;
    width: 100%;
    max-width: 270px;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    text-align: ${(props) => props.theme.textalign.center};
    text-decoration: none;
    padding: 15px 40px;
    transition: ${(props) => props.theme.transition.linear};
    cursor: pointer;
    text-transform: none;
    border-radius: 10px;

    &:disabled {
        color: rgba(0, 0, 0, 0.26);
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.12);
        cursor: default;
        pointer-events: none;
    }

    &:hover {
        color: ${(props) => props.theme.colors[props.colorHover!]};
        background-color: ${(props) => props.theme.colors[props.bgColorHover!]};
    }
    @media (max-width: 390px) {
        min-width: 125px;
        padding: 15px 30px;
    }
`;
