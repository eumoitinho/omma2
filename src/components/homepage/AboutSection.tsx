'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface AboutSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    description?: any[];
    ctaText?: string;
    ctaLink?: string;
    images?: any[];
  };
}

export default function AboutSection({ data }: AboutSectionProps) {
  if (!data) return null;

  // Parse description text from portable text
  const getTextFromPortableText = (blocks: any[]) => {
    if (!blocks) return [];
    return blocks
      .filter((block: any) => block._type === 'block')
      .map((block: any) =>
        block.children?.map((child: any) => child.text).join('') || ''
      );
  };

  const descriptionTexts = data.description ? getTextFromPortableText(data.description) : [];

  return (
    <section id="sobre" className="relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            {data.images && data.images[0] ? (
              <Image
                src={urlFor(data.images[0]).url()}
                alt="Equipe de engenharia em operação"
                width={600}
                height={420}
                className="h-[320px] md:h-[420px] w-full object-cover"
              />
            ) : (
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1974&auto=format&fit=crop" alt="Equipe de engenharia em operação" className="h-[320px] md:h-[420px] w-full object-cover" />
            )}
            <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
          </div>
          <div className="hidden md:flex absolute -right-8 top-16">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {data.images && data.images[1] ? (
                <Image
                  src={urlFor(data.images[1]).url()}
                  alt="Profissional de obra"
                  width={160}
                  height={160}
                  className="h-40 w-40 object-cover"
                />
              ) : (
                <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1470&auto=format&fit=crop" alt="Profissional de obra" className="h-40 w-40 object-cover" />
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          {data.title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">{data.title}</h2>
          )}
          {data.subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/80">{data.subtitle}</p>
          )}
          {descriptionTexts.map((text, i) => (
            <p key={i} className="mt-4 text-sm md:text-base text-white/70">{text}</p>
          ))}
          {data.ctaText && (
            <div className="mt-8 flex items-center gap-3">
              <a href={data.ctaLink || '#contato'} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors">
                <span>{data.ctaText}</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span>Compromisso com prazos e segurança</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
