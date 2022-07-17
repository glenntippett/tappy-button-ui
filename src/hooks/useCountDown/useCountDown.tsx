import { useEffect, useState } from "react";

const DEFAULT_TIME = 5;

type UseCountDownReturn = {
  time: number;
  start: () => void;
  stop: () => void;
  resetTime: () => void;
};

const useCountDown = (): UseCountDownReturn => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const resetTime = () => {
    setTime(DEFAULT_TIME);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return { time, start, stop, resetTime };
};

export { useCountDown };
