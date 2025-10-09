'use client';
import React from 'react';
import SectionBackground from '@/components/ui/SectionBackground';

interface WhyChooseSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    benefits?: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function WhyChooseSection({ data }: WhyChooseSectionProps) {
  if (!data) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <SectionBackground variant="amber" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        {data.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
                {data.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Benefits Grid */}
        {data.benefits && data.benefits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl p-6 overflow-hidden group ring-1 ring-white/10 bg-gradient-to-br from-white/5 via-neutral-900/30 to-amber-400/10 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_28px_-6px_rgba(251,191,36,0.25)] transition-shadow"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.28),transparent_65%)]" />
                <div className="relative flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 ring-1 ring-white/10 grid place-items-center group-hover:ring-amber-400/40 group-hover:bg-amber-400/10 transition-colors">
                    <span className="text-[11px] font-semibold text-amber-300" style={{ fontFamily: 'Exo, Inter' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h3 className="relative text-xl font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  {benefit.title}
                </h3>
                <p className="relative text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors" style={{ fontFamily: 'Inter' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition" style={{ fontFamily: 'Exo, Inter' }}>
            Entrar em contato
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-6 py-3 text-base font-medium text-amber-400 hover:bg-amber-400/15 hover:border-amber-400 transition" style={{ fontFamily: 'Exo, Inter' }}>
            Agendar reunião
          </button>
        </div>
      </div>
    </section>
  );
}
