import { useEffect, useState } from 'react';

export default function AmbientCursor() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-10 hidden h-32 w-32 rounded-full bg-amber-200/16 mix-blend-screen blur-3xl md:block"
      style={{ transform: `translate3d(${position.x - 48}px, ${position.y - 48}px, 0)` }}
      aria-hidden="true"
    />
  );
}
