declare module '*.less';
declare module '*.css';

declare type PickValue<T, K extends keyof T> = Pick<T, K>[K];
