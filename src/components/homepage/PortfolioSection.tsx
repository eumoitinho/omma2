'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import type { SanityImage } from '@/types/sanity';

interface PortfolioSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    projects?: Array<{
      _id: string;
      slug: string;
      title: string;
      client: string;
      location: string;
      area: string;
      duration: string;
      thumbnail?: SanityImage | string;
      category: string;
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function PortfolioSection({ data }: PortfolioSectionProps) {
  const [idx, setIdx] = useState(0);

  if (!data || !data.projects || data.projects.length === 0) return null;

  const projects = data.projects;
  const len = projects.length;

  const prev = useCallback(() => {
    setIdx((i) => {
      if (len <= 1) return 0;
      return i === 0 ? len - 1 : i - 1;
    });
  }, [len]);

  const next = useCallback(() => {
    setIdx((i) => {
      if (len <= 1) return 0;
      return i === len - 1 ? 0 : i + 1;
    });
  }, [len]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (len <= 1) return;
    const id = setTimeout(next, 5000);
    return () => clearTimeout(id);
  }, [idx, next, len]);

  // Keyboard accessibility
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [prev, next]);

  const currentProject = projects[idx];
  const thumbnailUrl = currentProject.thumbnail
    ? (typeof currentProject.thumbnail === 'string'
        ? currentProject.thumbnail
        : urlFor(currentProject.thumbnail).url())
    : '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg';

  return (
    <section className="py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="text-base text-white/70 max-w-3xl" style={{ fontFamily: 'Inter' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div
          className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 ring-1 ring-white/5 bg-black/40 backdrop-blur-sm shadow-xl"
          aria-roledescription="carousel"
          aria-label="Portfólio OMMA"
        >
          <div className="relative h-[480px] sm:h-[560px] md:h-[620px]">
            {/* Slide image */}
            <img
              src={thumbnailUrl}
              alt={currentProject.title}
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 group-hover:to-black/90 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" style={{clipPath: 'polygon(0 70%, 100% 70%, 100% 100%, 0 100%)'}} />

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-block px-4 py-2 text-xs font-semibold rounded-full bg-amber-400/90 text-black backdrop-blur-sm">
                {currentProject.category}
              </span>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-6 sm:p-8 md:p-10">
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-lg mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                    {currentProject.client}
                  </h3>
                  <p className="text-base sm:text-lg text-white/80 mb-4" style={{ fontFamily: 'Inter' }}>
                    {currentProject.title}
                  </p>

                  {/* Project details */}
                  <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-5" style={{ fontFamily: 'Inter' }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                      </svg>
                      <span>{currentProject.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{currentProject.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-white/60 text-xs mb-5">
                    <span className="tracking-wide uppercase">{idx + 1}/{len}</span>
                  </div>

                  {/* Navigation buttons */}
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
                    <Link
                      href={`/obras/${currentProject.slug}`}
                      className="flex h-11 px-6 items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold transition-all duration-200 hover:scale-105 shadow"
                      style={{ fontFamily: 'Exo, Inter' }}
                    >
                      <span className="text-sm">Ver projeto</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        {/* CTA para ver todas as obras */}
        {data.ctaText && (
          <div className="text-center mt-10">
            <Link
              href={data.ctaLink || '/obras'}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-amber-400 text-base text-amber-400 font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              {data.ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
