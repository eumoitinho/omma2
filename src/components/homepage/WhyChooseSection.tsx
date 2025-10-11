'use client';
import React, { useState } from 'react';
import SectionBackground from '@/components/ui/SectionBackground';

interface WhyChooseSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    benefits?: Array<{
      title: string;
      description: string;
      expandedDescription?: string;
    }>;
  };
}

// Dados atualizados com os textos fornecidos
const defaultBenefits = [
  {
    title: 'Agilidade e otimização de tempo',
    description: 'OBRAS RÁPIDAS COM MINIMIZAÇÃO DE IMPACTO',
    expandedDescription: 'Nossa expertise em obras rápidas e eficientes é projetada para o ritmo do seu negócio. Com processos otimizados e planejamento rigoroso, garantimos a conclusão do seu projeto no prazo, reduzindo o tempo de inatividade e minimizando custos com interrupções nas suas operações. É mais produtividade e um impacto positivo no Retorno sobre Investimento (ROI) da sua empresa.'
  },
  {
    title: 'Gestão completa',
    description: 'CHAVE NA MÃO: DA CONCEPÇÃO À ENTREGA',
    expandedDescription: 'Oferecemos uma gestão completa e transparente, da concepção à entrega, eliminando complexidades e surpresas. Essa abordagem estratégica permite que sua equipe mantenha total foco no seu core business com menos preocupação com o projeto, enquanto nós garantimos a excelência de cada etapa.'
  },
  {
    title: 'Previsibilidade financeira',
    description: 'CUSTOS COMPETITIVOS E SEM SURPRESAS',
    expandedDescription: 'Nosso compromisso inegociável com a previsibilidade orçamentária e custos competitivos assegura a você total controle financeiro. Com a NEOOMMA, suas decisões são baseadas em clareza, permitindo que você maximize o retorno sobre o investimento do seu capital, sempre com a garantia da mais alta qualidade e sem surpresas.'
  },
  {
    title: 'Alto padrão de qualidade e soluções estratégicas',
    description: 'EXCELÊNCIA ESTRATÉGICA: AMBIENTES DE ALTA PERFORMANCE',
    expandedDescription: 'Construímos ambientes de alto padrão que não apenas impressionam visualmente, mas são pensados estrategicamente para a funcionalidade e os objetivos da sua empresa. Nossa expertise em engenharia garante soluções duradouras e de qualidade superior, projetadas para refletir a identidade da sua marca e impulsionar a performance do seu negócio.'
  },
  {
    title: 'Sinergia e integração',
    description: 'VISIBILIDADE E COMUNICAÇÃO FLUIDA DURANTE TODO O PROJETO',
    expandedDescription: 'Nossa metodologia assegura sinergia total e uma comunicação fluida com nossos clientes. Isso se traduz em visibilidade completa e atualizações contínuas sobre o progresso do projeto, garantindo que você esteja sempre informado e no controle, desde o início até a entrega final.'
  },
  {
    title: 'Expertise e visão de futuro',
    description: 'LEGADO E INOVAÇÃO A SEU SERVIÇO',
    expandedDescription: 'Com um legado de mais de duas décadas e um portfólio robusto de clientes renomados, a NEOOMMA combina tradição e uma busca incessante por inovação. Atuamos em sinergia com diversos escritórios de arquitetura e aprimoramos constantemente nossas práticas, incorporando as melhores tecnologias, metodologias e parceiros. Assim, garantimos que seu projeto seja não apenas atual, mas verdadeiramente preparado para o futuro.'
  }
];

export default function WhyChooseSection({ data }: WhyChooseSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  if (!data) return null;

  const benefits = data.benefits && data.benefits.length > 0 ? data.benefits : defaultBenefits;

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <SectionBackground variant="amber" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        {data.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
                {data.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Benefits Grid */}
        {benefits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const isExpanded = expandedItems.has(idx);
              const hasExpandedContent = benefit.expandedDescription || defaultBenefits[idx]?.expandedDescription;

              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-6 overflow-hidden group ring-1 ring-gray-200 bg-gradient-to-br from-white via-gray-50 to-amber-50 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_28px_-6px_rgba(251,191,36,0.25)] transition-shadow"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.28),transparent_65%)]" />
                  <div className="relative flex items-start justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gray-100 ring-1 ring-gray-200 grid place-items-center group-hover:ring-amber-400/40 group-hover:bg-amber-400/10 transition-colors">
                      <span className="text-[11px] font-semibold text-amber-500" style={{ fontFamily: 'Exo, Inter' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <h3 className="relative text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                    {benefit.title}
                  </h3>
                  <p className="relative text-gray-600 text-sm font-medium leading-relaxed group-hover:text-gray-700 transition-colors uppercase tracking-wide" style={{ fontFamily: 'Inter' }}>
                    {benefit.description}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && hasExpandedContent && (
                    <div className="relative mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                        {benefit.expandedDescription || defaultBenefits[idx]?.expandedDescription}
                      </p>
                    </div>
                  )}

                  {/* Ver mais button */}
                  {hasExpandedContent && (
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="relative mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
                      style={{ fontFamily: 'Exo, Inter' }}
                    >
                      <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Entrar em contato
          </a>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-6 py-3 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Agendar reunião
          </a>
        </div>
      </div>
    </section>
  );
}
