import React from 'react';
import ProjectsCarousel from '@/components/lp/ProjectsCarousel';
import LeadForm from '@/components/lp/LeadForm';
import { RevealObserver } from '@/components/ui/useReveal';

export const metadata = {
  title: 'OMMA Engenharia - Ambientes corporativos (Landing page)',
  description: 'Inovação e excelência em obras corporativas — OMMA Engenharia',
};

const stats = [
  { value: '+1.000', label: 'obras entregues', desc: 'Experiência comprovada em projetos de grande escala.' },
  { value: '+850', label: 'clientes', desc: 'Parcerias de sucesso com empresas que confiam na OMMA.' },
  { value: '+24', label: 'anos de experiência', desc: 'Tradição e inovação a serviço do seu projeto corporativo.' },
];

const sectors = [
  'Escritórios',
  'Startups',
  'Coworkings',
  'Clínicas médicas',
  'Laboratórios',
  'Escolas',
  'Estabelecimentos comerciais',
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

const slides = [
  {
    title: 'Decathlon – Espaços funcionais para alta performance',
    description:
      'Projeto focado em otimização de fluxo interno e identidade de marca em ambientes corporativos conectados à cultura esportiva.',
    imageUrl: 'https://omma.com.br/wp-content/uploads/2022/12/Decathlon.jpg',
  },
  {
    title: 'Recursus – Infraestrutura corporativa eficiente',
    description:
      'Soluções sob medida aliando modernização de layout, conforto e escalabilidade operacional para a equipe.',
    imageUrl: 'https://omma.com.br/wp-content/uploads/2022/12/recursus.jpg',
  },
  {
    title: 'Ambev – Ambientes que fortalecem a cultura',
    description:
      'Integração de espaços colaborativos e áreas técnicas com alto padrão de acabamento e gestão precisa de prazos.',
    imageUrl: 'https://omma.com.br/wp-content/uploads/2022/12/ambev.jpg',
  },
  {
    title: 'Unimed – Escala, organização e bem-estar',
    description:
      'Entrega ágil de ambientes corporativos distribuídos em múltiplos pavimentos, com gestão centralizada e qualidade.',
    imageUrl: 'https://omma.com.br/wp-content/uploads/2022/12/unimed.jpg',
  },
  {
    title: 'Azul – Identidade e tecnologia em equilíbrio',
    description:
      'Espaços pensados para performance e experiência do usuário, refletindo inovação e dinamismo da marca.',
    imageUrl: 'https://omma.com.br/wp-content/uploads/2022/12/azul.jpg',
  },
];

export default function CorporativosLP() {
  return (
    <div className="min-h-screen">
      {/* Bloco 1 – Hero */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
        </div>
        <RevealObserver />
        {/* Floating circular CTA */}
        <a
          href="#form"
          className="hidden lg:grid place-content-center group absolute -top-10 -right-10 w-40 h-40 rounded-full bg-black text-white z-10 shadow-xl border border-white/10 hover:bg-amber-300 hover:text-black transition-all duration-300"
          aria-label="Ir para formulário"
        >
          <div className="relative w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
            <svg viewBox="0 0 14 15" width={28} className="transition-transform duration-300 group-hover:scale-110" fill="currentColor">
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
            </svg>
          </div>
          <p className="absolute inset-0 rotating-text text-[11px] font-semibold tracking-widest">
            <span className="absolute" style={{ inset: 14, transform: 'rotate(0deg)' }}>OMMA</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(30deg)' }}>•</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(60deg)' }}>OBRAS</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(120deg)' }}>•</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(150deg)' }}>CORP</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(190deg)' }}>•</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(220deg)' }}>INICIE</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(270deg)' }}>•</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(300deg)' }}>AGORA</span>
            <span className="absolute" style={{ inset: 14, transform: 'rotate(340deg)' }}>•</span>
          </p>
        </a>
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
                <a href="#form" className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-7 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all">
                  QUERO INICIAR UM PROJETO!
                </a>
              </div>
            </div>
            {/* Placeholder visual (mantido como bloco vazio, pode futuramente ter media) */}
            <div className="hidden lg:block relative">
              <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm anim-fadeScaleIn" />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 – Resultados */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center" style={{ fontFamily: 'Exo, Inter' }}>
            Resultados que comprovam nossa expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className={`rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 anim-fadeSlideUp`} style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="text-3xl font-bold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>{s.value}</div>
                <div className="text-white/90 mt-1 font-medium">{s.label}</div>
                <p className="text-white/70 mt-3 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 – Sem dor de cabeça */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Sua obra sem dor de cabeça</h3>
            <div className="mt-6 space-y-6 text-white/90">
              <div>
                <h4 className="font-semibold">Prazos estourados?</h4>
                <p className="text-white/80 mt-1">Na OMMA, os projetos são entregues dentro do prazo, evitando custos extras com aluguel de espaços provisórios ou interrupções nas suas operações.</p>
              </div>
              <div>
                <h4 className="font-semibold">Custos imprevistos?</h4>
                <p className="text-white/80 mt-1">Trabalhamos com preço fechado, oferecendo previsibilidade total e eliminando riscos de surpresas financeiras ao longo da obra.</p>
              </div>
              <div>
                <h4 className="font-semibold">Falta de gestão?</h4>
                <p className="text-white/80 mt-1">Assumimos a gestão completa da sua obra, do planejamento à entrega, para que você não precise se preocupar com nada.</p>
              </div>
              <div>
                <h4 className="font-semibold">Qualidade questionável?</h4>
                <p className="text-white/80 mt-1">Garantimos padrões elevados em cada detalhe: acabamentos refinados e sistemas de alta performance que asseguram ambientes funcionais, seguros e estéticos.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-[280px]" />
        </div>
      </section>

      {/* Bloco 4 – Impacto positivo */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>
            O impacto positivo de um ambiente OMMA na sua empresa
          </h3>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: 'Retenção e atração de talentos', d: 'Um espaço bem planejado inspira, motiva e atrai profissionais de alto nível, fortalecendo a equipe e impulsionando o crescimento da sua empresa.' },
              { t: 'Aumento de produtividade', d: 'Ambientes funcionais e agradáveis tornam os colaboradores mais engajados, elevando a eficiência e a qualidade das entregas no dia a dia.' },
              { t: 'Identidade da empresa', d: 'Criamos projetos que traduzem sua cultura organizacional, com ambientes que refletem seus valores e reforçam a imagem da sua marca.' },
              { t: 'Economia com manutenção', d: 'Com planejamento inteligente, você reduz custos futuros com reformas e aproveita o espaço de forma prática e estratégica.' },
              { t: 'Acabamentos de qualidade', d: 'Valorizamos seu negócio com materiais de alto padrão que garantem estética, durabilidade e funcionalidade a cada ambiente.' },
              { t: 'Instalações elétricas otimizadas', d: 'Projetamos uma infraestrutura moderna e segura, preparada para atender plenamente às demandas tecnológicas do seu negócio.' },
            ].map((i, idx) => (
              <div key={i.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 anim-fadeSlideUp" style={{ animationDelay: `${0.05 * idx}s` }}>
                <h4 className="font-semibold text-white">{i.t}</h4>
                <p className="text-white/80 mt-2 text-sm">{i.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 5 – Setores */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Expertise OMMA em diversos setores</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sectors.map((s, idx) => (
              <div key={s} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex items-center gap-3 anim-fadeSlideUp" style={{ animationDelay: `${0.04 * idx}s` }}>
                <div className="h-10 w-10 rounded-lg bg-black/60 ring-1 ring-white/10" />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 6 – Adiar vs Conquistar */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold">O que acontece quando você adia seu projeto?</h4>
            <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
              {[
                'Equipe desmotivada',
                'Estrutura do ambiente desorganizada',
                'Redução de performance',
                'Layouts que dificultam a comunicação e a colaboração',
                'Ambientes monótonos e sem estímulos criativos',
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">O que você conquista ao fechar seu projeto com a OMMA?</h4>
            <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
              {[
                'Espaços versáteis e integrados',
                'Acabamentos e revestimentos de qualidade',
                'Infraestrutura moderna e segura',
                'Espaços organizados e decorados',
                'Fortalecimento da cultura e da marca',
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bloco 7 – Metodologia */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
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
            <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
              SOLICITE UM ORÇAMENTO AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 8 – Nossos clientes */}
      <section className="py-12 border-t border-white/10 reveal">
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
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Projetos que falam por nós</h3>
          <p className="text-white/70 mt-2 text-sm">As imagens definitivas podem ser vinculadas às obras publicadas em omma.com.br/obras-realizadas.</p>
          <div className="mt-6">
            <ProjectsCarousel slides={slides} />
          </div>
        </div>
      </section>

      {/* Bloco 10 – Por que escolher */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold">Por que escolher a OMMA?</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[
              { t: 'Agilidade na entrega', d: 'Projeto concluído com agilidade, sem comprometer a qualidade.' },
              { t: 'Gestão completa', d: 'Do planejamento à entrega, sem preocupações.' },
              { t: 'Alto padrão estético', d: 'Ambientes que unem funcionalidade e beleza.' },
              { t: 'Serviços complementares', d: 'Instalações e acabamentos de excelência.' },
              { t: 'Abrangência nacional', d: 'Expertise disponível para todo o território nacional.' },
              { t: 'Gestão transparente', d: 'Previsibilidade e segurança em cada etapa.' },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <h4 className="font-semibold text-white">{i.t}</h4>
                <p className="text-white/80 mt-2 text-sm">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 11 – Formulário */}
      <section id="form" className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold">Transforme seu espaço corporativo com a OMMA Engenharia</h3>
            <p className="text-white/80 mt-2">Agende uma conversa estratégica conosco para entender suas necessidades específicas e apresentar como a OMMA pode ser sua parceira ideal para otimizar e garantir a excelência do seu próximo investimento em infraestrutura.</p>
          </div>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Bloco 12 – Contato */}
      <section className="py-12 border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold">Contato</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-white/90">
            <div>
              <h4 className="font-semibold">Endereço:</h4>
              <p className="text-white/80 mt-1">Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP<br/>04546-005</p>
            </div>
            <div>
              <h4 className="font-semibold">Telefone:</h4>
              <p className="text-white/80 mt-1">+55 11 3056 2340</p>
              <h4 className="font-semibold mt-4">E-mails:</h4>
              <p className="text-white/80 mt-1 space-y-1">
                <span className="block">contato@omma.com.br</span>
                <span className="block">fornecedores@omma.com.br</span>
                <span className="block">trabalheaqui@omma.com.br</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Redes sociais:</h4>
              <ul className="text-white/80 mt-1 space-y-1">
                <li><a className="hover:underline" href="https://www.instagram.com/omma_oficial" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="hover:underline" href="https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="hover:underline" href="https://www.facebook.com/omma4.0" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
