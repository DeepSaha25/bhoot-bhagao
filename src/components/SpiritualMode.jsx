import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play, Repeat, SkipBack, SkipForward, Volume2, X } from 'lucide-react';
import { formatTime } from '../utils/formatTime.js';

export default function SpiritualMode({ open, onClose, audio }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-[#110e07]/96 text-[#eae1d4] backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Bhoot Bhagao listening mode"
        >
          <button
            type="button"
            onClick={onClose}
            className="fixed right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-[#f2ca50]/20 bg-[#16130b] text-[#eae1d4] transition hover:border-[#f2ca50]/45 hover:text-[#f2ca50]"
            aria-label="Close listening mode"
          >
            <X size={20} />
          </button>

          <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
            <motion.div
              className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f2ca50]">Listening mode</p>
                <h2 className="mt-4 font-display text-5xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
                  Sit quietly.
                  <span className="block text-[#f2ca50]">Let the prayer play.</span>
                </h2>
                <p className="mt-6 max-w-md font-display text-xl leading-8 text-[#d0c5af]">
                  Breathe slowly. Keep your attention on the sound, the room, and the present moment.
                </p>
              </div>

              <div className="stitch-card rounded-[2rem] p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f2ca50]/80">Now playing</p>
                <h3 className="mt-3 font-display text-4xl font-bold text-[#eae1d4]">{audio.currentTrack.title}</h3>
                <p className="mt-2 text-sm text-[#d0c5af]/75">
                  {audio.currentTrack.faith} · {audio.currentTrack.artist}
                </p>

                <input
                  type="range"
                  min="0"
                  max={audio.duration}
                  value={Math.min(audio.progress, audio.duration)}
                  onChange={(event) => audio.seek(event.target.value)}
                  className="mt-10 w-full accent-[#f2ca50]"
                  aria-label="Track progress"
                />
                <div className="mt-2 flex justify-between text-xs text-[#d0c5af]/65">
                  <span>{formatTime(audio.progress)}</span>
                  <span>{formatTime(audio.duration)}</span>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6">
                  <button type="button" onClick={audio.previous} className="text-[#d0c5af] transition hover:text-[#f2ca50]" aria-label="Previous track">
                    <SkipBack size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={audio.toggle}
                    className="grid h-16 w-16 place-items-center rounded-full bg-[#f2ca50] text-[#3c2f00] transition hover:scale-105"
                    aria-label={audio.isPlaying ? 'Pause' : 'Play'}
                  >
                    {audio.isPlaying ? <Pause size={28} /> : <Play size={28} fill="currentColor" />}
                  </button>
                  <button type="button" onClick={audio.next} className="text-[#d0c5af] transition hover:text-[#f2ca50]" aria-label="Next track">
                    <SkipForward size={24} />
                  </button>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <label className="flex items-center gap-3 text-sm font-semibold text-[#d0c5af]">
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
                  <button
                    type="button"
                    onClick={() => audio.setLoop((value) => !value)}
                    className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                      audio.loop
                        ? 'border-[#f2ca50] bg-[#f2ca50] text-[#3c2f00]'
                        : 'border-[#f2ca50]/20 text-[#d0c5af] hover:border-[#f2ca50]/45'
                    }`}
                    aria-pressed={audio.loop}
                  >
                    <Repeat size={16} aria-hidden="true" /> Loop
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
