"use client";
import { useEffect } from 'react';
import { trackEvent, markPageViewTimestamp } from '@/lib/gtm';

interface PageAnalyticsProps {
  pageId: string;
}

export default function PageAnalytics({ pageId }: PageAnalyticsProps) {
  useEffect(() => {
    markPageViewTimestamp();
    trackEvent({
      event: 'page_view',
      event_category: 'navigation',
      event_label: pageId,
      path: window.location.pathname,
    });
    // Hero impression baseline
    const hero = document.getElementById('hero');
    if (hero) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            trackEvent({
              event: 'section_view',
              event_category: 'impression',
              event_label: 'hero',
              page: pageId
            });
            observer.disconnect();
          }
        });
      }, { threshold: 0.4 });
      observer.observe(hero);
    }
  }, [pageId]);
  return null;
}
