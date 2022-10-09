import type { BaseComponent } from "@src/typings/components";
import { FunctionComponent, h } from "preact";
import { combineClass, prefixClass } from "@src/utils/clsx";
import { useMemo, useRef } from "preact/hooks";
import { Ripple } from "./Ripple";

const clsx = prefixClass("mini-btn");

export interface ButtonProps extends BaseComponent<HTMLButtonElement> {
  block?: boolean;
  color?: string;
  variant?: "primary" | "text" | "outline";
  type?: "button" | "submit" | "reset";
  size?: `${number}px`;
  ripple?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const {
    color,
    block,
    ripple = true,
    variant = "primary",
    size = "default",
  } = props;

  const colorStyles = useMemo(
    () => ({ [variant === "primary" ? "mini-bg" : "mini-color"]: color }),
    [variant, color]
  );

  return (
    <button
      {...colorStyles}
      ref={ref}
      mini-h={size}
      mini-w={block ? "100%" : "auto"}
      className={combineClass(props.className, clsx(), clsx(variant))}
      type={props.type}
      hidden={props.hidden}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
      onClickCapture={props.onClickCapture}
    >
      {props.children}
      <Ripple show={ripple && !props.disabled} />
    </button>
  );
};
