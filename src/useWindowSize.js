import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export const useYOffset = () => {
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    const opdateOffset = () => setOffset(window.pageYOffset);

    window.addEventListener("scroll", opdateOffset);

    opdateOffset();

    return () => window.removeEventListener("scroll", opdateOffset);
  }, []);

  return offset;
};
