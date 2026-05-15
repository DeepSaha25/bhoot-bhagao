import { useEffect, useState } from 'react';

export function useRotatingIndex(length, delay = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % length);
    }, delay);
    return () => window.clearInterval(id);
  }, [delay, length]);

  return index;
}
