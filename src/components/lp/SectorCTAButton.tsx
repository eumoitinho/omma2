'use client';

import { trackEvent } from '@/lib/gtm';

interface SectorCTAButtonProps {
  sectorKey: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectorCTAButton({ sectorKey, children, className }: SectorCTAButtonProps) {
  const handleClick = () => {
    trackEvent({
      event: 'sector_card_cta',
      event_category: 'sector',
      event_label: sectorKey,
      location: 'setores'
    }).catch(() => {});
  };

  return (
    <a
      href="#form"
      onClick={handleClick}
      className={className}
      aria-label={`Solicitar orçamento para ${sectorKey}`}
    >
      {children}
    </a>
  );
}
