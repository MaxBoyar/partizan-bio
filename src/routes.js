// מערכת ניתוב קישורים מהירים (Redirects)
// כל נתיב מוביל לקישור החיצוני המתאים

export const LINKS = {
  kick: 'https://kick.com/partizanktv',
  youtube: 'https://www.youtube.com/@PartizaNYT',
  prrp: 'https://discord.gg/prrp',
  prWest: 'https://discord.gg/PZ6kqmGdn',
  discord: 'https://discord.gg/G46P86Q5GS',
  tiktok: 'https://www.tiktok.com/@oryan_azulay',
  instagram: 'https://www.instagram.com/oryan_azulay/',
};

export const REDIRECT_ROUTES = {
  // 1. Kick
  '/kick': { url: LINKS.kick, name: 'Kick' },
  '/live': { url: LINKS.kick, name: 'Kick' },

  // 2. YouTube
  '/youtube': { url: LINKS.youtube, name: 'YouTube' },
  '/yt': { url: LINKS.youtube, name: 'YouTube' },

  // 3. PRRP - FiveM Discord
  '/prrp': { url: LINKS.prrp, name: 'PRRP - Allowlist 5.0' },
  '/fivem': { url: LINKS.prrp, name: 'PRRP - Allowlist 5.0' },

  // 4. PRWest Reborn - RDR Discord
  '/pr-west': { url: LINKS.prWest, name: 'PRWest Reborn' },
  '/prwest': { url: LINKS.prWest, name: 'PRWest Reborn' },
  '/rdr': { url: LINKS.prWest, name: 'PRWest Reborn' },

  // 5. PartizaN Empire - Official Discord
  '/discord': { url: LINKS.discord, name: 'PartizaN Empire' },
  '/partizan-empire': { url: LINKS.discord, name: 'PartizaN Empire' },
  '/empire': { url: LINKS.discord, name: 'PartizaN Empire' },

  // 6. TikTok
  '/tiktok': { url: LINKS.tiktok, name: 'TikTok' },

  // 7. Instagram
  '/instagram': { url: LINKS.instagram, name: 'Instagram' },
  '/insta': { url: LINKS.instagram, name: 'Instagram' },
  '/ig': { url: LINKS.instagram, name: 'Instagram' },
};

/**
 * מחפש התאמה לנתיב הנוכחי (ללא תלות באותיות גדולות/קטנות או סלאש בסוף)
 */
export function getRedirectRoute(pathname = window.location.pathname) {
  if (!pathname || pathname === '/') return null;

  // ניקוי סלאש סופי והמרה לאותיות קטנות
  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase();

  return REDIRECT_ROUTES[normalizedPath] || null;
}

