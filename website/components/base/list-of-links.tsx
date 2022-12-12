import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import ArrowRight from '../../icons/chevron-right';
import { device } from './mediaquery';

type ListProps = {
    direction: keyof DefaultTheme['direction'];
};

const List = styled.ul<ListProps>`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: ${(p) => p.theme.direction[p.direction]};
    align-items: ${(p) => p.theme.alignItems.center};

    &.horizontal-list {
        li {
            margin-bottom: 0;
            a {
                margin-left: 5px;
                margin-right: 5px;
            }
            &:last-child {
                a {
                    &:after {
                        content: '';
                    }
                }
            }
        }
    }
`;

const ListItem = styled.li`
    margin-bottom: 8px;
    font-size: ${(props) => props.theme.fontSizes.paragraph};

    @media ${device.desktop} {
        padding-left: ${(props) => props.theme.spacing.doubleInset};
    }

    @media ${device.laptopL} {
        padding-left: ${(props) => props.theme.spacing.inset};
    }

    @media ${device.mobileL} {
        font-size: ${(props) => props.theme.fontSizes.extraSmall};
        padding-left: ${(props) => props.theme.spacing.none};
    }
`;

const Link = styled.a`
    display: flex;
    flex-direction: ${(props) => props.theme.direction.row};
    cursor: pointer;
    color: ${(props) => props.theme.colors.senary};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Icon = styled(ArrowRight)`
    margin-right: 8px;
`;

export default function ListOfLinks({
    links,
    direction = 'column',
    icons = 'true'
}: {
    links: { link: string; linkText: string }[];
    direction: string;
    icons: string;
}) {
    return (
        <List
            direction={direction}
            className={direction === 'row' ? 'horizontal-list' : ''}
        >
            {links?.length > 0 &&
                links.map(
                    (
                        { link, linkText }: { link: string; linkText: string },
                        i
                    ) => {
                        return (
                            <ListItem key={`list-item-${i}`}>
                                <Link
                                    href={link !== '' ? link : ''}
                                    title={linkText}
                                >
                                    {icons !== 'false' && (
                                        <Icon iconColor="tertiary" />
                                    )}
                                    {linkText}
                                </Link>
                            </ListItem>
                        );
                    }
                )}
        </List>
    );
}
