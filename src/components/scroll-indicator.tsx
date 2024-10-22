import { useAnimate, AnimationSequence } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Mouse = styled.div<{
  mouseWidth: number;
  mouseHeight: number;
  mouseBorder: number;
  mouseColor: string;
}>`
  width: ${(props) => props.mouseWidth}px;
  height: ${(props) => props.mouseHeight}px;
  border: ${(props) => props.mouseBorder}px solid ${(props) => props.mouseColor};
  border-radius: 999px;
  position: relative;
`;

const Wheel = styled.div<{
  wheelSize: number;
  wheelColor: string;
  offset: number;
}>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.wheelSize}px;
  height: ${(props) => props.wheelSize}px;
  top: ${(props) => props.offset}px;
  border-radius: 999px;
  background-color: ${(props) => props.wheelColor};
`;

export default function ScrollIndicator({
  mouseHeight = 60,
  mouseWidth = 40,
  mouseBorder = 4,
  offset = 15,
  wheelSize = 10,
  mouseColor = "white",
  wheelColor = "white",
}: {
  mouseHeight?: number;
  mouseWidth?: number;
  mouseBorder?: number;
  offset?: number;
  wheelSize?: number;
  mouseColor?: string;
  wheelColor?: string;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence: AnimationSequence = [
      [
        scope.current,
        {
          height: [
            `${wheelSize}px`,
            `${mouseHeight - 2 * offset}px`,
            `${wheelSize}px`,
          ],
          top: [
            `${offset}px`,
            `${(offset + (mouseHeight - offset - wheelSize)) / 2}px`,
            `${mouseHeight - offset - wheelSize}px`,
          ],
        },
        { delay: 0.5, duration: 0.5 },
      ],
      [scope.current, { top: `${offset}px` }, { delay: 0.5, duration: 0.5 }],
    ];

    const control = animate(sequence, { repeat: Infinity });

    return () => control.stop();
  }, [scope, animate, offset, mouseHeight, wheelSize]);

  return (
    <Mouse
      mouseHeight={mouseHeight}
      mouseWidth={mouseWidth}
      mouseBorder={mouseBorder}
      mouseColor={mouseColor}
    >
      <Wheel
        ref={scope}
        wheelSize={wheelSize}
        wheelColor={wheelColor}
        offset={offset}
      ></Wheel>
    </Mouse>
  );
}
