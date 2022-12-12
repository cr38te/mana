import styled, { DefaultTheme } from 'styled-components';
import { device } from './mediaquery';

type StyledProps = {
    direction?: string;
    justifyContent?: keyof DefaultTheme['justifyContent'];
    flexWrap?: string;
    alignItems?: keyof DefaultTheme['alignItems'];
    bgColor?: keyof DefaultTheme['colors'];
    pt?: keyof DefaultTheme['spacing'];
    pb?: keyof DefaultTheme['spacing'];
    width?: string;
    maxWidth?: string;
};

export const Container = styled.div<StyledProps>`
    display: flex;
    flex-direction: ${(p) => p.theme.direction[p.direction!]};
    justify-content: ${(p) => p.theme.justifyContent[p.justifyContent!]};
    flex-wrap: ${(p) => p.flexWrap};
    align-items: ${(p) => p.theme.alignItems[p.alignItems!]};
    background-color: ${(p) => p.theme.colors[p.bgColor!]};
    padding-top: ${(p) => p.theme.spacing[p.pt!]};
    padding-bottom: ${(p) => p.theme.spacing[p.pb!]};
    width: 100%;
`;

export const Row = styled.div<StyledProps>`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: ${(p) => p.theme.direction[p.direction!]};
    flex-wrap: wrap;
    flex: 1;
    align-items: ${(p) => p.theme.alignItems[p.alignItems!]};
    justify-content: ${(p) => p.theme.justifyContent[p.justifyContent!]};

    @media (max-width: 1280px) {
        max-width: 1140px;
    }
    @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        max-width: calc(100% - 30px) !important;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
        max-width: calc(100% - 30px) !important;
    }
    @media (max-width: 1441px) {
        max-width: 1280px;
    }
    @media (max-width: 1112px) {
        max-width: 900px;
    }
    @media ${device.laptop} {
        max-width: 640px;
		flex-direction: column;

    }
    @media ${device.mobileL} {
        flex-direction: column;
        max-width: calc(100vw);

        &.styledRow {
            flex-direction: row;
        }
    }
`;

// AUTO-LAYOUT COLUMNS
export const Column = styled.div<StyledProps>`
    display: flex;
    flex-direction: ${(p) => p.theme.direction[p.direction!]};
    align-items: ${(p) => p.theme.alignItems[p.alignItems!]};
    justify-content: ${(p) => p.theme.justifyContent[p.justifyContent!]};
    position: ${(p) => p.theme.position.relative};
 
    width: ${(p) => (p.width ? [p.width] : '100%')};
    max-width: ${(p) => (p.width ? [p.width] : '100%')};
	

    @media (max-width: 1023px) {
        flex-direction: ${(p) => p.theme.direction.column};
        width: 100%;
        max-width: calc(100% - 40px);
        justify-content: ${(p) => p.theme.justifyContent.center};
        align-items: ${(p) => p.theme.alignItems.center};
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto;
    }
`;
