import React, { useState, useEffect } from 'react';
import { Flame, Calendar, Image as ImageIcon } from 'lucide-react';
import gtaBanner from '../assets/gta6-banner.jpg';
import gtaCollage from '../assets/gta6-collage.jpg';

// תאריך יעד: 19 בנובמבר 2026
const TARGET_DATE = new Date('2026-11-19T18:00:00+02:00').getTime();

function getTimeRemaining() {
  const now = new Date().getTime();
  const diff = Math.max(0, TARGET_DATE - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isLiveNow: diff === 0 };
}

export default function AnnouncementBanner({ onActionClick }) {
  const [activeImage, setActiveImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);

  const images = [
    { src: gtaBanner, alt: 'GTA 6 Vice City Artwork', label: 'Leonida Vibes' },
    { src: gtaCollage, alt: 'GTA VI Official Poster', label: 'GTA VI Poster' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // החלפת תמונה אוטומטית עדינה כל 6 שניות
  useEffect(() => {
    const imgTimer = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 6500);
    return () => clearInterval(imgTimer);
  }, []);

  return (
    <section
      aria-label="מודעות ועדכונים"
      className="w-full mb-6 relative group"
    >
      {/* הילה חיצונית משולבת: ציאן של Partizan + ורוד-סגול-כתום של GTA 6 */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-fuchsia-500/45 to-orange-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none"
        aria-hidden="true"
      />

      {/* כרטיס ראשי */}
      <div className="relative rounded-2xl overflow-hidden gta-announcement-card border border-fuchsia-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.75)]">
        {/* פס ניאון עליון בסגנון GTA VI + Partizan */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400" />

        {/* באנר ויזואלי עם תמונות GTA 6 המצורפות */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#090d1e]">
          {images.map((img, index) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                activeImage === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}

          {/* שכבות גרדיאנט להתאמה לעיצוב הכהה של האתר */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c1f] via-[#060c1f]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/35 via-transparent to-cyan-950/35 mix-blend-overlay" />

          {/* תג תאריך מרחף על התמונה */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-fuchsia-400/50 shadow-[0_0_15px_rgba(217,70,239,0.4)]">
            <Calendar className="w-3.5 h-3.5 text-fuchsia-400" />
            <span className="text-xs font-extrabold text-white tracking-wide">
              19 בנובמבר
            </span>
          </div>

          {/* כפתור החלפת תמונה בין 2 תמונות ה-GTA 6 */}
          <button
            type="button"
            onClick={() => setActiveImage((prev) => (prev === 0 ? 1 : 0))}
            className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/65 hover:bg-black/85 backdrop-blur-md border border-cyan-400/40 hover:border-fuchsia-400 text-[11px] font-semibold text-cyan-200 hover:text-white transition-all active:scale-95"
            title="החלף תמונת רקע GTA 6"
          >
            <ImageIcon className="w-3 h-3 text-fuchsia-400" />
            <span>{activeImage === 0 ? '1/2' : '2/2'}</span>
          </button>

          {/* כותרת מרכזית על גבי החלק התחתון של התמונה */}
          <div className="absolute bottom-2.5 right-4 left-4 z-10 flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-orange-500/80 to-pink-600/80 text-white text-[11px] font-black tracking-wider uppercase mb-1 shadow-sm">
                <Flame className="w-3 h-3 fill-current animate-bounce" />
                <span>SPECIAL LIVE MARATHON</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] flex items-center gap-2">
                <span>זה מתקרב!</span>
                <span className="inline-block animate-pulse">🔥</span>
              </h2>
            </div>

            {/* לוגו VI מוגדש בסגנון Vice City - מיושר במדויק במרכז באמצעות SVG */}
            <div className="w-12 h-12 rounded-xl bg-black/75 backdrop-blur-md border border-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center justify-center select-none flex-shrink-0">
              <svg
                dir="ltr"
                direction="ltr"
                className="w-full h-full drop-shadow-[0_0_8px_rgba(236,72,153,0.55)]"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gtaViGrad" x1="24" y1="9" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fcd34d" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
                {/* V + I עם תיקון אופטי של 2 פיקסלים שמאלה כדי להתיישר מול ה-GTA */}
                <g transform="translate(-2, 0)">
                  <path
                    d="M11.5 10H16L20.25 21.5L24.5 10H29L22.1 27H18.4L11.5 10Z"
                    fill="url(#gtaViGrad)"
                  />
                  <rect x="32" y="10" width="4.5" height="17" rx="0.5" fill="url(#gtaViGrad)" />
                </g>
                {/* GTA ממורכז בדיוק על x=24 ללא רווח אותיות שמושך שמאלה */}
                <text
                  x="24"
                  y="38"
                  direction="ltr"
                  textAnchor="middle"
                  fill="#67e8f9"
                  className="font-display"
                  fontSize="9.5"
                  fontWeight="900"
                >
                  GTA
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* גוף ההודעה והטקסט */}
        <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-[#060c1f] via-[#071128] to-[#050b1a] relative">
          {/* רשת סייבר עדינה ברקע */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* טקסט ההכרזה המבוקש */}
          <div className="relative z-10 text-right">
            <p className="text-base sm:text-lg font-extrabold text-slate-100 leading-relaxed">
              ב־
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-fuchsia-400 underline decoration-pink-500/50 decoration-2 underline-offset-4">
                19 בנובמבר
              </span>{' '}
              עולים ללייבים של{' '}
              <span
                dir="ltr"
                className="inline-block whitespace-nowrap px-2 py-0.5 mx-0.5 rounded-md bg-gradient-to-r from-fuchsia-600/30 to-orange-500/30 border border-pink-400/40 text-pink-200 font-display font-bold tracking-wide align-baseline"
              >
                GTA 6
              </span>{' '}
              בטיקטוק וב־
              <span className="whitespace-nowrap text-[#53FC18] font-display font-bold drop-shadow-[0_0_6px_rgba(83,252,24,0.4)]">
                Kick
              </span>
              !
            </p>
          </div>

          {/* טיימר ספירה לאחור ל-19 בנובמבר */}
          {!timeLeft.isLiveNow && (
            <div className="relative z-10 grid grid-cols-4 gap-2 pt-1" dir="ltr">
              <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#040917]/90 border border-cyan-500/30 shadow-inner">
                <span className="font-display text-lg sm:text-xl font-black text-cyan-300">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">ימים</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#040917]/90 border border-fuchsia-500/30 shadow-inner">
                <span className="font-display text-lg sm:text-xl font-black text-pink-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">שעות</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#040917]/90 border border-fuchsia-500/30 shadow-inner">
                <span className="font-display text-lg sm:text-xl font-black text-pink-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">דקות</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#040917]/90 border border-orange-500/30 shadow-inner">
                <span className="font-display text-lg sm:text-xl font-black text-amber-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">שניות</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
