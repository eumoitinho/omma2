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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg"
            alt="OMMA Engenharia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Sobre a <span className="text-amber-400">OMMA Engenharia</span>
          </h1>

          {/* Intro Content */}
          <div className="max-w-4xl mx-auto text-center">
            {introTexts.length > 0 ? (
              introTexts.map((text, i) => (
                <p key={i} className="mt-6 text-base md:text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Inter' }}>
                  {text}
                </p>
              ))
            ) : (
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Inter' }}>
                Com mais de 24 anos de experiência, a OMMA Engenharia é referência em gestão e execução de obras de alta complexidade. Nossa expertise abrange desde projetos corporativos até infraestrutura pública, sempre com foco em qualidade, prazo e inovação.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Purpose Section with Images */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-2xl">
                <img
                  src="/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 2.jpg"
                  alt="OMMA Engenharia - Projeto Unimed"
                  className="h-[320px] md:h-[420px] w-full object-cover"
                />
                <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-amber-500/50"></div>
              </div>
              <div className="hidden md:flex absolute -left-8 bottom-16">
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                  <img
                    src="/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 3.jpg"
                    alt="Projeto Ultracargo"
                    className="h-40 w-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-amber-400 mb-6" style={{ fontFamily: 'Exo, Inter' }}>
                {data.purposeSection?.title || 'Nossa Missão'}
              </h2>

              {purposeTexts.length > 0 ? (
                purposeTexts.map((text, i) => (
                  <p key={i} className="mt-4 text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                    {text}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                    Entregar projetos de infraestrutura com excelência técnica, cumprindo prazos e superando expectativas. Transformamos desafios complexos em soluções inovadoras através de gestão especializada e equipe altamente qualificada.
                  </p>
                  <p className="mt-4 text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                    Nossa abordagem integra tecnologia, sustentabilidade e segurança em cada etapa, garantindo resultados que geram valor real para nossos clientes.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="resultados" className="py-12 border-t border-white/10 relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-amber-300/5" />
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(251,191,36,0.18),transparent_60%)] opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Resultados que comprovam nossa expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '+27', label: 'anos de experiência', description: 'Tradição e inovação a serviço do seu Projeto corporativo.' },
              { number: '+1000', label: 'de obras entregues', description: 'Experiência comprovada em Projetos de grande escala.' },
              { number: '+750 mil m²', label: 'de obras executadas', description: 'Consolidação da OMMA como referência no setor de engenharia.' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`relative rounded-2xl p-6 anim-fadeSlideUp overflow-hidden group ring-1 ring-gray-200 bg-gradient-to-br from-white via-gray-50/30 to-amber-400/10 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_28px_-6px_rgba(251,191,36,0.25)] transition-shadow`}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.28),transparent_65%)]" />
                <div className="relative text-3xl font-bold text-amber-400 drop-shadow" style={{ fontFamily: 'Exo, Inter' }}>{s.number}</div>
                <div className="relative text-gray-900 mt-1 font-medium">{s.label}</div>
                <p className="relative text-gray-700 mt-3 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Nossos <span className="text-amber-400">Projetos</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 2.jpg', title: 'Movile - Campus Corporativo' },
              { img: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 2.jpg', title: 'Praça Paraisópolis' },
              { img: '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 3.jpg', title: 'Ivanhoé Cambridge' },
              { img: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 4.jpg', title: 'Unimed Hospital' },
              { img: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 4.jpg', title: 'Ultracargo Logística' },
              { img: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 5.jpg', title: 'Movile Inovação' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400/40 transition-all">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-base font-semibold text-white" style={{ fontFamily: 'Exo, Inter' }}>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Nossos <span className="text-amber-400">Valores</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excelência', desc: 'Compromisso com a mais alta qualidade em todos os projetos' },
              { title: 'Inovação', desc: 'Soluções criativas e tecnológicas para desafios complexos' },
              { title: 'Transparência', desc: 'Comunicação clara e honesta em todas as etapas' },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-amber-400/40 transition-all">
                <h3 className="text-2xl font-bold text-amber-400 mb-4" style={{ fontFamily: 'Exo, Inter' }}>{value.title}</h3>
                <p className="text-base text-gray-700" style={{ fontFamily: 'Inter' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
