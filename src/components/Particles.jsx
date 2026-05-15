const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 47) % 100}%`,
  top: `${(index * 29) % 100}%`,
  delay: `${(index % 7) * 0.8}s`,
  size: 5 + (index % 4) * 3,
}));

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute animate-float rounded-full bg-amber-200/35 blur-[1px] shadow-[0_0_22px_rgba(245,158,11,.45)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}
      <span className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-amber-500/12 blur-3xl" />
      <span className="absolute right-[6%] top-[12%] h-96 w-96 rounded-full bg-blue-600/12 blur-3xl" />
      <span className="absolute bottom-[8%] left-[44%] h-80 w-80 rounded-full bg-emerald-400/12 blur-3xl" />
    </div>
  );
}
