"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/gtm';

// Extended slide type – backward compatible with existing usage
export type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  status?: string; // e.g. "Concluído", "Em execução"
  rating?: number; // 0..5
  awards?: number; // count of awards or reconhecimentos
};

interface ProjectsCarouselProps {
  slides: Slide[];
  autoAdvanceMs?: number;
}

export default function ProjectsCarousel({ slides, autoAdvanceMs = 0 }: ProjectsCarouselProps) {
  const [idx, setIdx] = useState(0);

  const len = slides?.length ?? 0;

  const prev = useCallback(() => {
    setIdx((i) => {
      if (len <= 1) return 0;
      return i === 0 ? len - 1 : i - 1;
    });
    if (len > 0) {
      trackEvent({
        event: 'carousel_prev',
        event_category: 'carousel',
        event_label: 'projects',
        slide_index: idx,
        slide_title: slides[idx]?.title
      });
    }
  }, [len, idx, slides]);

  const next = useCallback(() => {
    setIdx((i) => {
      if (len <= 1) return 0;
      return i === len - 1 ? 0 : i + 1;
    });
    if (len > 0) {
      trackEvent({
        event: 'carousel_next',
        event_category: 'carousel',
        event_label: 'projects',
        slide_index: idx,
        slide_title: slides[idx]?.title
      });
    }
  }, [len, idx, slides]);
  // Fire slide_view when idx changes
  useEffect(() => {
    if (len > 0) {
      trackEvent({
        event: 'slide_view',
        event_category: 'carousel',
        event_label: 'projects',
        slide_index: idx,
        slide_title: slides[idx]?.title
      });
    }
  }, [idx, len, slides]);

  // Optional auto-advance
  useEffect(() => {
    if (!autoAdvanceMs || autoAdvanceMs < 2500 || len <= 1) return;
    const id = setTimeout(next, autoAdvanceMs);
    return () => clearTimeout(id);
  }, [idx, autoAdvanceMs, next, len]);

  // Keyboard accessibility
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [prev, next]);

  return (
    <div
      className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 ring-1 ring-white/5 bg-black/40 backdrop-blur-sm shadow-xl anim-fadeSlideUp"
      aria-roledescription="carousel"
      aria-label="Projetos OMMA"
    >
      {len === 0 ? (
        <div className="p-8 rounded-2xl text-sm text-white/70">
          Nenhum projeto disponível no momento.
        </div>
      ) : (
        <div className="relative h-[540px] sm:h-[620px]">
          {/* Slide image */}
          <img
            src={slides[idx].imageUrl}
            alt={slides[idx].title}
            className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 group-hover:to-black/90 transition-all duration-500" />
          {/* Minimal horizontal gradient only at bottom for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" style={{clipPath: 'polygon(0 70%, 100% 70%, 100% 100%, 0 100%)'}} />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-6 sm:p-8 md:p-10">
            {(() => {
              const s = slides[idx];

              return (
                <>
                  {/* Bottom area - título e controles apenas */}
                  <div className="flex items-end justify-between gap-6">
                    <div className="max-w-2xl">
                      <h2 className="leading-tight text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-lg mb-4" style={{ fontFamily: 'Exo, Inter' }}>
                        {s.title}
                      </h2>
                      <div className="flex items-center gap-1 text-white/60 text-xs mb-5">
                        <span className="tracking-wide uppercase">{idx + 1}/{len}</span>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={prev}
                          aria-label="Projeto anterior"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-neutral-900 transition-all duration-200 hover:scale-110 shadow ring-1 ring-white/40"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                          </svg>
                        </button>
                        <button
                          onClick={next}
                          aria-label="Próximo projeto"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-neutral-900 transition-all duration-200 hover:scale-110 shadow ring-1 ring-white/40"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
    </div>
  );
}
