'use client';
import React from 'react';

interface ContactFormSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    backgroundImage?: any;
  };
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  if (!data) return null;

  return (
    <section id="contato" className="relative">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=2070&auto=format&fit=crop" alt="Canteiro de obras" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0b0b0f]"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl">
          {data.title && (
            <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">{data.title}</h3>
          )}

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input type="text" required placeholder="Nome" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <div className="relative">
              <input type="tel" required placeholder="Telefone" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <div className="relative">
              <input type="email" required placeholder="E-mail" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <div className="relative">
              <input type="text" placeholder="Selecione o tipo de serviço" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <div className="md:col-span-2">
              <textarea rows={5} placeholder="Conte um pouco sobre o projeto, prazos e local..." className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none"></textarea>
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span>Seus dados estão protegidos e não serão compartilhados.</span>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors">
                <span>Enviar Mensagem</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
