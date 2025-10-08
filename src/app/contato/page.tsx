import React from 'react';
import { getContatoData, getSiteSettings } from '@/lib/sanity';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export const revalidate = 60;

export default async function ContatoPage() {
  const data = await getContatoData();
  const siteSettings = await getSiteSettings();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p>Conteúdo não encontrado. Configure no Sanity Studio.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Entre em <span className="text-amber-400">Contato</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Estamos prontos para transformar seu projeto em realidade
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=2070&auto=format&fit=crop" alt="Canteiro de obras" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-6 sm:px-10 py-10 md:py-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4" style={{ fontFamily: 'Exo, Inter' }}>
              Descubra como garantir a excelência do seu próximo investimento
            </h2>
            <p className="text-base text-white/70 mb-8" style={{ fontFamily: 'Inter' }}>
              Preencha seus dados e agende uma conversa estratégica hoje mesmo.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input type="text" required placeholder="Nome" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none" style={{ fontFamily: 'Inter' }} />
              </div>
              <div className="relative">
                <input type="tel" required placeholder="Telefone" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none" style={{ fontFamily: 'Inter' }} />
              </div>
              <div className="relative">
                <input type="email" required placeholder="E-mail" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none" style={{ fontFamily: 'Inter' }} />
              </div>
              <div className="relative">
                <input type="text" placeholder="Selecione o tipo de serviço" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none" style={{ fontFamily: 'Inter' }} />
              </div>
              <div className="md:col-span-2">
                <textarea rows={5} placeholder="Conte um pouco sobre o projeto, prazos e local..." className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none" style={{ fontFamily: 'Inter' }}></textarea>
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: 'Inter' }}>
                  <span>Seus dados estão protegidos e não serão compartilhados.</span>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-tight bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/40 hover:from-amber-500/30 hover:to-amber-500/30 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  <span>Enviar Mensagem</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Exo, Inter' }}>
            Informações de Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            {data.address && (
              <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 transition-all">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>Endereço</h3>
                <p className="text-white/70 text-base whitespace-pre-line" style={{ fontFamily: 'Inter' }}>{data.address}</p>
              </div>
            )}

            {/* Phone */}
            {data.phone && (
              <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 transition-all">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>Telefone</h3>
                <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="text-white/70 text-base hover:text-amber-400 transition" style={{ fontFamily: 'Inter' }}>
                  {data.phone}
                </a>
              </div>
            )}

            {/* Emails */}
            {data.emails && data.emails.length > 0 && (
              <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 transition-all">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>E-mails</h3>
                <div className="space-y-2">
                  {data.emails.map((item: { label: string; email: string }, index: number) => (
                    <div key={index}>
                      <p className="text-xs text-white/50 mb-1" style={{ fontFamily: 'Inter' }}>{item.label}</p>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-white/70 text-base hover:text-amber-400 transition"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Media */}
      {siteSettings?.socialMedia && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Exo, Inter' }}>
                Redes Sociais
              </h2>
              <p className="text-base text-white/70 mb-10" style={{ fontFamily: 'Inter' }}>
                Acompanhe nossos projetos e novidades
              </p>

              <div className="flex justify-center gap-4">
                {siteSettings.socialMedia.instagram && (
                  <a
                    href={siteSettings.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-white/70 hover:text-amber-400 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                )}
                {siteSettings.socialMedia.linkedin && (
                  <a
                    href={siteSettings.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-white/70 hover:text-amber-400 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                )}
                {siteSettings.socialMedia.facebook && (
                  <a
                    href={siteSettings.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-white/70 hover:text-amber-400 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
