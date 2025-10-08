'use client';
import React from 'react';

interface StatsSectionProps {
  data: {
    title?: string;
    stats?: Array<{
      number: string;
      label: string;
      description?: string;
    }>;
  };
}

export default function StatsSection({ data }: StatsSectionProps) {
  if (!data || !data.stats) return null;

  return (
    <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        {data.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Exo, Inter' }}>
              {data.title}
            </h2>
          </div>
        )}

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>
                {stat.number}
              </div>
              <div className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                {stat.label}
              </div>
              {stat.description && (
                <p className="text-base text-white/70 mt-2" style={{ fontFamily: 'Inter' }}>
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
