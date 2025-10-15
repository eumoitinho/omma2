import React from 'react';
import Link from 'next/link';
import { Briefcase, Rocket, Users, Heart, Dumbbell, Building2 } from 'lucide-react';
import SectorCarousel from '@/components/areas-atuacao/SectorCarousel';
import { getAreasAtuacaoData, urlFor } from '@/lib/sanity';

export const revalidate = 60;

const iconMap = {
  briefcase: Briefcase,
  rocket: Rocket,
  users: Users,
  heart: Heart,
  dumbbell: Dumbbell,
  building2: Building2,
};

export default async function AreasAtuacaoPage() {
  const data = await getAreasAtuacaoData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  const sectors = data.sectors || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          {data.heroImage ? (
            <img
              src={urlFor(data.heroImage).url()}
              alt="Áreas de Atuação OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          ) : (
            <img
              src="/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 2.jpg"
              alt="Áreas de Atuação OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            {data.heroTitle || 'Áreas de'} <span className="text-amber-400">Atuação</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            {data.introText || 'Atuamos em diversos segmentos do mercado, entregando soluções especializadas e personalizadas para cada tipo de projeto. Nossa expertise abrange desde ambientes corporativos até edificações comerciais de alta performance.'}
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector: any, index: number) => {
              const IconComponent = iconMap[sector.icon as keyof typeof iconMap] || Briefcase;
              const images = sector.images?.map((img: any) => urlFor(img).url()) || [];

              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-amber-400/40 transition-all p-6"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-amber-400" />
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
                  {sector.features && sector.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {sector.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: 'Inter' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Image Carousel */}
                  {images.length > 0 && (
                    <div className="mt-6">
                      <SectorCarousel
                        projectName={sector.title}
                        images={images}
                      />
                    </div>
                  )}
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
            {data.ctaTitle || 'Pronto para iniciar seu'} <span className="text-amber-400">{data.ctaTitle ? '' : 'projeto'}</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8" style={{ fontFamily: 'Inter' }}>
            {data.ctaDescription || 'Entre em contato conosco e descubra como podemos transformar sua visão em realidade.'}
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-gray-200 hover:ring-gray-300"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            {data.ctaButtonText || 'Fale Conosco'}
          </Link>
        </div>
      </section>
    </div>
  );
}
