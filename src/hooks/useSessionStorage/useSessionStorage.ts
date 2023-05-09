import { useCallback, useState } from "react";

type UseSessionStorageOutput<T> = [T, (value: T) => void];

const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    return undefined;
  }
};

const useSessionStorage = <T>(
  key: string,
  initialValue: T
): UseSessionStorageOutput<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }

      setStoredValue(value);
    },
    [key]
  );

  return [storedValue, setValue];
};

export default useSessionStorage;
