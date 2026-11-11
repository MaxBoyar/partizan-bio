import posthog from 'posthog-js';

const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY || 'phc_B9yKVUQ688xgEBKVRuFBCxyfV7XkZqxupZnfveDwLxHp';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';
export const POSTHOG_PROJECT_ID = import.meta.env.VITE_POSTHOG_PROJECT_ID || '701291';

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized) return;
  if (!POSTHOG_KEY) {
    console.warn('[PostHog] VITE_POSTHOG_KEY is missing.');
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'always',
    capture_pageview: false,
    capture_pageleave: false,
    capture_performance: false, // ביטול Web Vitals
    capture_dead_clicks: false,
    capture_heatmaps: false,
    disable_session_recording: true,
    autocapture: false,
    // חסימה מוחלטת של כל אירועי המערכת האוטומטיים של PostHog (כמו Web vitals, Pageleave, Pageview)
    before_send: (event) => {
      if (!event || !event.event) return null;
      if (event.event.startsWith('$')) {
        return null;
      }
      return event;
    },
  });

  isInitialized = true;
}

/**
 * מעקב אחר כניסה לעמוד הראשי של האתר
 */
export function trackSiteVisit() {
  if (!isInitialized) return;

  posthog.capture('site_visit', {
    page_url: window.location.href,
    referrer: document.referrer || 'direct',
  });
}

/**
 * מעקב אחר לחיצה על כפתור - שולח ישירות button_clicked_<name>
 * למשל: button_clicked_prrp, button_clicked_kick, button_clicked_pr_west
 */
export function trackButtonClick({ id, name, url = null, category = 'social_link' }) {
  if (!isInitialized) return;

  const cleanId = id.replace(/-/g, '_').toLowerCase();

  posthog.capture(
    `button_clicked_${cleanId}`,
    {
      button_id: cleanId,
      button_name: name,
      destination_url: url,
      category,
    },
    { transport: 'sendBeacon' }
  );
}

/**
 * מעקב אחר הפניה מהירה - שולח ישירות reroute_<name>
 * למשל: reroute_kick, reroute_prrp, reroute_pr_west
 */
export function trackReroute({ routePath, name, url }) {
  if (!isInitialized) return;

  const cleanEntryUrl = `${window.location.origin}${routePath}`;
  const cleanSlug = routePath.replace(/^\/+/, '').replace(/-/g, '_').toLowerCase();

  posthog.capture(
    `reroute_${cleanSlug}`,
    {
      route_path: routePath,
      target_name: name,
      destination_url: url,
      entry_url: cleanEntryUrl,
      referrer: document.referrer || 'direct',
    },
    { transport: 'sendBeacon' }
  );
}

export default posthog;
