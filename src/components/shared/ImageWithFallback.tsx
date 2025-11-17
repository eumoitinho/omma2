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
      // fallback to native img for problematic sources
      // parent containers usually set sizing (aspect, relative), so w-full/h-full helps fit
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`${className ?? ''} w-full h-full object-cover`} />
    );
  }

  return (
    // Use Next/Image normally and switch to fallback on error
    // @ts-ignore - forwarding props like 'fill' can be typed broadly via NextImageProps
    <Image
      {...(rest as any)}
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
