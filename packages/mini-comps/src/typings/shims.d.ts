import type { AttributifyAttributes } from 'unocss/preset-attributify';

declare module 'preact' {
  export namespace JSX {
    interface HTMLAttributes extends AttributifyAttributes {
      [key: string]: unknown;
    }
  }
}
