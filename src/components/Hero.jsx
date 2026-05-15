import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenSpiritualMode }) {
  return (
    <section id="home" className="relative z-20 overflow-hidden px-4 pb-12 pt-36 md:pt-40">
      <div className="absolute inset-0 noisy" aria-hidden="true" />
      <div className="ambient-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="aurora-motion absolute left-1/2 top-20 h-[42rem] w-[84rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,202,80,.12),transparent_58%)] blur-[120px]" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl text-center">
         
          <motion.h1
            className="font-display text-5xl font-bold leading-tight tracking-[-0.04em] text-[#eae1d4] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Where <span className="text-[#f2ca50] italic">Faith</span> Defeats Fear
          </motion.h1>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <button
              type="button"
              onClick={onOpenSpiritualMode}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] px-10 py-4 text-sm font-black tracking-[0.05em] text-[#3c2f00] shadow-[0_0_30px_rgba(242,202,80,0.3)] transition duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(242,202,80,0.44)] focus-visible:ring-4 focus-visible:ring-[#f2ca50]/35 md:px-14 md:py-5"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.56),transparent)] transition duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center justify-center gap-3">
                Activate Bhoot Bhagao <ShieldCheck size={19} aria-hidden="true" />
              </span>
            </button>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" aria-hidden="true">
          <Sparkles className="absolute left-[12%] top-[20%] text-[#f2ca50]" size={10} />
          <Sparkles className="absolute right-[18%] top-[40%] text-[#f2ca50]" size={12} />
          <Sparkles className="absolute left-[48%] top-[58%] text-[#f2ca50]" size={9} />
        </div>
      </div>
    </section>
  );
}
