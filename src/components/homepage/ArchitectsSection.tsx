'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage, PortableTextContent, PortableTextBlock } from '@/types/sanity';

interface ArchitectsSectionProps {
  data: {
    title?: string;
    description?: PortableTextContent | string;
    ctaText?: string;
    ctaLink?: string;
    images?: SanityImage[];
  };
}

export default function ArchitectsSection({ data }: ArchitectsSectionProps) {
  if (!data) return null;

  // Parse description text from portable text or string
  const getTextFromPortableText = (content: PortableTextContent | string) => {
    if (!content) return [];

    // If it's a string, split by newlines
    if (typeof content === 'string') {
      return content.split('\n\n').filter(text => text.trim());
    }

    // If it's an array of portable text blocks
    if (Array.isArray(content)) {
      return content
        .filter((block: PortableTextBlock) => block._type === 'block')
        .map((block: PortableTextBlock) =>
          block.children?.map((child) => child.text).join('') || ''
        );
    }

    return [];
  };

  const descriptionTexts = data.description ? getTextFromPortableText(data.description) : [];

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
                {data.title.split(' ').map((word, i) => {
                  if (word === 'arquiteto' || word === 'OMMA') {
                    return <span key={i} className="text-amber-400">{word} </span>;
                  }
                  return <span key={i} className="text-white">{word} </span>;
                })}
              </h2>
            )}
            {descriptionTexts.map((text, i) => (
              <p key={i} className="mt-4 text-base leading-7 text-white/70" style={{ fontFamily: 'Inter' }}>{text}</p>
            ))}

            {data.ctaText && (
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-400 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20" style={{ fontFamily: 'Exo, Inter' }}>
                  {data.ctaText}
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-2xl bg-amber-400/10 blur-2xl"></div>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_0_60px_rgba(251,191,36,0.12)]">
                {data.images && data.images[0] ? (
                  <Image
                    src={urlFor(data.images[0]).url()}
                    alt="Profissionais em obra"
                    width={500}
                    height={320}
                    className="h-64 w-full rounded-2xl object-cover md:h-80"
                  />
                ) : (
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" alt="Profissionais em obra" className="h-64 w-full rounded-2xl object-cover md:h-80" />
                )}
              </div>
              <div className="relative mt-6 translate-x-6 md:translate-x-10">
                <div className="inline-block rounded-3xl border border-white/10 bg-white/5 p-2">
                  {data.images && data.images[1] ? (
                    <Image
                      src={urlFor(data.images[1]).url()}
                      alt="Equipe de construção"
                      width={384}
                      height={192}
                      className="h-40 w-72 rounded-2xl object-cover md:h-48 md:w-96"
                    />
                  ) : (
                    <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Equipe de construção" className="h-40 w-72 rounded-2xl object-cover md:h-48 md:w-96" />
                  )}
                </div>
                <div className="absolute -right-4 -top-4 h-10 w-10 rounded-lg bg-amber-400/20 ring-1 ring-amber-400/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
