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
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {data.title && (
            <h3 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-white">{data.title}</h3>
          )}
          {data.subtitle && (
            <p className="mt-2 text-sm md:text-base text-neutral-400">{data.subtitle}</p>
          )}
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute left-0 right-0 top-[68px] h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {data.phases.map((s) => (
              <div className="relative" key={s.number}>
                <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
                  <span className="block h-3 w-3 rounded-full bg-yellow-400 ring-2 ring-yellow-300/30"></span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-[34px] font-semibold tracking-tight text-white/90">{s.number < 10 ? `0${s.number}` : s.number}</div>
                </div>
                <div className="mt-4 rounded-2xl bg-white text-neutral-800 p-5 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-yellow-300 ring-1 ring-yellow-300/40">
                    {/* Icon placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /></svg>
                  </div>
                  <h4 className="text-[16px] font-semibold tracking-tight">{s.title}</h4>
                  <ul className="mt-2 space-y-1 text-[13px] text-neutral-600">
                    {s.steps.map((t) => (<li key={t}>{t}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {data.ctaText && (
            <div className="mt-10 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-6 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">
                {data.ctaText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
