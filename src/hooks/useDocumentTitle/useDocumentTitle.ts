import { useEffect, useLayoutEffect } from "react";

type UseDocumentTitleOutput = void;

const useDocumentTitle = (title: string): UseDocumentTitleOutput => {
  const useHook = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useHook(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
