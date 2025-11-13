import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface PortableTextProps {
  content: any[];
}

export default function PortableTextRenderer({ content }: PortableTextProps) {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((block, index) => {
        // Handle different block types
        if (block._type === 'block') {
          return <BlockRenderer key={index} block={block} />;
        }

        if (block._type === 'image') {
          return <ImageRenderer key={index} block={block} />;
        }

        if (block._type === 'code') {
          return <CodeRenderer key={index} block={block} />;
        }

        return null;
      })}
    </div>
  );
}

function BlockRenderer({ block }: { block: any }) {
  const style = block.style || 'normal';

  // Render children (text with marks)
  const children = block.children?.map((child: any, idx: number) => {
    if (child._type !== 'span') return null;

    const text = child.text;
    let element = <span key={idx}>{text}</span>;

    // Apply marks (bold, italic, etc.)
    if (child.marks && child.marks.length > 0) {
      child.marks.forEach((mark: string) => {
        if (mark === 'strong') {
          element = <strong key={idx}>{element}</strong>;
        } else if (mark === 'em') {
          element = <em key={idx}>{element}</em>;
        } else if (mark === 'underline') {
          element = <u key={idx}>{element}</u>;
        } else if (mark === 'code') {
          element = (
            <code key={idx} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
              {text}
            </code>
          );
        }
      });

      // Handle link annotation
      const linkMark = block.markDefs?.find(
        (def: any) => child.marks.includes(def._key) && def._type === 'link'
      );
      if (linkMark) {
        element = (
          <a
            key={idx}
            href={linkMark.href}
            target={linkMark.blank ? '_blank' : undefined}
            rel={linkMark.blank ? 'noopener noreferrer' : undefined}
            className="text-amber-600 hover:text-amber-700 underline"
          >
            {element}
          </a>
        );
      }
    }

    return element;
  });

  // Render based on style
  switch (style) {
    case 'h1':
      return (
        <h1
          className="text-4xl font-bold text-gray-900 mt-12 mb-6"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className="text-3xl font-bold text-gray-900 mt-10 mb-5"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className="text-2xl font-bold text-gray-900 mt-8 mb-4"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className="text-xl font-bold text-gray-900 mt-6 mb-3"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {children}
        </h4>
      );
    case 'blockquote':
      return (
        <blockquote
          className="border-l-4 border-amber-400 pl-6 py-2 my-6 italic text-gray-700 bg-amber-50"
          style={{ fontFamily: 'Inter' }}
        >
          {children}
        </blockquote>
      );
    default:
      // Handle lists
      if (block.listItem === 'bullet') {
        return (
          <li className="text-gray-700 leading-relaxed mb-2" style={{ fontFamily: 'Inter' }}>
            {children}
          </li>
        );
      }
      if (block.listItem === 'number') {
        return (
          <li className="text-gray-700 leading-relaxed mb-2" style={{ fontFamily: 'Inter' }}>
            {children}
          </li>
        );
      }

      // Normal paragraph
      return (
        <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
          {children}
        </p>
      );
  }
}

function ImageRenderer({ block }: { block: any }) {
  if (!block.asset) return null;

  const imageUrl = urlFor(block.asset).width(1200).url();

  return (
    <figure className="my-8">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={block.alt || 'Imagem do blog'}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {block.caption && (
        <figcaption
          className="text-center text-sm text-gray-600 mt-3"
          style={{ fontFamily: 'Inter' }}
        >
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function CodeRenderer({ block }: { block: any }) {
  return (
    <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
      <code className="text-sm font-mono" style={{ fontFamily: 'monospace' }}>
        {block.code}
      </code>
    </pre>
  );
}
