'use client';
import SectionBackground from '@/components/ui/SectionBackground';
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
    <section className="relative py-16 md:py-24 overflow-hidden">
      <SectionBackground variant="default" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 md:p-10">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
                {data.title.split(' ').map((word, i) => {
                  if (word === 'arquiteto' || word === 'OMMA') {
                    return <span key={i} className="text-amber-400">{word} </span>;
                  }
                  return <span key={i} className="text-gray-900">{word} </span>;
                })}
              </h2>
            )}
            {descriptionTexts.map((text, i) => (
              <p key={i} className="mt-4 text-base leading-7 text-gray-600" style={{ fontFamily: 'Inter' }}>{text}</p>
            ))}

            {data.ctaText && (
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-9 py-4 text-base font-medium text-amber-600 hover:bg-amber-400/15 hover:border-amber-400 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-gray-200 hover:ring-gray-300" style={{ fontFamily: 'Exo, Inter' }}>
                  {data.ctaText}
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-2xl bg-amber-400/10 blur-2xl"></div>
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-2xl bg-amber-300/10 blur-2xl"></div>
              <div className="relative rounded-3xl border border-gray-200 bg-white/90 p-2 shadow-[0_0_60px_rgba(251,191,36,0.12)]">
                {data.images && data.images[0] ? (
                  <Image
                    src={urlFor(data.images[0]).url()}
                    alt="Seja um arquiteto parceiro"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                ) : (
                  <img
                    src="/Gemini_Generated_Image_xx99g3xx99g3xx99.png"
                    alt="Seja um arquiteto parceiro"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
