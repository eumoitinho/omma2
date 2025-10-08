import React from 'react';
import { getQuemSomosData } from '@/lib/sanity';
import type { PortableTextContent, PortableTextBlock } from '@/types/sanity';

export const revalidate = 60;

export default async function QuemSomosPage() {
  const data = await getQuemSomosData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  // Parse portable text to plain text
  const getTextFromPortableText = (blocks: PortableTextContent) => {
    if (!blocks) return [];
    return blocks
      .filter((block: PortableTextBlock) => block._type === 'block')
      .map((block: PortableTextBlock) =>
        block.children?.map((child) => child.text).join('') || ''
      );
  };

  const introTexts = data.introSection?.content ? getTextFromPortableText(data.introSection.content) : [];
  const purposeTexts = data.purposeSection?.content ? getTextFromPortableText(data.purposeSection.content) : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Title */}
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              {data.heroTitle.split(' ').map((word, i) => {
                if (word === 'OMMA' || word === 'Engenharia') {
                  return <span key={i} className="text-amber-400">{word} </span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </h1>
          )}

          {/* Intro Content */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            {introTexts.map((text, i) => (
              <p key={i} className="mt-6 text-lg md:text-xl leading-relaxed text-white/80" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section with Images */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Images */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1974&auto=format&fit=crop"
                  alt="OMMA Engenharia - Equipe"
                  className="h-[320px] md:h-[420px] w-full object-cover"
                />
                <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
              </div>
              <div className="hidden md:flex absolute -left-8 bottom-16">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop"
                    alt="Projeto OMMA"
                    className="h-40 w-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              {data.purposeSection?.title && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400 mb-6" style={{ fontFamily: 'Exo, Inter' }}>
                  {data.purposeSection.title}
                </h2>
              )}

              {purposeTexts.map((text, i) => (
                <p key={i} className="mt-4 text-base md:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Exo, Inter' }}>25+</div>
              <div className="text-white/70">Anos de Experiência</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Exo, Inter' }}>1000+</div>
              <div className="text-white/70">Obras Entregues</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Exo, Inter' }}>100%</div>
              <div className="text-white/70">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Exo, Inter' }}>
            Nossos <span className="text-amber-400">Valores</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Excelência', desc: 'Compromisso com a mais alta qualidade em todos os projetos' },
              { title: 'Inovação', desc: 'Soluções criativas e tecnológicas para desafios complexos' },
              { title: 'Transparência', desc: 'Comunicação clara e honesta em todas as etapas' },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all">
                <h3 className="text-xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>{value.title}</h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
