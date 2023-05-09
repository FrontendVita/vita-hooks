import { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

const UseThrottleExample = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const throttledWidth = useThrottle(width, 500);

  useEffect(() => {
    console.log(throttledWidth);
  }, [throttledWidth]);

  return (
    <div>
      <p>Current width: {throttledWidth}px</p>
    </div>
  );
};

export default UseThrottleExample;
