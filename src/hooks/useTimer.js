import { useEffect, useState, useRef } from "react";

export function useTimer(allTime = 180, onTimeOver) {
  const [timer, setTimer] = useState(allTime);
  const intervalRef = useRef(null);

  const tick = () => {
    setTimer((prev) => {
      if (prev <= 1) 
    {
        clearInterval(intervalRef.current);
        if (onTimeOver) 
            onTimeOver();
        return 0;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return { timer, tick };
}
