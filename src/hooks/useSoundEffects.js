import { useState, useRef } from 'react';

export function useSoundEffects() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const ambientGainRef = useRef(null);

  const playIceClick = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1900, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      // Audio context might be restricted before interaction
    }
  };

  const toggleAudio = (onToggleFeedback) => {
    if (audioPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setAudioPlaying(false);
      if (onToggleFeedback) onToggleFeedback('צלילי אווירה הושתקו 🔇');
    } else {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        audioCtxRef.current = ctx;

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(360, ctx.currentTime);

        const ambientGain = ctx.createGain();
        ambientGain.gain.setValueAtTime(0.025, ctx.currentTime);
        ambientGainRef.current = ambientGain;

        whiteNoise.connect(filter);
        filter.connect(ambientGain);
        ambientGain.connect(ctx.destination);

        whiteNoise.start();
        setAudioPlaying(true);
        if (onToggleFeedback) onToggleFeedback('צלילי אווירת חורף הופעלו ❄️🔊');
      } catch (e) {
        setAudioPlaying(false);
      }
    }
  };

  return { audioPlaying, toggleAudio, playIceClick };
}
