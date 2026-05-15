import { useMemo, useState } from 'react';
import { Pause, Play, TimerReset } from 'lucide-react';
import { useGeneratedAudio } from '../hooks/useGeneratedAudio.js';
import SectionHeading from './SectionHeading.jsx';

export default function EmergencyCalm() {
  const ambient = useGeneratedAudio();
  const [seconds, setSeconds] = useState(60);
  const timerText = useMemo(() => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`, [seconds]);

  const startTimer = () => {
    setSeconds(60);
    const id = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
  };

  return (
    <section id="calm" className="relative z-20 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Emergency calm" title="A soft minute for your nervous system">
          A simple breathing space for anxious moments. This is emotional support, not medical care.
        </SectionHeading>
        <div className="reveal premium-glass mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2.5rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="grid place-items-center">
            <div className="relative grid h-72 w-72 place-items-center">
              <div className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-amber-200/35 via-white/10 to-emerald-300/25 shadow-[0_0_80px_rgba(245,158,11,.24)]" />
              <div className="relative grid h-44 w-44 place-items-center rounded-full border border-white/10 bg-white/8 text-center backdrop-blur-xl">
                <span className="px-6 font-display text-3xl font-extrabold text-white">Breathe Slowly</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200/80">You are safe</p>
            <h3 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">Look around. Feel the ground. Let the breath soften.</h3>
            <div className="mt-6 grid gap-3 text-white/60">
              <p>Name five things you can see.</p>
              <p>Notice four things you can feel.</p>
              <p>Take three slow breaths with your hand on your heart.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={ambient.toggle}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-black text-black shadow-[0_0_38px_rgba(16,185,129,.28)]"
              >
                {ambient.playing ? <Pause size={18} /> : <Play size={18} />} Ambient Sound
              </button>
              <button
                type="button"
                onClick={startTimer}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 font-bold text-white"
              >
                <TimerReset size={18} /> {timerText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
