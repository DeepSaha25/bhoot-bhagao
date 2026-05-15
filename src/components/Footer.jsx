import { ArrowUp, Heart, Mail, Music2, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative z-20 border-t border-white/10 bg-black/34 py-10 backdrop-blur-xl">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold gold-text">All religions teach peace.</p>
          <p className="mt-2 max-w-xl text-sm text-white/52">
            Bhoot Bhagao is a calm spiritual space for reassurance, prayer, and emotional steadiness.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14" href="#prayers" aria-label="Prayer library">
            <Music2 size={18} />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14" href="mailto:peace@example.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14" href="https://instagram.com" aria-label="Instagram">
            <Share2 size={18} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-10 w-10 place-items-center rounded-full bg-amber-300 text-black shadow-[0_0_34px_rgba(245,158,11,.34)]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
      <p className="section-shell mt-8 flex items-center gap-2 text-xs text-white/38">
        Made with <Heart size={14} aria-hidden="true" /> for calm, respect, and unity. 
        <p>BY DEEP SAHA</p>
      </p>
    </footer>
  );
}
