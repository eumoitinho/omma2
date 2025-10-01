'use client';

import { useState } from 'react';

interface ClientsCarouselProps {
  clients: string[];
}

export default function ClientsCarousel({ clients }: ClientsCarouselProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleClients = clients.slice(0, 10);

  return (
    <>
      {/* Marquee container */}
      <div className="mt-8 relative overflow-hidden">
        {/* Gradient fades on sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        <div className="flex gap-6 marquee-track" aria-hidden="true">
          {[...visibleClients, ...visibleClients].map((c, idx) => (
            <div
              key={c + idx}
              className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 transition"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Ver mais button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(true)}
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/70 bg-amber-400/10 px-6 py-3 text-sm font-medium text-white hover:bg-amber-400/20 hover:scale-[1.03] transition-all"
        >
          Ver mais clientes
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Static fallback grid for users with prefers-reduced-motion */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 motion-reduce:grid hidden motion-reduce:block">
        {visibleClients.map((c) => (
          <div key={c} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/90 anim-fadeScaleIn">
            {c}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showAll && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowAll(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[80vh] overflow-y-auto bg-gradient-to-br from-neutral-900 via-black to-neutral-900 rounded-3xl border border-white/10 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowAll(false)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl sm:text-3xl font-semibold text-amber-300 mb-2">Nossos Clientes</h3>
            <p className="text-white/70 mb-8">Empresas que confiam na OMMA</p>

            {/* Grid de clientes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/90 hover:bg-white/10 hover:border-amber-400/30 transition-all"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
