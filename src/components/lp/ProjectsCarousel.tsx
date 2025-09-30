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
  }, [len]);

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
  }, [len]);
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
        <div className="relative h-[440px] sm:h-[520px]">
          {/* Slide image */}
          <img
            src={slides[idx].imageUrl}
            alt={slides[idx].title}
            className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 group-hover:via-black/50 group-hover:to-black/90 transition-all duration-500" />
          {/* Additional horizontal gradient to improve left-to-right text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent opacity-95 sm:opacity-90 pointer-events-none" />
          {/* Subtle radial focus vignette */}
          <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_25%_55%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.15)_65%,transparent_80%)]" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between px-5 py-6 sm:p-8 md:p-10">
            {/* Top row */}
            {(() => {
              const s = slides[idx];
              let mainTitle = s.title;
              let highlight: string | null = null;
              const dashMatch = s.title.split(/\s[–-]\s/);
              if (dashMatch.length === 2) {
                mainTitle = dashMatch[0];
                highlight = dashMatch[1];
              }
              const rating = typeof s.rating === 'number' ? s.rating : 4.9;
              const awards = typeof s.awards === 'number' ? s.awards : 5;
              const status = s.status || 'Concluído';

              return (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="leading-tight text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-lg" style={{ fontFamily: 'Exo, Inter' }}>
                      {mainTitle}{' '}
                      {highlight && (
                        <span className="block text-amber-300 font-semibold group-hover:text-amber-200 transition-colors duration-300">
                          {highlight}
                        </span>
                      )}
                    </h2>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white/80 group-hover:bg-white/20 transition-all duration-300">
                      {status}
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Bottom area */}
                  <div className="flex items-end justify-between gap-6">
                    <div className="max-w-md">
                      <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter' }}>
                        {s.description}
                      </p>
                      <div className="mt-4 flex items-center gap-5 flex-wrap text-white/80 text-xs sm:text-sm">
                        <div className="flex items-center gap-1 group-hover:text-white/90 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.68a2.1 2.1 0 0 0 1.58 1.16l5.17.76a.53.53 0 0 1 .29.9l-3.73 3.64a2.1 2.1 0 0 0-.6 1.87l.88 5.14a.53.53 0 0 1-.77.56l-4.62-2.43a2.1 2.1 0 0 0-1.97 0L6.4 21.02a.53.53 0 0 1-.77-.56l.88-5.14a2.1 2.1 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .29-.9l5.17-.75a2.1 2.1 0 0 0 1.59-1.16l2.31-4.64Z" />
                          </svg>
                          <span className="font-medium">{rating.toFixed(1)} Rating</span>
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-white/90 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="m15.5 12.9 1.5 8.5a.5.5 0 0 1-.8.5l-3.6-2.7a1 1 0 0 0-1.2 0l-3.6 2.7a.5.5 0 0 1-.8-.5l1.5-8.5" />
                            <circle cx="12" cy="8" r="6" />
                          </svg>
                          <span className="font-medium">{awards}+ Premiações</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60 group-hover:text-white/70 transition-colors">
                          <span className="text-[11px] tracking-wide uppercase">{idx + 1}/{len}</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
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
                        <a
                          href="#form"
                          className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs font-semibold tracking-wide text-amber-300 hover:bg-amber-400/20 hover:border-amber-400/60 transition-all duration-300"
                        >
                          SOLICITAR CONTATO
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {len > 0 && (
        <div className="absolute bottom-4 right-5 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para projeto ${i + 1}`}
              onClick={() => {
                setIdx(i);
                trackEvent({
                  event: 'carousel_dot',
                  event_category: 'carousel',
                  event_label: 'projects',
                  slide_index: i,
                  slide_title: slides[i]?.title
                });
              }}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-amber-400' : 'w-3 bg-white/35 hover:bg-white/60'}`}
            />
          ))}
        </div>
      )}

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
    </div>
  );
}
