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
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {data.title && (
          <h2 className="mb-8 text-center text-[22px] md:text-[26px] font-semibold tracking-tight text-yellow-300">{data.title}</h2>
        )}

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {data.clients.map((client) => (
              <div className="flex items-center justify-center" key={client.name}>
                {client.logo ? (
                  <div className="relative w-full h-16">
                    <Image
                      src={urlFor(client.logo).url()}
                      alt={client.name}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm font-medium text-neutral-300">{client.name}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-yellow-400/80"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
