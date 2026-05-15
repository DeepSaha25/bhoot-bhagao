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
      <Hero onOpenSpiritualMode={openSpiritualMode} />
      <ReligionCards />
      <AudioPlayer audio={audio} />
      <DailyPeace />
      <EmergencyCalm />
      <Gallery />
      <SpiritualMode open={spiritualOpen} onClose={() => setSpiritualOpen(false)} audio={audio} />
    </>
  );
}
