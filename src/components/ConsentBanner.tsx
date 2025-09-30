"use client";
import React, { useState, useEffect } from 'react';
import { defaultDeniedConsent, initialConsentLoad, saveConsent, updateConsent, trackEvent } from '@/lib/gtm';
import type { ConsentStateRecord } from '@/types/analytics';

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentStateRecord>(defaultDeniedConsent());

  useEffect(() => {
    const stored = initialConsentLoad();
    if (!stored) {
      setOpen(true);
    }
  }, []);

  function acceptAll() {
    const full: ConsentStateRecord = {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    };
    setConsent(full);
    updateConsent(full);
    saveConsent(full);
    trackEvent({
      event: 'consent_accept_all',
      event_category: 'consent',
      event_label: 'banner'
    });
    setOpen(false);
  }

  function savePartial() {
    updateConsent(consent);
    saveConsent(consent);
    trackEvent({
      event: 'consent_save_preferences',
      event_category: 'consent',
      event_label: 'banner',
      analytics_storage: consent.analytics_storage,
      ad_storage: consent.ad_storage,
      personalization_storage: consent.personalization_storage
    });
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed z-[999] bottom-4 right-4 max-w-md w-full rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md p-5 shadow-xl text-sm">
      <h4 className="text-white font-semibold mb-2 text-base">Preferências de Cookies</h4>
      <p className="text-white/70 text-xs leading-relaxed mb-3">Usamos cookies para analisar desempenho (analytics) e melhorar sua experiência. Ajuste suas preferências ou aceite tudo.</p>
      <div className="space-y-2 mb-4">
        <label className="flex items-center justify-between gap-4 text-xs text-white/80">
          <span>Analytics</span>
          <input
            type="checkbox"
            checked={consent.analytics_storage === 'granted'}
            onChange={(e) => setConsent(c => ({ ...c, analytics_storage: e.target.checked ? 'granted' : 'denied' }))}
            className="accent-amber-400"
          />
        </label>
        <label className="flex items-center justify-between gap-4 text-xs text-white/80">
          <span>Personalização</span>
          <input
            type="checkbox"
            checked={consent.personalization_storage === 'granted'}
            onChange={(e) => setConsent(c => ({ ...c, personalization_storage: e.target.checked ? 'granted' : 'denied' }))}
            className="accent-amber-400"
          />
        </label>
        <label className="flex items-center justify-between gap-4 text-xs text-white/80">
          <span>Marketing / Ads</span>
          <input
            type="checkbox"
            checked={consent.ad_storage === 'granted'}
            onChange={(e) => setConsent(c => ({ ...c, ad_storage: e.target.checked ? 'granted' : 'denied' }))}
            className="accent-amber-400"
          />
        </label>
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={acceptAll} className="px-4 py-2 rounded-full bg-amber-400 text-neutral-900 text-xs font-semibold hover:bg-amber-300 transition">Aceitar tudo</button>
        <button onClick={savePartial} className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition">Salvar preferências</button>
        <button onClick={() => { setOpen(false); trackEvent({ event: 'consent_banner_dismiss', event_category: 'consent', event_label: 'banner' }); }} className="ml-auto text-white/50 hover:text-white text-xs">Fechar</button>
      </div>
    </div>
  );
}
