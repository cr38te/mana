import React from 'react';
import styled from 'styled-components';

const BorderDecoration = styled.div<BorderDecoProps>`
    height: 3px;
    width: ${(p) => (p.width ? p.width : '100px')};
    background-color: ${(p) => p.theme.colors.tertiary};
    margin-bottom: ${(p) => p.theme.spacing.inset};
`;

interface BorderDecoProps {
    width?: string;
}

export default function BorderDecorationComponent({
    width
}: {
    width?: string;
}) {
    return <BorderDecoration width={width} />;
}
