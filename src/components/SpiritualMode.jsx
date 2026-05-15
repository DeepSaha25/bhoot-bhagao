import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Pause, Play, Repeat, ShieldCheck, SkipBack, SkipForward, Volume2, X } from 'lucide-react';
import { formatTime } from '../utils/formatTime.js';

const bars = [32, 48, 70, 42, 62, 36, 58];

export default function SpiritualMode({ open, onClose, audio }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-hidden bg-black/88 text-white backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Bhoot Bhagao spiritual mode"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,.32),transparent_32rem),radial-gradient(circle_at_18%_80%,rgba(16,185,129,.20),transparent_26rem),radial-gradient(circle_at_85%_72%,rgba(37,99,235,.26),transparent_30rem)]" />
          <div className="ambient-grid absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 22 }, (_, index) => (
              <span
                key={index}
                className="absolute rounded-full bg-amber-100/55 blur-[1px] animate-float"
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  width: 5 + (index % 5) * 3,
                  height: 5 + (index % 5) * 3,
                  animationDelay: `${index * 0.3}s`,
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 shadow-sm backdrop-blur-xl transition hover:bg-white/16"
            aria-label="Close spiritual mode"
          >
            <X size={20} />
          </button>
          <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
            <motion.div
              className="premium-glass w-full max-w-4xl rounded-[2.5rem] p-6 text-center md:p-10"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.97 }}
            >
              <motion.div
                className="mx-auto mb-7 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-amber-200 via-white to-emerald-200 shadow-[0_0_100px_rgba(245,158,11,.48)]"
                animate={{ scale: [0.95, 1.08, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheck className="text-slate-950" size={52} aria-hidden="true" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-200/82">You are safe</p>
              <h2 className="gold-text mt-3 font-display text-5xl font-extrabold tracking-[-0.04em] md:text-7xl">Divine Protection</h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-white/64">
                Let peaceful prayer, remembrance, and slow breathing bring the mind back to comfort.
              </p>
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/28 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200/80">Currently playing</p>
                <h3 className="mt-2 text-3xl font-black">{audio.currentTrack.title}</h3>
                <p className="text-sm text-white/48">
                  {audio.currentTrack.faith} · {audio.currentTrack.artist}
                </p>
                <div className="mx-auto mt-5 flex h-20 items-end justify-center gap-2" aria-hidden="true">
                  {bars.map((height, index) => (
                    <span
                      key={height + index}
                      className={`eq-bar w-3 rounded-full bg-gradient-to-t from-emerald-300 via-amber-200 to-white ${!audio.isPlaying ? 'opacity-30 [animation-play-state:paused]' : ''}`}
                      style={{ height, animationDelay: `${index * 0.18}s` }}
                    />
                  ))}
                </div>
                <input
                  type="range"
                  min="0"
                  max={audio.duration}
                  value={Math.min(audio.progress, audio.duration)}
                  onChange={(event) => audio.seek(event.target.value)}
                  className="mt-6 w-full accent-amber-500"
                  aria-label="Track progress"
                />
                <div className="mt-2 flex justify-between text-xs text-white/45">
                  <span>{formatTime(audio.progress)}</span>
                  <span>{formatTime(audio.duration)}</span>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button type="button" onClick={audio.previous} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/8 transition hover:bg-white/14" aria-label="Previous track">
                    <SkipBack size={18} />
                  </button>
                  <button type="button" onClick={audio.toggle} className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 text-black shadow-[0_0_58px_rgba(245,158,11,.46)] transition hover:scale-105" aria-label={audio.isPlaying ? 'Pause' : 'Play'}>
                    {audio.isPlaying ? <Pause /> : <Play />}
                  </button>
                  <button type="button" onClick={audio.next} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/8 transition hover:bg-white/14" aria-label="Next track">
                    <SkipForward size={18} />
                  </button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <label className="flex items-center gap-3 text-sm font-semibold text-white/70">
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
                  <button
                    type="button"
                    onClick={() => audio.setLoop((value) => !value)}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${audio.loop ? 'bg-emerald-300 text-black shadow-[0_0_30px_rgba(16,185,129,.3)]' : 'border border-white/10 bg-white/8 text-white'}`}
                    aria-pressed={audio.loop}
                  >
                    <Repeat size={16} aria-hidden="true" /> Loop
                  </button>
                </div>
                <div className="mt-5 flex justify-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/34">
                  <Heart size={14} /> Prayer · Breath · Peace
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
