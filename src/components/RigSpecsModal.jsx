import React, { useEffect } from 'react';

export default function RigSpecsModal({ isOpen, onClose }) {
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

  const specs = [
    { label: 'כרטיס מסך (GPU):', value: 'NVIDIA GeForce RTX 4080 Super 16GB' },
    { label: 'מעבד (CPU):', value: 'Intel Core i9-14900K 5.8GHz' },
    { label: 'זיכרון (RAM):', value: '64GB DDR5 6400MHz RGB' },
    { label: 'מסך ראשי (Monitor):', value: 'ASUS ROG Swift 360Hz Fast-IPS 27"' },
    { label: 'עכבר גיימינג:', value: 'Logitech G Pro X Superlight 2' },
    { label: 'מקלדת:', value: 'Wooting 60HE Rapid Trigger' },
    { label: 'אוזניות & מיקרופון:', value: 'HyperX Cloud III + Shure SM7B' },
    { label: 'כרטיס קול & מיקסר:', value: 'TC Helicon GoXLR Pro' },
    { label: 'מצלמת שידור:', value: 'Sony Alpha a6400 + Cam Link 4K' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#091733] to-[#040915] border border-cyan-400/50 p-6 shadow-[0_0_50px_rgba(0,180,255,0.35)] text-right"
        onClick={(e) => e.stopPropagation()}
      >
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">מפרט מחשב וציוד גיימינג 🖥️</h3>
            <p className="text-xs text-cyan-300/80">Partizan Esports Rig • 2026 Edition</p>
          </div>
        </div>

        <div className="space-y-2 my-4 max-h-[50vh] overflow-y-auto pr-1">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-xs"
            >
              <span className="text-slate-400 font-medium">{spec.label}</span>
              <span className="font-bold text-cyan-200 text-left font-gaming tracking-wide">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-xs font-bold text-cyan-200 transition-colors"
          >
            סגור מפרט
          </button>
        </div>
      </div>
    </div>
  );
}
