'use client';
import React, { useState } from 'react';
import { clientLogos } from '@/data/clients';

interface ClientsSectionProps {
  data?: {
    title?: string;
  };
}

export default function ClientsSection({ data }: ClientsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
          {data?.title || 'NOSSOS CLIENTES'}
        </h2>

        <div className="rounded-2xl relative">
          {/* Grid estático de logos */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {clientLogos.map((client, idx) => (
              <div className="flex items-center justify-center flex-shrink-0 w-32" key={`client-${idx}`}>
                <div className="relative w-full h-20">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-1.5 w-10 rounded-full bg-amber-400/80"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/40"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/40"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
