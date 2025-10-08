'use client';
import React from 'react';

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
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 md:flex-row md:p-8">
          <div>
            {data.title && (
              <h4 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-white">{data.title}</h4>
            )}
            {data.subtitle && (
              <p className="mt-1 text-sm text-neutral-400">{data.subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Entrar em contato
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-4 py-2.5 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">
              Agendar reunião
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
