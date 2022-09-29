import type { JSX } from 'preact';

declare interface BaseComponent<Element extends HTMLElement> {
  className?: string;
  style?: JSX.CSSProperties | string;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: JSX.MouseEventHandler<Element>;
  onClickCapture?: JSX.MouseEventHandler<Element>;
}
