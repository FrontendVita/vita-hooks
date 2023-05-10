import { useEffect, useRef, useState } from "react";

type UseFetchOutput<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

const useFetch = <T = unknown>(
  url: string,
  options?: RequestInit
): UseFetchOutput<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const abortRef = useRef<(reason?: any) => void>(() => {});

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const abortController = new AbortController();
        const signal = abortController.signal;
        abortRef.current = abortController.abort;

        const response = await fetch(url, { ...(options || {}), signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();

        setData(json);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortRef.current();
    };
  }, [options, url]);

  return { data, isLoading, error };
};

export default useFetch;
