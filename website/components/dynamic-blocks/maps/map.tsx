import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import MapMarker from './marker-item';
import { gMapOptions } from '../../../utils/google';
import { device } from '../../base/mediaquery';

function mapOptions(maps: any) {
	return {
		styles: [
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#e9e9e9',
					},
					{
						lightness: 17,
					},
				],
			},
			{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f5f5f5',
					},
					{
						lightness: 20,
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#ffffff',
					},
					{
						lightness: 17,
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#ffffff',
					},
					{
						lightness: 29,
					},
					{
						weight: 0.2,
					},
				],
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff',
					},
					{
						lightness: 18,
					},
				],
			},
			{
				featureType: 'road.local',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff',
					},
					{
						lightness: 16,
					},
				],
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f5f5f5',
					},
					{
						lightness: 21,
					},
				],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: '#dedede',
					},
					{
						lightness: 21,
					},
				],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [
					{
						visibility: 'on',
					},
					{
						color: '#ffffff',
					},
					{
						lightness: 16,
					},
				],
			},
			{
				elementType: 'labels.text.fill',
				stylers: [
					{
						saturation: 36,
					},
					{
						color: '#333333',
					},
					{
						lightness: 40,
					},
				],
			},
			{
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f2f2f2',
					},
					{
						lightness: 19,
					},
				],
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#fefefe',
					},
					{
						lightness: 20,
					},
				],
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#fefefe',
					},
					{
						lightness: 17,
					},
					{
						weight: 1.2,
					},
				],
			},
		],
	};
}

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
