import React from 'react';
import Link from 'next/link';
import { Building2, Heart, Landmark, Briefcase, ShoppingCart, Factory } from 'lucide-react';

export const revalidate = 60;

export default async function AreasAtuacaoPage() {
  const sectors = [
    {
      icon: Factory,
      title: 'Logística e Distribuição',
      description: 'Soluções completas para centros de distribuição, armazéns e terminais logísticos com foco em eficiência operacional.',
      image: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 2.jpg',
      features: ['Armazéns automatizados', 'Centros de distribuição', 'Terminais logísticos'],
    },
    {
      icon: Heart,
      title: 'Saúde',
      description: 'Infraestrutura hospitalar e clínicas com padrões técnicos rigorosos e conformidade com normas de saúde.',
      image: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 3.jpg',
      features: ['Hospitais e clínicas', 'Centros médicos', 'Laboratórios'],
    },
    {
      icon: Landmark,
      title: 'Infraestrutura Pública',
      description: 'Obras públicas que transformam comunidades e melhoram a qualidade de vida urbana com excelência e responsabilidade.',
      image: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 1.jpg',
      features: ['Praças e espaços públicos', 'Equipamentos comunitários', 'Revitalização urbana'],
    },
    {
      icon: Briefcase,
      title: 'Corporativo',
      description: 'Escritórios e espaços corporativos modernos que promovem produtividade e bem-estar dos colaboradores.',
      image: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 3.jpg',
      features: ['Escritórios corporativos', 'Campus empresariais', 'Coworkings'],
    },
    {
      icon: ShoppingCart,
      title: 'Varejo',
      description: 'Projetos comerciais que combinam funcionalidade e experiência do cliente em ambientes de alto fluxo.',
      image: '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg',
      features: ['Shopping centers', 'Lojas de varejo', 'Espaços comerciais'],
    },
    {
      icon: Building2,
      title: 'Industrial',
      description: 'Plantas industriais e facilities com infraestrutura robusta para operações de alta complexidade técnica.',
      image: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 5.jpg',
      features: ['Plantas industriais', 'Facilities', 'Retrofits industriais'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 2.jpg"
            alt="Áreas de Atuação OMMA"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Áreas de <span className="text-amber-400">Atuação</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Atuamos em diversos segmentos do mercado, entregando soluções especializadas e personalizadas para cada tipo de projeto. Nossa expertise abrange desde infraestrutura pública até facilities corporativos e industriais.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-400/40 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Exo, Inter' }}>
                      {sector.title}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
                      {sector.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {sector.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/60" style={{ fontFamily: 'Inter' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Pronto para iniciar seu <span className="text-amber-400">projeto</span>?
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-8" style={{ fontFamily: 'Inter' }}>
            Entre em contato conosco e descubra como podemos transformar sua visão em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-400 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
