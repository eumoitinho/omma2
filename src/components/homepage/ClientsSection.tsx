'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage } from '@/types/sanity';

interface ClientsSectionProps {
  data: {
    title?: string;
    clients?: Array<{
      name: string;
      logo: SanityImage;
    }>;
  };
}

export default function ClientsSection({ data }: ClientsSectionProps) {
  if (!data || !data.clients) return null;

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {data.title && (
          <h2 className="mb-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'Exo, Inter' }}>
            {data.title}
          </h2>
        )}

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {data.clients.map((client) => (
              <div className="flex items-center justify-center" key={client.name}>
                {client.logo ? (
                  <div className="relative w-full h-20">
                    <Image
                      src={urlFor(client.logo).url()}
                      alt={client.name}
                      fill
                      className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-white/70" style={{ fontFamily: 'Inter' }}>
                    {client.name}
                  </div>
                )}
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
