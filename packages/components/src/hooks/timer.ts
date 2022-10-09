import { useCallback, useEffect, useState } from "preact/hooks";
import { useLatest } from "./life-time";

export type DelayExecParams = {
  delay?: number;
  onEnd?: () => void;
};

export function useDelayExec(params: DelayExecParams) {
  const { delay = 250, onEnd } = params;

  const onEndRef = useLatest(onEnd);

  const [timing, updateTiming] = useState(false);

  const start = useCallback(() => {
    updateTiming(true);
  }, []);

  const pause = useCallback(() => {
    updateTiming(false);
  }, []);

  useEffect(() => {
    let timer: number;
    if (timing && delay) {
      timer = setTimeout(() => {
        updateTiming(false);
        onEndRef.current?.();
      }, delay);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [delay, timing, onEndRef]);

  return { start, pause };
}
