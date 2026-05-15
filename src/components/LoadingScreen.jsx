import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#050608] text-amber-100"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      role="status"
      aria-label="Loading"
    >
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#0b0b0b] ring-1 ring-white/6">
          <span className="font-display text-xl font-bold text-[#f2ca50]">BB</span>
        </div>
        <p className="font-display text-2xl font-semibold text-[#eae1d4]">Bhoot Bhagao</p>
        <p className="mt-2 text-sm text-white/48">Loading…</p>
      </div>
    </motion.div>
  );
}
