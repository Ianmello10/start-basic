// src/hooks/useWindowControlsOverlay.ts
import { useEffect, useState } from "react";

type TitleBarRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function useWindowControlsOverlay() {
  const [rect, setRect] = useState<TitleBarRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 33,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!("windowControlsOverlay" in navigator)) return;

    const updateGeometry = () => {
      setRect(navigator.windowControlsOverlay.getTitlebarAreaRect());
      setVisible(true);
    };

    navigator.windowControlsOverlay.addEventListener(
      "geometrychange",
      updateGeometry
    );
    updateGeometry();

    return () => {
      navigator.windowControlsOverlay.removeEventListener(
        "geometrychange",
        updateGeometry
      );
    };
  }, []);

  return { rect, visible };
}
