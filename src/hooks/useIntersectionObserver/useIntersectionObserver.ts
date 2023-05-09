import { RefObject, useEffect, useState } from "react";

type UseIntersectionObserverOutput = boolean;

const useIntersectionObserver = (
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
): UseIntersectionObserverOutput => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options, ref]);

  return isVisible;
};

export default useIntersectionObserver;
