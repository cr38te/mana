import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { device } from '../../base/mediaquery';
import CloseIcon from '../../../icons/close';
import { Column } from '../../base';
import SocialSection from '../footer/social-section';
import CallToActionNavigation from './call-to-action-nav';

const Navigation = styled.nav`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: ${(props) => props.theme.direction.row};
    justify-content: ${(props) => props.theme.justifyContent.spaceEvenly};
    align-items: ${(props) => props.theme.alignItems.center};

    @media (max-width: 1024px) and (min-width: 320px) {
        height: 100vh;
        display: flex;
        flex-direction: ${(props) => props.theme.direction.column};
        justify-content: center;
        align-items: center;

        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 50px 0px;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        min-width: 180px;
        transition: opacity 1s ease;
        &.open {
            opacity: 1;
            visibility: visible;
            background-color: ${(props) => props.theme.colors.defaultSecondary};
        }
        &.close {
            opacity: 0;
            visibility: hidden;
        }
    }
`;

type NavItemProps = {
    numberMenu: number;
};
const NavItem = styled.div<NavItemProps>`
    position: relative;

    @media (max-width: 1025px) {
        width: 100%;
        border-bottom: 1px solid ${(p) => p.theme.colors.quaternary}cc;
        /* display: flex;
        flex-direction: row;
        align-items: c-start; */

        &:nth-child(${(p) => p.numberMenu}) {
            border-bottom: none;
        }
    }
`;

const MenuItem = styled.h1`
    margin-bottom: 0;
    a {
        color: ${(props) => props.theme.colors.tertiary};
        font-weight: 600;
        text-decoration: none;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 1.8px;
        margin-left: ${(props) => props.theme.spacing.doubleInset};
        transition: ${(props) => props.theme.transition.linear};
        cursor: pointer;
        text-transform: uppercase;
        vertical-align: bottom;

        &:hover {
            color: ${(props) => props.theme.colors.secondary};
        }

        @media (max-width: 1025px) {
            color: ${(props) => props.theme.colors.defaultPrimary};
            margin-left: 0;
            height: 100px;

            border-bottom: none;
            font-size: 20px;
            line-height: 22px;

            font-weight: ${(props) => props.theme.fontWeight.bold};
            width: 100%;
            text-align: ${(props) => props.theme.textalign.center};
            display: flex;
            justify-content: center;
            align-items: center;

            transition: all 0.5s cubic-bezier(1, 0.23, 0.75, 1.03);
            &:last-child {
                border: 0;
                height: 100px;
            }
            &:hover {
                color: ${(props) => props.theme.colors.primary};
                background-color: ${(p) => p.theme.colors.septenary}cc;
            }
        }
    }

    &.dropdown {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const MobileNav = styled.div`
    display: none;
    transition: transform 1s ease 1s;
    transition-delay: 2s;

    @media ${device.laptop} {
        cursor: pointer;
        justify-content: ${(props) => props.theme.justifyContent.end};
        display: flex;
    }

    @media (max-width: 1024px) {
        display: flex;
        z-index: 1;
        margin: 20px;
    }
`;

const IconWrapper = styled.div`
    padding-left: 5px;

    > div {
        display: flex;
        min-width: 15px;
        width: 15px;
        max-width: 15px;
        height: 15px;
        min-height: 15px;
        max-height: 15px;

        > svg {
            &:hover {
                color: ${(props) => props.theme.colors.secondary};
                transform: scale(1.2);
            }
        }
    }

    @media (max-width: 1114px) {
        display: none;
    }
`;
const SubNavigation = styled.div`
    position: relative;
`;

type StyledColumnProps = {
    isOpen?: boolean;
};
const StyledColumn = styled(Column)<StyledColumnProps>`
    padding: 0;
    display: flex;
    flex-direction: ${(p) => p.theme.direction.row};
    column-gap: ${(p) => p.theme.spacing.inset};

    &.social-donation {
        @media ${device.laptop} {
            display: ${(p) => (p.isOpen! ? 'block' : 'none')};
            right: 0;
            position: absolute;
            bottom: 0;
        }
    }
    @media (max-width: 1025px) {
        &.mainNav {
            justify-content: ${(p) => p.theme.justifyContent.end};
        }
    }

    @media (max-width: 1025px) {
        &.logo,
        &.mainNav {
            width: 33.3333%;
            max-width: 33.3333%;
        }
        &.mainNav {
            margin-right: 0;
        }
    }
    @media (max-width: 1024px) and (min-width: 320px) {
        justify-content: space-between;
        &.logo,
        &.mainNav,
        &.callToAction {
            width: 100%;
            max-width: 100%;
        }
        &.logo {
            img {
                max-width: 100px;
                display: block;
            }
        }
        &.mainNav {
            width: auto;
        }
    }

    @media ${device.tablet} {
        justify-content: end;
    }
`;

export default function MainNavigation(props: any) {
    const { menuItems, buttonText, buttonLink, linkType, socialLinks } =
        props || {};
    const [isOpen, setIsOpened] = useState(false);

    const [isSubOpen, setIsSubOpen] = useState(false);
    const [isHeading, setIsHeading] = useState('');
    const [isSubNav, setIsSubNav] = useState<any>([]);
    const [active, setActive] = useState<any>();
    const menuRef = useRef<any>(null);

    const openMobileNav = () => {
        setIsOpened((oldState: any) => !oldState);
        document.body.classList.remove('fixed-container');
    };
    const router = useRouter();
    useEffect(() => {
        let id: any = null;
        const handleRouteChange = () => {
            id = setTimeout(() => {
                setIsOpened(false);
            }, 1000);
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            clearTimeout(id);
        };
    }, [router]);

    const handleOutsideClick = (e: any) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsSubOpen(false);
        }
    };

    const openSubNav = (
        title: string,
        hasSubmenu: string,
        submenuItems: object[]
    ) => {
        setIsSubOpen((wasOpened) => !wasOpened);
        setIsHeading(title !== '' ? title : '');
        setIsSubNav(hasSubmenu === 'Yes' ? submenuItems : []);
        setActive(title);
    };
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);

        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, []);
    return (
        <>
            <StyledColumn
                width="75%"
                align-items="start"
                justifyContent="start"
            >
                {/* <MobileNav onClick={openMobileNav}>
                    {isOpen ? (
                        <CloseIcon
                            iconColor={isOpen ? 'defaultPrimary' : 'tertiary'}
                        />
                    ) : (
                      
                    )}
                </MobileNav> */}
                <Navigation className={isOpen ? 'open' : 'close'}>
                    {menuItems?.length > 0 &&
                        menuItems.map(
                            (
                                {
                                    title,
                                    linkType,
                                    link,
                                    hasSubmenu,
                                    submenuItems
                                }: any,
                                i: number
                            ) => (
                                <React.Fragment key={`main-nav-menu-item-${i}`}>
                                    {linkType === 'Internal' && (
                                        <NavItem numberMenu={menuItems?.length}>
                                            {hasSubmenu === 'No' && (
                                                <MenuItem className="itemLink">
                                                    <NextLink
                                                        href={
                                                            link && link != ''
                                                                ? link
                                                                      .replace(
                                                                          'home',
                                                                          ''
                                                                      )
                                                                      .replace(
                                                                          '//',
                                                                          '/'
                                                                      )
                                                                : '#'
                                                        }
                                                    >
                                                        <a>{title}</a>
                                                    </NextLink>
                                                </MenuItem>
                                            )}

                                            {hasSubmenu === 'Yes' && (
                                                <>
                                                    <MenuItem
                                                        title={title}
                                                        className="dropdown"
                                                    >
                                                        <a
                                                            href={
                                                                link &&
                                                                link != ''
                                                                    ? link
                                                                          .replace(
                                                                              'home',
                                                                              ''
                                                                          )
                                                                          .replace(
                                                                              '//',
                                                                              '/'
                                                                          )
                                                                    : '#'
                                                            }
                                                        >
                                                            {title}
                                                        </a>

                                                        {/* <IconWrapper
                                                            onClick={(e) =>
                                                                openSubNav(
                                                                    title,
                                                                    hasSubmenu,
                                                                    submenuItems
                                                                )
                                                            }
                                                        >
                                                            <ChevronDownIcon />
                                                        </IconWrapper> */}
                                                    </MenuItem>

                                                    {/* <SubNavigation>
                                                        <SubNav
                                                            slug={link}
                                                            isOpen={
                                                                isSubOpen &&
                                                                active === title
                                                            }
                                                            title={isHeading}
                                                            links={isSubNav}
                                                            menuRef={menuRef}
                                                        />
                                                    </SubNavigation> */}
                                                </>
                                            )}
                                        </NavItem>
                                    )}
                                </React.Fragment>
                            )
                        )}
                </Navigation>
            </StyledColumn>

            <StyledColumn
                width="25%"
                justifyContent="end"
                alignItems="center"
                className="social-donation"
                isOpen={isOpen}
            >
                <SocialSection links={socialLinks} />
                <CallToActionNavigation />
            </StyledColumn>
        </>
    );
}
