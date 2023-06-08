import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const UseIntersectionObserverExample = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div>
      <div style={{ height: '100vh' }}>Scroll down</div>
      <div style={{ height: '100vh' }} ref={ref}>
        <p>{isVisible ? 'Element is on screen.' : 'Scroll more!'}</p>
      </div>
    </div>
  );
};

export default UseIntersectionObserverExample;
