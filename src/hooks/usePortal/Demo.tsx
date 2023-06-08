import ReactDOM from "react-dom";
import { useState } from "react";
import usePortal from "./usePortal";

const UsePortalExample = () => {
  const [isOpen, setOpen] = useState(false);
  const container = usePortal("cool-modal");

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>

      {isOpen
        ? container &&
          ReactDOM.createPortal(
            <div style={{ width: "100%" }}>
              <h1>Hello World from the modal!!!</h1>
              <button onClick={() => setOpen(false)}>Close Modal</button>
            </div>,
            container
          )
        : null}
    </div>
  );
};

export default UsePortalExample;
