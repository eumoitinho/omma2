import React from 'react';
import Link from 'next/link';
import { Building2, Heart, Landmark, Briefcase, ShoppingCart, Factory } from 'lucide-react';
import SectorCarousel from '@/components/areas-atuacao/SectorCarousel';

export const revalidate = 60;

const imagesByClient = {
  unimed: [
    '/atuacao/image_2_uni2-1.jpg',
    '/atuacao/image_3_uni3-1.jpg',
    '/atuacao/image_4_uni4-1.jpg',
    '/atuacao/image_21_uni1-1.jpg',
    '/atuacao/image_22_uni2-1.jpg',
    '/atuacao/image_23_uni3-1.jpg',
    '/atuacao/image_24_uni4-1.jpg',
  ],
  ambev: [
    '/atuacao/image_5_ambev1.jpg',
    '/atuacao/image_6_ambev2.jpg',
    '/atuacao/image_7_ambev3.jpg',
    '/atuacao/image_8_ambev4.jpg',
    '/atuacao/image_9_ambev5.jpg',
    '/atuacao/image_25_ambev1.jpg',
    '/atuacao/image_26_ambev2.jpg',
    '/atuacao/image_27_ambev3.jpg',
  ],
  melhoramentos: [
    '/atuacao/image_10_melhoramentos1.jpg',
    '/atuacao/image_11_melhoramentos2.jpg',
    '/atuacao/image_12_melhoramentos3.jpg',
    '/atuacao/image_13_melhoramentos4.jpg',
  ],
  movile: [
    '/atuacao/image_14_movile1-1.jpg',
    '/atuacao/image_15_movile2-1.jpg',
    '/atuacao/image_16_movile3-1.jpg',
  ],
  scor: [
    '/atuacao/image_17_scor1.jpg',
    '/atuacao/image_18_scor2.jpg',
    '/atuacao/image_19_scor3.jpg',
    '/atuacao/image_20_scor4.jpg',
  ],
  fecomercio: [
    '/atuacao/image_28_fcomercio3.jpg',
    '/atuacao/image_29_fcomercio4.jpg',
    '/atuacao/image_30_fcomercio5.jpg',
    '/atuacao/image_38_fcomercio1.jpg',
    '/atuacao/image_39_fcomercio2.jpg',
    '/atuacao/image_40_fcomercio3.jpg',
    '/atuacao/image_41_fcomercio4.jpg',
    '/atuacao/image_42_fcomercio5.jpg',
  ],
  dante: [
    '/atuacao/image_31_dante1.jpg',
    '/atuacao/image_32_dante2.jpg',
    '/atuacao/image_33_dante3.jpg',
    '/atuacao/image_34_dante4.jpg',
    '/atuacao/image_35_dante5.jpg',
    '/atuacao/image_36_dante6.jpg',
    '/atuacao/image_37_dante7.jpg',
    '/atuacao/image_43_dante1.jpg',
    '/atuacao/image_44_dante2.jpg',
    '/atuacao/image_45_dante3.jpg',
  ],
  praca: [
    '/atuacao/image_46_praca7.jpg',
    '/atuacao/image_47_praca8.jpg',
    '/atuacao/image_48_praca9.jpg',
    '/atuacao/image_49_praca1.jpg',
    '/atuacao/image_50_praca2.jpg',
    '/atuacao/image_51_praca3.jpg',
    '/atuacao/image_52_praca4.jpg',
    '/atuacao/image_53_praca5.jpg',
    '/atuacao/image_54_praca6.jpg',
  ],
  nutrien: [
    '/atuacao/image_61_Nutrien-Uberlandia-6-1.jpg',
    '/atuacao/image_62_Nutrien-Uberlandia-7-1-1024x768.jpg',
    '/atuacao/image_63_Nutrien-Uberlandia-8.jpg',
    '/atuacao/image_74_Nutrien-Uberlandia-1.jpg',
    '/atuacao/image_75_Nutrien-Uberlandia-2-1.jpg',
    '/atuacao/image_76_Nutrien-Uberlandia-3-1.jpg',
    '/atuacao/image_77_Nutrien-Uberlandia-4-1.jpg',
    '/atuacao/image_78_Nutrien-Uberlandia-5-1.jpg',
  ],
  burgerKing: [
    '/atuacao/image_64_Burguer-King-Boituva-3-1.jpg',
    '/atuacao/image_65_Burguer-King-Pamplona-1-1.jpg',
    '/atuacao/image_66_Burguer-King-Pamplona-2-1.jpg',
    '/atuacao/image_67_Burguer-King-Pamplona-3-1.jpg',
    '/atuacao/image_68_Burguer-King-Pamplona-4-1.jpg',
  ],
  misha: [
    '/atuacao/image_69_Misha-1.jpg',
    '/atuacao/image_70_Misha-2.jpg',
    '/atuacao/image_71_Misha-3.jpg',
    '/atuacao/image_72_Misha-4.jpg',
    '/atuacao/image_73_Misha-5.jpg',
  ],
};

export default async function AreasAtuacaoPage() {
  const sectors = [
    {
      icon: Heart,
      title: 'Saúde',
      description: 'Infraestrutura hospitalar e clínicas com padrões técnicos rigorosos e conformidade com normas de saúde.',
      features: ['Hospitais e clínicas', 'Centros médicos', 'Laboratórios'],
      projects: [
        { name: 'Unimed', images: imagesByClient.unimed },
      ]
    },
    {
      icon: Briefcase,
      title: 'Corporativo',
      description: 'Escritórios e espaços corporativos modernos que promovem produtividade e bem-estar dos colaboradores.',
      features: ['Escritórios corporativos', 'Campus empresariais', 'Coworkings'],
      projects: [
        { name: 'Movile', images: imagesByClient.movile },
        { name: 'SCOR', images: imagesByClient.scor },
        { name: 'Fecomércio', images: imagesByClient.fecomercio },
      ]
    },
    {
      icon: Factory,
      title: 'Industrial e Logística',
      description: 'Plantas industriais e facilities com infraestrutura robusta para operações de alta complexidade técnica.',
      features: ['Plantas industriais', 'Centros de distribuição', 'Armazéns automatizados'],
      projects: [
        { name: 'Ambev', images: imagesByClient.ambev },
        { name: 'Nutrien', images: imagesByClient.nutrien },
        { name: 'Melhoramentos', images: imagesByClient.melhoramentos },
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Varejo',
      description: 'Projetos comerciais que combinam funcionalidade e experiência do cliente em ambientes de alto fluxo.',
      features: ['Shopping centers', 'Lojas de varejo', 'Restaurantes'],
      projects: [
        { name: 'Burger King', images: imagesByClient.burgerKing },
        { name: 'Misha', images: imagesByClient.misha },
      ]
    },
    {
      icon: Landmark,
      title: 'Infraestrutura Pública',
      description: 'Obras públicas que transformam comunidades e melhoram a qualidade de vida urbana com excelência e responsabilidade.',
      features: ['Praças e espaços públicos', 'Equipamentos comunitários', 'Revitalização urbana'],
      projects: [
        { name: 'Praça da Cidadania', images: imagesByClient.praca },
        { name: 'Dante Pazzanese', images: imagesByClient.dante },
      ]
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

      {/* Sectors Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
          {sectors.map((sector, sectorIndex) => {
            const Icon = sector.icon;
            return (
              <div key={sectorIndex} className="space-y-8">
                {/* Sector Header */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Exo, Inter' }}>
                      {sector.title}
                    </h2>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed mb-4" style={{ fontFamily: 'Inter' }}>
                      {sector.description}
                    </p>
                    <ul className="flex flex-wrap gap-3">
                      {sector.features.map((feature, i) => (
                        <li key={i} className="inline-flex items-center gap-2 text-sm text-white/60 bg-white/5 border border-white/10 rounded-full px-4 py-2" style={{ fontFamily: 'Inter' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Projects Grid with Carousels */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sector.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-400/40 transition-all p-6"
                    >
                      <SectorCarousel
                        projectName={project.name}
                        images={project.images}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
