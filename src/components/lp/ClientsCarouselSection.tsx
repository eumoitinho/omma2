'use client';
import React, { useState, useMemo } from 'react';
import { clientLogos } from '@/data/clients';

export default function ClientsCarouselSection() {
  const [showAll, setShowAll] = useState(false);

  // Criar linhas com logos triplicados (sem randomização para evitar hydration mismatch)
  const line1 = useMemo(() => [...clientLogos, ...clientLogos, ...clientLogos], []);
  const line2 = useMemo(() => {
    const rotated = [...clientLogos.slice(15), ...clientLogos.slice(0, 15)];
    return [...rotated, ...rotated, ...rotated];
  }, []);
  const line3 = useMemo(() => {
    const rotated = [...clientLogos.slice(30), ...clientLogos.slice(0, 30)];
    return [...rotated, ...rotated, ...rotated];
  }, []);
  const line4 = useMemo(() => {
    const rotated = [...clientLogos.slice(10), ...clientLogos.slice(0, 10)];
    return [...rotated, ...rotated, ...rotated];
  }, []);

  return (
    <section id="clientes" className="relative py-16 md:py-24 border-t border-white/10 reveal">
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="mb-12 text-center text-3xl md:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'Exo, Inter' }}>
          NOSSOS CLIENTES
        </h3>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 md:p-10 backdrop-blur-sm relative">
          {/* Container com altura limitada */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              showAll ? 'max-h-[800px]' : 'max-h-[180px]'
            }`}
          >
            {/* Primeira linha - animação da esquerda para direita */}
            <div className="flex gap-8 mb-8 animate-scroll-left">
              {line1.map((client, idx) => (
                <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line1-${idx}`}>
                  <div className="relative w-full h-20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda linha - animação da direita para esquerda */}
            <div className="flex gap-8 mb-8 animate-scroll-right">
              {line2.map((client, idx) => (
                <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line2-${idx}`}>
                  <div className="relative w-full h-20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Terceira e quarta linhas - visíveis apenas quando expandido */}
            {showAll && (
              <>
                <div className="flex gap-8 mb-8 animate-scroll-left">
                  {line3.map((client, idx) => (
                    <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line3-${idx}`}>
                      <div className="relative w-full h-20">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-8 animate-scroll-right">
                  {line4.map((client, idx) => (
                    <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line4-${idx}`}>
                      <div className="relative w-full h-20">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Gradiente de fade quando não expandido */}
            {!showAll && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
            )}
          </div>

          {/* Botão Ver Mais/Menos */}
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 hover:border-amber-400/60 transition-all duration-300 font-medium text-sm"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              <span>{showAll ? 'Ver Menos' : 'Ver Mais Clientes'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-1.5 w-10 rounded-full bg-amber-400/80"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/40"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/40"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
