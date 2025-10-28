import React from 'react';
import { Trophy, Heart, Users, Zap, Award, Book } from 'lucide-react';
import { getTrabalheConoscoData, urlFor } from '@/lib/sanity';

export const revalidate = 60;

const iconMap = {
  trophy: Trophy,
  heart: Heart,
  users: Users,
  zap: Zap,
  award: Award,
  book: Book,
};

export default async function TrabalheConoscoPage() {
  const data = await getTrabalheConoscoData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  const benefits = data.benefits || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          {data.heroImage ? (
            <img
              src={urlFor(data.heroImage).url()}
              alt="Trabalhe Conosco OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          ) : (
            <img
              src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 6.jpg"
              alt="Trabalhe Conosco OMMA"
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
            {data.heroTitle || 'Trabalhe'} <span className="text-amber-400">Conosco</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            {data.description || 'Junte-se a uma equipe de profissionais experientes e apaixonados por transformar desafios em realizações. Na OMMA, você encontrará um ambiente que valoriza talento, dedicação e inovação.'}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      {benefits.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
              Por que <span className="text-amber-400">trabalhar conosco</span>?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit: { icon?: string; title: string; description: string }, index: number) => {
                const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Users;
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
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
              {data.formTitle || 'Envie seu'} <span className="text-amber-400">{data.formTitle ? '' : 'currículo'}</span>
            </h2>
            <p className="text-base text-gray-700" style={{ fontFamily: 'Inter' }}>
              {data.formDescription || 'Preencha o formulário abaixo e faça parte da nossa equipe'}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white backdrop-blur p-8 md:p-10">
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-500 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-500 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              {/* Phone and Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-500 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Cargo Pretendido *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-500 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                  Anexar Currículo (PDF, DOC, DOCX) *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500 file:cursor-pointer"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter' }}>
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Conte um pouco sobre sua experiência e objetivos profissionais..."
                  className="w-full rounded-xl bg-white border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-500 outline-none resize-none"
                  style={{ fontFamily: 'Inter' }}
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter' }}>
                  <span>Seus dados estão protegidos e não serão compartilhados.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-tight bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/40 hover:from-amber-500/30 hover:to-amber-500/30 transition-colors"
                  style={{ fontFamily: 'Exo, Inter' }}
                >
                  <span>Enviar Candidatura</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
