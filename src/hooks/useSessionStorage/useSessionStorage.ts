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
  const [value, setValue] = useState(() => {
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

  const setSessionStorageValue = useCallback(
    (value: T) => {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }

      setValue(value);
    },
    [key]
  );

  return [value, setSessionStorageValue];
};

export default useSessionStorage;
