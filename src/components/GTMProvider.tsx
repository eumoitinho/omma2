"use client";
import React, { useEffect } from 'react';
import { GTM_ID, getDataLayer } from '@/lib/gtm';

export default function GTMProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Init base dataLayer if not exists
    getDataLayer();
    // Avoid double inject
    if (document.getElementById('gtm-base-script')) return;
    const script = document.createElement('script');
    script.id = 'gtm-base-script';
    script.innerHTML = ` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(script);
  }, []);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
