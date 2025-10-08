import React from 'react';
import LeadForm from '@/components/lp/LeadForm';
import {
  Target,
  Clock,
  Award,
  Users,
  TrendingUp,
  Shield,
  Handshake,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Building2,
  Zap,
  Heart
} from 'lucide-react';

export const metadata = {
  title: 'OMMA Engenharia - Arquitetos (Landing page)',
  description: 'Parceria OMMA para arquitetos — qualidade, eficiência e previsibilidade',
};

const stats = [
  { value: '+1.000', label: 'obras entregues', desc: 'Experiência comprovada em projetos de grande escala.' },
  { value: '+850', label: 'clientes', desc: 'Parcerias de sucesso com empresas que confiam na OMMA.' },
  { value: '+24', label: 'anos de experiência', desc: 'Tradição e inovação a serviço do seu projeto corporativo.' },
];

const clients = [
  'Ambev', 'Azul', 'Sensitech', 'Onofre', 'Nutrien', 'McDonalds', 'Decathlon', 'Unimed', 'Ultracargo', 'Movile',
];

const benefits = [
  { t: 'Foco total no projeto', d: 'Liberte-se das preocupações com a gestão e execução da obra e dedique-se integralmente à sua paixão: idealizar e projetar.', icon: Target },
  { t: 'Previsibilidade financeira', d: 'Com a garantia de um preço fechado, você e seu cliente têm total controle sobre o orçamento, evitando surpresas desagradáveis.', icon: TrendingUp },
  { t: 'Agilidade na entrega', d: 'Nossa expertise em "obras rápidas" garante que seus projetos sejam concluídos dentro do prazo, otimizando o tempo e a satisfação do cliente.', icon: Clock },
  { t: 'Qualidade assegurada', d: 'Conte com a excelência da OMMA em acabamentos e instalações, garantindo que a materialização do seu projeto mantenha o alto padrão de qualidade que você idealizou.', icon: Award },
  { t: 'Suporte técnico especializado', d: 'Tenha acesso a uma equipe de engenheiros com vasta experiência, prontos para oferecer suporte em todas as etapas do projeto, desde a precificação até a execução.', icon: Users },
  { t: 'Ampliação de portfólio', d: 'Ao fazer parceria com a OMMA, você pode assumir projetos de maior complexidade e escala, expandindo seu portfólio e suas oportunidades de negócio.', icon: Sparkles },
  { t: 'Transparência e confiança', d: 'Nossa gestão transparente e comunicação clara garantem uma parceria baseada na confiança mútua, com relatórios detalhados e acompanhamento constante.', icon: Shield },
  { t: 'Relacionamento duradouro', d: 'Buscamos construir parcerias de longo prazo, baseadas no respeito, na colaboração e no sucesso compartilhado.', icon: Handshake },
];

export default function ArquitetosLP() {
  return (
    <div className="min-h-screen bg-black">
      {/* Bloco 1 – Hero */}
      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <img src="/omma_logo.png" alt="OMMA" className="h-10 w-auto mb-8" />
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" style={{ fontFamily: 'Exo, Inter' }}>
              Arquiteto (a)?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Junte-se à OMMA</span> e leve seus projetos além
            </h1>
            <p className="mt-8 text-xl text-white/90 max-w-3xl leading-relaxed" style={{ fontFamily: 'Inter' }}>
              A excelência de cada projeto de engenharia nasce da colaboração entre quem idealiza e quem constrói. Quando arquitetos e engenheiros atuam lado a lado desde o início, o resultado é uma obra fiel ao conceito original - com qualidade, eficiência e previsibilidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#form"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-4 text-base font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105"
                style={{ fontFamily: 'Exo, Inter' }}
              >
                <span>SEJA NOSSO PARCEIRO!</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 – Resultados */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Exo, Inter' }}>
              Resultados que comprovam nossa <span className="text-amber-400">expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 p-8 hover:ring-amber-400/50 transition-all hover:scale-105"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-500 mb-3" style={{ fontFamily: 'Exo, Inter' }}>
                    {s.value}
                  </div>
                  <div className="text-xl font-bold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: 'Exo, Inter' }}>
                    {s.label}
                  </div>
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 – Você projeta, a OMMA executa */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>NOSSA PARCERIA</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Exo, Inter' }}>
                Você projeta, a <span className="text-amber-400">OMMA executa</span>
              </h3>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                <p>Muitos arquitetos acabam subestimando a complexidade do gerenciamento de obras e assumem tarefas que poderiam ser delegadas. Na OMMA Engenharia, nosso papel é permitir que você mantenha o foco no projeto e no design, enquanto cuidamos de todo o gerenciamento e execução da obra.</p>
                <p>Realizamos a precificação detalhada de cada etapa, selecionamos os melhores fornecedores e montamos uma equipe especializada para acompanhar todos os processos. Assim, garantimos previsibilidade de custos, controle do orçamento e total tranquilidade para você e para o seu cliente.</p>
                <p>Com uma equipe altamente qualificada, asseguramos a execução impecável da obra, transformando sua visão em realidade com excelência e o mais alto padrão de qualidade.</p>
              </div>
              <div className="mt-8">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-4 text-base font-bold text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
                  style={{ fontFamily: 'Exo, Inter' }}
                >
                  SEJA NOSSO PARCEIRO!
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2">
                <img
                  src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg"
                  alt="Projeto executado pela OMMA"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 4 – Riscos sem parceiro */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2">
                <img
                  src="/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 3.png"
                  alt="Riscos da construção"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-400/10 border border-red-400/30 mb-6">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400" style={{ fontFamily: 'Exo, Inter' }}>ATENÇÃO</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Exo, Inter' }}>
                Riscos de não ter um parceiro estratégico
              </h4>
              <ul className="space-y-5">
                {[
                  { t: 'Orçamento excedido', d: 'Sem experiência em gestão de obras, seus projetos podem sofrer com custos imprevistos, gerando insatisfação para o cliente e prejuízos para você.' },
                  { t: 'Atrasos na entrega', d: 'A complexidade na execução de obras pode levar a atrasos significativos, comprometendo sua reputação e a relação com o cliente.' },
                  { t: 'Qualidade comprometida', d: 'A falta de expertise em instalações e acabamentos pode resultar em um produto final que não atende às expectativas do cliente.' },
                  { t: 'Sobrecarga de trabalho', d: 'Gerenciar uma obra sozinho exige tempo e energia que poderiam ser dedicados a novos projetos ou ao aprimoramento de suas habilidades.' },
                  { t: 'Danos à reputação profissional', d: 'Problemas na execução podem prejudicar sua imagem profissional e dificultar a aquisição de novos clientes.' },
                ].map((r, i) => (
                  <li key={i} className="group relative">
                    <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-400/30 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center ring-1 ring-red-500/30">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white mb-2 text-lg" style={{ fontFamily: 'Exo, Inter' }}>{r.t}</h5>
                        <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter' }}>{r.d}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 5 – Benefícios parceiro OMMA */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>BENEFÍCIOS</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Exo, Inter' }}>
              Por que ser um arquiteto <span className="text-amber-400">parceiro OMMA</span>?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 hover:border-amber-400/50 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-500/20 border border-amber-400/30 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-3" style={{ fontFamily: 'Exo, Inter' }}>{item.t}</h4>
                    <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>{item.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloco 6 – Nossos clientes */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Exo, Inter' }}>
            <span className="text-amber-400">NOSSOS CLIENTES</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {clients.map((c) => (
              <div
                key={c}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-6 py-5 text-center hover:border-amber-400/50 hover:bg-white/10 transition-all"
              >
                <span className="text-base font-semibold text-white/90 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Exo, Inter' }}>
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 7 – O que a OMMA faz por você */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>O QUE FAZEMOS</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Exo, Inter' }}>
              Uma parceria que <span className="text-amber-400">constrói</span>: o que a OMMA faz por você?
            </h3>
            <p className="text-xl text-white/80 max-w-4xl" style={{ fontFamily: 'Inter' }}>
              Contar com a OMMA como parceira é assegurar solidez, eficiência e inovação em cada projeto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              'Facilitamos a comunicação entre todas as partes envolvidas no projeto.',
              'Calculamos cada fase do projeto, garantindo previsibilidade de custos e controle do orçamento.',
              'Buscamos os melhores parceiros do mercado para garantir qualidade e eficiência em todos os processos.',
              'Desenvolvemos soluções construtivas inovadoras, que atendam aos requisitos estéticos e funcionais de cada projeto.',
              'Complementamos suas habilidades com nossa expertise em engenharia, gestão de obras, orçamentação e logística.',
              'Ampliamos seu networking, abrindo portas para novas oportunidades de negócio.',
              'Tomamos decisões compartilhadas para garantir a fidelidade do projeto original, mantendo a qualidade e estética desejadas.',
              'Oferecemos um olhar crítico sobre o desenho arquitetônico, identificando possíveis problemas ou desafios que podem surgir durante a construção.',
              'Entregamos cronogramas claros e bem definidos, evitando atrasos significativos nas entregas dos projetos.',
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-400/30 transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center ring-1 ring-amber-400/30 group-hover:bg-amber-400/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-white/90 flex-1" style={{ fontFamily: 'Inter' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 8 – Quem somos */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>SOBRE NÓS</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Exo, Inter' }}>
                QUEM <span className="text-amber-400">SOMOS</span>?
              </h3>
              <p className="text-xl text-amber-400/90 mb-8 font-semibold" style={{ fontFamily: 'Exo, Inter' }}>
                Soluções completas para ambientes de alto padrão
              </p>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                <p>Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nos diferenciamos pela gestão de obras pelo modelo "chave na mão" (turn-key), conduzindo todo o gerenciamento do projeto para entregar ambientes completos, prontos para uso e totalmente funcionais. Para isso, contamos com arquitetos parceiros e também oferecemos suporte de engenharia e construção para seus projetos.</p>
                <p>Além de escritórios corporativos, nosso portfólio contempla clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.</p>
              </div>
              <div className="mt-8">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-4 text-base font-bold text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
                  style={{ fontFamily: 'Exo, Inter' }}
                >
                  SEJA NOSSO PARCEIRO!
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2">
                <img
                  src="/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 1.jpg"
                  alt="OMMA Engenharia"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 9 – Formulário */}
      <section id="form" className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-neutral-950">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>COMECE AGORA</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Exo, Inter' }}>
              Construa grandes projetos ao lado da <span className="text-amber-400">OMMA</span>
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Com nossa expertise em engenharia, gestão de obras e precificação, você terá total suporte em cada etapa do seu projeto. Preencha os dados abaixo e dê o primeiro passo para uma parceria de sucesso.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-3xl blur-xl" />
            <div className="relative">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 10 – Contato */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Exo, Inter' }}>Contato</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-amber-400/30 transition-all">
              <h4 className="font-bold text-amber-400 mb-4 text-lg" style={{ fontFamily: 'Exo, Inter' }}>Endereço:</h4>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP<br/>04546-005
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-amber-400/30 transition-all">
              <h4 className="font-bold text-amber-400 mb-4 text-lg" style={{ fontFamily: 'Exo, Inter' }}>Telefone:</h4>
              <p className="text-white/80 mb-6" style={{ fontFamily: 'Inter' }}>+55 11 3056 2340</p>
              <h4 className="font-bold text-amber-400 mb-4 text-lg" style={{ fontFamily: 'Exo, Inter' }}>E-mails:</h4>
              <div className="space-y-2 text-white/80" style={{ fontFamily: 'Inter' }}>
                <p>contato@omma.com.br</p>
                <p>fornecedores@omma.com.br</p>
                <p>trabalheaqui@omma.com.br</p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-amber-400/30 transition-all">
              <h4 className="font-bold text-amber-400 mb-4 text-lg" style={{ fontFamily: 'Exo, Inter' }}>Redes sociais:</h4>
              <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Inter' }}>
                <li>
                  <a className="hover:text-amber-400 transition inline-flex items-center gap-2" href="https://www.instagram.com/omma_oficial" target="_blank" rel="noreferrer">
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition inline-flex items-center gap-2" href="https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition inline-flex items-center gap-2" href="https://www.facebook.com/omma4.0" target="_blank" rel="noreferrer">
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
