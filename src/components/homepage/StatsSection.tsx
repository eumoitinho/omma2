'use client';
import React from 'react';

interface StatsSectionProps {
  data: {
    title?: string;
    stats?: Array<{
      number: string;
      label: string;
      description?: string;
    }>;
  };
}

export default function StatsSection({ data }: StatsSectionProps) {
  if (!data || !data.stats) return null;

  return (
    <section id="resultados" className="py-12 border-t border-gray-200 relative overflow-hidden">
      {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(251,191,36,0.18),transparent_60%)] opacity-60" />
      </div> */}
      <div className="mx-auto max-w-7xl px-6 relative">
        {data.title && (
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            {data.title}
          </h2>
        )}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative rounded-2xl p-6 anim-fadeSlideUp overflow-hidden group ring-1 ring-gray-200 bg-gradient-to-br from-white via-gray-50 to-amber-50 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_28px_-6px_rgba(251,191,36,0.25)] transition-shadow`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.28),transparent_65%)]" />
              <div className="relative text-3xl font-bold text-amber-500 drop-shadow" style={{ fontFamily: 'Exo, Inter' }}>{s.number}</div>
              <div className="relative text-gray-900 mt-1 font-medium">{s.label}</div>
              {s.description && (
                <p className="relative text-gray-600 mt-3 text-sm leading-relaxed">{s.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
