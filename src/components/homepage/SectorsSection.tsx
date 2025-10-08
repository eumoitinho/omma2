'use client';
import React from 'react';
import Image from 'next/image';

interface SectorsSectionProps {
  data: {
    title?: string;
    sectors?: Array<{
      title: string;
      description: string;
      imageUrl?: string;
    }>;
  };
}

export default function SectorsSection({ data }: SectorsSectionProps) {
  if (!data || !data.sectors || data.sectors.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        {data.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          </div>
        )}

        {/* Grid de Setores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.sectors.map((sector, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition-all duration-300"
            >
              {/* Imagem de fundo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {sector.imageUrl ? (
                  <img
                    src={sector.imageUrl}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900" />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  {sector.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {sector.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
