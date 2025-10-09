import React from 'react';
import { getObrasRealizadasData, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { Project } from '@/types/sanity';

export const revalidate = 60;

export default async function ObrasRealizadasPage() {
  const data = await getObrasRealizadasData();

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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              Obras <span className="text-amber-400">Realizadas</span>
            </h1>
          )}

          {data.subtitle && (
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
              {data.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      {data.projects && data.projects.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {data.projects.map((project: Project, index: number) => {
                const isFeatured = index === 0;

                return (
                  <section
                    key={index}
                    className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 ${
                      isFeatured
                        ? 'col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]'
                        : 'col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]'
                    }`}
                  >
                    {project.images && project.images[0] ? (
                      <Image
                        src={urlFor(project.images[0]).url()}
                        alt={project.clientName || 'Projeto OMMA'}
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt={project.clientName || 'Projeto OMMA'}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className={`relative flex flex-col h-full p-4 ${isFeatured ? 'sm:p-5 md:p-7 lg:p-8' : 'sm:p-5 md:p-6'}`}>
                      <div className="flex items-center justify-end">
                        <button className="inline-flex items-center justify-center size-8 sm:size-9 rounded-lg sm:rounded-xl bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <button className={`inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-amber-500 text-white shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)] hover:-translate-y-px active:translate-y-0 transition-transform ${
                          isFeatured ? 'size-10 sm:size-12' : 'size-9 sm:size-11'
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isFeatured ? 'w-4 sm:w-5 h-4 sm:h-5' : 'w-4 sm:w-5 h-4 sm:h-5'}>
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
