export const combineClass = (...args: any[]) => {
  return args.filter(Boolean).join(" ");
};

export const prefixClass = (namespace: string) => (cls?: string | string[]) => {
  if (typeof cls === "string") return `${namespace}-${cls}`;
  else if (Array.isArray(cls)) {
    return combineClass(cls.map((name) => `${namespace}-${name}`));
  } else return namespace;
};
