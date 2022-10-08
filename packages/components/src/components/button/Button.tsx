import type { ComponentChild } from 'preact';
import type { BaseComponent } from '@src/typings/components';
import { h } from 'preact';

export interface ButtonProps extends BaseComponent<HTMLButtonElement> {
  block?: boolean;
  color?: string;
  loading?: boolean;
  variant?: 'primary' | 'light' | 'text' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  children?: ComponentChild;
}

export function Button(props: ButtonProps) {
  const { block, color, disabled, type, loading, variant } = props;

  return (
    <button
      bg={color}
      className={props.className}
      hidden={props.hidden}
      style={props.style}
      onClick={props.onClick}
      onClickCapture={props.onClickCapture}
    >
      {props.children}
    </button>
  );
}
