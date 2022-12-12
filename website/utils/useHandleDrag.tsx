import React, { PropsWithChildren, useEffect, useState } from 'react';
// import Slider, { Settings as SliderProps } from "react-slick";

// export type DefaultSliderProps = SliderProps;

/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */
const MoveDragThreshold = 10;

export default function useDragDetection(): {
    //   handleMouseDown: () => void;
    //   dragging: boolean;
} {
    //   const [mouseDown, setMouseDown] = useState(false);
    //   const [dragging, setDragging] = useState(false);

    //   useEffect(() => {
    //     let mouseMove = 0;

    //     function handleMouseUp(): void {
    //       setMouseDown(false);
    //     }

    //     function handleMouseMove(e: MouseEvent): void {
    //       mouseMove += Math.abs(e.movementX) + Math.abs(e.movementY);
    //       setDragging(mouseMove > MoveDragThreshold);
    //     }

    //     if (mouseDown) {
    //       document.addEventListener("mouseup", handleMouseUp);
    //       document.addEventListener("mousemove", handleMouseMove);
    //     }

    //     return () => {
    //       document.removeEventListener("mouseup", handleMouseUp);
    //       document.removeEventListener("mousemove", handleMouseMove);
    //     };
    //   }, [mouseDown]);

    //   function handleMouseDown(): void {
    //     setMouseDown(true);
    //     setDragging(false);
    //   }

    return {
        // handleMouseDown,
        // dragging,
    };
}

// export function DefaultSlider(
//   props: PropsWithChildren<DefaultSliderProps>
// ): React.ReactElement {
//   const { children, ...sliderProps } = props;

//   const {
//     handleMouseDown,
//     dragging,
//   } = useDragDetection();

//   function handleChildClick(
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ): void {
//     if (dragging) {
//       e.preventDefault();
//     }
//   }

//   return (
//     <Slider {...sliderProps}>
//       {React.Children.map(children, (child) => (
//         <div
//           onMouseDownCapture={handleMouseDown}
//           onClickCapture={handleChildClick}
//         >
//           {child}
//         </div>
//       ))}
//     </Slider>
//   );
// }
