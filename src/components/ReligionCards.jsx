import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Heart } from 'lucide-react';
import { memo, useState } from 'react';
import { religions } from '../data/religions.js';
import SectionHeading from './SectionHeading.jsx';

function ReligionCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group reveal stitch-card relative overflow-hidden rounded-[2rem]"
    >
      <div className="relative h-48 overflow-hidden sm:h-52 md:h-56">
        <img src={item.image} alt={`${item.name} peaceful place of worship`} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-90" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
      </div>
      <div className="relative bg-[#1f1b13]/88 p-5 sm:p-6 lg:p-7">
        <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#f2ca50] sm:text-3xl">{item.name}</h3>
        <p className="mt-4 min-h-0 font-display text-base italic leading-7 text-[#d0c5af] sm:min-h-20 sm:text-lg">"{item.message}"</p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-5 inline-flex items-center gap-3 font-display text-base font-bold text-[#f2ca50] transition-all group-hover:gap-5 sm:text-lg"
          aria-expanded={open}
        >
          Seek Shelter
          <ChevronRight className={`transition ${open ? 'rotate-90' : ''}`} size={20} aria-hidden="true" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.p
              className="mt-4 rounded-3xl border border-[#f2ca50]/15 bg-[#110e07]/55 p-4 text-sm leading-6 text-[#eae1d4]/80"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Heart className="mb-2 text-[#f2ca50]" size={16} /> {item.prayer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

const MemoReligionCard = memo(ReligionCard);

export default function ReligionCards() {
  return (
    <section id="faiths" className="relative z-20 px-4 pb-20 pt-8 sm:pb-24">
      <div className="section-shell">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {religions.map((item) => (
            <MemoReligionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
