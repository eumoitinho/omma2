'use client';
import React from 'react';

interface MethodologySectionProps {
  data: {
    title?: string;
    subtitle?: string;
    phases?: Array<{
      number: number;
      name: string;
      title: string;
      steps: string[];
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function MethodologySection({ data }: MethodologySectionProps) {
  if (!data || !data.phases) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          {data.title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="mt-4 text-base text-white/90" style={{ fontFamily: 'Inter' }}>{data.subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.phases.map((phase) => (
            <div
              className="group relative bg-white/95 backdrop-blur border border-amber-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              key={phase.number}
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/25">
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Exo, Inter' }}>
                  {phase.number < 10 ? `0${phase.number}` : phase.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                {phase.title}
              </h3>

              {/* Steps list */}
              <ul className="space-y-2 flex-1" style={{ fontFamily: 'Inter' }}>
                {phase.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {data.ctaText && (
          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-9 py-4 text-base text-white hover:bg-white hover:text-amber-600 transition shadow-lg" style={{ fontFamily: 'Exo, Inter' }}>
              {data.ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
