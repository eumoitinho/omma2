import React from 'react';

interface SectionBackgroundProps {
  variant?: 'default' | 'dark' | 'amber';
  children?: React.ReactNode;
}

export default function SectionBackground({ variant = 'default', children }: SectionBackgroundProps) {
  const backgrounds = {
    default: (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Liquid glass blobs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/15 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] bg-gradient-to-bl from-amber-300/15 via-white/8 to-transparent blur-3xl opacity-50 animate-blob" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-[60%_40%_30%_70%/40%_60%_30%_70%] bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent blur-3xl opacity-40 animate-blob animation-delay-2000" />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>
    ),
    dark: (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Darker liquid glass blobs */}
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-neutral-700/30 via-neutral-800/20 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-[50%_50%_60%_40%/50%_60%_40%_50%] bg-gradient-to-tr from-amber-600/15 via-neutral-800/20 to-transparent blur-3xl opacity-40 animate-blob animation-delay-4000" />

        {/* Dark glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
      </div>
    ),
    amber: (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Amber-focused liquid glass */}
        <div className="absolute top-0 left-1/4 h-[36rem] w-[36rem] rounded-[45%_55%_65%_35%/55%_45%_35%_65%] bg-gradient-to-br from-amber-400/25 via-amber-500/20 to-amber-600/10 blur-3xl opacity-60 animate-blob" />
        <div className="absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tl from-amber-300/20 via-amber-400/15 to-transparent blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-0 h-72 w-72 rounded-[70%_30%_40%_60%/30%_70%_60%_40%] bg-gradient-to-r from-amber-500/18 via-white/8 to-transparent blur-3xl opacity-45 animate-blob animation-delay-4000" />

        {/* Amber glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/[0.03] via-transparent to-amber-500/[0.02]" />
      </div>
    ),
  };

  return (
    <div className="relative">
      {backgrounds[variant]}
      {children}
    </div>
  );
}
