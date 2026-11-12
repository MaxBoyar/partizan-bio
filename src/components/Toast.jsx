import React from 'react';

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 z-50 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#240b38] via-[#17082a] to-[#0f051d] border border-pink-400/70 shadow-[0_0_30px_rgba(236,72,153,0.5)] flex items-center gap-3 text-white text-sm font-semibold animate-bounce-short">
      <span className="text-pink-400 text-lg">🌴</span>
      <span>{message}</span>
    </div>
  );
}
