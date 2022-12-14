export const GA_TRACKING_ID = 'G-050ZP33BE2';
export const GOOGLE_RECAPTCHA_CLIENT_CODE = '';
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBCm93ldhOR3-KzuzJqKSqYyFp0VgIrErE';

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
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#7fc8ed"
                },
                {
                    "saturation": 55
                },
                {
                    "lightness": -6
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#7fc8ed"
                },
                {
                    "saturation": 55
                },
                {
                    "lightness": -6
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#83cead"
                },
                {
                    "saturation": 1
                },
                {
                    "lightness": -15
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#f3f4f4"
                },
                {
                    "saturation": -84
                },
                {
                    "lightness": 59
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#bbbbbb"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 26
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffcc00"
                },
                {
                    "saturation": 100
                },
                {
                    "lightness": -35
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffcc00"
                },
                {
                    "saturation": 100
                },
                {
                    "lightness": -22
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#d7e4e4"
                },
                {
                    "saturation": -60
                },
                {
                    "lightness": 23
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]
};
