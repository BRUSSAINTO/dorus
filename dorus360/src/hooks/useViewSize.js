import { useState, useEffect } from "react";

//Custom hook with update time 1s
export default function useViewSize(initialSize) {
  const [viewSize, setViewSize] = useState(initialSize);

  useEffect(() => {
    const updateSize = () => {
      setTimeout(() => {
        setViewSize(window.innerWidth);
      }, 200);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [viewSize];
}
