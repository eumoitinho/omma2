import React from 'react';
import PageAnalytics from '@/components/analytics/PageAnalytics';
import ScrollAndSections from '@/components/analytics/ScrollAndSections';
import projectsData from '@/../projects.json';
import HeroCardStack from '@/components/ui/HeroCardStack';
import ProjectsCarousel from '@/components/lp/ProjectsCarousel';
import { RevealObserver } from '@/components/ui/useReveal';
import ContactForm from '@/components/lp/ContactForm';

export const metadata = {
  title: 'OMMA Engenharia - Ambientes corporativos (Landing page)',
  description: 'Inovação e excelência em obras corporativas — OMMA Engenharia',
};

const stats = [
  { value: '+1.000', label: 'obras entregues', desc: 'Experiência comprovada em projetos de grande escala.' },
  { value: '+850', label: 'clientes', desc: 'Parcerias de sucesso com empresas que confiam na OMMA.' },
  { value: '+24', label: 'anos de experiência', desc: 'Tradição e inovação a serviço do seu projeto corporativo.' },
];


// Versão detalhada para o novo layout de "Setores" (Bloco 5)
// Mantemos as cores (base escura + acentos âmbar) e textos coerentes com a proposta.
const sectorCards = [
  { key: 'Escritórios', title: 'Escritórios Corporativos', desc: 'Layouts eficientes que equilibram foco e colaboração, fortalecendo cultura e performance diária.', img: '/OMMA%20001/camb1-1024x676.jpg' },
  { key: 'Startups', title: 'Startups & Scale-ups', desc: 'Ambientes flexíveis e escaláveis que acompanham o crescimento e estimulam velocidade de execução.', img: '/OMMA%20001/Movile1.jpg' },
  { key: 'Coworkings', title: 'Coworkings', desc: 'Espaços multiuso desenhados para alta rotatividade, conforto e retenção de clientes e comunidades.', img: '/OMMA%20001/Movile2%20(1).jpg' },
  { key: 'Clínicas médicas', title: 'Clínicas e Saúde', desc: 'Ambientes humanizados, funcionais e normativos que elevam a experiência de pacientes e equipes.', img: '/OMMA%20001/uni11-1024x676.jpg' },
  { key: 'Laboratórios', title: 'Laboratórios', desc: 'Infraestrutura técnica precisa, segurança e fluxo operacional otimizado para alta confiabilidade.', img: '/OMMA%20001/melhoramentos2%20(1).jpg' },
  { key: 'Estabelecimentos comerciais', title: 'Espaços Comerciais', desc: 'Projetos que convertem: estética, funcionalidade e identidade para maximizar valor de marca.', img: '/OMMA%20001/pdc3-1024x676.jpg' },
];

const clients = [
  'Ambev',
  'Azul',
  'Sensitech',
  'Onofre',
  'Nutrien',
  'McDonalds',
  'Decathlon',
  'Unimed',
  'Ultracargo',
  'Movile',
];

const slides = (projectsData as { title: string; description: string; imageUrl: string }[]);

// Banco de imagens para os cards de impacto (Bloco 4)
const impactoImages = [
  '/OMMA%20001/Movile1.jpg',
  '/OMMA%20001/ultracargo2-1024x676.jpg',
  '/OMMA%20001/ambev2.jpg',
  '/OMMA%20001/melhoramentos3.jpg',
  '/OMMA%20001/pdc3-1024x676.jpg',
  '/OMMA%20001/uni10-1024x676.jpg',
];

export default function CorporativosLP() {
  return (
    <div className="min-h-screen">
      <PageAnalytics pageId="lp_corporativos" />
      <ScrollAndSections pageId="lp_corporativos" />
      {/* Bloco 1 – Hero (mais âmbar em layers, sem imagem externa) */}
      <section id="hero" className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 -z-10">
          {/* Base escura com película âmbar */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0908] to-black" aria-hidden="true" />
          {/* Radiais âmbar suaves */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_32%,rgba(251,191,36,0.22),transparent_60%)] mix-blend-screen" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_68%,rgba(253,215,99,0.18),transparent_55%)] mix-blend-screen" aria-hidden="true" />
          {/* Blobs difusos */}
          <div className="absolute -top-40 -left-44 h-[42rem] w-[42rem] rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
          {/* Layer de escurecimento gradual */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,193,7,0.10)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.92)_90%)]" aria-hidden="true" />
        </div>
        <RevealObserver />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Conteúdo textual */}
            <div className="max-w-3xl">
              <img src="/omma_logo.png" alt="OMMA" className="h-8 w-auto anim-fadeSlideUnblur" />
              {/* Badge animada opcional (mantendo cores) */}
              <div className="inline-flex mt-6 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-300 tracking-wide anim-fadeSlideIn anim-delay-1">
                Engenharia Corporativa
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight" style={{ fontFamily: 'DM Sans, Inter' }}>
                <span className="block anim-fadeSlideUnblur anim-delay-2">Inovação e excelência</span>
                <span className="block text-amber-300 anim-fadeSlideUnblur anim-delay-3">em obras corporativas</span>
              </h1>
              <p className="mt-4 text-lg text-white/90 max-w-2xl anim-fadeSlideIn anim-delay-4">
                Transformando a visão da sua empresa em ambientes corporativos funcionais, estéticos e de alta performance.
              </p>
              <div className="mt-8 flex items-center gap-4 anim-fadeSlideIn anim-delay-5">
                <a
                  href="#form"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      import('@/lib/gtm').then(m => m.trackCtaWithTiming({
                        event: 'cta_click',
                        event_category: 'engagement',
                        event_label: 'hero_quero_iniciar_projeto',
                        location: 'hero'
                      })).catch(()=>{});
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-7 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
                >
                  QUERO INICIAR UM PROJETO!
                </a>
              </div>
            </div>
            {/* Pilha animada de cards de projetos */}
            <div className="hidden lg:block relative anim-fadeScaleIn">
              <HeroCardStack />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 – Resultados (camadas âmbar adicionadas) */}
  <section id="resultados" className="py-12 border-t border-white/10 reveal relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-amber-300/5" />
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(251,191,36,0.18),transparent_60%)] opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center" style={{ fontFamily: 'Exo, Inter' }}>
            Resultados que comprovam nossa expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative rounded-2xl p-6 anim-fadeSlideUp overflow-hidden group ring-1 ring-white/10 bg-gradient-to-br from-white/5 via-neutral-900/30 to-amber-400/10 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_28px_-6px_rgba(251,191,36,0.25)] transition-shadow`}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.28),transparent_65%)]" />
                <div className="relative text-3xl font-bold text-amber-300 drop-shadow" style={{ fontFamily: 'Exo, Inter' }}>{s.value}</div>
                <div className="relative text-white/90 mt-1 font-medium">{s.label}</div>
                <p className="relative text-white/70 mt-3 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 – Sem dor de cabeça (refatorado com layout de componente fornecido) */}
    <section id="sem-dor" className="py-16 border-t border-white/10 reveal relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-amber-300" style={{ fontFamily: 'Exo, Inter' }}>Sem dor de cabeça</span>
            <h3 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Sua obra sem dor de cabeça</h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-white/80" style={{ fontFamily: 'Inter' }}>
              Os principais riscos que eliminamos em cada projeto corporativo de alto padrão.
            </p>
            
          </div>

          {/* Marquee de cards (problemas e soluções) */}
          <div className="relative mt-10 sm:mt-12">
            <div className="mx-auto max-w-6xl overflow-hidden relative">
              {/* Gradientes laterais */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
              <div className="flex w-max marquee-track" style={{ animationDuration: '70s' }}>
                {[...Array(2)].map((_, dup) => (
                  <React.Fragment key={dup}>
                    {[
                      { title: 'Prazos estourados?', img: '/OMMA%20001/ultracargo2-1024x676.jpg' },
                      { title: 'Custos imprevistos?', img: '/OMMA%20001/ultracargo4-1024x676%20(1).jpg' },
                      { title: 'Falta de gestão?', img: '/OMMA%20001/movile3-1%20(1).jpg' },
                      { title: 'Qualidade questionável?', img: '/OMMA%20001/uni10-1024x676.jpg' },
                    ].map((item, i) => (
                      <div
                        key={item.title + dup + i}
                        className="relative flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] h-44 sm:h-52 md:h-56 mr-4 sm:mr-6 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-black/60 via-black/40 to-amber-400/10 group"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_25%,rgba(251,191,36,0.25),transparent_60%)]" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                          <span className="sr-only">{item.title}</span>
                          <span className="h-7 w-7 rounded-full bg-amber-400/20 backdrop-blur-sm ring-1 ring-amber-400/40 flex items-center justify-center text-[10px] text-amber-300 font-semibold">{i + 1}</span>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* Fallback (reduz motion) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 motion-reduce:mt-8">
              {[
                {
                  title: 'Prazos estourados?',
                  text: 'Na OMMA, os projetos são entregues dentro do prazo, evitando custos extras com aluguel de espaços provisórios ou interrupções nas suas operações.'
                },
                {
                  title: 'Custos imprevistos?',
                  text: 'Trabalhamos com preço fechado, oferecendo previsibilidade total e eliminando riscos de surpresas financeiras ao longo da obra.'
                },
                {
                  title: 'Falta de gestão?',
                  text: 'Assumimos a gestão completa da sua obra, do planejamento à entrega, para que você não precise se preocupar com nada.'
                },
                {
                  title: 'Qualidade questionável?',
                  text: 'Garantimos padrões elevados em cada detalhe: acabamentos refinados e sistemas de alta performance que asseguram ambientes funcionais, seguros e estéticos.'
                },
              ].map((item) => (
                <div key={item.title} className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/5 via-white/5 to-amber-400/10 p-5 overflow-hidden group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_65%_30%,rgba(251,191,36,0.25),transparent_60%)]" />
                  <h4 className="font-semibold text-white text-base">{item.title}</h4>
                  <p className="relative text-white/70 text-sm mt-3 leading-relaxed group-hover:text-white/80 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 4 – Impacto positivo */}
  <section id="impacto" className="py-16 border-t border-white/10 reveal relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-amber-400/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[60%] bg-gradient-to-b from-amber-400/20 via-amber-300/0 to-transparent blur-xl opacity-60" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl tracking-tight font-semibold max-w-3xl" style={{ fontFamily: 'Exo, Inter' }}>
              O impacto positivo de um ambiente OMMA na sua empresa
            </h3>
          </div>
          <div id="impacto-cards" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Retenção e atração de talentos', d: 'Um espaço bem planejado inspira, motiva e atrai profissionais de alto nível, fortalecendo a equipe e impulsionando o crescimento da sua empresa.' },
              { t: 'Aumento de produtividade', d: 'Ambientes funcionais e agradáveis tornam os colaboradores mais engajados, elevando a eficiência e a qualidade das entregas no dia a dia.' },
              { t: 'Identidade da empresa', d: 'Criamos projetos que traduzem sua cultura organizacional, com ambientes que refletem seus valores e reforçam a imagem da sua marca.' },
              { t: 'Economia com manutenção', d: 'Com planejamento inteligente, você reduz custos futuros com reformas e aproveita o espaço de forma prática e estratégica.' },
              { t: 'Acabamentos de qualidade', d: 'Valorizamos seu negócio com materiais de alto padrão que garantem estética, durabilidade e funcionalidade a cada ambiente.' },
              { t: 'Instalações elétricas otimizadas', d: 'Projetamos uma infraestrutura moderna e segura, preparada para atender plenamente às demandas tecnológicas do seu negócio.' },
            ].map((i, idx) => {
              const highlight = idx === 2;
              const img = impactoImages[idx % impactoImages.length];
              return (
                <div
                  key={i.t}
                  className={[
                    'relative group cursor-default rounded-3xl overflow-hidden p-6 transition-all duration-500',
                    'ring-1 ring-white/10 bg-gradient-to-br from-black/55 via-black/35 to-amber-400/10',
                    'hover:-translate-y-2 hover:scale-[1.03] hover:ring-amber-400/50',
                    highlight ? 'ring-amber-400/40 shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_0_50px_-8px_rgba(251,191,36,0.35)]' : ''
                  ].join(' ')}
                  style={{ animationDelay: `${0.04 * idx}s` }}
                >
                  <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/55 group-hover:via-black/35 group-hover:to-black/75 transition-colors" />
                  <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(255,193,7,0.15),transparent_60%)] opacity-70 mix-blend-screen" />
                  <div className="relative mb-4 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/40 ring-1 ring-white/15 group-hover:ring-amber-400/50 group-hover:bg-amber-400/10 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-[11px] font-semibold text-amber-300" style={{ fontFamily: 'Exo, Inter' }}>{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs text-white/40 group-hover:text-amber-300 transition-colors font-medium" style={{ fontFamily: 'Exo, Inter' }}>{idx + 1}</span>
                  </div>
                  <h4 className="relative mb-2 text-lg font-semibold tracking-tight text-white group-hover:text-amber-200 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>{i.t}</h4>
                  <p className="relative text-sm text-white/75 group-hover:text-white/85 transition-colors leading-relaxed" style={{ fontFamily: 'Inter' }}>{i.d}</p>
                  {highlight && (
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-[farthest-side_at_50%_25%] from-amber-400/25 via-transparent to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#form"
              onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
                event: 'cta_click',
                event_category: 'engagement',
                event_label: 'impacto_solicite_orcamento',
                location: 'impacto'
              })).catch(()=>{})}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 hover:scale-[1.02] transition-all duration-300"
            >
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 5 – Setores (refatorado com layout de cards com imagem e interação) */}
  <section id="setores" className="py-16 border-t border-white/10 reveal relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
              Expertise OMMA em diversos setores
            </h3>
            <p className="mt-3 text-sm text-white/70 max-w-2xl" style={{ fontFamily: 'Inter' }}>
              Projetamos ambientes estratégicos e de alta performance para segmentos com necessidades distintas – sempre
              mantendo padrão técnico, prazos e identidade.
            </p>
          </div>

          <div className="lg:p-8 ring-1 ring-white/5 border border-white/10 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent shadow-2xl shadow-black/40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sectorCards.map((card, idx) => {
                const highlight = idx === 2; // leve destaque no 3º
                return (
                  <article
                    key={card.key}
                    className={[
                      'group relative overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-xl anim-fadeSlideUp',
                      'bg-gradient-to-br from-white/10 via-neutral-900/20 to-amber-400/10',
                      'hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_32px_-8px_rgba(251,191,36,0.35)] transition-all duration-500',
                      highlight ? 'ring-amber-400/40' : 'ring-white/5'
                    ].join(' ')}
                    style={{ animationDelay: `${0.05 * idx}s` }}
                  >
                    <div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_75%_25%,rgba(251,191,36,0.25),transparent_60%)]" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <span className="inline-flex h-8 px-3 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/15 text-[11px] font-medium tracking-wide text-white/70 group-hover:text-amber-300 group-hover:ring-amber-400/40 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {highlight && (
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-[farthest-side_at_50%_60%] from-amber-400/25 via-transparent to-transparent" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-amber-200 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                        {card.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed mb-6 text-sm group-hover:text-white/80 transition-colors" style={{ fontFamily: 'Inter' }}>
                        {card.desc}
                      </p>
                      <a
                        href="#form"
                        onClick={() => import('@/lib/gtm').then(m => m.trackEvent({
                          event: 'sector_card_cta',
                          event_category: 'sector',
                          event_label: card.key,
                          location: 'setores'
                        })).catch(()=>{})}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white/90 hover:bg-white/10 hover:border-white/25 hover:scale-[1.03] transition-all duration-300 group"
                        style={{ fontFamily: 'Exo, Inter' }}
                        aria-label={`Solicitar orçamento para ${card.title}`}
                      >
                        <span>Saiba mais</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#form"
              onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
                event: 'cta_click',
                event_category: 'engagement',
                event_label: 'setores_solicite_orcamento',
                location: 'setores'
              })).catch(()=>{})}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 hover:scale-[1.02] transition-all duration-300"
            >
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 6 – Adiar vs Conquistar (fundo com véu âmbar sutil) */}
  <section id="comparativo" className="py-12 border-t border-white/10 reveal relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md shadow-2xl shadow-black/30 anim-fadeSlideUp">
        {/* Top content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
            Compare o impacto de adiar sua obra com os ganhos concretos de executar um projeto profissional OMMA.
          </h3>
            </div>
            <div className="flex items-center gap-1.5 mt-4 sm:mt-0 opacity-70">
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Two-column comparison inside card */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Coluna 1 – Adiar */}
            <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-300 tracking-wide">
            Adiar o projeto
          </div>
          <h4 className="mt-4 text-lg font-semibold" style={{ fontFamily: 'Exo, Inter' }}>
            O que acontece quando você adia seu projeto?
          </h4>
          <div className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
            {[
              'Equipe desmotivada',
              'Estrutura do ambiente desorganizada',
              'Redução de performance',
              'Layouts que dificultam a comunicação e a colaboração',
              'Ambientes monótonos e sem estímulos criativos',
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
            <span>{t}</span>
              </div>
            ))}
          </div>
            </div>

            {/* Coluna 2 – Conquistar */}
            <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-300 tracking-wide">
            Conquistar com a OMMA
          </div>
          <h4 className="mt-4 text-lg font-semibold" style={{ fontFamily: 'Exo, Inter' }}>
            O que você conquista ao fechar seu projeto com a OMMA?
          </h4>
          <div className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
            {[
              'Espaços versáteis e integrados',
              'Acabamentos e revestimentos de qualidade',
              'Infraestrutura moderna e segura',
              'Espaços organizados e decorados',
              'Fortalecimento da cultura e da marca',
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>{t}</span>
              </div>
            ))}
          </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
            <p className="text-xs sm:text-sm text-white/50" style={{ fontFamily: 'Inter' }}>
          Decisão estratégica: cada mês de adiamento impacta motivação, eficiência e marca.
            </p>
            <a
          href="#form"
          onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
            event: 'cta_click',
            event_category: 'engagement',
            event_label: 'comparativo_iniciar_projeto',
            location: 'comparativo'
          })).catch(()=>{})}
          className="inline-flex items-center gap-2 rounded-xl border border-amber-400/70 bg-amber-400/10 px-4 py-2 text-xs font-medium text-white hover:bg-amber-400/20 hover:scale-[1.03] transition-all"
            >
          INICIAR PROJETO
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
            </a>
          </div>
        </div>

        {/* Decorative gradient / sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
        </div>
          </div>
        </div>
      </section>

      {/* Bloco 7 – Metodologia (adicionado gradientes sutis para reduzir o preto contínuo) */}
      <section className="py-12 border-t border-white/10 reveal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold text-center">METODOLOGIA OMMA</h3>
          <p className="text-center text-white/70 mt-1">O caminho para o sucesso do seu projeto</p>
          <div className="relative mt-8 grid md:grid-cols-4 gap-6">
            {[{
              n: 'FASE 1', title: 'DIAGNÓSTICO', items: ['Revisão de briefing', 'Revisão do escopo e requisitos', 'Estimativa preliminar']
            }, {
              n: 'FASE 2', title: 'PLANEJAMENTO', items: ['Desenvolvimento de projetos (complementares)', 'Orçamento e cronograma detalhado', 'Aprovações', 'Planejamento de suprimentos e gestão']
            }, {
              n: 'FASE 3', title: 'EXECUÇÃO', items: ['Mobilização interna', 'Demolições e reestrutura', 'Implantação de instalações', 'Forros e contrapisos', 'Acabamentos e revestimentos', 'Instalação de sistemas', 'Limpeza da obra']
            }, {
              n: 'FASE 4', title: 'ENTREGA e PÓS-OBRA', items: ['Comissionamento e testes', 'Vistoria e punch list', 'Entrega Final (As-Built)', 'Treinamento e Ocupação']
            }].map((step) => (
              <div key={step.title} className="relative rounded-2xl bg-white p-5 text-neutral-900 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                <div className="text-xs font-semibold text-amber-600">{step.n}</div>
                <h4 className="text-lg font-semibold mt-1">{step.title}</h4>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                  {step.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#form" onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
              event: 'cta_click',
              event_category: 'engagement',
              event_label: 'metodologia_solicite_orcamento',
              location: 'metodologia'
            })).catch(()=>{})} className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 8 – Nossos clientes */}
    <section id="clientes" className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold text-center text-amber-300">NOSSOS CLIENTES</h3>
          {/* Marquee container */}
          <div className="mt-8 relative overflow-hidden">
            {/* Gradient fades on sides */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="flex gap-6 marquee-track" aria-hidden="true">
              {[...clients, ...clients].map((c, idx) => (
                <div
                  key={c + idx}
                  className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 transition"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
          {/* Static fallback grid for users with prefers-reduced-motion (handled by media query disabling animation) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 motion-reduce:mt-8 motion-reduce:grid">
            {clients.map((c) => (
              <div key={c} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/90 anim-fadeScaleIn">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 9 – Projetos/carrossel */}
    <section id="projetos" className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Projetos que falam por nós</h3>
          <p className="text-white/70 mt-2 text-sm">As imagens definitivas podem ser vinculadas às obras publicadas em omma.com.br/obras-realizadas.</p>
          <div className="mt-6">
            <ProjectsCarousel slides={slides} />
          </div>
        </div>
      </section>

      {/* Bloco 10 – Por que escolher (refatorado com layout de header composto) */}
    <section id="porque-escolher" className="py-20 border-t border-white/10 reveal relative overflow-hidden">
        {/* Gradiente de transição inferior para suavizar passagem ao bloco amarelo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#1a1405]" />
        <header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Texto principal */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 anim-fadeSlideIn">
                <div className="relative inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">
                  <span className="text-[11px] font-medium tracking-wider text-amber-300 flex items-center gap-2 uppercase" style={{ fontFamily: 'Exo, Inter' }}>
                    Por que escolher?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14h-7Z" />
                    </svg>
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-amber-300/50 to-transparent flex-1" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
                O padrão OMMA que
                <span className="block bg-gradient-to-r from-amber-300 via-amber-200 to-white/90 bg-clip-text text-transparent">eleva seu ambiente</span>
              </h2>
            </div>
            {/* Lado direito com destaque + detalhes */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 anim-fadeSlideIn anim-delay-1">
                <p className="text-white/80 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Inter' }}>
                  Projetos corporativos de alto padrão exigem precisão técnica, gestão afinada e estética consistente com a identidade da sua marca. A OMMA integra engenharia, acabamento, prazo e experiência do usuário em uma entrega completa.
                </p>
                <details className="text-white/60 text-sm leading-relaxed mt-4">
                  <summary className="cursor-pointer font-medium mb-2 select-none hover:text-amber-300 transition-colors">Ver mais diferenciais</summary>
                  <p className="mt-2">
                    Atuação multidisciplinar, padronização de processos, fornecedores homologados, previsibilidade financeira e suporte pós-entrega fazem parte da nossa metodologia proprietária.
                  </p>
                </details>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 anim-fadeSlideIn anim-delay-2">
                <a href="#form" onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
                  event: 'cta_click',
                  event_category: 'engagement',
                  event_label: 'porque_solicitar_proposta',
                  location: 'porque_escolher'
                })).catch(()=>{})} className="group inline-flex items-center justify-center gap-3 bg-amber-400 text-neutral-900 px-6 py-3 rounded-full font-medium text-sm hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 hover:scale-[1.04]">
                  <span>Solicitar Proposta</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#impacto-cards" onClick={() => import('@/lib/gtm').then(m => m.trackCtaWithTiming({
                  event: 'cta_click',
                  event_category: 'engagement',
                  event_label: 'porque_ver_beneficios',
                  location: 'porque_escolher'
                })).catch(()=>{})} className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white/80 px-6 py-3 rounded-full font-medium text-sm hover:border-amber-400 hover:text-amber-300 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" />
                  </svg>
                  <span>Ver benefícios</span>
                </a>
              </div>
            </div>
          </div>

          {/* Lista de diferenciais em grade abaixo (mantendo conteúdo original) */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Agilidade na entrega', d: 'Projeto concluído com agilidade, sem comprometer a qualidade.' },
              { t: 'Gestão completa', d: 'Do planejamento à entrega, sem preocupações.' },
              { t: 'Alto padrão estético', d: 'Ambientes que unem funcionalidade e beleza.' },
              { t: 'Serviços complementares', d: 'Instalações e acabamentos de excelência.' },
              { t: 'Abrangência nacional', d: 'Expertise disponível para todo o território nacional.' },
              { t: 'Gestão transparente', d: 'Previsibilidade e segurança em cada etapa.' },
            ].map((i, idx) => (
              <div
                key={i.t}
                className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/8 transition-all duration-300 group anim-fadeSlideUp"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 ring-1 ring-white/10 grid place-items-center group-hover:ring-amber-400/40 group-hover:bg-amber-400/10 transition-colors">
                    <span className="text-[11px] font-semibold text-amber-300" style={{ fontFamily: 'Exo, Inter' }}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wide text-white/30 group-hover:text-amber-300 transition-colors font-medium" style={{ fontFamily: 'Exo, Inter' }}>Diff</span>
                </div>
                <h4 className="font-semibold text-white tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>{i.t}</h4>
                <p className="text-white/70 mt-2 text-sm leading-relaxed group-hover:text-white/80 transition-colors" style={{ fontFamily: 'Inter' }}>{i.d}</p>
              </div>
            ))}
          </div>
        </header>
      </section>



      {/* Bloco 12 – Contato (refatorado com formulário em layout claro âmbar com transição suave) */}
    <section id="contato" className="pt-28 pb-20 border-t border-white/10 reveal relative overflow-hidden bg-gradient-to-br from-amber-200/55 via-amber-300/35 to-amber-400/30">
        {/* Layer de transição superior (escuro -> âmbar) com gradiente mais suave para evitar transição abrupta */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 inset-x-0 h-48 bg-gradient-to-b from-[#1a1405] via-amber-900/20 via-amber-800/15 via-amber-600/10 to-transparent" />
        {/* Vignette decorativa ajustada */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 mix-blend-multiply">
          <div className="absolute -top-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-amber-500/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-amber-300/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="sm:p-6 md:p-8 bg-white border border-amber-100/80 rounded-2xl lg:rounded-3xl shadow-[0_10px_40px_-10px_rgba(234,179,8,0.35)] backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Coluna informativa */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 ring-1 ring-amber-300/70 text-[11px] tracking-wide text-amber-900 bg-amber-200 rounded-full px-3 py-1.5 font-medium" style={{ fontFamily: 'Exo, Inter' }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
                  Agendando novos projetos para Q4 2025
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-tight" style={{ fontFamily: 'Exo, Inter' }}>Pronto para elevar seu espaço corporativo?</h4>
                <ul className="text-sm text-neutral-700 space-y-3">
                  {["Equipe especializada em cada fase", "Acompanhamento transparente e cronogramas claros", "Custo previsível e escopo estruturado"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" style={{ strokeWidth: 1.6 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span style={{ fontFamily: 'Inter' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1 space-y-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-neutral-900 text-xs tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>ENDEREÇO</h5>
                    <p className="text-neutral-700 mt-1 leading-relaxed">Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia – São Paulo/SP<br/>04546-005</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-neutral-700">
                    <a href="mailto:contato@omma.com.br" className="inline-flex items-center gap-2 hover:text-amber-700 transition" style={{ fontFamily: 'Inter' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m22 7-9 6-9-6" /><rect width="20" height="16" x="2" y="4" rx="2" /></svg>
                      contato@omma.com.br
                    </a>
                    <span className="hidden sm:inline text-neutral-400">•</span>
                    <a href="tel:+551130562340" className="inline-flex items-center gap-2 hover:text-amber-700 transition" style={{ fontFamily: 'Inter' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.29a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92Z" /></svg>
                      +55 11 3056 2340
                    </a>
                  </div>
                  <div className="flex gap-4 pt-1">
                    <a href="https://www.instagram.com/omma_oficial" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-amber-700 text-xs tracking-wide font-medium transition" style={{ fontFamily: 'Exo, Inter' }}>Instagram</a>
                    <a href="https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-amber-700 text-xs tracking-wide font-medium transition" style={{ fontFamily: 'Exo, Inter' }}>LinkedIn</a>
                    <a href="https://www.facebook.com/omma4.0" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-amber-700 text-xs tracking-wide font-medium transition" style={{ fontFamily: 'Exo, Inter' }}>Facebook</a>
                  </div>
                </div>
              </div>
              {/* Formulário como Client Component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
