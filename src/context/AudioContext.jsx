import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import playlist from '../data/playlist.json';
import { createToneUrl } from '../utils/createToneUrl.js';

const AudioStateContext = createContext(null);
const audioAssets = import.meta.glob('../assets/audio/*', { eager: true, query: '?url', import: 'default' });

function getTrackSource(track) {
  if (track.audio) return track.audio;
  if (track.asset) {
    return audioAssets[`../assets/audio/${track.asset}`] || createToneUrl(track);
  }
  return createToneUrl(track);
}

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const trackIndexRef = useRef(0);
  const loopRef = useRef(true);
  const loadTrackRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.72);
  const [loop, setLoop] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = playlist[trackIndex];

  const clearFade = useCallback(() => {
    if (fadeRef.current) {
      window.clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  }, []);

  const fadeTo = useCallback(
    (target, after) => {
      const audio = audioRef.current;
      if (!audio) return;
      clearFade();
      const start = audio.volume;
      const steps = 12;
      let step = 0;
      fadeRef.current = window.setInterval(() => {
        step += 1;
        const value = start + (target - start) * (step / steps);
        audio.volume = Math.max(0, Math.min(volume, value));
        if (step >= steps) {
          clearFade();
          after?.();
        }
      }, 35);
    },
    [clearFade, volume],
  );

  const loadTrack = useCallback(
    async (index, autoplay = isPlaying) => {
      const audio = audioRef.current;
      if (!audio) return;
      const nextIndex = (index + playlist.length) % playlist.length;
      const nextTrack = playlist[nextIndex];

      const finishLoad = async () => {
        trackIndexRef.current = nextIndex;
        setTrackIndex(nextIndex);
        audio.src = getTrackSource(nextTrack);
        audio.load();
        audio.volume = 0;
        if (autoplay) {
          try {
            await audio.play();
            setIsPlaying(true);
            fadeTo(volume);
          } catch {
            setIsPlaying(false);
          }
        }
      };

      if (!audio.paused && autoplay) {
        fadeTo(0, finishLoad);
      } else {
        await finishLoad();
      }
    },
    [fadeTo, isPlaying, volume],
  );

  useEffect(() => {
    loadTrackRef.current = loadTrack;
  }, [loadTrack]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.src) {
      audio.src = getTrackSource(currentTrack);
      audio.load();
    }
    try {
      await audio.play();
      setIsPlaying(true);
      fadeTo(volume);
    } catch {
      setIsPlaying(false);
    }
  }, [currentTrack, fadeTo, volume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeTo(0, () => {
      audio.pause();
      setIsPlaying(false);
    });
  }, [fadeTo]);

  const next = useCallback(() => {
    loadTrack(trackIndex + 1, true);
  }, [loadTrack, trackIndex]);

  const previous = useCallback(() => {
    loadTrack(trackIndex - 1, true);
  }, [loadTrack, trackIndex]);

  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, pause, play]);

  useEffect(() => {
    trackIndexRef.current = trackIndex;
  }, [trackIndex]);

  useEffect(() => {
    loopRef.current = loop;
  }, [loop]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.loop = false;
    audioRef.current = audio;

    const updateProgress = () => {
      setProgress(audio.currentTime || 0);
      setDuration(audio.duration || 0);
    };
    const handleEnded = () => {
      const index = trackIndexRef.current;
      if (loopRef.current || index < playlist.length - 1) {
        loadTrackRef.current?.(index + 1, true);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      clearFade();
      audio.pause();
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [clearFade]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = volume;
    }
  }, [isPlaying, volume]);

  const seek = useCallback((value) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(value);
    setProgress(Number(value));
  }, []);

  const value = useMemo(
    () => ({
      playlist,
      currentTrack,
      trackIndex,
      isPlaying,
      volume,
      loop,
      progress,
      duration: duration || currentTrack.duration,
      play,
      pause,
      toggle,
      next,
      previous,
      seek,
      setVolume,
      setLoop,
      startSpiritualMode: play,
    }),
    [currentTrack, duration, isPlaying, loop, next, pause, play, previous, progress, seek, toggle, trackIndex, volume],
  );

  return <AudioStateContext.Provider value={value}>{children}</AudioStateContext.Provider>;
}

export function useAudio() {
  const value = useContext(AudioStateContext);
  if (!value) throw new Error('useAudio must be used within AudioProvider');
  return value;
}
