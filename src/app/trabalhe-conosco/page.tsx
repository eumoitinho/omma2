import React from 'react';
import { getTrabalheConoscoData } from '@/lib/sanity';

export const revalidate = 60;

export default async function TrabalheConoscoPage() {
  const data = await getTrabalheConoscoData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              Trabalhe <span className="text-amber-400">Conosco</span>
            </h1>
          )}

          {data.description && (
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
              {data.description}
            </p>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'Exo, Inter' }}>
            Por que trabalhar na <span className="text-amber-400">OMMA</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Crescimento', desc: 'Oportunidades reais de desenvolvimento profissional', icon: '📈' },
              { title: 'Inovação', desc: 'Trabalhe com as mais modernas tecnologias de construção', icon: '💡' },
              { title: 'Equipe', desc: 'Ambiente colaborativo com profissionais experientes', icon: '🤝' },
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-6 sm:px-8 py-8 md:py-10">
            {data.formTitle && (
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Exo, Inter' }}>
                {data.formTitle}
              </h2>
            )}

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Cargo Pretendido
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2">
                  Anexar Currículo (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500 file:cursor-pointer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-4 py-3 text-sm outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-white/50">
                  <span>Seus dados estão protegidos e não serão compartilhados.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors"
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
