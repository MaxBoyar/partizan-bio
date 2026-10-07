import React, { useState } from 'react';
import Snowfall from './components/Snowfall';
import LinkCard from './components/LinkCard';
import Toast from './components/Toast';
import { useSoundEffects } from './hooks/useSoundEffects';
import { Handshake, TvMinimalPlay, Gamepad2, Cast, Trophy, Users } from 'lucide-react';
import partizanLogo from './assets/partizan-logo.png';
import partizanLogoLive from './assets/partizanBlueLogoLive.gif';
import prrpLogo from './assets/prrp-logo.png';
import prwestLogo from './assets/prwest-logo.png';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const isLive = true;

  const { audioPlaying, toggleAudio, playIceClick } = useSoundEffects();

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3200);
  };

  const handleShare = () => {
    playIceClick();
    const shareData = {
      title: 'Partizan - עמוד הקישורים הרשמי ❄️🎮',
      text: 'עקבו אחרי פרטיזן בקיק, יוטיוב, דיסקורד וכל הרשתות:',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => copyToClipboard());
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      triggerToast('הקישור לעמוד הועתק ללוח בהצלחה! 📋');
    }).catch(() => {
      triggerToast('קישור: ' + window.location.href);
    });
  };

  return (
    <div className="min-h-screen winter-grid relative flex flex-col items-center justify-start text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* 1. CONTINUOUS WINTER SNOWFALL */}
      <Snowfall count={45} />

      {/* 2. ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-cyan-500/15 via-sky-600/5 to-transparent blur-[120px] -z-10" aria-hidden="true" />
      <div className="pointer-events-none fixed -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 blur-[100px] -z-10" aria-hidden="true" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 bg-cyan-600/10 blur-[100px] -z-10" aria-hidden="true" />

      {/* 3. TOP UTILITY HEADER */}
      <header className="w-full max-w-lg px-4 pt-5 pb-2 flex items-center justify-between z-20">
        <span className="text-[11px] font-bold text-cyan-300/80 font-gaming tracking-widest px-3 py-1 rounded-full frost-badge">
          PARTIZAN // OFFICIAL HUB
        </span>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center justify-center w-9 h-9 rounded-xl frost-badge hover:border-cyan-400 text-cyan-300 hover:text-white transition-all shadow-sm active:scale-95"
          title="שתף עמוד או העתק קישור"
          aria-label="Share profile"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </header>

      {/* 4. MAIN STREAMER PROFILE SECTION */}
      <main className="w-full max-w-lg px-4 flex flex-col items-center pb-16 z-10">
        
        {/* AVATAR / CREST CONTAINER */}
        <div className="relative mt-2 mb-4 group cursor-pointer" onClick={playIceClick}>
          {/* Icy Glow Ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-95 transition duration-700 group-hover:scale-105" />

          {/* Frame Border with Cyan Accent */}
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-cyan-300 via-cyan-600 to-blue-900 shadow-[0_0_25px_rgba(0,180,255,0.6)]">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[14px] bg-[#050a16] flex items-center justify-center overflow-hidden border border-cyan-400/30">
              
              {/* Inner Cyber Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#00b4ff_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />

              {/* PARTIZAN OFFICIAL ATTACHED LOGO */}
              <img
                src={partizanLogoLive}
                alt="Partizan Gaming Logo"
                //className="w-full h-full object-contain p-2 relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(0,180,255,0.7)]"
                loading="eager"
              />

              {/* Glass Reflex */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-200/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Verified Creator Shield Badge */}
          <div
            className="absolute -bottom-2 -left-2 bg-gradient-to-r from-cyan-500 to-blue-600 p-1.5 rounded-xl border border-cyan-200 shadow-[0_0_15px_#00b4ff] flex items-center justify-center"
            title="גיימר מאומת"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" />
            </svg>
          </div>
        </div>

        {/* STREAMER BRAND NAME & ESPORTS TITLES */}
        <div className="text-center space-y-1 mb-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider font-display frost-gradient-text uppercase drop-shadow-[0_4px_12px_rgba(0,180,255,0.4)]">
              PARTIZAN
            </h1>
            <span className="inline-flex items-center justify-center p-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/40" title="Esports Star">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-cyan-300/90 font-gaming tracking-widest">
            PartizaN Empire
          </p>
        </div>

        {/* STREAMER BIO TAGS (SPLIT HIGHLIGHTS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mt-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold frost-badge text-cyan-200 border-cyan-500/35 shadow-sm">
            <TvMinimalPlay className="w-3.5 h-3.5 text-cyan-400" />
            <span>יוצר תוכן</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold frost-badge text-cyan-200 border-cyan-500/35 shadow-sm">
            <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>גיימינג</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold frost-badge text-cyan-200 border-cyan-500/35 shadow-sm">
            <Cast className="w-3.5 h-3.5 text-cyan-400" />
            <span>שידורים חיים</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold frost-badge text-cyan-200 border-cyan-500/35 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>טורנירים ואתגרים</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold frost-badge text-cyan-200 border-cyan-500/35 shadow-sm">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>קהילת Partizan</span>
          </span>
        </div>

        {/* 5. GAMING LINK CARDS (HEBREW RTL) */}
        <div className="w-full flex flex-col space-y-3.5">
          {/* 1. KICK (TOP FEATURED LIVE STREAM CARD) */}
          <LinkCard
            href="https://kick.com/partizanktv"
            title="Kick-test"
            subtitle="ערוץ הקיק הרשמי"
            isFeatured={true}
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-[#53FC18]/60 shadow-[0_0_15px_rgba(83,252,24,0.35)]"
            iconColor="text-[#53FC18]"
            icon={
              <svg className="w-6 h-6 fill-current drop-shadow-[0_0_8px_rgba(83,252,24,0.8)]" viewBox="0 0 24 24">
                <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" />
              </svg>
            }
          />

          {/* 2. YOUTUBE (TOP FEATURED OFFICIAL VIDEO CHANNEL) */}
          <LinkCard
            href="https://www.youtube.com/@PartizaNYT"
            title="Youtube"
            subtitle="ערוץ היוטיוב הרשמי"
            isFeatured={true}
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-red-500/60 shadow-[0_0_15px_rgba(255,0,0,0.35)]"
            iconColor=""
            icon={
              <svg className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" viewBox="0 0 24 24">
                <path
                  fill="#FF0000"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                />
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            }
          />

          {/* 3. PRRP - ALLOWLIST 5.0 */}
          <LinkCard
            href="https://discord.gg/prrp"
            title="PRRP - Allowlist 5.0"
            subtitle="שרת הדיסקורד של שרת הפייבאם"
            isFeatured={true}
            badgeIcon={
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            }
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-orange-500/60 shadow-[0_0_15px_rgba(255,80,0,0.35)]"
            iconColor=""
            icon={
              <img
                src={prrpLogo}
                alt="PartizaN-RP"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(255,80,0,0.7)] group-hover:scale-110 transition-transform"
              />
            }
          />

          {/* 4. PRWEST REBORN */}
          <LinkCard
            href="https://discord.gg/PZ6kqmGdn"
            title="PRWest Reborn"
            subtitle="שרת הדיסקורד של שרת ה RDR"
            isFeatured={true}
            badgeIcon={
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            }
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-orange-500/60 shadow-[0_0_15px_rgba(255,80,0,0.35)]"
            iconColor=""
            icon={
              <img
                src={prwestLogo}
                alt="PRWest Reborn"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(255,80,0,0.7)] group-hover:scale-110 transition-transform"
              />
            }
          />

          {/* 5. PARTIZAN EMPIRE DISCORD SERVER */}
          <LinkCard
            href="https://discord.gg/G46P86Q5GS"
            title="PartizaN Empire"
            subtitle="שרת הדיסקורד הרשמי של פארטיזאן"
            isFeatured={true}
            badgeIcon={
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            }
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            iconColor=""
            icon={
              <img
                src={partizanLogo}
                alt="PartizaN Empire"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(0,180,255,0.7)] group-hover:scale-110 transition-transform"
              />
            }
          />

          {/* 6. TIKTOK */}
          <LinkCard
            href="https://www.tiktok.com/@oryan_azulay"
            title="TikTok"
            subtitle="קליפים ויראליים, רגעי שיא וצחוקים מהלייבים"
            isFeatured={true}
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.35)]"
            iconColor="text-cyan-300"
            icon={
              <svg className="w-6 h-6 fill-current drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            }
          />

          {/* 6. INSTAGRAM */}
          <LinkCard
            href="https://www.instagram.com/oryan_azulay/"
            title="Instagram"
            subtitle="סטוריז מאחורי הקלעים, עדכוני לייבים ותמונות בלעדיות"
            isFeatured={true}
            onClick={playIceClick}
            iconBg="bg-black"
            iconBorder="border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.35)]"
            iconColor="text-pink-400"
            icon={
              <svg className="w-6 h-6 fill-current drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            }
          />

        </div>

        {/* 6. FOOTER */}
        <footer className="mt-10 flex flex-col items-center space-y-3 text-center w-full">
          {/* Business Inquiries Small Button */}
          <a
            href="mailto:oryano11@gmail.com?subject=פנייה%20עסקית%20-%20Partizan"
            onClick={playIceClick}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#091733]/80 hover:bg-[#0e2554] border border-cyan-500/35 hover:border-cyan-400 text-xs sm:text-sm font-medium text-cyan-200 hover:text-white transition-all shadow-[0_0_15px_rgba(0,180,255,0.15)] hover:shadow-[0_0_20px_rgba(0,180,255,0.3)] active:scale-95 group"
          >
            <Handshake className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>לפניות עסקיות -</span>
            <span dir="ltr" className="font-mono text-cyan-300 group-hover:text-cyan-200">oryano11@gmail.com</span>
          </a>

          {/* Credits & Copyright */}
          <div className="space-y-1">
            <p className="text-xs text-slate-400 font-medium">
              © 2026 כל הזכויות שמורות ל- <span className="text-cyan-300 font-semibold font-display">PARTIZAN</span>
            </p>
            <p className="text-[11px] text-slate-400 font-medium">
              Developed by <span className="text-cyan-300 font-semibold">MaxGG-Dev</span>
            </p>
          </div>
        </footer>
      </main>

      {/* 7. TOAST NOTIFICATION */}
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
}
