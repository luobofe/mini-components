import { useEffect, useMemo, useRef } from 'preact/hooks';

export function useLatest<Type = any>(value: Type) {
  const ref = useRef(value);

  return useMemo(() => {
    ref.current = value;
    return ref;
  }, [value]);
}

export function useMount(fn: () => void) {
  const fnRef = useLatest(fn);

  useEffect(() => {
    fnRef.current();
  }, [fnRef]);
}

export function useDestroy(fn: () => void) {
  const fnRef = useLatest(fn);

  useEffect(() => {
    return fnRef.current;
  }, [fnRef]);
}
