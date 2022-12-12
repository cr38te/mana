import { useEffect, useRef, useState } from 'react';
// Hook

export interface Size {
    width: number | undefined;
}
export default function useResizeWidth() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const ref = useRef(null);
    const [width, setWindowSize] = useState<any>(undefined);

    useEffect(() => {
        // Handler to call on window resize
        let id: any = null;

        function handleResize() {
            // Set window width/height to state
            setWindowSize(window.outerWidth);
        }
        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    const checkMedia = () => {
        if (width <= 480) {
            return 'Phone';
        }
        if (width >= 480 && width <= 768) {
            return 'Tablet';
        }
        if (width >= 480 && width >= 768 && width <= 1200) {
            return 'Laptop';
        }
        if (width >= 480 && width >= 768 && width >= 1200 && width <= 1920) {
            return 'Desktop';
        } else {
            return 'DesktopL';
        }
    };

    return [width, ref, checkMedia];
}
