// Lightweight GTM & dataLayer helper
import { AnalyticsEventBase, ConsentStateRecord } from '@/types/analytics';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export function getDataLayer(): unknown[] {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushDL(event: AnalyticsEventBase) {
  if (typeof window === 'undefined') return;
  getDataLayer().push({ ...event, ts: Date.now() });
}

export function trackEvent(params: AnalyticsEventBase) {
  pushDL(params);
}

// Track alias (multiple events at once)
export function trackWithAliases(primary: AnalyticsEventBase, aliases: string[] = []) {
  trackEvent(primary);
  aliases.forEach(ev => trackEvent({ ...primary, event: ev }));
}

// Simple session-level timing store (non-persistent) for time-to-first interaction
let firstPageViewTs: number | null = null;
let firstCtaTs: number | null = null;

export function markPageViewTimestamp() {
  if (firstPageViewTs == null) firstPageViewTs = Date.now();
}

export function trackCtaWithTiming(e: AnalyticsEventBase) {
  if (firstCtaTs == null) {
    firstCtaTs = Date.now();
    if (firstPageViewTs) {
      const diff = firstCtaTs - firstPageViewTs;
      trackEvent({
        event: 'first_cta_click_time',
        event_category: 'timing',
        event_label: e.event_label || 'unknown_cta',
        ms_since_page_view: diff
      });
    }
  }
  trackEvent(e);
}

export function setUserProperties(props: Record<string, unknown>) {
  pushDL({ event: 'user_properties', ...props });
}

// Consent handling (Google Consent Mode v2 mapping)
export function updateConsent(consent: ConsentStateRecord) {
  pushDL({ event: 'consent_update', consent });
  // Google style command if present
  // @ts-expect-error - gtag is added by GTM script
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // @ts-expect-error - gtag consent API
    window.gtag('consent', 'update', consent);
  }
}

export function initialConsentLoad() {
  const raw = typeof window !== 'undefined' ? localStorage.getItem('omma_consent_v1') : null;
  if (raw) {
    try {
      const parsed: ConsentStateRecord = JSON.parse(raw);
      updateConsent(parsed);
      return parsed;
    } catch {
      // Ignore parse errors
    }
  }
  return null;
}

export function saveConsent(consent: ConsentStateRecord) {
  try {
    localStorage.setItem('omma_consent_v1', JSON.stringify(consent));
  } catch {
    // Ignore storage errors
  }
}

export function defaultDeniedConsent(): ConsentStateRecord {
  return {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted', // necessary for site basic features
    personalization_storage: 'denied',
    security_storage: 'granted'
  };
}
