"use client";
import React, { useEffect, useMemo, useState } from "react";
import projectsData from "../../../projects.json";

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
}

// Extra info map (assumption: enrich text without changing JSON structure)
const extraInfo: Record<string, { results: string; scope: string; focus: string }> = {
  "Ambev": {
    results: "Aumento de 18% na eficiência de fluxo interno e redução de 27% no tempo de onboarding.",
    scope: "Integração de squads, hubs colaborativos e ativação de rituais de cultura.",
    focus: "People Ops, Workplace Strategy, Employee Experience"
  },
  "Movile": {
    results: "Redistribuição de áreas + criação de zonas híbridas resultando em 22% mais ocupação útil.",
    scope: "Diagnóstico comportamental, prototipação espacial e adoção progressiva.",
    focus: "Hybrid Enablement, Spatial Analytics"
  },
  "Ultracargo": {
    results: "Unificação de times críticos e melhoria de SLA interno em 15%.",
    scope: "Readequação de fluxos, análise de adjacências, hubs de decisão.",
    focus: "Operational Efficiency, Critical Flows"
  },
  "PDC": {
    results: "Modelo modular escalável + redução de 12% em custos de reconfiguração.",
    scope: "Design system físico, clusters produtivos e suportes de crescimento.",
    focus: "Scalability, Adaptive Layout"
  },
  "Universidade": {
    results: "Melhoria em engajamento presencial e retenção de 1º ano (↑9pp).",
    scope: "Mapeamento de jornadas, tipologias de aprendizagem e camadas de identidade.",
    focus: "Learning Experience, Journey Design"
  },
  "Melhoramentos": {
    results: "Consolidação de operações e ganho logístico com menor atrito trans-setorial.",
    scope: "Clusters operacionais, hubs de suporte e redesenho de densidade.",
    focus: "Process Flow, Space Optimization"
  }
};

// Utility to extract a key for extra info (first word usually brand)
function deriveKey(title: string) {
  const first = title.split(/\s+/)[0];
  return Object.keys(extraInfo).find(k => first.toLowerCase().includes(k.toLowerCase())) || "";
}

const DISPLAY_COUNT = 3; // how many stacked cards to show (top + 2 behind)
const INTERVAL = 4500; // ms per rotation

export const HeroCardStack: React.FC = () => {
  const projects = useMemo(() => (projectsData as ProjectItem[]).slice(0, 12), []);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  // advance logic
  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current => current);
      setCurrent(c => (c + 1) % projects.length);
      // clear prev after animation window
      setTimeout(() => setPrev(null), 800);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [projects.length]);

  // Compose stacked indexes based on current
  const stackIndexes = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < Math.min(DISPLAY_COUNT, projects.length); i++) {
      arr.push((current + i) % projects.length);
    }
    return arr;
  }, [current, projects.length]);

  return (
    <div className="relative w-full max-w-md mx-auto h-[480px] select-none group" aria-label="Projetos em destaque" role="region">
      {/* Cards in stack */}
      {stackIndexes.map((idx, rank) => {
        const p = projects[idx];
        const exiting = prev === idx; // card sliding out
        const isTop = rank === 0 && !exiting; // visible primary card
        const translateY = exiting ? 0 : rank * 32; // 32px offset per layer
        const scale = exiting ? 1 : 1 - rank * 0.04;
        const z = exiting ? 40 : 50 - rank; // keep top above

        const keyRoot = `${idx}-${rank}`;
        const infoKey = deriveKey(p.title);
        const info = infoKey ? extraInfo[infoKey] : undefined;

        return (
          <div
            key={keyRoot}
            className={`absolute inset-0 origin-center rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/10 bg-black/30 backdrop-blur-sm shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out [will-change:transform,opacity] ${
              exiting ? 'translate-x-[140%] opacity-0 rotate-[2deg]' : 'opacity-100'
            } ${!exiting && !isTop ? 'pointer-events-none' : ''}`}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              zIndex: z
            }}
            aria-hidden={!isTop}
          >
            <div className="absolute inset-0">
              <img
                src={p.imageUrl}
                alt={isTop ? p.title : ''}
                className={`h-full w-full object-cover transition-[filter,transform] duration-700 ${isTop ? 'group-hover:scale-[1.02]' : ''} ${rank > 0 ? 'grayscale-[35%]' : ''}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/85" />
              {rank > 0 && <div className="absolute inset-0 bg-black/30" />}
            </div>
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6">
              <div className="relative rounded-2xl bg-black/55 ring-1 ring-white/10 p-4 md:p-5 backdrop-blur-sm shadow-[0_6px_24px_-10px_rgba(0,0,0,0.6)]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-wide text-amber-300/90">
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30">Projeto</span>
                    <span className="text-white/50">{(current + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold leading-tight text-white drop-shadow-sm line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/85 line-clamp-2 md:line-clamp-3">
                    {p.description}
                  </p>
                  {info && (
                    <div className="pt-1 text-[11px] md:text-[12px] font-medium tracking-wide text-white/70">
                      <span className="text-amber-300/90">Resultados:</span>{' '}
                      <span className="text-white/85 line-clamp-2">{info.results}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCardStack;
