import React, { useMemo } from 'react';

const VICE_PALETTES = [
  {
    bg: 'radial-gradient(circle, rgba(255, 240, 250, 0.95) 0%, rgba(236, 72, 153, 0.75) 60%, rgba(236, 72, 153, 0) 100%)',
    glow: '0 0 8px rgba(236, 72, 153, 0.85)',
  },
  {
    bg: 'radial-gradient(circle, rgba(255, 251, 235, 0.95) 0%, rgba(251, 146, 60, 0.75) 60%, rgba(251, 146, 60, 0) 100%)',
    glow: '0 0 8px rgba(251, 146, 60, 0.85)',
  },
  {
    bg: 'radial-gradient(circle, rgba(240, 253, 250, 0.95) 0%, rgba(34, 211, 238, 0.7) 60%, rgba(34, 211, 238, 0) 100%)',
    glow: '0 0 8px rgba(34, 211, 238, 0.8)',
  },
];

export default function Snowfall({ count = 42 }) {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const palette = VICE_PALETTES[index % VICE_PALETTES.length];
      return {
        id: index,
        size: (Math.random() * 0.9 + 0.25).toFixed(2) + 'vw',
        left: (Math.random() * 100).toFixed(2) + 'vw',
        leftIni: (Math.random() * 20 - 10).toFixed(2) + 'vw',
        leftEnd: (Math.random() * 20 - 10).toFixed(2) + 'vw',
        duration: (5 + Math.random() * 10).toFixed(2) + 's',
        delay: (-Math.random() * 10).toFixed(2) + 's',
        blur: Math.random() < 0.22 ? 'blur(1.5px)' : 'none',
        opacity: (Math.random() * 0.5 + 0.35).toFixed(2),
        bg: palette.bg,
        glow: palette.glow,
      };
    });
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-full select-none overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            '--size': flake.size,
            '--left-ini': flake.leftIni,
            '--left-end': flake.leftEnd,
            '--particle-bg': flake.bg,
            '--particle-glow': flake.glow,
            left: flake.left,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration} linear infinite`,
            animationDelay: flake.delay,
            filter: flake.blur,
          }}
        />
      ))}
    </div>
  );
}
