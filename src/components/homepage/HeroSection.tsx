'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import type { SanityImage } from '@/types/sanity';

interface HeroSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: SanityImage;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const bgImage = data.backgroundImage
    ? urlFor(data.backgroundImage).url()
    : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2560&q=80';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0 top-0">
        <div
          className="absolute inset-0 top-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 py-20">
          <div className="flex flex-col justify-center">
            {/* Heading */}
            {data.title && (
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-white"
                style={{ fontFamily: "Exo, Inter" }}
              >
                {data.title}
              </h1>
            )}

            {/* Paragraph */}
            {data.subtitle && (
              <p
                className="mt-6 text-lg text-white/90 max-w-lg"
                style={{ fontFamily: "Inter" }}
              >
                {data.subtitle}
              </p>
            )}

            {/* CTA */}
            {data.ctaText && (
              <div className="mt-8">
                <button
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-4 text-base font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
                  style={{ fontFamily: "Exo, Inter" }}
                >
                  {data.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Espaço adicional */}
          <div className="hidden lg:flex items-center justify-center"></div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-amber-400/30 rounded-full" />
      </div>
    </section>
  );
}
