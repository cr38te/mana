import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

type ImageProps = {
    width: number;
    height: number;
};
const ImageContainer = styled.div<ImageProps>`
    position: relative;
    width: ${(p) => `${p.width}px`};
    height: ${(p) => `${p.height}px`};
`;

const NewImage = styled(Image)`
    margin: 0 auto;
    display: block;
`;

export default function NextImage({
    parentId,
    image
}: {
    parentId: string;
    image: { url: string; alt: string; sizes?: { large: string } };
}) {
    const {
        url = 'https://via.placeholder.com/800x600.png',
        alt = '',
        sizes = ''
    } = image;
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [calc, setCalc] = useState(false);

    const currentSize: any = sizes;
    const imageHeight = currentSize ? currentSize?.['large-height'] : 600;
    const imageWidth = currentSize ? currentSize?.['large-width'] : 800;


    useEffect(() => {
        const ratio = 16 / 9;
        const parent = document.getElementById(parentId);
        if (parent) {
            const divWidth = parent
                ? document.getElementById(parentId)!.offsetWidth
                : parent;
            const newRatio = divWidth / 120;
            const heightRatio = newRatio / ratio;
            const heightWidth = 120 * heightRatio;

            if (imageWidth > imageHeight) {
                setHeight(heightWidth);
                setWidth(divWidth);

                setCalc(true);
            } else {
                const iHeight = (heightWidth / 120) * ratio * 120;

                setHeight(iHeight);
                setWidth(heightWidth);

                setCalc(true);
            }
        }
    });

    if (!calc) {
        return null;
    }

    return (
        <ImageContainer width={width} height={height}>
            <NewImage
                id={parentId}
                src={sizes === '' ? url : sizes?.large}
                alt={alt}
                layout="fill"
                objectFit="cover"
            />
        </ImageContainer>
    );
}
