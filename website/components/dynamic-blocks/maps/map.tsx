import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import MapMarker from './marker-item';
import { gMapOptions } from '../../../utils/google';
import { device } from '../../base/mediaquery';

const Map = styled.div`
	display: block;
	height: 100vh;
	width: 100%;
	border-radius: 0;
	.mapMarker {
		width: 30px;
	}

	@media ${device.desktopS} {
		height: 950px;
	}

    @media(max-width:1080px) {
        height:1100px;
    }

    @media (max-width:800px) {
        height:550px;
    }
`;

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
	process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function GoogleMaps(props: any) {
    const apiIsLoaded:any = (map: any, maps: any, places: any) => {
		map.setClickableIcons(false) // Need to call this to disable POIs
	}

	const { lat, lng, zoom } = props || {};
	const defaultProps = {
		center: {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		},
        backgroundColor: '#dddddd',
        disableDoubleClickZoom: false,
        keyboardShortcuts: false,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        arrowPosition: 30,
        arrowStyle: 2,
        arrowSize: 15,
        disableDefaultUI: true,
        zoomControl: true,
		zoom: parseFloat(zoom),
        clickableIcons: false,
	};

	return (
		<Map>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				options={gMapOptions}
				yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
			>
				<MapMarker
					// selected={ID===marker.ID}

					{...props}
					iconColor="defaultSecondary"
					iconSize="35px"
				/>
			</GoogleMapReact>
		</Map>
	);
}
