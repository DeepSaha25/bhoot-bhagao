const cache = new Map();

function writeString(view, offset, value) {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
}

export function createToneUrl(track) {
  if (cache.has(track.id)) return cache.get(track.id);

  const sampleRate = 22050;
  const seconds = track.duration || 32;
  const samples = sampleRate * seconds;
  const dataLength = samples * 2;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);

  const base = track.tone || 220;
  for (let index = 0; index < samples; index += 1) {
    const time = index / sampleRate;
    const fadeIn = Math.min(1, time / 2);
    const fadeOut = Math.min(1, (seconds - time) / 2);
    const envelope = Math.min(fadeIn, fadeOut) * 0.32;
    const shimmer = Math.sin(2 * Math.PI * (base * 1.5) * time) * 0.28;
    const drone = Math.sin(2 * Math.PI * base * time);
    const harmonic = Math.sin(2 * Math.PI * (base * 2) * time) * 0.18;
    const pulse = 0.75 + Math.sin(2 * Math.PI * 0.08 * time) * 0.25;
    const sample = (drone + shimmer + harmonic) * envelope * pulse;
    view.setInt16(44 + index * 2, sample * 32767, true);
  }

  const blob = new Blob([view], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  cache.set(track.id, url);
  return url;
}
