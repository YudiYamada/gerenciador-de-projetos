import { useState, useEffect } from "react";

export function useVisibleMessage(initialState = false, delay = 3000) {
  const [visible, setVisible] = useState(initialState);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [visible, delay]);

  return [visible, setVisible];
}
