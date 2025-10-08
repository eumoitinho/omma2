'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage } from '@/types/sanity';

interface SectorsSectionProps {
  data: {
    title?: string;
    sectors?: Array<{
      name: string;
      icon?: SanityImage;
      svgPath?: string;
      link?: string;
    }>;
  };
}

// Default SVG paths for sectors
const defaultSectorIcons: Record<string, string> = {
  'Escritórios': '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>',
  'Saúde': '<path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle>',
  'Varejo': '<path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>',
  'Bancos': '<rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path>',
  'Educação': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>',
  'Indústria': '<path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path>',
};

export default function SectorsSection({ data }: SectorsSectionProps) {
  if (!data || !data.sectors) return null;

  return (
    <section className="relative">
      <div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="mt-16 border-t border-white/10" />

        {/* Expertise grid */}
        <div className="mt-10 pb-16">
          {data.title && (
            <h3 className="text-center text-[28px] sm:text-[35px] font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              {data.title.split(' ').map((word, i) => {
                if (word === 'Expertise' || word === 'OMMA') {
                  return <span key={i} className="text-amber-400">{word} </span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </h3>
          )}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data.sectors.map((item, idx) => {
              const svgPath = item.svgPath || defaultSectorIcons[item.name] || defaultSectorIcons['Escritórios'];

              return (
                <div key={idx} className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-lg p-5 hover:bg-white/[0.07] transition">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-black/60 ring-1 ring-white/10 flex items-center justify-center">
                      {item.icon ? (
                        <Image
                          src={urlFor(item.icon).url()}
                          alt={item.name}
                          width={28}
                          height={28}
                          className="text-amber-400"
                        />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-amber-400" dangerouslySetInnerHTML={{ __html: svgPath }} />
                      )}
                    </div>
                    <div>
                      <p className="text-lg" style={{ fontFamily: 'Manrope, Inter', fontWeight: 700 }}>{item.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
