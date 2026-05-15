import { Church, Heart, Landmark, ListMusic, Music, Pause, Play, Search, Shield, SkipBack, SkipForward, Volume2, Waves } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import prayers from '../data/prayers.json';
import { formatTime } from '../utils/formatTime.js';
import SectionHeading from './SectionHeading.jsx';

function PrayerRow({ prayer, active, favorite, onFavorite }) {
  return (
    <article className={`rounded-3xl border p-4 transition duration-300 ${active ? 'border-amber-200/35 bg-amber-200/10 shadow-[0_0_36px_rgba(245,158,11,.12)]' : 'border-white/10 bg-white/[0.045] hover:bg-white/[0.075]'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-white">{prayer.title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/55">{prayer.text}</p>
          <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-emerald-200/80">
            {prayer.faith} · {prayer.category}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onFavorite(prayer.id)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/8 text-rose-200 transition hover:bg-white/14"
          aria-label={favorite ? `Remove ${prayer.title} from favorites` : `Add ${prayer.title} to favorites`}
        >
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </article>
  );
}

const MemoPrayerRow = memo(PrayerRow);

const resonanceTiles = [
  { label: 'Hanuman Chalisa', icon: Landmark },
  { label: 'Ayatul Kursi', icon: Shield },
  { label: 'Gregorian Chants', icon: Church },
  { label: 'Om Chanting', icon: Waves },
];

export default function AudioPlayer({ audio }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const categories = useMemo(() => ['All', ...new Set(prayers.map((item) => item.category))], []);
  const filtered = useMemo(
    () =>
      prayers.filter((item) => {
        const matchesQuery = `${item.title} ${item.faith} ${item.category}`.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === 'All' || item.category === category;
        return matchesQuery && matchesCategory;
      }),
    [category, query],
  );

  const toggleFavorite = (id) => {
    setFavorites((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));
  };

  return (
    <section id="music" className="relative z-20 px-4 py-20 sm:py-24 lg:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="reveal">
          <SectionHeading eyebrow="Divine Resonance" title="Divine Resonance">
            Immerse yourself in frequencies of the divine. Our curated audio library features powerful mantras and prayers designed to cleanse your aura.
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {resonanceTiles.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="stitch-card group flex aspect-[16/9] flex-col items-center justify-center rounded-[1.8rem] p-5 text-center transition duration-500 hover:-translate-y-2 hover:border-[#f2ca50]/40 sm:aspect-square"
              >
                <Icon className="mb-4 text-[#f2ca50] transition group-hover:scale-110 sm:mb-6" size={36} />
                <span className="font-display text-base font-bold text-[#eae1d4] sm:text-lg">{label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="reveal stitch-card relative overflow-hidden rounded-[2.2rem] p-5 sm:p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(242,202,80,.14),transparent_22rem)]" />
          <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="mb-7 grid h-32 w-32 place-items-center rounded-full border border-[#f2ca50]/25 bg-[#f2ca50]/5 shadow-[0_0_60px_rgba(242,202,80,.12)] sm:h-40 sm:w-40 md:h-44 md:w-44">
              <Music className="text-[#f2ca50]" size={44} fill="currentColor" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#eae1d4] sm:text-3xl">{audio.currentTrack.title}</h3>
            <p className="mt-1 font-display text-sm text-[#f2ca50] sm:text-lg">{audio.currentTrack.faith} · {audio.currentTrack.artist}</p>
            <div className="mt-8 flex h-14 items-end justify-center gap-2 sm:mt-9 sm:h-16" aria-hidden="true">
              {Array.from({ length: 7 }, (_, index) => (
                <span
                  key={index}
                  className={`eq-bar w-3 rounded-full bg-[#f2ca50] ${!audio.isPlaying ? 'opacity-40 [animation-play-state:paused]' : ''}`}
                  style={{ height: 14 + (index % 4) * 10, animationDelay: `${index * 0.08}s` }}
                />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-5 sm:mt-9 sm:gap-7">
              <button type="button" onClick={audio.previous} className="text-[#eae1d4]/75 transition hover:text-[#f2ca50]" aria-label="Previous track">
                <SkipBack size={24} />
              </button>
              <button type="button" onClick={audio.toggle} className="grid h-16 w-16 place-items-center rounded-full bg-[#f2ca50] text-[#3c2f00] shadow-[0_0_40px_rgba(242,202,80,.3)] transition hover:scale-105 sm:h-20 sm:w-20" aria-label={audio.isPlaying ? 'Pause' : 'Play'}>
                {audio.isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
              </button>
              <button type="button" onClick={audio.next} className="text-[#eae1d4]/75 transition hover:text-[#f2ca50]" aria-label="Next track">
                <SkipForward size={24} />
              </button>
            </div>
            <input
              type="range"
              min="0"
              max={audio.duration}
              value={Math.min(audio.progress, audio.duration)}
              onChange={(event) => audio.seek(event.target.value)}
              className="mt-9 w-full accent-[#f2ca50]"
              aria-label="Track progress"
            />
            <label className="mt-5 flex w-full items-center gap-3 text-sm font-semibold text-[#d0c5af]">
              <Volume2 size={18} aria-hidden="true" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={audio.volume}
                onChange={(event) => audio.setVolume(Number(event.target.value))}
                className="w-full accent-[#f2ca50]"
                aria-label="Volume"
              />
            </label>
          </div>
        </div>
      </div>

      <div id="prayers" className="section-shell mt-20 scroll-mt-28">
        <SectionHeading eyebrow="Prayer Library" title="Curated prayers and protection chants">
          Search, filter, and favorite devotional tracks from multiple traditions.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <div className="reveal stitch-card relative overflow-hidden rounded-[2.2rem] p-5 sm:p-6">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-300/18 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-blue-500/16 blur-3xl" aria-hidden="true" />
            <div className="relative mb-8 flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f2ca50] text-[#3c2f00] shadow-[0_0_44px_rgba(242,202,80,.22)] sm:h-14 sm:w-14">
                <ListMusic aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f2ca50]/75">Now playing</p>
                <h3 className="mt-1 text-xl font-black text-[#eae1d4] sm:text-2xl">{audio.currentTrack.title}</h3>
                <p className="text-xs text-[#d0c5af]/70 sm:text-sm">{audio.currentTrack.faith}</p>
              </div>
            </div>
            <div className="relative mb-6 flex h-20 items-end justify-center gap-2 rounded-[1.5rem] border border-white/10 bg-black/24 p-4 sm:mb-7 sm:h-24 sm:p-5">
              {Array.from({ length: 24 }, (_, index) => (
                <span
                  key={index}
                  className={`eq-bar w-1.5 rounded-full bg-[#f2ca50] ${!audio.isPlaying ? 'opacity-30 [animation-play-state:paused]' : ''}`}
                  style={{ height: 14 + (index % 7) * 6, animationDelay: `${index * 0.045}s` }}
                />
              ))}
            </div>
            <input
              type="range"
              min="0"
              max={audio.duration}
              value={Math.min(audio.progress, audio.duration)}
              onChange={(event) => audio.seek(event.target.value)}
              className="w-full accent-amber-500"
              aria-label="Track progress"
            />
            <div className="mt-2 flex justify-between text-xs text-white/45">
              <span>{formatTime(audio.progress)}</span>
              <span>{formatTime(audio.duration)}</span>
            </div>
            <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
              <button type="button" onClick={audio.previous} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14" aria-label="Previous track">
                <SkipBack size={18} />
              </button>
              <button type="button" onClick={audio.toggle} className="grid h-14 w-14 place-items-center rounded-full bg-[#f2ca50] text-[#3c2f00] shadow-[0_0_40px_rgba(242,202,80,.3)] transition hover:scale-105 sm:h-16 sm:w-16" aria-label={audio.isPlaying ? 'Pause' : 'Play'}>
                {audio.isPlaying ? <Pause /> : <Play />}
              </button>
              <button type="button" onClick={audio.next} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14" aria-label="Next track">
                <SkipForward size={18} />
              </button>
            </div>
            <label className="mt-7 flex items-center gap-3 text-sm font-semibold text-white/70">
              <Volume2 size={18} aria-hidden="true" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={audio.volume}
                onChange={(event) => audio.setVolume(Number(event.target.value))}
                className="w-full accent-emerald-500"
                aria-label="Volume"
              />
            </label>
          </div>
          <div className="reveal stitch-card rounded-[2.2rem] p-4 sm:p-5">
            <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="relative block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" size={18} aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search prayers"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.065] pl-11 pr-4 text-sm text-white placeholder:text-white/34"
                />
              </label>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-12 rounded-2xl border border-white/10 bg-slate-950 px-4 text-sm font-bold text-white"
                aria-label="Filter category"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="grid max-h-[460px] gap-3 overflow-auto pr-1 sm:max-h-[520px]">
              <div className="sticky top-0 z-10 mb-1 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-xs font-black uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
                <Waves size={16} /> Prayer queue
              </div>
              {filtered.map((prayer) => (
                <MemoPrayerRow
                  key={prayer.id}
                  prayer={prayer}
                  active={audio.currentTrack.title === prayer.title}
                  favorite={favorites.includes(prayer.id)}
                  onFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
