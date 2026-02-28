import { useEffect, useState, useRef } from "react";

/**
 * Custom hook that manages countdown timer.
 *
 * @param {number} allTime - Initial time in seconds
 * @param {Function} onTimeOver - Callback when time ends
 * @param {boolean} isTick - Pause flag (true = paused)
 * @param {string|number} key - Restart key
 *
 * @returns {Object}
 * @returns {number} returns.timer - Current timer value
 * @returns {Function} returns.tick - Manual tick function
 */
export function useTimer(allTime = 180, onTimeOver, isTick, key) {
  const [timer, setTimer] = useState(allTime);
  const intervalRef = useRef(null);

  const isTickRef = useRef(isTick);

  useEffect(() => {
    isTickRef.current = isTick;
  }, [isTick]);

  /**
 * Decreases timer by 1 second.
 * Stops timer and calls onTimeOver when reaches 0.
 */
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
  }, [key]);

  return { timer, tick };
}
