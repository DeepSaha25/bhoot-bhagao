import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Home', '#home'],
  ['Prayers', '#prayers'],
  ['Music', '#music'],
  ['Gallery', '#gallery'],
  ['Calm', '#calm'],
  ['About', '#footer'],
];

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav className="stitch-pill mt-5 flex h-[72px] w-full max-w-5xl items-center justify-between rounded-full px-5 sm:px-7" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3 rounded-full text-[#f2ca50]">
          <span className="font-display text-2xl font-bold tracking-[-0.04em] md:text-3xl">Bhoot Bhagao</span>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map(([label, href]) => (
            <a
              key={`${label}-${href}`}
              className="rounded-full px-4 py-2 font-display text-base font-bold text-[#d0c5af] transition duration-300 hover:text-[#f2ca50]"
              href={href}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full text-[#f2ca50] transition hover:scale-105"
            aria-label={dark ? 'Use light mode' : 'Use dark mode'}
          >
            {dark ? <Sparkles size={25} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#f2ca50]/20 bg-[#f2ca50]/5 text-[#f2ca50] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="section-shell mt-3 grid gap-2 rounded-3xl border border-[#f2ca50]/15 bg-[#110e07]/90 p-3 backdrop-blur-2xl md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#f2ca50]/5 px-4 py-3 text-sm font-semibold text-[#eae1d4]"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
