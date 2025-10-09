'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { getImagePlaceholder } from '@/lib/imagePlaceholder';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackText?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackText,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setError(true);
    setImgSrc(getImagePlaceholder(fallbackText || alt, width || 800, height || 600));
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={handleError}
      unoptimized={error} // Use unoptimized for SVG placeholders
    />
  );
}
