"use client";
import { useEffect } from 'react';
import { trackEvent } from '@/lib/gtm';

const SECTION_IDS = [
  'hero',
  'resultados',
  'sem-dor',
  'impacto',
  'setores',
  'comparativo',
  'metodologia',
  'clientes',
  'projetos',
  'porque-escolher',
  'contato'
];

export default function ScrollAndSections({ pageId }: { pageId: string }) {
  useEffect(() => {
    // Section impressions
    const seen = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute('id');
            if (id && !seen.has(id)) {
              seen.add(id);
              trackEvent({
                event: 'section_view',
                event_category: 'impression',
                event_label: id,
                page: pageId
              });
            }
        }
      });
    }, { threshold: 0.4 });

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll depth
    const marks = [25, 50, 75, 100];
    const fired: Record<number, boolean> = {};
    function onScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      marks.forEach(m => {
        if (percent >= m && !fired[m]) {
          fired[m] = true;
          trackEvent({
            event: 'scroll_depth',
            event_category: 'engagement',
            event_label: pageId,
            depth_percent: m
          });
        }
      });
      if (fired[100]) window.removeEventListener('scroll', onScroll);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pageId]);

  return null;
}
