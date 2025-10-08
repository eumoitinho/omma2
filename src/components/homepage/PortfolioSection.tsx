'use client';
import React from 'react';
import Image from 'next/image';
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
  if (!data || !data.projects || data.projects.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {data.title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="text-base text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.projects.map((project) => (
            <Link
              key={project._id}
              href={`/obras/${project.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-amber-400/40 transition-all duration-300"
            >
              {/* Imagem */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {project.thumbnail ? (
                  <Image
                    src={typeof project.thumbnail === 'string' ? project.thumbnail : urlFor(project.thumbnail).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                    <span className="text-neutral-600">Sem imagem</span>
                  </div>
                )}

                {/* Overlay com categoria */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-400/90 text-black">
                    {project.category}
                  </span>
                </div>

                {/* Gradient overlay no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Informações */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  {project.client}
                </h3>
                <p className="text-sm text-white/70 mb-4" style={{ fontFamily: 'Inter' }}>{project.title}</p>

                <div className="grid grid-cols-2 gap-3 text-xs" style={{ fontFamily: 'Inter' }}>
                  <div>
                    <span className="block text-white/60">Local</span>
                    <span className="text-white/80">{project.location}</span>
                  </div>
                  <div>
                    <span className="block text-white/60">Área</span>
                    <span className="text-white/80">{project.area}</span>
                  </div>
                  <div>
                    <span className="block text-white/60">Prazo</span>
                    <span className="text-white/80">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA para ver todas as obras */}
        {data.ctaText && (
          <div className="text-center mt-12">
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
