import type { AttributifyAttributes } from 'unocss/preset-attributify';

declare module 'preact' {
  type HTMLAttributes = AttributifyAttributes;
}
