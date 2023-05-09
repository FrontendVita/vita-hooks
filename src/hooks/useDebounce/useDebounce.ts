import { useEffect, useState } from "react";

type UseDebounceOutput<T> = T;

const useDebounce = <T>(value: T, delay?: number): UseDebounceOutput<T> => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
