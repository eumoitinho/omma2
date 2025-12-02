"use client";
import React, { useState } from 'react';
import ImageWithFallback from '@/components/shared/ImageWithFallback';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import type { SanityImage } from '@/types/sanity';

interface Project {
  _id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  area: string;
  duration: string;
  year?: string;
  thumbnail?: SanityImage | string;
  gallery?: (SanityImage | string)[];
  category: string;
  description?: string;
}

// Helper para obter URL de imagem (Sanity ou string local)
function getImageUrl(image: SanityImage | string | undefined): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  // Se for objeto Sanity com asset.url direto
  if (image.asset && typeof image.asset === 'object' && 'url' in image.asset) {
    return (image.asset as { url: string }).url;
  }
  // Se for referência Sanity, usar urlFor
  try {
    return urlFor(image).url();
  } catch {
    return '';
  }
}

interface ObrasGalleryProps {
  data: {
    title?: string;
    subtitle?: string;
    projects?: Project[];
  };
}

export default function ObrasGallery({ data }: ObrasGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!data || !data.projects) return null;

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(data.projects.map(p => p.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? data.projects
    : data.projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {data.title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h1>
          )}
          {data.subtitle && (
            <p className="text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-400 text-black border-2 border-amber-400'
                  : 'bg-white/5 text-white border-2 border-white/10 hover:border-amber-400/40'
              }`}
              style={{ fontFamily: 'Exo, Inter' }}
            >
              {category === 'all' ? 'Todas as Obras' : category}
            </button>
          ))}
        </div>

        {/* Projects Gallery - Expanded cards with more details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project._id}
              href={`/obras/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/10"
            >
              {/* Large Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {getImageUrl(project.thumbnail) ? (
                  <ImageWithFallback
                    src={getImageUrl(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                    <span className="text-neutral-600" style={{ fontFamily: 'Inter' }}>Sem imagem</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 text-sm font-bold rounded-full bg-amber-400/95 text-black backdrop-blur-sm" style={{ fontFamily: 'Exo, Inter' }}>
                    {project.category}
                  </span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Content - More detailed than homepage */}
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  {project.title}
                </h2>

                {/* Description preview */}
                {project.description && (
                  <p className="text-sm text-white/60 mb-6 line-clamp-2" style={{ fontFamily: 'Inter' }}>
                    {project.description}
                  </p>
                )}

                {/* Project details grid - Larger and more prominent */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <span className="block text-xs text-white/50 mb-1" style={{ fontFamily: 'Inter' }}>Local</span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Exo, Inter' }}>{project.location}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 mb-1" style={{ fontFamily: 'Inter' }}>Área</span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Exo, Inter' }}>{project.area}</span>
                  </div>
                </div>

                {/* Gallery preview indicators */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-white/50" style={{ fontFamily: 'Inter' }}>
                      +{project.gallery.length} fotos na galeria
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-white/50" style={{ fontFamily: 'Inter' }}>
              Nenhuma obra encontrada nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
