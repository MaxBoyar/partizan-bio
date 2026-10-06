import React, { useEffect } from 'react';

export default function ScheduleModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#091733] to-[#040915] border border-cyan-400/50 p-6 shadow-[0_0_50px_rgba(0,180,255,0.35)] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cyber Brackets */}
        <div className="cyber-bracket corner-tr" />
        <div className="cyber-bracket corner-bl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-cyan-300 transition-colors p-1"
          aria-label="סגור חלון"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">לוח שידורים שבועי 📅</h3>
            <p className="text-xs text-cyan-300/80">שעון ישראל (IDT) • ימים ושעות שידור</p>
          </div>
        </div>

        <div className="space-y-2.5 my-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-bold text-sm text-white">יום ראשון</span>
            </div>
            <span className="text-xs text-cyan-200 font-gaming tracking-wide">20:00 - 00:00 • פתיחת שבוע ו-Ranked</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-bold text-sm text-white">יום שלישי</span>
            </div>
            <span className="text-xs text-cyan-200 font-gaming tracking-wide">20:30 - 01:00 • משחקים עם צופים</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-bold text-sm text-white">יום חמישי</span>
            </div>
            <span className="text-xs text-cyan-200 font-gaming tracking-wide">21:00 - אל תוך הלילה • סופ"ש גיימינג</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-bold text-sm text-white">מוצאי שבת</span>
            </div>
            <span className="text-xs text-cyan-200 font-gaming tracking-wide">20:30 - 00:30 • טורנירים ואתגרים</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center">
          <p className="text-xs text-slate-400">
            * עדכונים על שידורים ספונטניים עולים קודם ב-
            <a href="https://discord.gg/partizan" target="_blank" rel="noreferrer" className="text-cyan-300 font-semibold underline mx-1">
              דיסקורד
            </a>
            וב-
            <a href="https://instagram.com/partizan" target="_blank" rel="noreferrer" className="text-cyan-300 font-semibold underline mx-1">
              אינסטגרם
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
