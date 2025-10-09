import React from 'react';

export const revalidate = 60;

export default async function TrabalheConoscoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 6.jpg"
            alt="Trabalhe Conosco OMMA"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Trabalhe <span className="text-amber-400">Conosco</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80 text-center max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Junte-se a uma equipe de profissionais experientes e apaixonados por transformar desafios em realizações. Na OMMA, você encontrará um ambiente que valoriza talento, dedicação e inovação.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Exo, Inter' }}>
              Envie seu <span className="text-amber-400">currículo</span>
            </h2>
            <p className="text-base text-white/70" style={{ fontFamily: 'Inter' }}>
              Preencha o formulário abaixo e faça parte da nossa equipe
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur p-8 md:p-10">
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              {/* Phone and Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                    Cargo Pretendido *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                  Anexar Currículo (PDF, DOC, DOCX) *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500 file:cursor-pointer"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Conte um pouco sobre sua experiência e objetivos profissionais..."
                  className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none resize-none"
                  style={{ fontFamily: 'Inter' }}
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <div className="text-xs text-white/50" style={{ fontFamily: 'Inter' }}>
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
