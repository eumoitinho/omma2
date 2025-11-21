"use client";
import React, { useState } from 'react';
import Image from 'next/image';

type NextImageProps = React.ComponentProps<typeof Image> & {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageWithFallback({ src, alt, className, ...rest }: NextImageProps) {
  const [errored, setErrored] = useState(false);

  // Ensure a safe URL for local files (encode spaces and special chars)
  const safeSrc = typeof src === 'string' ? encodeURI(src) : (src as any);

  if (errored) {
    return (
      // Use a plain <img> as final fallback
      // `loading="lazy"` is omitted here because some callers use `priority`
      <img src={safeSrc as string} alt={alt} className={`${className ?? ''} w-full h-full object-cover`} />
    );
  }

  return (
    <Image
      {...rest}
      src={safeSrc}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
