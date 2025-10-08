'use client';
import React from 'react';

interface StatsSectionProps {
  data: {
    sectionTitle?: string;
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
    <section className="px-4 py-16">
      {/* Company Stats */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {data.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>{stat.number}</div>
              <div className="text-zinc-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
