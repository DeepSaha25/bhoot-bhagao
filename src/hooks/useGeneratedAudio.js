import { useCallback, useEffect, useRef, useState } from 'react';

export function useGeneratedAudio() {
  const contextRef = useRef(null);
  const gainRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const [playing, setPlaying] = useState(false);

  const stop = useCallback(() => {
    oscillatorsRef.current.forEach((oscillator) => oscillator.stop());
    oscillatorsRef.current = [];
    if (gainRef.current) {
      gainRef.current.gain.cancelScheduledValues(0);
      gainRef.current.gain.value = 0;
    }
    setPlaying(false);
  }, []);

  const play = useCallback(async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!contextRef.current) {
      contextRef.current = new AudioContext();
    }

    const context = contextRef.current;
    if (context.state === 'suspended') {
      await context.resume();
    }

    const gain = context.createGain();
    gain.gain.value = 0.045;
    gain.connect(context.destination);
    gainRef.current = gain;

    const frequencies = [174, 261.63, 329.63];
    oscillatorsRef.current = frequencies.map((frequency) => {
      const oscillator = context.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
      return oscillator;
    });
    setPlaying(true);
  }, []);

  const toggle = useCallback(() => {
    if (playing) stop();
    else play();
  }, [play, playing, stop]);

  useEffect(() => stop, [stop]);

  return { playing, play, stop, toggle };
}
