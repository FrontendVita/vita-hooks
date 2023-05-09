import { useCallback, useState } from "react";

type UseCookieOutput = [
  string,
  (value: string, options?: CookieOptions) => void,
  () => void
];

interface CookieOptions {
  days?: number;
  path?: string;
  domain?: string;
  SameSite?: "None" | "Lax" | "Strict";
  Secure?: boolean;
  HttpOnly?: boolean;
}

const isBrowser = typeof window !== "undefined";

const stringifyOptions = (options: CookieOptions) =>
  Object.keys(options).reduce((acc, key) => {
    if (key === "days") {
      return acc;
    } else {
      if (options[key as keyof CookieOptions] === false) {
        return acc;
      } else if (options[key as keyof CookieOptions] === true) {
        return `${acc}; ${key}`;
      } else {
        return `${acc}; ${key}=${options[key as keyof CookieOptions]}`;
      }
    }
  }, "");

const setCookie = (
  name: string,
  value: string,
  options?: CookieOptions
): void => {
  if (!isBrowser) return;

  const optionsWithDefaults = {
    days: 7,
    path: "/",
    ...options,
  };

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();

  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    stringifyOptions(optionsWithDefaults);
};

const getCookie = (name: string, initialValue: string = "") =>
  (isBrowser &&
    document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "")) ||
  initialValue;

const useCookie = (key: string, initialValue?: string): UseCookieOutput => {
  const [item, setItem] = useState(() => getCookie(key, initialValue));

  const updateItem = useCallback(
    (value: string, options?: CookieOptions) => {
      setItem(value);
      setCookie(key, value, options);
    },
    [key]
  );

  const deleteItem = useCallback(() => {
    setItem("");
    setCookie(key, "", { days: 0 });
  }, [key]);

  return [item, updateItem, deleteItem];
};

export default useCookie;
