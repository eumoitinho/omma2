'use client';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import type { SanityImage, PortableTextContent, PortableTextBlock } from '@/types/sanity';

interface ManagementSectionProps {
  data: {
    title?: string;
    description?: PortableTextContent | string;
    highlights?: string[];
    features?: string[];
    ctaText?: string;
    ctaLink?: string;
    images?: SanityImage[];
  };
}

export default function ManagementSection({ data }: ManagementSectionProps) {
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
  const features = data.highlights || data.features || [];

  return (
    <section className="relative">
      <div className="sm:px-6 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6">
              <div className="col-span-6 sm:col-span-8">
                <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-white/90">
                  {data.images && data.images[0] ? (
                    <Image
                      src={urlFor(data.images[0]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image src="/6 AMBIENTES REFINADOS2.JPG" alt="Ambiente corporativo" fill className="object-cover" unoptimized />
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-white/90">
                  {data.images && data.images[1] ? (
                    <Image
                      src={urlFor(data.images[1]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image src="/7 ESPAÇOS ESCALAVEIS2.JPG" alt="Ambiente corporativo" fill className="object-cover" unoptimized />
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-white/90">
                  {data.images && data.images[2] ? (
                    <Image
                      src={urlFor(data.images[2]).url()}
                      alt="Ambiente corporativo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image src="/10 ESPAÇOS ATRATATIVOS.JPG" alt="Ambiente corporativo" fill className="object-cover" unoptimized />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Exo, Inter' }}>
                {data.title}
              </h2>
            )}

            <div className="mt-6">
              {descriptionTexts.map((text, i) => (
                <p key={i} className={`${i > 0 ? 'mt-4' : ''} text-base leading-7 text-gray-700`} style={{ fontFamily: 'Inter' }}>
                  {text}
                </p>
              ))}
            </div>

            {features && features.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((text, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 ring-1 ring-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[18px] text-gray-900" style={{ fontFamily: 'Exo, Inter', fontWeight: 600 }}>{text}</span>
                  </div>
                ))}
              </div>
            )}

            {data.ctaText && (
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-9 py-4 text-[15px] text-gray-900 hover:bg-amber-400/10 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-gray-200 hover:ring-gray-300" style={{ fontFamily: 'DM Sans, Inter' }}>
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
