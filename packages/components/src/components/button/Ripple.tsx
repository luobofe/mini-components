import type { FunctionComponent, JSX } from "preact";
import { h } from "preact";
import { useToggle } from "@src/hooks";
import { useRef, useState } from "preact/hooks";
import { combineClass, prefixClass } from "@src/utils/clsx";

const clsx = prefixClass("mini-ripple");

export interface RippleProps {
  show?: boolean;
}

export const Ripple: FunctionComponent<RippleProps> = (props) => {
  const { show } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [active, { toggle: toggleActive }] = useToggle();

  const [styles, updateStyles] = useState<JSX.CSSProperties>();

  const getElementSize = () => {
    const rect = ref.current!.getBoundingClientRect();
    return Math.round(Math.max(rect.width, rect.height));
  };

  const getPositionStyle = (event: MouseEvent) => {
    const elementSize = getElementSize();

    const toPixel = (px: number) => px + "px";

    return {
      width: toPixel(elementSize),
      height: toPixel(elementSize),
      top: toPixel(event.offsetY - elementSize / 2),
      left: toPixel(event.offsetX - elementSize / 2),
    };
  };

  if (!show) return null;
  return (
    <div
      ref={ref}
      className={clsx()}
      onClick={(event) => {
        toggleActive();
        updateStyles(getPositionStyle(event));
      }}
      onAnimationEnd={toggleActive}
    >
      <span style={styles} className={combineClass(active && clsx("wave"))} />
    </div>
  );
};
