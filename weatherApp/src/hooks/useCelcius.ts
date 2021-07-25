import { useCallback, useState } from "react";

export const useCelcius = () => {
  const [isCelcius, setCelcius] = useState(true);
  const setIsCelcius = useCallback(() => {
    setCelcius((state) => !state);
  }, []);
  return {
    isCelcius,
    setIsCelcius,
  };
};
