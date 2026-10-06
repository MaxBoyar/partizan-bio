import React, { useMemo } from 'react';

/**
 * Snowfall component implementing the user's reference specification:
 * - Dynamic generation of flakes with randomized size (0.25vw - 1.15vw)
 * - Randomized horizontal starting position and drift (--left-ini, --left-end)
 * - Randomized falling duration (5s - 15s) and negative delay for instant distribution
 * - ~20% of flakes have a soft blur effect for depth
 * - Non-intrusive, pointer-events-none, smooth 60fps CSS animation
 */
export default function Snowfall({ count = 42 }) {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      size: (Math.random() * 0.9 + 0.25).toFixed(2) + 'vw',
      left: (Math.random() * 100).toFixed(2) + 'vw',
      leftIni: (Math.random() * 20 - 10).toFixed(2) + 'vw',
      leftEnd: (Math.random() * 20 - 10).toFixed(2) + 'vw',
      duration: (5 + Math.random() * 10).toFixed(2) + 's',
      delay: (-Math.random() * 10).toFixed(2) + 's',
      blur: Math.random() < 0.22 ? 'blur(1.5px)' : 'none',
      opacity: (Math.random() * 0.5 + 0.35).toFixed(2),
    }));
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
