"use client";
import React, { useState } from 'react';
import Image from 'next/image';

type NextImageProps = React.ComponentProps<typeof Image> & {
  className?: string;
};

export default function ImageWithFallback({ className, ...rest }: NextImageProps) {
  const [errored, setErrored] = useState(false);

  const srcProp = rest.src;

  // Ensure a safe URL for local files (encode spaces and special chars)
  const safeSrc = typeof srcProp === 'string' ? encodeURI(srcProp) : srcProp;

  if (errored) {
    const imgSrc = typeof safeSrc === 'string' ? safeSrc : '';
    return (
      <img src={imgSrc} alt={String(rest.alt ?? '')} className={`${className ?? ''} w-full h-full object-cover`} />
    );
  }

  return (
    <Image
      {...rest}
      src={safeSrc}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
