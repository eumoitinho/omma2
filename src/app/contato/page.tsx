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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {data.heroTitle && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
              Entre em <span className="text-amber-400">Contato</span>
            </h1>
          )}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
            Estamos prontos para transformar seu projeto em realidade
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            {data.address && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Exo, Inter' }}>Endereço</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{data.address}</p>
                </div>
              </div>
            )}

            {/* Phone */}
            {data.phone && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Exo, Inter' }}>Telefone</h3>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-white/70 text-sm hover:text-amber-400 transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Emails */}
            {data.emails && data.emails.length > 0 && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mb-4 mx-auto">
                    <Mail className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Exo, Inter' }}>E-mails</h3>
                  <div className="space-y-2">
                    {data.emails.map((item: { label: string; email: string }, index: number) => (
                      <div key={index}>
                        <p className="text-xs text-white/50">{item.label}</p>
                        <a
                          href={`mailto:${item.email}`}
                          className="text-white/70 text-sm hover:text-amber-400 transition-colors"
                        >
                          {item.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Media */}
      {siteSettings?.socialMedia && (
        <section className="pb-20 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Exo, Inter' }}>
              Nossas <span className="text-amber-400">Redes Sociais</span>
            </h2>
            <p className="text-center text-white/70 mb-10">Acompanhe nossos projetos e novidades</p>

            <div className="flex justify-center gap-6">
              {siteSettings.socialMedia.instagram && (
                <a
                  href={siteSettings.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all">
                    <Instagram className="w-8 h-8" />
                  </div>
                </a>
              )}
              {siteSettings.socialMedia.linkedin && (
                <a
                  href={siteSettings.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all">
                    <Linkedin className="w-8 h-8" />
                  </div>
                </a>
              )}
              {siteSettings.socialMedia.facebook && (
                <a
                  href={siteSettings.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all">
                    <Facebook className="w-8 h-8" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
