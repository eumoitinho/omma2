'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage, PortableTextContent, PortableTextBlock } from '@/types/sanity';

interface ArchitectsSectionProps {
  data: {
    title?: string;
    description?: PortableTextContent;
    ctaText?: string;
    ctaLink?: string;
    images?: SanityImage[];
  };
}

export default function ArchitectsSection({ data }: ArchitectsSectionProps) {
  if (!data) return null;

  // Parse description text from portable text
  const getTextFromPortableText = (blocks: PortableTextContent) => {
    if (!blocks) return [];
    return blocks
      .filter((block: PortableTextBlock) => block._type === 'block')
      .map((block: PortableTextBlock) =>
        block.children?.map((child) => child.text).join('') || ''
      );
  };

  const descriptionTexts = data.description ? getTextFromPortableText(data.description) : [];

  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            {data.title && (
              <h3 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-white">
                {data.title.split(' ').map((word, i) => {
                  if (word === 'arquiteto' || word === 'OMMA') {
                    return <span key={i} className="text-yellow-300">{word} </span>;
                  }
                  return <span key={i} className="text-white">{word} </span>;
                })}
              </h3>
            )}
            {descriptionTexts.map((text, i) => (
              <p key={i} className="mt-4 text-[15px] leading-7 text-neutral-300">{text}</p>
            ))}

            {data.ctaText && (
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-5 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">{data.ctaText}</button>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-2xl bg-yellow-400/10 blur-2xl"></div>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_0_60px_rgba(250,204,21,0.12)]">
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
                <div className="absolute -right-4 -top-4 h-10 w-10 rounded-lg bg-yellow-400/20 ring-1 ring-yellow-300/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
