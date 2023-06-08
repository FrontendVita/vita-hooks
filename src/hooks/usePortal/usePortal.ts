import { useEffect, useState } from "react";

type UsePortalOutput = HTMLDivElement | null;

const usePortal = (id = "unknown"): UsePortalOutput => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", `Portal_${id}`);
    document.body.appendChild(div);
    setContainer(div);

    return () => {
      document.body.removeChild(div);
    };
  }, [id]);

  return container;
};

export default usePortal;
