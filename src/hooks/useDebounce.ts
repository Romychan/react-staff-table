import { useRef } from 'react';

export const useDebounce = <T>(callback: (value: T) => void, delay = 250) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (args: T) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => callback(args), delay);
  };
};
