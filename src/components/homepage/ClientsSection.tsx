'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { clientLogos } from '@/data/clients';

interface ClientsSectionProps {
  data?: {
    title?: string;
  };
}

export default function ClientsSection({ data }: ClientsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // Índices destacados dinamicamente por linha (um de cada vez por linha)
  const [highlight1, setHighlight1] = useState<number | null>(null);
  const [highlight2, setHighlight2] = useState<number | null>(null);
  const [highlight3, setHighlight3] = useState<number | null>(null);
  const [highlight4, setHighlight4] = useState<number | null>(null);

  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  // Criar linhas com logos triplicados (sem randomização para evitar hydration mismatch)
  const line1 = useMemo(() => [...clientLogos, ...clientLogos, ...clientLogos], []);
  const line2 = useMemo(() => {
    // Rotacionar array para ter ordem diferente
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

  // Agendador sequencial por linha (fluxo lento/médio)
  useEffect(() => {
    const baseLen = clientLogos.length;

    function schedule(setter: (i: number | null) => void, durationMs: number, gapMin: number, gapMax: number, prev: number | null = null) {
      // escolher próximo índice diferente do anterior
      const nextIndex = (() => {
        if (baseLen <= 1) return 0;
        let i = Math.floor(Math.random() * baseLen);
        if (prev !== null && baseLen > 1) {
          while (i === prev) i = Math.floor(Math.random() * baseLen);
        }
        return i;
      })();

      if (!mountedRef.current) return;
      setter(nextIndex);

      const offId = setTimeout(() => {
        if (!mountedRef.current) return;
        setter(null);
        const gap = gapMin + Math.floor(Math.random() * (gapMax - gapMin));
        const nextId = setTimeout(() => schedule(setter, durationMs, gapMin, gapMax, nextIndex), gap);
        // cleanup encadeado
        (schedule as any).nextId = nextId;
      }, durationMs);

      return offId;
    }

    const t1 = schedule(setHighlight1, 2200, 800, 1400);
    const t2 = schedule(setHighlight2, 2600, 900, 1500);
    const t3 = schedule(setHighlight3, 2400, 900, 1400);
    const t4 = schedule(setHighlight4, 2800, 1000, 1600);

    return () => {
      if (t1) clearTimeout(t1 as any);
      if ((schedule as any).nextId) clearTimeout((schedule as any).nextId);
      if (t2) clearTimeout(t2 as any);
      if (t3) clearTimeout(t3 as any);
      if (t4) clearTimeout(t4 as any);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
          {data?.title || 'NOSSOS CLIENTES'}
        </h2>

        <div className="rounded-2xl  relative">
          {/* Container com altura limitada */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              showAll ? 'max-h-[800px]' : 'max-h-[180px]'
            }`}
          >
            {/* Primeira linha - animação da esquerda para direita */}
            <div className="flex gap-8 mb-8 animate-scroll-left">
              {line1.map((client, idx) => {
                const logicalIdx = idx % clientLogos.length;
                const isColored = highlight1 !== null && logicalIdx === highlight1;
                return (
                  <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line1-${idx}`}>
                    <div className="relative w-full h-20">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-full h-full object-contain transition-all duration-300 ${
                          isColored ? 'opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Segunda linha - animação da direita para esquerda */}
            <div className="flex gap-8 mb-8 animate-scroll-right">
              {line2.map((client, idx) => {
                const logicalIdx = idx % clientLogos.length;
                const isColored = highlight2 !== null && logicalIdx === highlight2;
                return (
                  <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line2-${idx}`}>
                    <div className="relative w-full h-20">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-full h-full object-contain transition-all duration-300 ${
                          isColored ? 'opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terceira e quarta linhas - visíveis apenas quando expandido */}
            {showAll && (
              <>
                <div className="flex gap-8 mb-8 animate-scroll-left">
                  {line3.map((client, idx) => {
                    const logicalIdx = idx % clientLogos.length;
                    const isColored = highlight3 !== null && logicalIdx === highlight3;
                    return (
                      <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line3-${idx}`}>
                        <div className="relative w-full h-20">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className={`w-full h-full object-contain transition-all duration-300 ${
                              isColored ? 'opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-8 animate-scroll-right">
                  {line4.map((client, idx) => {
                    const logicalIdx = idx % clientLogos.length;
                    const isColored = highlight4 !== null && logicalIdx === highlight4;
                    return (
                      <div className="flex items-center justify-center flex-shrink-0 w-32" key={`line4-${idx}`}>
                        <div className="relative w-full h-20">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className={`w-full h-full object-contain transition-all duration-300 ${
                              isColored ? 'opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Gradiente de fade quando não expandido (inferior) */}
            {!showAll && (
              <div className="absolute bottom-0 left-0 right-0 h-24 w-full bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}

            {/* Gradientes nas extremidades horizontais */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white via-white/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white via-white/70 to-transparent" />
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
