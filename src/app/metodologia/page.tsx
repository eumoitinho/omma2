import React from 'react';
import { getMetodologiaData } from '@/lib/sanity';
import type { PortableTextContent, PortableTextBlock, Step } from '@/types/sanity';

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

  // Parse portable text
  const getTextFromPortableText = (blocks: PortableTextContent) => {
    if (!blocks) return [];
    return blocks
      .filter((block: PortableTextBlock) => block._type === 'block')
      .map((block: PortableTextBlock) =>
        block.children?.map((child) => child.text).join('') || ''
      );
  };

  const introTexts = data.introContent ? getTextFromPortableText(data.introContent) : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              <span className="text-amber-400">Metodologia</span> OMMA
            </h1>
          )}

          {data.subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
              {data.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Intro Content */}
      {introTexts.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            {introTexts.map((text, i) => (
              <p key={i} className="mt-4 text-base md:text-lg text-white/80 leading-relaxed text-center" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                {text}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Phases Timeline */}
      {data.phases && data.phases.length > 0 && (
        <section className="relative py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative mt-10 md:mt-14">
              <div className="absolute left-0 right-0 top-[68px] h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20"></div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {data.phases.map((s: Step) => (
                  <div className="relative" key={s.number}>
                    <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
                      <span className="block h-3 w-3 rounded-full bg-yellow-400 ring-2 ring-yellow-300/30"></span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-[34px] font-semibold tracking-tight text-white/90">{s.number < 10 ? `0${s.number}` : s.number}</div>
                    </div>
                    <div className="mt-4 rounded-2xl bg-white text-neutral-800 p-5 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-yellow-300 ring-1 ring-yellow-300/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /></svg>
                      </div>
                      <h4 className="text-[16px] font-semibold tracking-tight">{s.title}</h4>
                      <ul className="mt-2 space-y-1 text-[13px] text-neutral-600">
                        {s.steps?.map((t: string) => (<li key={t}>{t}</li>))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <a href="/contato" className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-6 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">
                  SOLICITE UM ORÇAMENTO AGORA!
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Exo, Inter' }}>
            Por que escolher a <span className="text-amber-400">OMMA</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Agilidade', desc: 'Prazos cumpridos com rigor e eficiência comprovada' },
              { title: 'Qualidade', desc: 'Padrão AAA em todos os projetos executados' },
              { title: 'Segurança', desc: 'Processos certificados e transparência total' },
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all">
                <h3 className="text-xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
