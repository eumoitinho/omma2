'use client';
import React from 'react';
import type { SanityImage } from '@/types/sanity';

interface ContactFormSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    backgroundImage?: SanityImage;
  };
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  if (!data) return null;

  return (
    <section id="contato" className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=2070&auto=format&fit=crop" alt="Canteiro de obras" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0b0b0f]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-6 sm:px-10 py-10 md:py-12 shadow-2xl">
          {data.title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white" style={{ fontFamily: 'Exo, Inter' }}>{data.title}</h2>
          )}
          {data.subtitle && (
            <p className="mt-4 text-base text-white/70" style={{ fontFamily: 'Inter' }}>{data.subtitle}</p>
          )}

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
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
  );
}
