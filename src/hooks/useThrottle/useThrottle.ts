import { useEffect, useRef, useState } from "react";

type UseThrottleOutput<T> = T;

const useThrottle = <T>(value: T, delay = 500): UseThrottleOutput<T> => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastUpdated = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= lastUpdated.current + delay) {
      lastUpdated.current = Date.now();
      setThrottledValue(value);
    } else {
      const timeoutId = setTimeout(() => {
        lastUpdated.current = Date.now();
        setThrottledValue(value);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [delay, value]);

  return throttledValue;
};

export default useThrottle;
