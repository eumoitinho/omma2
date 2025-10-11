'use client';
import React from 'react';

interface MethodologySectionProps {
  data: {
    title?: string;
    subtitle?: string;
    phases?: Array<{
      number?: number;
      name?: string;
      title: string;
      steps?: string[];
      items?: string[];
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function MethodologySection({ data }: MethodologySectionProps) {
  if (!data || !data.phases) return null;

  return (
    <section className="py-12 border-t border-gray-200 relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-semibold text-center text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
          {data.title || 'METODOLOGIA OMMA'}
        </h3>
        {data.subtitle && (
          <p className="text-center text-gray-600 mt-1" style={{ fontFamily: 'Inter' }}>
            {data.subtitle}
          </p>
        )}
        <div className="relative mt-8 grid md:grid-cols-4 gap-6">
          {data.phases.map((step, idx) => {
            const items = step.steps || step.items || [];
            const phaseNumber = step.number || idx + 1;
            const phaseName = step.name || `FASE ${phaseNumber}`;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white p-5 text-neutral-900 shadow-[0_0_40px_rgba(250,204,21,0.12)] ring-1 ring-gray-200 hover:ring-amber-400/40 transition-all"
              >
                <div className="text-xs font-semibold text-amber-600" style={{ fontFamily: 'Exo, Inter' }}>
                  {phaseName}
                </div>
                <h4 className="text-lg font-semibold mt-1" style={{ fontFamily: 'Exo, Inter' }}>
                  {step.title}
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700" style={{ fontFamily: 'Inter' }}>
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {data.ctaText && (
          <div className="mt-8 text-center">
            <a
              href={data.ctaLink || '/contato'}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-6 py-3 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              {data.ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
