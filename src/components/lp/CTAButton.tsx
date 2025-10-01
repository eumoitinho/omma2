'use client';

import { trackCtaWithTiming } from '@/lib/gtm';

interface CTAButtonProps {
  href: string;
  eventLabel: string;
  location: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTAButton({
  href,
  eventLabel,
  location,
  children,
  className,
  variant = 'secondary'
}: CTAButtonProps) {
  const handleClick = () => {
      trackCtaWithTiming({
        event: 'cta_click',
        event_category: 'engagement',
        event_label: eventLabel,
        location
      });
  };

  const defaultClassName = variant === 'primary'
    ? "inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-7 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
    : "inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 hover:scale-[1.02] transition-all duration-300";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className || defaultClassName}
    >
      {children}
    </a>
  );
}
