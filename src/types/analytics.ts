export interface AnalyticsEventBase {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number | string;
  [key: string]: unknown;
}

export type ConsentCategory = 'analytics' | 'marketing' | 'functional' | 'personalization';

export interface ConsentStateRecord {
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  functionality_storage?: 'granted' | 'denied';
  personalization_storage?: 'granted' | 'denied';
  security_storage?: 'granted' | 'denied';
}
