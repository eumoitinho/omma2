# Sistema de Tagueamento Completo - OMMA Engenharia

Documentação do sistema de tagueamento integrado com GA4, Google Ads e Meta Pixel.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Estrutura de Eventos](#estrutura-de-eventos)
- [Implementação no Código](#implementação-no-código)
- [Container GTM Completo](#container-gtm-completo)
- [Meta Pixel](#meta-pixel)
- [Google Ads](#google-ads)
- [Formulário RD Station](#formulário-rd-station)
- [Testes e Validação](#testes-e-validação)

---

## Visão Geral

### Plataformas Integradas

1. **Google Analytics 4 (GA4)**: Analytics e comportamento
2. **Google Ads**: Conversões e remarketing
3. **Meta Pixel (Facebook)**: Conversões para Facebook/Instagram Ads
4. **RD Station**: Captura e nurturing de leads

### Fluxo de Dados

```
Usuário interage → trackEvent() → dataLayer
                                      ↓
                    ┌─────────────────┴─────────────────┐
                    ↓                 ↓                 ↓
                  GA4          Google Ads          Meta Pixel
```

---

## Estrutura de Eventos

### Eventos Principais

| Evento | GA4 | Google Ads | Meta Pixel | RD Station | Descrição |
|--------|-----|------------|------------|------------|-----------|
| `page_view` | ✅ | ✅ | ✅ | - | Visualização de página |
| `form_view` | ✅ | - | - | - | Formulário visível |
| `form_start` | ✅ | - | - | - | Usuário começou a preencher |
| `form_submit_attempt` | ✅ | - | - | - | Tentativa de envio |
| `form_submit_success` | ✅ | ✅ | ✅ | ✅ | Lead capturado |
| `form_submit_error` | ✅ | - | - | - | Erro no envio |
| `cta_click` | ✅ | ✅ | ✅ | - | Click em CTA principal |
| `phone_click` | ✅ | ✅ | ✅ | - | Click em telefone |
| `email_click` | ✅ | ✅ | ✅ | - | Click em email |
| `whatsapp_click` | ✅ | ✅ | ✅ | ✅ | Click em WhatsApp |
| `section_view` | ✅ | - | - | - | Seção visível |
| `scroll_depth` | ✅ | - | - | - | Profundidade de scroll |
| `user_identify` | ✅ | - | - | ✅ | Identificação pós-conversão |

---

## Implementação no Código

### 1. Atualizar `src/lib/gtm.ts`

Adicione as funções de tracking para todas as plataformas:

```typescript
// src/lib/gtm.ts
import { AnalyticsEventBase, ConsentStateRecord } from '@/types/analytics';

declare global {
  interface Window {
    dataLayer: any[];
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    RDStationTracking?: any;
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-XXXXXXXXXX';

// ===== DataLayer Functions =====

export function getDataLayer(): any[] {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushDL(event: AnalyticsEventBase) {
  if (typeof window === 'undefined') return;
  getDataLayer().push({ ...event, ts: Date.now() });
}

export function trackEvent(params: AnalyticsEventBase) {
  pushDL(params);
}

// ===== Form Tracking =====

export function trackFormView(formId: string, formName: string) {
  trackEvent({
    event: 'form_view',
    event_category: 'form',
    event_label: formName,
    form_id: formId,
    form_name: formName
  });
}

export function trackFormStart(formId: string, formName: string) {
  trackEvent({
    event: 'form_start',
    event_category: 'form',
    event_label: formName,
    form_id: formId,
    form_name: formName
  });
}

export function trackFormSubmitAttempt(formId: string, formName: string, formData?: any) {
  trackEvent({
    event: 'form_submit_attempt',
    event_category: 'form',
    event_label: formName,
    form_id: formId,
    form_name: formName,
    ...formData
  });
}

export function trackFormSubmitSuccess(formId: string, formName: string, formData?: any) {
  // GA4 Event
  trackEvent({
    event: 'form_submit_success',
    event_category: 'lead',
    event_label: formName,
    form_id: formId,
    form_name: formName,
    ...formData
  });

  // Alias para lead_submit
  trackEvent({
    event: 'lead_submit',
    event_category: 'lead',
    event_label: formName,
    form_id: formId,
    form_name: formName
  });

  // Meta Pixel - Lead Event
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: formName,
      content_category: 'lead_generation',
      value: 0,
      currency: 'BRL'
    });
  }
}

export function trackFormSubmitError(formId: string, formName: string, errorType?: string) {
  trackEvent({
    event: 'form_submit_error',
    event_category: 'form',
    event_label: formName,
    form_id: formId,
    form_name: formName,
    error_type: errorType || 'unknown'
  });
}

// ===== CTA Tracking =====

export function trackCTAClick(label: string, location: string) {
  trackEvent({
    event: 'cta_click',
    event_category: 'engagement',
    event_label: label,
    location: location
  });

  // Meta Pixel - Lead (soft conversion)
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: label,
      content_category: 'cta_click',
      value: 0,
      currency: 'BRL'
    });
  }
}

// ===== Contact Tracking =====

export function trackPhoneClick(phoneNumber: string) {
  trackEvent({
    event: 'phone_click',
    event_category: 'contact',
    event_label: phoneNumber,
    phone_number: phoneNumber
  });

  // Meta Pixel - Contact
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Click',
      content_category: 'phone',
      value: 0,
      currency: 'BRL'
    });
  }
}

export function trackEmailClick(email: string) {
  trackEvent({
    event: 'email_click',
    event_category: 'contact',
    event_label: email,
    email_address: email
  });

  // Meta Pixel - Contact
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      content_name: 'Email Click',
      content_category: 'email',
      value: 0,
      currency: 'BRL'
    });
  }
}

export function trackWhatsAppClick(phoneNumber?: string) {
  trackEvent({
    event: 'whatsapp_click',
    event_category: 'contact',
    event_label: 'WhatsApp Click',
    phone_number: phoneNumber || ''
  });

  // Meta Pixel - Contact
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp Click',
      content_category: 'whatsapp',
      value: 0,
      currency: 'BRL'
    });
  }
}

// ===== User Identification =====

export async function trackUserIdentify(email: string, source: string, additionalData?: any) {
  try {
    // Hash email com SHA-256
    const encoder = new TextEncoder();
    const bytes = encoder.encode(email.trim().toLowerCase());
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    const hashArray = Array.from(new Uint8Array(digest));
    const email_hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    trackEvent({
      event: 'user_identify',
      event_category: 'user',
      event_label: source,
      email_hash,
      source,
      ...additionalData
    });
  } catch (error) {
    console.error('Error hashing email:', error);
  }
}

// ===== RD Station Integration =====

export function trackRDStationConversion(data: {
  email: string;
  nome: string;
  empresa?: string;
  telefone?: string;
  conversion_identifier: string;
  tags?: string[];
}) {
  trackEvent({
    event: 'rd_conversion',
    event_category: 'rdstation',
    event_label: data.conversion_identifier,
    ...data
  });
}

// ===== Page View =====

let firstPageViewTs: number | null = null;

export function markPageViewTimestamp() {
  if (firstPageViewTs == null) firstPageViewTs = Date.now();
}

export function trackPageView(pageId: string, pageTitle?: string) {
  markPageViewTimestamp();

  trackEvent({
    event: 'page_view',
    event_category: 'navigation',
    event_label: pageId,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });

  // Meta Pixel PageView (já disparado no base code, mas podemos rastrear custom)
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

// ===== Timing =====

let firstCtaTs: number | null = null;

export function trackCtaWithTiming(e: AnalyticsEventBase) {
  if (firstCtaTs == null) {
    firstCtaTs = Date.now();
    if (firstPageViewTs) {
      const diff = firstCtaTs - firstPageViewTs;
      trackEvent({
        event: 'first_cta_click_time',
        event_category: 'timing',
        event_label: e.event_label || 'unknown_cta',
        ms_since_page_view: diff
      });
    }
  }
  trackEvent(e);
}

// ===== Consent Management =====

export function updateConsent(consent: ConsentStateRecord) {
  pushDL({ event: 'consent_update', consent });

  // Google consent
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', consent);
  }
}

export function initialConsentLoad() {
  const raw = typeof window !== 'undefined' ? localStorage.getItem('omma_consent_v1') : null;
  if (raw) {
    try {
      const parsed: ConsentStateRecord = JSON.parse(raw);
      updateConsent(parsed);
      return parsed;
    } catch {}
  }
  return null;
}

export function saveConsent(consent: ConsentStateRecord) {
  try { localStorage.setItem('omma_consent_v1', JSON.stringify(consent)); } catch {}
}

export function defaultDeniedConsent(): ConsentStateRecord {
  return {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted'
  };
}
```

### 2. Adicionar Meta Pixel Provider

Crie `src/components/MetaPixelProvider.tsx`:

```typescript
"use client";
import { useEffect } from 'react';
import { META_PIXEL_ID } from '@/lib/gtm';

export default function MetaPixelProvider() {
  useEffect(() => {
    if (!META_PIXEL_ID || typeof window === 'undefined') return;

    // Evitar dupla injeção
    if (document.getElementById('meta-pixel-script')) return;

    // Injetar Meta Pixel
    const script = document.createElement('script');
    script.id = 'meta-pixel-script';
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // NoScript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />
    `;
    document.body.appendChild(noscript);
  }, []);

  return null;
}
```

### 3. Atualizar Layout Principal

Edite `src/app/layout.tsx`:

```typescript
import GTMProvider from '@/components/GTMProvider';
import MetaPixelProvider from '@/components/MetaPixelProvider';
import ConsentBanner from '@/components/ConsentBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* Analytics Providers */}
        <GTMProvider />
        <MetaPixelProvider />
        <ConsentBanner />
      </body>
    </html>
  );
}
```

### 4. Atualizar ContactForm com RD Station

Edite `src/components/lp/ContactForm.tsx`:

```typescript
"use client";
import React, { useState, FormEvent, useEffect } from 'react';
import {
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormSubmitSuccess,
  trackFormSubmitError,
  trackUserIdentify,
  trackRDStationConversion
} from '@/lib/gtm';

interface ContactFormData {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
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
    telefone: '',
    orcamento: '250k-500k',
    prazo: 'asap',
    servico: 'Obra completa',
    detalhes: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [hasStarted, setHasStarted] = useState(false);

  const formId = 'contact_form';
  const formName = 'Formulário de Contato';

  // Track form view once
  useEffect(() => {
    trackFormView(formId, formName);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    // Track form start on first interaction
    if (!hasStarted && value.length > 0) {
      setHasStarted(true);
      trackFormStart(formId, formName);
    }

    setData((d) => ({ ...d, [name]: value }));
  }

  // Validação básica
  function validateForm(): boolean {
    const nomeValido = data.nome && data.nome.trim().length > 0;
    const emailValido = data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    const empresaValido = data.empresa && data.empresa.trim().length > 0;
    const telefoneValido = data.telefone && data.telefone.trim().length > 0;

    return nomeValido && emailValido && empresaValido && telefoneValido;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      trackFormSubmitError(formId, formName, 'validation_error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');

    // Track attempt
    trackFormSubmitAttempt(formId, formName, {
      empresa: data.empresa,
      orcamento: data.orcamento,
      prazo: data.prazo,
      servico: data.servico
    });

    try {
      // Aqui você enviaria para seu backend/API
      // Por enquanto, simulação
      await new Promise((r) => setTimeout(r, 1000));

      setStatus('ok');

      // Track success
      trackFormSubmitSuccess(formId, formName, {
        empresa: data.empresa,
        orcamento: data.orcamento,
        servico: data.servico
      });

      // User identification (hash)
      await trackUserIdentify(data.email, 'contact_form', {
        nome: data.nome,
        empresa: data.empresa
      });

      // RD Station conversion
      trackRDStationConversion({
        email: data.email,
        nome: data.nome,
        empresa: data.empresa,
        telefone: data.telefone,
        conversion_identifier: 'contact_form_submit',
        tags: ['lead', 'omma-engenharia', 'formulario-contato']
      });

    } catch (error) {
      setStatus('error');
      trackFormSubmitError(formId, formName, 'network_error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <form
      id={formId}
      className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Nome */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Nome *
        </label>
        <input
          type="text"
          required
          name="nome"
          value={data.nome}
          onChange={handleChange}
          placeholder="Seu nome completo"
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Email */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          E-mail *
        </label>
        <input
          type="email"
          required
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="voce@empresa.com"
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Empresa */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Empresa *
        </label>
        <input
          type="text"
          required
          name="empresa"
          value={data.empresa}
          onChange={handleChange}
          placeholder="Nome da empresa"
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Telefone */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Telefone *
        </label>
        <input
          type="tel"
          required
          name="telefone"
          value={data.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Orçamento */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Orçamento estimado
        </label>
        <select
          name="orcamento"
          value={data.orcamento}
          onChange={handleChange}
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none"
        >
          <option value="250k-500k">R$250k–R$500k</option>
          <option value="500k-1m">R$500k–R$1M</option>
          <option value="1m-3m">R$1M–R$3M</option>
          <option value="3m+">R$3M+</option>
          <option value="custom">Personalizado</option>
        </select>
      </div>

      {/* Prazo */}
      <div className="sm:col-span-1">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Prazo desejado
        </label>
        <select
          name="prazo"
          value={data.prazo}
          onChange={handleChange}
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none"
        >
          <option value="asap">Imediato</option>
          <option value="1-2m">1–2 meses</option>
          <option value="3-6m">3–6 meses</option>
          <option value="6m+">6+ meses</option>
        </select>
      </div>

      {/* Serviço */}
      <div className="sm:col-span-2">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Serviços de interesse
        </label>
        <select
          name="servico"
          value={data.servico}
          onChange={handleChange}
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none"
        >
          <option>Obra completa</option>
          <option>Retrofit</option>
          <option>Expansão</option>
          <option>Instalações & Complementares</option>
          <option>Consultoria técnica</option>
        </select>
      </div>

      {/* Detalhes */}
      <div className="sm:col-span-2">
        <label className="block text-[11px] font-semibold text-neutral-800 mb-2">
          Detalhes do projeto
        </label>
        <textarea
          rows={3}
          name="detalhes"
          value={data.detalhes}
          onChange={handleChange}
          placeholder="Escopo, metas, localização, metragem…"
          className="w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Submit */}
      <div className="sm:col-span-2 flex justify-between items-center">
        <p className="text-xs text-neutral-600">
          Retornamos em até 24h úteis.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 bg-amber-400 text-neutral-900 font-semibold rounded-xl hover:bg-amber-300 disabled:opacity-60 transition"
        >
          {status === 'sending' ? 'Enviando...' : status === 'ok' ? 'Enviado!' : 'Enviar'}
        </button>
      </div>

      {/* Feedback */}
      {status === 'ok' && (
        <div className="sm:col-span-2 text-xs text-emerald-700 bg-emerald-100 border border-emerald-300 rounded-lg px-3 py-2">
          ✅ Recebido! Entraremos em contato em breve.
        </div>
      )}
      {status === 'error' && (
        <div className="sm:col-span-2 text-xs text-red-700 bg-red-100 border border-red-300 rounded-lg px-3 py-2">
          ❌ Erro ao enviar. Verifique os campos e tente novamente.
        </div>
      )}
    </form>
  );
}
```

### 5. Adicionar Tracking de Links

Crie `src/components/TrackedLink.tsx`:

```typescript
"use client";
import Link from 'next/link';
import {
  trackCTAClick,
  trackPhoneClick,
  trackEmailClick,
  trackWhatsAppClick
} from '@/lib/gtm';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  type?: 'cta' | 'phone' | 'email' | 'whatsapp';
  label?: string;
  location?: string;
  className?: string;
}

export default function TrackedLink({
  href,
  children,
  type = 'cta',
  label,
  location,
  className
}: TrackedLinkProps) {
  function handleClick() {
    switch (type) {
      case 'phone':
        trackPhoneClick(href.replace('tel:', ''));
        break;
      case 'email':
        trackEmailClick(href.replace('mailto:', ''));
        break;
      case 'whatsapp':
        trackWhatsAppClick();
        break;
      case 'cta':
      default:
        trackCTAClick(label || children?.toString() || 'CTA', location || '');
        break;
    }
  }

  const isExternal = href.startsWith('http') || href.startsWith('tel:') ||
                     href.startsWith('mailto:') || href.includes('whatsapp');

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
```

### 6. Variáveis de Ambiente

Adicione em `.env.local`:

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX

# Meta Pixel
NEXT_PUBLIC_META_PIXEL_ID=684857207308306

# RD Station
NEXT_PUBLIC_RD_STATION_ID=your-rd-station-id
```

---

## Container GTM Completo

### Importação

1. Acesse seu GTM container
2. Admin → **Importar container**
3. Escolha o arquivo `docs/gtm-container-omma-complete.json`
4. Selecione workspace: **Novo** (recomendado)
5. Opção: **Substituir** (para container novo) ou **Mesclar** (para existente)
6. Confirmar

### Configuração Obrigatória

Após importar, configure estas variáveis com seus IDs reais:

1. **[OMMA] GA4 Measurement ID**: `G-XXXXXXXXXX`
2. **[OMMA] Google Ads Conversion ID**: `AW-XXXXXXXXXX`
3. **[OMMA] Meta Pixel ID**: `YOUR_PIXEL_ID`
4. **[OMMA] Google Ads Label - Form Submit**: Label da conversão de formulário
5. **[OMMA] Google Ads Label - CTA**: Label da conversão de CTA
6. **[OMMA] Google Ads Label - Phone**: Label da conversão de telefone
7. **[OMMA] Google Ads Label - WhatsApp**: Label da conversão de WhatsApp

### Labels do Google Ads

Para obter os labels de conversão:

1. Google Ads → **Ferramentas** → **Conversões**
2. Click na conversão desejada
3. Copie o **Label** (formato: `XXXXXXXXXXXXXXXX`)

---

## Implementação de Botão WhatsApp com RD Station

### HTML do Botão

```html
<!-- Botão WhatsApp com tracking -->
<a
  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações"
  class="whatsapp-button"
  onclick="trackWhatsAppClick()"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg><!-- Ícone WhatsApp --></svg>
  Falar no WhatsApp
</a>
```

### Script de Tracking (para páginas HTML estáticas)

```html
<script>
function trackWhatsAppClick() {
  // Captura dados do formulário (se preenchido)
  var nome = document.querySelector("#nome")?.value || "";
  var empresa = document.querySelector("#empresa")?.value || "";
  var email = document.querySelector("#email")?.value || "";
  var telefone = document.querySelector("#telefone")?.value || "";

  // Validação básica
  var nome_valido = nome && nome.trim().length > 0;
  var empresa_valido = empresa && empresa.trim().length > 0;
  var email_valido = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  var telefone_regex = /^(\+\d{2})?\s?(\(\d{2}\))?\s?(\d{4,5})(\-)(\d{4})$/;
  var telefone_valido = telefone_regex.test(telefone);

  // Se todos os campos estão preenchidos, dispara lead completo
  if (nome_valido && empresa_valido && email_valido && telefone_valido) {
    // Push para dataLayer (GTM irá processar)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'whatsapp_click',
      'event_category': 'contact',
      'event_label': 'WhatsApp Lead',
      'nome': nome,
      'empresa': empresa,
      'email': email,
      'telefone': telefone,
      'conversion_identifier': 'whatsapp_lead'
    });

    // Também dispara rd_conversion para RD Station
    window.dataLayer.push({
      'event': 'rd_conversion',
      'event_category': 'rdstation',
      'event_label': 'whatsapp_lead',
      'nome': nome,
      'empresa': empresa,
      'email': email,
      'telefone': telefone,
      'conversion_identifier': 'whatsapp_lead'
    });
  } else {
    // Se não tem dados, só registra o click
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'whatsapp_click',
      'event_category': 'contact',
      'event_label': 'WhatsApp Click'
    });
  }
}
</script>
```

### React Component (para Next.js)

```tsx
// src/components/WhatsAppButton.tsx
"use client";
import { trackWhatsAppClick } from '@/lib/gtm';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  phone,
  message = "Olá, gostaria de mais informações",
  className
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  function handleClick() {
    trackWhatsAppClick(phone);
  }

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className || "whatsapp-button"}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Falar no WhatsApp
    </a>
  );
}
```

---

## Testes e Validação

### Checklist de Implementação

#### Código

- [ ] `src/lib/gtm.ts` atualizado com todas as funções
- [ ] `src/components/MetaPixelProvider.tsx` criado
- [ ] `src/app/layout.tsx` atualizado com providers
- [ ] `src/components/lp/ContactForm.tsx` atualizado com tracking
- [ ] `src/components/TrackedLink.tsx` criado (opcional)
- [ ] Variáveis de ambiente configuradas em `.env.local`

#### GTM Container

- [ ] Container importado no GTM
- [ ] GA4 Measurement ID configurado
- [ ] Google Ads Conversion ID configurado
- [ ] Meta Pixel ID configurado
- [ ] Labels de conversão do Google Ads configurados
- [ ] Container publicado

#### Testes em Preview Mode

1. **Page View**
   - [ ] GA4 page_view dispara
   - [ ] Meta Pixel PageView dispara
   - [ ] Google Ads Remarketing dispara

2. **Formulário**
   - [ ] form_view ao visualizar
   - [ ] form_start ao começar a preencher
   - [ ] form_submit_attempt ao submeter
   - [ ] form_submit_success em sucesso
   - [ ] lead_submit (alias) também dispara
   - [ ] user_identify dispara com email hash
   - [ ] rd_conversion dispara
   - [ ] Google Ads conversion dispara
   - [ ] Meta Pixel Lead dispara

3. **CTAs e Links**
   - [ ] cta_click ao clicar em CTA
   - [ ] phone_click ao clicar em telefone
   - [ ] email_click ao clicar em email
   - [ ] whatsapp_click ao clicar em WhatsApp
   - [ ] Google Ads conversions disparam
   - [ ] Meta Pixel Contact dispara

4. **Comportamento**
   - [ ] section_view ao visualizar seções
   - [ ] scroll_depth nos marcos (25%, 50%, 75%, 100%)

#### Validação em Produção

1. **GA4 DebugView** (primeiras 24h)
   - [ ] Eventos aparecendo em tempo real
   - [ ] Parâmetros corretos
   - [ ] Sem erros

2. **Google Ads** (após 24-48h)
   - [ ] Conversões sendo registradas
   - [ ] Labels corretos
   - [ ] Atribuição funcionando

3. **Meta Pixel Helper** (Chrome Extension)
   - [ ] Pixel carregando
   - [ ] Eventos PageView, Lead, Contact disparando
   - [ ] Sem erros

4. **RD Station** (após conversões)
   - [ ] Leads aparecendo na base
   - [ ] Campos preenchidos corretamente
   - [ ] Tags aplicadas

### Troubleshooting Comum

#### dataLayer undefined
**Solução**: GTMProvider não carregou. Verifique que está no `layout.tsx`.

#### Meta Pixel não dispara
**Solução**: Verifique Meta Pixel ID no .env.local e no GTM.

#### Google Ads não registra conversões
**Solução**:
1. Verifique Conversion ID e Labels
2. Aguarde 24-48h para processamento
3. Verifique Conversion Linker está ativo

#### RD Station não recebe leads
**Solução**:
1. Verifique script RD Station está no container GTM
2. Verifique evento rd_conversion dispara
3. Valide campos obrigatórios (email, nome)

---

## Próximos Passos

### Otimizações Recomendadas

1. **Enhanced Conversions** (Google Ads)
   - Enviar dados hasheados para melhor match
   - Configurar no Google Ads

2. **Conversion API** (Meta)
   - Enviar conversões server-side
   - Melhor rastreamento sem cookies

3. **User ID Tracking** (GA4)
   - Rastrear usuários entre dispositivos
   - Implementar após sistema de login

4. **BigQuery Integration** (GA4)
   - Exportar dados para análises avançadas
   - Criar relatórios customizados

### Documentação Adicional

- [Google Tag Manager](https://developers.google.com/tag-manager)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Ads Conversions](https://support.google.com/google-ads/answer/6331314)
- [Meta Pixel](https://developers.facebook.com/docs/meta-pixel)
- [RD Station](https://developers.rdstation.com/)

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0