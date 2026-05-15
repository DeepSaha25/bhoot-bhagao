import { AnimatePresence, motion } from 'framer-motion';
import { peaceMessages } from '../data/quotes.js';
import { useRotatingIndex } from '../hooks/useRotatingIndex.js';
import SectionHeading from './SectionHeading.jsx';

export default function DailyPeace() {
  const index = useRotatingIndex(peaceMessages.length, 4200);

  return (
    <section className="relative z-20 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Daily peace" title="A message held in light" />
        <div className="reveal premium-glass relative mx-auto grid min-h-0 max-w-4xl place-items-center overflow-hidden rounded-[2.2rem] p-6 text-center sm:min-h-72 sm:p-8">
          <div className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/12 blur-3xl sm:h-80 sm:w-80" />
          <AnimatePresence mode="wait">
            <motion.p
              key={peaceMessages[index]}
              className="relative font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-3xl md:text-5xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              {peaceMessages[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
