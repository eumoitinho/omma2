"use client";
import React, { useState, FormEvent, useEffect } from 'react';
import { trackEvent, trackWithAliases } from '@/lib/gtm';

interface ContactFormData {
  nome: string;
  email: string;
  empresa: string;
  orcamento: string;
  prazo: string;
  servico: string;
  detalhes: string;
}

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>({
    nome: '',
    email: '',
    empresa: '',
    orcamento: '250k-500k',
    prazo: 'asap',
    servico: 'Obra completa',
    detalhes: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  // Track form impression once
  useEffect(() => {
    trackEvent({
      event: 'form_view',
      form_id: 'contact_form',
      event_category: 'engagement',
      event_label: 'Contact Form View'
    });
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    trackEvent({
      event: 'form_submit_attempt',
      form_id: 'contact_form',
      event_category: 'lead',
      event_label: 'Contact Form Submit Attempt'
    });
    try {
      // Placeholder: simulation of async submission
      await new Promise((r) => setTimeout(r, 800));
      setStatus('ok');
      // Emit success + alias (lead_submit)
      trackWithAliases({
        event: 'form_submit_success',
        form_id: 'contact_form',
        event_category: 'lead',
        event_label: 'Contact Form Success'
      }, ['lead_submit']);

      // Hashed identification (only after success)
      try {
        if (typeof window !== 'undefined' && data.email) {
          const encoder = new TextEncoder();
          const bytes = encoder.encode(data.email.trim().toLowerCase());
          const digest = await crypto.subtle.digest('SHA-256', bytes);
          const hashArray = Array.from(new Uint8Array(digest));
          const email_hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          trackEvent({
            event: 'user_identify',
            event_category: 'user',
            event_label: 'contact_form',
            email_hash,
            source: 'contact_form'
          });
        }
      } catch {}
    } catch {
      setStatus('error');
      trackEvent({
        event: 'form_submit_error',
        form_id: 'contact_form',
        event_category: 'lead',
        event_label: 'Contact Form Error'
      });
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <form
      className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Nome</label>
        <input
          type="text"
          required
          name="nome"
          value={data.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>E-mail</label>
        <input
          type="email"
            required
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="voce@empresa.com"
          className="w-full placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Empresa</label>
        <input
          type="text"
          name="empresa"
          value={data.empresa}
          onChange={handleChange}
          placeholder="Nome da empresa"
          className="w-full placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Orçamento estimado</label>
        <select
          name="orcamento"
          value={data.orcamento}
          onChange={handleChange}
          className="w-full appearance-none outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        >
          <option value="250k-500k">R$250k–R$500k</option>
          <option value="500k-1m">R$500k–R$1M</option>
          <option value="1m-3m">R$1M–R$3M</option>
          <option value="custom">Personalizado</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Prazo desejado</label>
        <select
          name="prazo"
          value={data.prazo}
          onChange={handleChange}
          className="w-full appearance-none outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        >
          <option value="asap">Imediato</option>
          <option value="1-2m">1–2 meses</option>
          <option value="3m+">3+ meses</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Serviços</label>
        <select
          name="servico"
          value={data.servico}
          onChange={handleChange}
          className="w-full appearance-none outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        >
          <option>Obra completa</option>
          <option>Retrofit</option>
          <option>Expansão</option>
          <option>Instalações & Complementares</option>
          <option>Consultoria técnica</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2 tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>Detalhes do projeto</label>
        <textarea
          rows={3}
          name="detalhes"
          value={data.detalhes}
          onChange={handleChange}
          placeholder="Escopo, metas, localização, metragem…"
          className="w-full placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl px-3 py-2.5"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-xs text-neutral-600" style={{ fontFamily: 'Inter' }}>Retornamos em até 24h úteis com próximos passos.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex gap-2 ring-1 ring-amber-400/70 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition text-sm font-medium text-neutral-900 bg-amber-300 rounded-xl px-4 py-2.5 shadow hover:shadow-amber-400/40 items-center"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {status === 'sending' ? (
            <svg className="animate-spin h-4 w-4 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          )}
          {status === 'ok' ? 'Enviado!' : status === 'error' ? 'Erro' : 'Enviar interesse'}
        </button>
      </div>
      {status === 'ok' && (
        <div className="sm:col-span-2 text-xs text-emerald-700 bg-emerald-100 border border-emerald-300 rounded-lg px-3 py-2" style={{ fontFamily: 'Inter' }}>
          Recebido com sucesso. Entraremos em contato.
        </div>
      )}
      {status === 'error' && (
        <div className="sm:col-span-2 text-xs text-red-700 bg-red-100 border border-red-300 rounded-lg px-3 py-2" style={{ fontFamily: 'Inter' }}>
          Ocorreu um erro ao enviar. Tente novamente.
        </div>
      )}
    </form>
  );
}
