import { useCallback, useEffect, useState } from "react";

type UseCopyToClipboardOutput = {
  isCopied: boolean;
  copyToClipboard: (text: string) => Promise<void>;
};

const useCopyToClipboard = (
  resetInterval?: number
): UseCopyToClipboardOutput => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
      setIsCopied(false);
    }
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return { isCopied, copyToClipboard };
};

export default useCopyToClipboard;
