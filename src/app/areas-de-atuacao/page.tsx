import React from 'react';
import Link from 'next/link';
import { Briefcase, Rocket, Users, Heart, Dumbbell, Building2 } from 'lucide-react';
import SectorCarousel from '@/components/areas-atuacao/SectorCarousel';

export const revalidate = 60;

const imagesBySector = {
  corporativo: [
    '/areas-atuacao/corporativo/corporativo-1.jpg',
    '/areas-atuacao/corporativo/corporativo-2.jpg',
    '/areas-atuacao/corporativo/corporativo-3.jpg',
    '/areas-atuacao/corporativo/corporativo-4.jpg',
  ],
  startups: [
    '/areas-atuacao/startups/startups-1.jpg',
  ],
  coworking: [
    '/areas-atuacao/coworking/coworking-1.jpg',
  ],
  clinicas: [
    '/areas-atuacao/clinicas/clinicas-1.jpg',
  ],
  academias: [
    '/areas-atuacao/academias/academias-1.jpg',
  ],
  comercial: [
    '/areas-atuacao/comercial/comercial-1.jpg',
    '/areas-atuacao/comercial/comercial-2.jpg',
  ],
};

export default async function AreasAtuacaoPage() {
  const sectors = [
    {
      icon: Briefcase,
      title: 'Ambientes Corporativos',
      description: 'Espaços eficientes que equilibram foco e colaboração, fortalecendo a cultura e performance diária.',
      features: ['Escritórios corporativos', 'Campus empresariais', 'Salas de reunião'],
      images: imagesBySector.corporativo
    },
    {
      icon: Rocket,
      title: 'Startups & Scale-ups',
      description: 'Ambientes flexíveis e escaláveis que acompanham o crescimento e estimulam velocidade de execução.',
      features: ['Escritórios flexíveis', 'Espaços colaborativos', 'Áreas de inovação'],
      images: imagesBySector.startups
    },
    {
      icon: Users,
      title: 'Coworkings',
      description: 'Espaços multiuso desenhados para alta rotatividade, conforto e retenção de clientes e comunidades.',
      features: ['Estações de trabalho', 'Salas privativas', 'Áreas de convivência'],
      images: imagesBySector.coworking
    },
    {
      icon: Heart,
      title: 'Clínicas e Laboratórios',
      description: 'Ambientes humanizados, funcionais e normativos, com infraestrutura técnica precisa, segurança e fluxos otimizados para elevar a experiência e garantir alta confiabilidade.',
      features: ['Clínicas médicas', 'Laboratórios', 'Consultórios'],
      images: imagesBySector.clinicas
    },
    {
      icon: Dumbbell,
      title: 'Academias',
      description: 'Layouts projetados para o máximo desempenho e bem-estar dos usuários, unindo funcionalidade, segurança e conforto.',
      features: ['Academias de musculação', 'Estúdios fitness', 'Áreas de treinamento'],
      images: imagesBySector.academias
    },
    {
      icon: Building2,
      title: 'Edificações Comerciais',
      description: 'Edificações e galpões versáteis, desenvolvidos para atender operações de atacado e varejo com eficiência, praticidade e confiabilidade.',
      features: ['Lojas de varejo', 'Galpões comerciais', 'Centros de distribuição'],
      images: imagesBySector.comercial
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
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            Áreas de <span className="text-amber-400">Atuação</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Atuamos em diversos segmentos do mercado, entregando soluções especializadas e personalizadas para cada tipo de projeto. Nossa expertise abrange desde ambientes corporativos até edificações comerciais de alta performance.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-amber-400/40 transition-all p-6"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Inter' }}>
                    {sector.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {sector.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: 'Inter' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Image Carousel */}
                  <div className="mt-6">
                    <SectorCarousel
                      projectName={sector.title}
                      images={sector.images}
                    />
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
            Pronto para iniciar seu <span className="text-amber-400">projeto</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8" style={{ fontFamily: 'Inter' }}>
            Entre em contato conosco e descubra como podemos transformar sua visão em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-gray-200 hover:ring-gray-300"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
