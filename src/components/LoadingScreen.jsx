import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#050608] text-amber-100"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      role="status"
      aria-label="Loading Bhoot Bhagao"
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-emerald-300 text-black shadow-[0_0_80px_rgba(245,158,11,.5)]"
          animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles aria-hidden="true" />
        </motion.div>
        <p className="font-display text-3xl font-extrabold gold-text">Bhoot Bhagao</p>
        <p className="mt-2 text-sm text-white/48">Opening a calm cinematic space...</p>
      </div>
    </motion.div>
  );
}
