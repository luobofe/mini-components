import { h } from 'preact';

export interface ButtonProps {
  block?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  variant?: 'primary' | 'light' | 'text' | 'outline';
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { variant } = props;

  return <button></button>;
}
