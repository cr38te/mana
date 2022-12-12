import React, { HTMLProps } from 'react';
import NextLink, { LinkProps } from 'next/link';

export default function Link(i, link, linkType, title) {
    return (
        <NextLink
            key={`main-nav-menu-item-link-${i}`}
            href={link ? link : '#'}
            target={linkType !== 'internal' ? '_blank' : ''}
        >
            {title}
        </NextLink>
    );
}
