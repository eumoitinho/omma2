import React from 'react';
import Link from 'next/link';
import { getMetodologiaData, urlFor } from '@/lib/sanity';
import type { Step } from '@/types/sanity';

export const revalidate = 60;

export default async function MetodologiaPage() {
  const data = await getMetodologiaData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  const phases = data.phases || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          {data.heroImage ? (
            <img
              src={urlFor(data.heroImage).url()}
              alt="Metodologia OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          ) : (
            <img
              src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 4.jpg"
              alt="Metodologia OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            <span className="text-amber-400">{data.heroTitle || 'METODOLOGIA'}</span> OMMA
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            {data.subtitle || 'O caminho para o sucesso do seu Projeto'}
          </p>
        </div>
      </section>

      {/* Methodology Phases */}
      <section className="py-12 border-t border-gray-200 relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="relative mt-8 grid md:grid-cols-4 gap-6">
            {phases.map((step: Step) => (
              <div
                key={step.phase || step.title}
                className="relative rounded-2xl bg-white p-5 text-neutral-900 shadow-[0_0_40px_rgba(250,204,21,0.12)] ring-1 ring-gray-200 hover:ring-amber-400/40 transition-all"
              >
                <div className="text-xs font-semibold text-amber-600" style={{ fontFamily: 'Exo, Inter' }}>
                  {step.phase}
                </div>
                <h4 className="text-lg font-semibold mt-1" style={{ fontFamily: 'Exo, Inter' }}>
                  {step.title}
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700" style={{ fontFamily: 'Inter' }}>
                  {step.items?.map((i: string) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            {data.ctaTitle || 'Pronto para trabalhar com'} <span className="text-amber-400">{data.ctaTitle ? '' : 'excelência'}</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8" style={{ fontFamily: 'Inter' }}>
            {data.ctaDescription || 'Entre em contato e descubra como nossa metodologia pode transformar seu projeto em realidade.'}
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-gray-200 hover:ring-gray-300"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            {data.ctaButtonText || 'Solicitar Orçamento'}
          </Link>
        </div>
      </section>
    </div>
  );
}
