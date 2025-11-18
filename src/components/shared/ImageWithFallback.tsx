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

  if (errored) {
    return (
      <img src={src} alt={alt} className={`${className ?? ''} w-full h-full object-cover`} />
    );
  }

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
