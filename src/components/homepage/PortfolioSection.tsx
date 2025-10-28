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
      description?: string;
      gallery?: string[];
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function PortfolioSection({ data }: PortfolioSectionProps) {
  const [idx, setIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState<{
    _id: string;
    slug: string;
    title: string;
    client: string;
    location: string;
    area: string;
    duration?: string;
    category: string;
    description?: string;
    thumbnail?: string | SanityImage;
    gallery?: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = data?.projects || [];
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

  if (!data || !data.projects || data.projects.length === 0) return null;

  const currentProject = projects[idx];
  const thumbnailUrl = currentProject.thumbnail
    ? (typeof currentProject.thumbnail === 'string'
        ? currentProject.thumbnail
        : urlFor(currentProject.thumbnail).url())
    : '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg';

  return (
    <section className="py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="text-base text-gray-600 max-w-3xl" style={{ fontFamily: 'Inter' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div
          className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 ring-1 ring-gray-100 bg-white/90 backdrop-blur-sm shadow-xl"
          aria-roledescription="carousel"
          aria-label="Portfólio NEOOMA"
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
               
                

                  <div className="flex items-center gap-1 text-gray-100 text-xs mb-5">
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
                    <button
                      onClick={() => {
                        setSelectedProject(currentProject);
                        setIsModalOpen(true);
                      }}
                      className="flex h-11 px-6 items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold transition-all duration-200 hover:scale-105 shadow"
                      style={{ fontFamily: 'Exo, Inter' }}
                    >
                      <span className="text-sm">Ver projeto</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
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

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 shadow-lg transition-all"
              aria-label="Fechar modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-400 text-black">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                  {selectedProject.title}
                </h3>
                {(selectedProject.location || selectedProject.area) && (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {selectedProject.location && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedProject.location}
                      </span>
                    )}
                    {selectedProject.area && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                        {selectedProject.area}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              {selectedProject.description && (
                <p className="text-base text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                  {selectedProject.description}
                </p>
              )}

              {/* Gallery */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
