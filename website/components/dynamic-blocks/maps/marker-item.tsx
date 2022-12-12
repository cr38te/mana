import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MapMarkerIcon from '../../../icons/map-marker';
import { InfoWindow } from './info-window';

const Container = styled.div`
    position: relative;
`;

const MapMarkerContainer = styled.div`
    > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        min-width: 30px;
        width: 30px;
        max-width: 30px;
        height: 30px;
        min-height: 30px;
        max-height: 30px;
        /* 
        &.hovered > svg {
            color: ${(p) => p.theme.colors.defaultSecondary};
        } */

        &.active {
            z-index: 1;
            > svg {
                transition: 0.5s all ease-in-out;
                color: ${(p) => p.theme.colors.primary};
                width: 40px;
                height: 40px;
            }
        }
    }
`;

export default function MapMarker({
    nr,
    $hover,
    selected,
    acf,
    link,
    isMap = false,
    ...props
}: any) {
    const ref = useRef<any>();

	const contactInfo=props;

    const clearCards = () => {
        setOpen(false);
        const allMarkers = document.querySelectorAll(`.card-item`);
        const allInfo = document.querySelectorAll(`.info-item`);

        for (var i = 0; i < allMarkers.length; i++) {
            allMarkers[i].classList.remove('active');
        }
        for (var i = 0; i < allInfo.length; i++) {
            allInfo[i].classList.remove('show');
        }
    };

    const clearMarkers = () => {
        const allMarkers = document.querySelectorAll(`.marker-item`);
        const allInfo = document.querySelectorAll(`.info-item`);
        for (var i = 0; i < allMarkers.length; i++) {
            allMarkers[i].classList.remove('active');
        }
        for (var i = 0; i < allInfo.length; i++) {
            allInfo[i].classList.remove('show');
        }
    };

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClose = () => {
        clearCards();
        clearMarkers();
        setOpen((prev) => !prev);
    };
    const onScroll = (): any => {
        // const currentTarget = e.target.dataset.remove;
        clearCards();
        clearMarkers();
        if (ref.current) {
            const currentTarget = ref.current?.getAttribute('data-href');
            const section: any = document.getElementById(currentTarget)!;
            const divTop: any = document.getElementById('scrollable-item')!;
            if (section !== null) {
                section!.classList.add('active');

                const elementTop = section.getBoundingClientRect().y;
                const parentTop = divTop.scrollTop;
                const offsetParentTop = divTop.getBoundingClientRect().y;
                const elementRelativeTop =
                    elementTop + parentTop - offsetParentTop;

                const getItem = document.getElementById('scrollable-item');
                getItem!.scrollTo({
                    top: elementRelativeTop,
                    // left: elementRelativeLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <Container
            id={`marker-${nr}`}
            ref={ref}
            data-href={`card-${nr}`}
            onClick={handleClick}
        >
            <MapMarkerContainer>
                <MapMarkerIcon
                    className={`marker-item ${
                        open ? 'active' : ''
                    }`}
                    iconColor={'defaultSecondary'}
                />
            </MapMarkerContainer>
            <InfoWindow
                contactInfo={contactInfo}
                onClose={handleClose}
                selected={open}
                acf={acf}
                link={link}
                lat={props?.lat}
                lng={props?.lng}
            />
        </Container>
    );
}
