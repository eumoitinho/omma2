import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Target, Users, Sparkles } from 'lucide-react';

export const revalidate = 60;

export default async function MetodologiaPage() {
  const phases = [
    {
      number: 1,
      title: 'Planejamento',
      description: 'Análise detalhada do projeto e definição de estratégias',
      steps: ['Levantamento técnico', 'Definição de escopo', 'Cronograma inicial', 'Orçamento detalhado'],
    },
    {
      number: 2,
      title: 'Projeto',
      description: 'Desenvolvimento técnico e compatibilização',
      steps: ['Projetos executivos', 'Compatibilização', 'Aprovações legais', 'Especificações técnicas'],
    },
    {
      number: 3,
      title: 'Execução',
      description: 'Gestão completa da obra com acompanhamento técnico',
      steps: ['Mobilização de equipe', 'Gestão de fornecedores', 'Controle de qualidade', 'Relatórios semanais'],
    },
    {
      number: 4,
      title: 'Entrega',
      description: 'Finalização e handover completo',
      steps: ['Vistoria final', 'Documentação as-built', 'Treinamento operacional', 'Garantia e suporte'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 4.jpg"
            alt="Metodologia OMMA"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Nossa <span className="text-amber-400">Metodologia</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Desenvolvemos uma metodologia própria que garante excelência em cada etapa do projeto. Da concepção à entrega, seguimos processos rigorosos que asseguram qualidade, prazo e eficiência.
          </p>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-[68px] h-px bg-gradient-to-r from-amber-400/20 via-amber-400/40 to-amber-400/20"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {phases.map((phase) => (
                <div className="relative" key={phase.number}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-[60px] -translate-x-1/2">
                    <span className="block h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-400/30"></span>
                  </div>

                  {/* Phase Number */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-5xl font-bold tracking-tight text-amber-400/20" style={{ fontFamily: 'Exo, Inter' }}>
                      {phase.number < 10 ? `0${phase.number}` : phase.number}
                    </div>
                  </div>

                  {/* Phase Card */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-amber-400/40 transition-all">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                      {phase.description}
                    </p>

                    {/* Steps List */}
                    <ul className="space-y-2">
                      {phase.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700" style={{ fontFamily: 'Inter' }}>
                          <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Nossos <span className="text-amber-400">Diferenciais</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Foco em Resultados',
                description: 'Cumprimento rigoroso de prazos e orçamentos estabelecidos',
                image: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 1.jpg',
              },
              {
                icon: Users,
                title: 'Equipe Especializada',
                description: 'Profissionais experientes e certificados em gestão de obras',
                image: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 2.jpg',
              },
              {
                icon: Sparkles,
                title: 'Tecnologia Aplicada',
                description: 'Ferramentas modernas de gestão e acompanhamento em tempo real',
                image: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 4.jpg',
              },
              {
                icon: CheckCircle2,
                title: 'Qualidade Garantida',
                description: 'Processos certificados e controle de qualidade em todas as etapas',
                image: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 3.jpg',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-amber-400/40 transition-all">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Inter' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Pronto para trabalhar com <span className="text-amber-400">excelência</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8" style={{ fontFamily: 'Inter' }}>
            Entre em contato e descubra como nossa metodologia pode transformar seu projeto em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-400 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
