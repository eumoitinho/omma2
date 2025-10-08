'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage, PortableTextContent, PortableTextBlock } from '@/types/sanity';

interface ManagementSectionProps {
  data: {
    title?: string;
    description?: PortableTextContent;
    features?: string[];
    ctaText?: string;
    ctaLink?: string;
    images?: SanityImage[];
  };
}

export default function ManagementSection({ data }: ManagementSectionProps) {
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
    <section className="relative">
      <div className="sm:px-6 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6">
              <div className="col-span-6 sm:col-span-8">
                <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                  {data.images && data.images[0] ? (
                    <Image
                      src={urlFor(data.images[0]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop" alt="Ambiente corporativo" className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                  {data.images && data.images[1] ? (
                    <Image
                      src={urlFor(data.images[1]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=1974&auto=format&fit=crop" alt="Ambiente corporativo" className="h-full w-full object-cover" />
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                  {data.images && data.images[2] ? (
                    <Image
                      src={urlFor(data.images[2]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1849&auto=format&fit=crop" alt="Ambiente corporativo" className="h-full w-full object-cover" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            {data.title && (
              <h2 className="text-[28px] sm:text-[35px] font-bold tracking-tight leading-[1.25]" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
                {data.title.split(' ').map((word, i) => {
                  if (word === 'rápidas' || word === 'eficientes') {
                    return <span key={i} className="text-amber-400">{word} </span>;
                  }
                  return <span key={i} className="text-white">{word} </span>;
                })}
              </h2>
            )}

            <div className="mt-5">
              {descriptionTexts.map((text, i) => (
                <p key={i} className={`${i > 0 ? 'mt-4' : ''} text-[17px] sm:text-[18px] leading-7 text-white/90`} style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                  {text}
                </p>
              ))}
            </div>

            {data.features && data.features.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {data.features.map((text, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[18px]" style={{ fontFamily: 'Exo, Inter', fontWeight: 600 }}>{text}</span>
                  </div>
                ))}
              </div>
            )}

            {data.ctaText && (
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-9 py-4 text-[15px] text-white hover:bg-amber-400/10 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20" style={{ fontFamily: 'DM Sans, Inter' }}>
                  {data.ctaText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
