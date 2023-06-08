import { useCallback, useState } from "react";

type UseLocalStorageOutput<T> = [T, (value: T) => void];

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorageOutput<T> => {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setLocalStorageValue = useCallback(
    (value: T) => {
      try {
        setValue(value);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  return [value, setLocalStorageValue];
};

export default useLocalStorage;
