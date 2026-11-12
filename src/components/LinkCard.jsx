import React from 'react';

export default function LinkCard({
  href,
  title,
  subtitle,
  badge,
  badgeText,
  badgeIcon,
  badgeColor = 'pink',
  tags = [],
  isFeatured = false,
  icon,
  iconBg = 'bg-fuchsia-950/40',
  iconBorder = 'border-pink-500/35',
  iconColor = 'text-pink-300',
  onClick,
}) {
  return (
    <a
      href={href}
      target={href?.startsWith('mailto:') ? undefined : '_blank'}
      rel={href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      onClick={onClick}
      className={`gaming-card ${
        isFeatured ? 'gaming-card-featured' : ''
      } rounded-2xl p-4 flex items-center justify-between group text-right w-full`}
    >
      {/* Right side: Icon + Content (in RTL right is first) */}
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        {/* Platform Icon */}
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} ${iconBorder} border flex items-center justify-center ${iconColor} group-hover:scale-105 group-hover:border-pink-400 transition-all flex-shrink-0 overflow-hidden`}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-base sm:text-lg text-white group-hover:text-pink-200 transition-colors">
              {title}
            </span>
            {badge ? (
              badge
            ) : badgeIcon && !badgeText ? (
              <span className="inline-flex items-center -translate-y-[1.5px] text-pink-300 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] flex-shrink-0">
                {badgeIcon}
              </span>
            ) : badgeText ? (
              <span
                className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  badgeColor === 'emerald'
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                    : badgeColor === 'discord'
                    ? 'bg-[#5865F2]/25 text-[#5865F2] border border-[#5865F2]/50 shadow-[0_0_8px_rgba(88,101,242,0.35)]'
                    : 'bg-pink-500/25 text-pink-200 border border-pink-400/50 shadow-[0_0_8px_rgba(236,72,153,0.3)]'
                }`}
              >
                {badgeIcon}
                {badgeText}
              </span>
            ) : null}
            {tags && tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-pink-500/25 text-pink-200 border border-pink-400/50"
              >
                {typeof tag === 'string' ? tag : tag.text}
              </span>
            ))}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-300 truncate mt-0.5 group-hover:text-pink-100/90 transition-colors">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Left side: Arrow indicator (Pointing LEFT in RTL for progression) */}
      <div className="w-8 h-8 rounded-lg bg-fuchsia-950/40 border border-pink-500/30 flex items-center justify-center text-pink-300 group-hover:translate-x-[-4px] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-amber-400 group-hover:border-pink-300 group-hover:text-black transition-all flex-shrink-0 mr-2">
        <svg
          className="w-4 h-4 transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
}
