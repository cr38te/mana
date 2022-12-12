export const GA_TRACKING_ID = '';
export const GOOGLE_RECAPTCHA_CLIENT_CODE = '';
export const GOOGLE_MAPS_API_KEY = '';

declare const window: any;

export const gtagPageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};

export const gtagEvent = ({ action, category, label, value }: any) => {
    if (window && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
};

export const gMapOptions = {
    styles: [
        {
            featureType: 'administrative',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'on'
                },
                {
                    lightness: 33
                }
            ]
        },

        {
            featureType: 'poi.business',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'on'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#deecdb'
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'on'
                },
                {
                    lightness: '25'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'all',
            stylers: [
                {
                    lightness: '25'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ffffff'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {
                    saturation: '-90'
                },
                {
                    lightness: '25'
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'on'
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ffffff'
                }
            ]
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ffffff'
                }
            ]
        },
        {
            featureType: 'transit.line',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'transit.station',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        }
    ]
};
