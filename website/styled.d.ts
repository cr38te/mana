// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            defaultPrimary: string;
            defaultSecondary: string; // White
            primary: string; // Sherpa Blue
            secondary: string; // Teal
            tertiary: string; // Light Teal,
            [key: string]: string;
        };

        fonts: {
            paragraphFont: string;
            headingFont: string;
            bodyFont: string;
			[key?: string]: string;

        };
        fontWeight: {
            light: string;
            regular: string;
            bold: string;
			[key?:string]:string;
        };

        fontSizes: {
            extraSmall: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
            paragraph: string;
            subTitle: string;
        };

        as?: string;

        spacing: {
            pt?: string;
            inset: string;
            doubleInset: string;
            tripleInset: string;
            quarterlyInset: string;
            megaInset: string;
            none: string;
            [key?: string]: string;
        };

        textalign: {
            center: string;
            left: string;
            right: string;
            justify: string;
            [key?: string]: string;
        };

        direction: {
            [key?: string]: string;
            column: string;
            row: string;
            columnReverse: string;
            rowReverse: string;
        };

        alignItems: {
            start: string;
            center: string;
            end: string;
            stretch: string;
            baseLine: string;
            [key?: string]: string | undefined;
        };

        justifyContent: {
            start: string;
            center: string;
            end: string;
            spaceBetween: string;
            spaceAround: string;
            spaceEvenly: string;
        };

        position: {
            relative: string;
            fixed: string;
            sticky: string;
            absolute: string;
        };

        transition: {
            linear: string;
            fastLinear: string;
        };
    }
}
