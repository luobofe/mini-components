import { useCallback, useState } from "preact/hooks";

export function useToggle(defaultValue?: boolean) {
  const [state, setState] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  const set = useCallback((value: boolean) => {
    setState(value);
  }, []);

  return [state, { toggle, set }] as const;
}
