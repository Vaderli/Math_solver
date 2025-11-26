import { useEffect, useState, useRef } from "react";

export function useTimer(allTime = 180, onTimeOver, isTick) {
  const [timer, setTimer] = useState(allTime);
  const intervalRef = useRef(null);

  const isTickRef = useRef(isTick);

  useEffect(() => {
    isTickRef.current = isTick;
  }, [isTick]);


  const tick = () => {
    setTimer((prev) => {
      if (prev <= 1)
    {
        clearInterval(intervalRef.current);
        if (onTimeOver) 
            onTimeOver();
        return 0;
      }
        if (isTickRef.current) 
          return prev;

      return prev - 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return { timer, tick };
}
