export interface IHero {
    // slides: ISlide[];
    classes: string;
    fullScreen: boolean;
}

export interface ISlide {
    mediaType?: string;
    addLink: boolean;
    description: string;
    image?: { url: string; sizes: object };
    link: string;
    linkText: string;
    title: string;
    mobileImage?: { url: string; sizes: object };
    className?: string;
    showAvailability?: boolean;
    video?: IVideo;
    mobileVideo?: IVideo;
    alternativeVideo?: IVideo;
    alternativeMobileVideo?: IVideo;
}

export interface IImage {
    image: { url: string; alt: string };
}
export interface IVideo {
    url: string;
    sizes: object;
    mime_type: string;
}

export interface IPostData {
    acf?: {
        // heroArea?: IHero;
        contentBlocks?: IDynamicBlocksProps[];
    };
}
export interface IOptions {
    footer: object;
    contactInfo: object;
    mainNavigation: object;
    seo: object;
    socialMedia: object;
    newsletter: object;
}

export interface IHeader {
    menuItems: IMenu[];
}

export interface IFooter {
    footer?: object;
    contactInfo?: IContactInfo;
    socialLinks: ISocial[];
    links?: object[];
    newsletter: INewsletter;
    contactColumns: IContactInfo;
    contactSection: { title: string };
	socials:any;
}

export interface IContactInfo {
    description?: string;
    contactInfos?: object[];
    openingHours?: object[];
    icons?: object[];
    title?: string;
    phone: string;
    address: string;
    email: string;
}
export interface IIcon {
    className?: string;
    iconColor?: string;
    iconSize?: string;
    iconBg?: string;
    onClick?: () => void;
}

export interface IDynamicBlocksProps {
    // heroArea?: IHero;
    acf: { mainContentBlock?: { acf_fc_layout: string }[] };
    // seo?: { image: { sizes: object } };
}

export interface ICards {
    titlePrefix: string;
    title: string;
    description: string;
    manualSelect: boolean;
    buttonText: string;
    buttonLink: string;
    buttonLinkInternal: { slug: string };
    buttonLinkType: string;
    showViewAll: boolean;
    image: { sizes: { large: string }; alt: string };
    price: string;
    cards: ICard[];
    ID: number;
    // seo?: { image: { sizes: { large: string } } };
    limit?: boolean;
}
export interface ICardProperty {
    title: string;
    buttonText: string;
    showButton: string;
    variant: string;
    filterOptions: string;
    sortType: string;
    setFilterOptions: string;
    properties: ICard[];
}
export interface ICard {
    apartmentName: string;
    buttonText: string;
    hoverBackgroundColor: string;
    hoverDescription: string;
    hoverName: string;
    name: string;
    nrOfBathrooms: string;
    nrOfBedrooms: string;
    propertySize: string;
    onClick: string;
    image: string;
}
export interface IMarker {
    contactInfoColumns: { type: string; info: string }[];
    lat: number;
    lng: number;
    options: IOptions;
    manualContact: boolean;
}

export interface IGallery {
    gallery: IImage[];
    slides: {}[];
    titleLast: string;
    buttonText: string;
    buttonLink: string;
}

export interface IImage {
    title: string;
    subtitle: string;
    image: { url: string; alt: string };
    mobileImage: string;
    className: string;
    url: string;
    last: string;
    nrOfSlides: number;
    index: number;
    onModalOpen: (
        e: any,
        url: string,
        mouseOverlay: boolean,
        portraitImage: boolean
    ) => void;
    titleLast: string;
    buttonText: string;
    buttonLink: string;
    width: number;
    height: number;
}

export interface IContactFormProps {
    title: string;
    extraTitle: string;
    contactFormOptions: object[];
    description: string;
    options: object;
}

export interface IInfo {
    title: string;
    description: string;
    amenities: IAmenity[];
    extraData: string;
    post_title: string;
}

export interface IAmenity {
    value: string;
    label: string;
}

export interface IModal {
    onClick: () => void;
    img: { src: string; alt: string; url: string };
    isPortrait: boolean;
}

export interface INewsletter {
    title: string;
    placeholderText: string;
    buttonText: string;
    namePlaceholderText: string;
    emailPlaceholderText: string;
}

export interface ISocial {
    type: string;
    title: string;
    link: string;
}

export interface IMenu {
    title: string;
    linkType: string;
    link: string;
}

export interface IColumn {
    buttonText: string;
    colorDescription: string;
    description: string;
    title: string;
    titleColor: string;
    url: string;
    variant?: string;
    youtubeURL: string;
}

export interface ITeam {
    teamMembers: ITeamCard[];
}
export interface ITeamCard {
    email: string;
    image: string;
    telephone: string;
    text: string;
    textModal: string;
    titleModalName: string;
    titleName: string;
}

export interface IContent {
    acf_fc_layout: object;
}

export interface ITestimonial {
    variant: string;
    starRating: number;
    description: string;
    name: string;
}

export interface ITestimonials {
    testimonials: ITestimonial[];
    variant: string;
    title: string;
}
