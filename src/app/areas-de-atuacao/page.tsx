import React from 'react';
import { getAreasAtuacaoData, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export const revalidate = 60;

export default async function AreasAtuacaoPage() {
  const data = await getAreasAtuacaoData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              <span className="text-amber-400">Áreas</span> de Atuação
            </h1>
          )}

          {data.introText && (
            <p className="text-lg md:text-xl text-white/80 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
              {data.introText}
            </p>
          )}
        </div>
      </section>

      {/* Areas Grid */}
      {data.areas && data.areas.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
            {data.areas.map((area: any, index: number) => (
              <div key={index} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                {/* Images */}
                <div className={`relative ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                  {area.images && area.images.length > 0 && (
                    <div className="grid grid-cols-6 sm:grid-cols-12 gap-4">
                      <div className="col-span-6 sm:col-span-8">
                        <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 relative">
                          {area.images[0] ? (
                            <Image
                              src={urlFor(area.images[0]).url()}
                              alt={area.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1974&auto=format&fit=crop" alt={area.title} className="w-full h-full object-cover" />
                          )}
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 relative">
                          {area.images[1] ? (
                            <Image
                              src={urlFor(area.images[1]).url()}
                              alt={area.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1849&auto=format&fit=crop" alt={area.title} className="h-full w-full object-cover" />
                          )}
                        </div>
                      </div>
                      {area.images[2] && (
                        <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                          <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 relative">
                            <Image
                              src={urlFor(area.images[2]).url()}
                              alt={area.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
                    <span className="text-amber-400">{area.title}</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                    {area.description}
                  </p>

                  <div className="mt-8">
                    <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-8 py-3 text-sm text-white hover:bg-amber-400/10 transition" style={{ fontFamily: 'DM Sans, Inter' }}>
                      SAIBA MAIS
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
