import React from 'react';

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 z-50 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-950 via-[#0a1f3d] to-slate-900 border border-cyan-400/70 shadow-[0_0_30px_rgba(0,180,255,0.5)] flex items-center gap-3 text-white text-sm font-semibold animate-bounce-short">
      <span className="text-cyan-300 text-lg">❄️</span>
      <span>{message}</span>
    </div>
  );
}
