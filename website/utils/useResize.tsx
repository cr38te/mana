import { useEffect, useRef, useState } from 'react';
export interface Size {
    width: number | undefined;
    height: number | undefined;
}
// Hook
export default function useResize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const ref = useRef<any>(null);
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined
    });

    const [heightBg, setHeightBg] = useState(0);

    useEffect(() => {
        // Handler to call on window resize
        let id: any = null;

        function handleResize() {
            // Set window width/height to state
            clearTimeout(id);
            id = setTimeout(() => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });

                if (ref.current) {
                    setHeightBg(ref.current.offsetHeight);
                }
            }, 1250);
        }
        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return [windowSize, heightBg, ref];
}
