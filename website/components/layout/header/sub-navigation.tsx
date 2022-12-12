import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: -120px;
  left: 15px;
  min-width: 250px;
  width: 100%;
  max-width: 320px;
  text-align: ${(p) => p.theme.textAlign.left};
  transition: ${(p) => p.theme.transition.fastLinear};
  z-index: 99999;
  opacity: 0;

  @media (max-width: 900px) {
    top: 20px;
  }
  &.open {
    top: 20px;
    opacity: 1;
    visibility: visible;
  }
  &.close {
    top: -120px;
    opacity: 0;
    visibility: hidden;
  }
`;

const ListItem = styled.li`
  border: 0;
`;

const LinkItem = styled.a`
  display: block;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.defaultSecondary};
  background-color: ${(p) => p.theme.colors.defaultPrimary};
  transition: ${(p) => p.theme.transition.linear};
  box-shadow: -7px 7px 5px #00000033;
  padding: 15px 15px;
  text-decoration: none;
  &:hover {
    background-color: ${(p) => p.theme.colors.quaternary};
    color: ${(p) => p.theme.colors.defaultPrimary};
  }
`;

const SubNavigation = ({ links, isOpen, slug, menuRef }:any) => {
  return (
    <List className={isOpen ? "open" : "close"} ref={menuRef}>
      {links?.length > 0 &&
        links.map(({ link, title }:any, i:number) => (
          <ListItem key={`sub-menu-link-item-${i}`}>
            <LinkItem
              href={slug === "/about-us/" ? link : slug + link}
              title={title}
            >
              {title}
            </LinkItem>
          </ListItem>
        ))}
    </List>
  );
};
export default SubNavigation;
