import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import Title from '../../base/heading';
import { device } from '../../base/mediaquery';


const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: ${(p) => p.theme.direction.column};
    align-items: ${(p) => p.theme.alignItems.start};
`;

type ListItemProps = {
    color: keyof DefaultTheme['colors'];
	fontSize?:string;
};
const ListItem = styled.li<ListItemProps>`
    margin-bottom: ${(p) => p.theme.spacing.inset};
    color: ${(p) => p.theme.colors[p.color]};
    display: flex;
    flex-direction: ${(p) => p.theme.direction.column};
    align-items: ${(p) => p.theme.alignItems.start};
    line-height: 14px;
	font-weight: bold;
	text-decoration: underline;

    > div {
        margin-right: 8px;
        display: inline-block;
    }

    &.metaLinks {
        margin-left: ${(p) => p.theme.spacing.inset};
        margin-bottom: 0;
        font-size: ${(p) => [p.fontSize]};
        text-transform: none;

        a {
            font-size: 14px;
            text-transform: none;
        }

        @media ${device.mobileL} {
            margin-left: 0;
        }
    }
`;

type LinkItemProps = {
    color: keyof DefaultTheme['colors'];
    textTransform: string;
};

const LinkItem = styled.a<LinkItemProps>`
    color: ${(p) => p.theme.colors[p.color]};
    text-decoration: none;
    display: flex;
    flex-direction: ${(p) => p.theme.direction.row};
    align-items: ${(p) => p.theme.alignItems.start};
    line-height: 21px;
    text-transform: ${(p) => [p.textTransform]};

    &:hover {
        text-decoration: underline;
    }

    @media ${device.laptopL} {
        font-size: ${(p) => p.theme.fontSizes.extraSmall};
    }
`;

export default function ListLink({ footerLinks }: any) {
    const {
        links,
        title,

        textTransform = 'uppercase',
        className
    } = footerLinks || {};
    return (
        <>
            <Title title={title} color="tertiary" className="asH3" variant="h3" textTransform="uppercase"></Title>
            <List>
                {links?.length > 0 &&
                    links?.map((item: any, i: number) => (
                        <ListItem
                            key={'Link' + i}
                            color="tertiary"
                            className={className}
                        >
                            <LinkItem
                                href={`${item.link}`}
                                color="tertiary"
                                textTransform={textTransform}
                                target="_blank"
                                rel="noopener"
                            >
                                {item.linkText}
                            </LinkItem>
                        </ListItem>
                    ))}
            </List>
        </>
    );
}
