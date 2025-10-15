'use client';
import React from 'react';

interface SectorsSectionProps {
  data: {
    title?: string;
    subtitle?: string;
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
    <section id="setores" className="py-16 border-t border-gray-200 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            {data.title || 'Expertise NEOOMA em diversos setores'}
          </h3>
          {data.subtitle && (
            <p className="mt-3 text-sm text-gray-600 max-w-2xl" style={{ fontFamily: 'Inter' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="lg:p-8 ring-1 ring-gray-200 border border-gray-100 rounded-[2rem] bg-gradient-to-b from-gray-50 to-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.sectors.map((card, idx) => {
              const highlight = idx === 2; // leve destaque no 3º
              return (
                <article
                  key={card.title}
                  className={[
                    'group relative overflow-hidden rounded-2xl border border-gray-200 p-6 backdrop-blur-xl',
                    'bg-gradient-to-br from-white via-gray-50 to-amber-50',
                    'hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_32px_-8px_rgba(251,191,36,0.35)] transition-all duration-500',
                    highlight ? 'ring-amber-400/40' : 'ring-gray-100'
                  ].join(' ')}
                >
                  <div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-gray-200 mb-6">
                    {card.imageUrl ? (
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_75%_25%,rgba(251,191,36,0.25),transparent_60%)]" />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="inline-flex h-8 px-3 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/15 text-[11px] font-medium tracking-wide text-white/70 group-hover:text-amber-300 group-hover:ring-amber-400/40 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {highlight && (
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-[farthest-side_at_50%_60%] from-amber-400/25 via-transparent to-transparent" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold tracking-tight mb-3 text-gray-900 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                      {card.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter' }}>
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
