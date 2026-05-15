export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#f2ca50]/80">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-[#f2ca50] md:text-5xl">{title}</h2>
      {children && <p className="mx-auto mt-5 max-w-2xl font-display text-lg leading-8 text-[#d0c5af]/85 md:text-xl">{children}</p>}
    </div>
  );
}
