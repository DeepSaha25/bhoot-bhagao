import { motion } from 'framer-motion';

export default function Hero({ onOpenSpiritualMode }) {
  return (
    <section id="home" className="relative z-20 overflow-hidden px-4 pb-10 pt-28 sm:pb-12 sm:pt-32 md:pt-40">
      <div className="absolute inset-0 noisy" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f2ca50]/20" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-[#eae1d4] sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Where <span className="text-[#f2ca50] italic">Faith</span> Defeats Fear
          </motion.h1>
          <motion.div
            className="mt-8 flex justify-center sm:mt-10"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <button
              type="button"
              onClick={onOpenSpiritualMode}
              className="group relative w-full max-w-sm overflow-hidden rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] px-7 py-4 text-sm font-black tracking-[0.05em] text-[#3c2f00] shadow-[0_0_30px_rgba(242,202,80,0.3)] transition duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(242,202,80,0.44)] focus-visible:ring-4 focus-visible:ring-[#f2ca50]/35 sm:px-10 sm:py-5"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.56),transparent)] transition duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center justify-center gap-3">
                Activate Bhoot Bhagao
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
