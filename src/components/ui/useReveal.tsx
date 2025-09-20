"use client";
import { useEffect } from 'react';

/**
 * useReveal
 * Attaches an IntersectionObserver that toggles the `is-visible` class
 * on any element with the `reveal` class when it enters the viewport.
 * Elements already visible on mount are immediately activated.
 */
export function useReveal(options?: IntersectionObserverInit) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
        ...(options || {}),
      }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [options]);
}

/**
 * RevealObserver component attaches the useReveal hook.
 * Place once near the root of a page that uses `.reveal` elements.
 */
export function RevealObserver() {
  useReveal();
  return null;
}
