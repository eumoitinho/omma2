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
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 md:flex-row md:p-10">
          <div>
            {data.title && (
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white" style={{ fontFamily: 'Exo, Inter' }}>
                {data.title}
              </h3>
            )}
            {data.subtitle && (
              <p className="mt-2 text-base text-white/70" style={{ fontFamily: 'Inter' }}>{data.subtitle}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition" style={{ fontFamily: 'Exo, Inter' }}>
              Entrar em contato
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-6 py-3 text-base font-medium text-amber-400 hover:bg-amber-400/15 hover:border-amber-400 transition" style={{ fontFamily: 'Exo, Inter' }}>
              Agendar reunião
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
