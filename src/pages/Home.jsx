import { useEffect, useState } from 'react';
import AudioPlayer from '../components/AudioPlayer.jsx';
import DailyPeace from '../components/DailyPeace.jsx';
import EmergencyCalm from '../components/EmergencyCalm.jsx';
import Gallery from '../components/Gallery.jsx';
import Hero from '../components/Hero.jsx';
import ReligionCards from '../components/ReligionCards.jsx';
import SpiritualMode from '../components/SpiritualMode.jsx';
import { useAudio } from '../context/AudioContext.jsx';
import { useCinematicReveal } from '../hooks/useCinematicReveal.js';
import { useSmoothScroll } from '../hooks/useSmoothScroll.js';

export default function Home() {
  const audio = useAudio();
  const [spiritualOpen, setSpiritualOpen] = useState(false);
  useSmoothScroll();
  useCinematicReveal();

  const openSpiritualMode = async () => {
    setSpiritualOpen(true);
    await audio.startSpiritualMode();
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setSpiritualOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <Hero audio={audio} onOpenSpiritualMode={openSpiritualMode} />
      <ReligionCards />
      <div className="relative z-20 flex justify-center px-4 pb-28">
        <button
          type="button"
          onClick={openSpiritualMode}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] px-12 py-5 font-display text-lg font-bold tracking-wide text-[#3c2f00] shadow-[0_0_34px_rgba(242,202,80,0.28)] transition duration-500 hover:scale-105"
        >
          <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.48),transparent)] transition duration-700 group-hover:translate-x-full" />
          <span className="relative">Activate Bhoot Bhagao</span>
        </button>
      </div>
      <AudioPlayer audio={audio} />
      <DailyPeace />
      <EmergencyCalm />
      <Gallery />
      <SpiritualMode open={spiritualOpen} onClose={() => setSpiritualOpen(false)} audio={audio} />
    </>
  );
}
