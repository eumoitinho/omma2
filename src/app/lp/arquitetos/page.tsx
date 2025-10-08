import React from 'react';
import Link from 'next/link';
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
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: 'OMMA Engenharia - Parceria para Arquitetos',
  description: 'Parceria OMMA para arquitetos — qualidade, eficiência e previsibilidade',
};

const stats = [
  { value: '+1.000', label: 'obras entregues', desc: 'Experiência comprovada em projetos de grande escala.' },
  { value: '+850', label: 'clientes', desc: 'Parcerias de sucesso com empresas que confiam na OMMA.' },
  { value: '+24', label: 'anos de experiência', desc: 'Tradição e inovação a serviço do seu projeto.' },
];

const benefits = [
  {
    icon: Target,
    title: 'Foco total no projeto',
    desc: 'Liberte-se das preocupações com a gestão e execução da obra e dedique-se integralmente à sua paixão: idealizar e projetar.',
    image: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg'
  },
  {
    icon: TrendingUp,
    title: 'Previsibilidade financeira',
    desc: 'Com a garantia de um preço fechado, você e seu cliente têm total controle sobre o orçamento, evitando surpresas desagradáveis.',
    image: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 3.jpg'
  },
  {
    icon: Clock,
    title: 'Agilidade na entrega',
    desc: 'Nossa expertise em "obras rápidas" garante que seus projetos sejam concluídos dentro do prazo.',
    image: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 2.jpg'
  },
  {
    icon: Award,
    title: 'Qualidade assegurada',
    desc: 'Conte com a excelência da OMMA em acabamentos e instalações, garantindo que a materialização do seu projeto mantenha o alto padrão de qualidade.',
    image: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 2.jpg'
  },
  {
    icon: Users,
    title: 'Suporte técnico especializado',
    desc: 'Tenha acesso a uma equipe de engenheiros com vasta experiência, prontos para oferecer suporte em todas as etapas do projeto.',
    image: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 2.jpg'
  },
  {
    icon: Sparkles,
    title: 'Ampliação de portfólio',
    desc: 'Ao fazer parceria com a OMMA, você pode assumir projetos de maior complexidade e escala, expandindo suas oportunidades.',
    image: '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 4.jpg'
  },
  {
    icon: Shield,
    title: 'Transparência e confiança',
    desc: 'Nossa gestão transparente e comunicação clara garantem uma parceria baseada na confiança mútua.',
    image: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 2.jpg'
  },
  {
    icon: Handshake,
    title: 'Relacionamento duradouro',
    desc: 'Buscamos construir parcerias de longo prazo, baseadas no respeito, na colaboração e no sucesso compartilhado.',
    image: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 4.jpg'
  },
];

const risks = [
  {
    title: 'Orçamento excedido',
    desc: 'Sem experiência em gestão de obras, seus projetos podem sofrer com custos imprevistos, gerando insatisfação para o cliente e prejuízos para você.'
  },
  {
    title: 'Atrasos na entrega',
    desc: 'A complexidade na execução de obras pode levar a atrasos significativos, comprometendo sua reputação e a relação com o cliente.'
  },
  {
    title: 'Qualidade comprometida',
    desc: 'A falta de expertise em instalações e acabamentos pode resultar em um produto final que não atende às expectativas do cliente.'
  },
  {
    title: 'Sobrecarga de trabalho',
    desc: 'Gerenciar uma obra sozinho exige tempo e energia que poderiam ser dedicados a novos projetos ou ao aprimoramento de suas habilidades.'
  },
  {
    title: 'Danos à reputação profissional',
    desc: 'Problemas na execução podem prejudicar sua imagem profissional e dificultar a aquisição de novos clientes.'
  },
];

export default function ArquitetosLP() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 4.jpg"
            alt="OMMA Parceria Arquitetos"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <img src="/omma_logo.png" alt="OMMA" className="h-10 w-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
              Arquiteto(a)?<br />
              <span className="text-amber-400">Junte-se à OMMA</span> e leve seus projetos além
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter' }}>
              A excelência de cada projeto de engenharia nasce da colaboração entre quem idealiza e quem constrói. Quando arquitetos e engenheiros atuam lado a lado desde o início, o resultado é uma obra fiel ao conceito original - com qualidade, eficiência e previsibilidade.
            </p>
            <div className="mt-8">
              <a
                href="#form"
                className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-amber-400/10 px-8 py-4 text-base font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
                style={{ fontFamily: 'Exo, Inter' }}
              >
                SEJA NOSSO PARCEIRO!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Exo, Inter' }}>
            Resultados que comprovam nossa <span className="text-amber-400">expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:border-amber-400/40 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Exo, Inter' }}>
                  {stat.label}
                </div>
                <p className="text-sm text-white/70" style={{ fontFamily: 'Inter' }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Você projeta, OMMA executa */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Exo, Inter' }}>
                Você projeta, a <span className="text-amber-400">OMMA executa</span>
              </h3>
              <div className="space-y-4 text-base text-white/80 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                <p>
                  Muitos arquitetos acabam subestimando a complexidade do gerenciamento de obras e assumem tarefas que poderiam ser delegadas. Na OMMA Engenharia, nosso papel é permitir que você mantenha o foco no projeto e no design, enquanto cuidamos de todo o gerenciamento e execução da obra.
                </p>
                <p>
                  Realizamos a precificação detalhada de cada etapa, selecionamos os melhores fornecedores e montamos uma equipe especializada para acompanhar todos os processos. Assim, garantimos previsibilidade de custos, controle do orçamento e total tranquilidade para você e para o seu cliente.
                </p>
                <p>
                  Com uma equipe altamente qualificada, asseguramos a execução impecável da obra, transformando sua visão em realidade com excelência e o mais alto padrão de qualidade.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-8 py-3 text-base text-amber-400 hover:bg-amber-400/15 transition"
                  style={{ fontFamily: 'Exo, Inter' }}
                >
                  SEJA NOSSO PARCEIRO!
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 2.png"
                alt="OMMA Execução"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 5.jpg"
                alt="Riscos"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Exo, Inter' }}>
                Riscos de <span className="text-amber-400">não ter</span> um parceiro estratégico
              </h4>
              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-white mb-1" style={{ fontFamily: 'Exo, Inter' }}>
                        {risk.title}
                      </h5>
                      <p className="text-sm text-white/70" style={{ fontFamily: 'Inter' }}>
                        {risk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Exo, Inter' }}>
            Por que ser um arquiteto <span className="text-amber-400">parceiro OMMA</span>?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-400/40 transition-all">
                  {/* Image Background */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Exo, Inter' }}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What OMMA Does */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Uma parceria que <span className="text-amber-400">constrói</span>: o que a OMMA faz por você?
          </h3>
          <p className="text-lg text-white/80 mb-8" style={{ fontFamily: 'Inter' }}>
            Contar com a OMMA como parceira é assegurar solidez, eficiência e inovação em cada projeto.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Facilitamos a comunicação entre todas as partes envolvidas no projeto',
              'Calculamos cada fase do projeto, garantindo previsibilidade de custos e controle do orçamento',
              'Buscamos os melhores parceiros do mercado para garantir qualidade e eficiência',
              'Desenvolvemos soluções construtivas inovadoras, que atendam aos requisitos estéticos e funcionais',
              'Complementamos suas habilidades com nossa expertise em engenharia, gestão de obras e logística',
              'Ampliamos seu networking, abrindo portas para novas oportunidades de negócio',
              'Tomamos decisões compartilhadas para garantir a fidelidade do projeto original',
              'Oferecemos um olhar crítico sobre o desenho arquitetônico',
              'Entregamos cronogramas claros e bem definidos, evitando atrasos significativos'
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80" style={{ fontFamily: 'Inter' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 1.jpg"
                alt="OMMA Quem Somos"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Exo, Inter' }}>
                QUEM <span className="text-amber-400">SOMOS</span>?
              </h3>
              <p className="text-lg text-white/80 mb-6" style={{ fontFamily: 'Exo, Inter' }}>
                Soluções completas para ambientes de alto padrão
              </p>
              <div className="space-y-4 text-base text-white/80 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                <p>
                  Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nos diferenciamos pela gestão de obras pelo modelo "chave na mão" (turn-key), conduzindo todo o gerenciamento do projeto para entregar ambientes completos, prontos para uso e totalmente funcionais.
                </p>
                <p>
                  Além de escritórios corporativos, nosso portfólio contempla clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 bg-amber-400/10 px-8 py-3 text-base text-amber-400 hover:bg-amber-400/15 transition"
                  style={{ fontFamily: 'Exo, Inter' }}
                >
                  SEJA NOSSO PARCEIRO!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Exo, Inter' }}>
              Construa grandes projetos ao lado da <span className="text-amber-400">OMMA</span>
            </h3>
            <p className="text-lg text-white/80" style={{ fontFamily: 'Inter' }}>
              Com nossa expertise em engenharia, gestão de obras e precificação, você terá total suporte em cada etapa do seu projeto. Preencha os dados abaixo e dê o primeiro passo para uma parceria de sucesso.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Exo, Inter' }}>Contato</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>Endereço</h4>
              <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                Avenida Dr. Cardoso de Melo, 1666<br/>
                2º andar, Vila Olímpia<br/>
                São Paulo/SP - 04546-005
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>Telefone</h4>
              <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter' }}>+55 11 3056 2340</p>

              <h4 className="font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>E-mails</h4>
              <div className="space-y-1 text-sm text-white/80" style={{ fontFamily: 'Inter' }}>
                <p>contato@omma.com.br</p>
                <p>fornecedores@omma.com.br</p>
                <p>trabalheaqui@omma.com.br</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-bold text-amber-400 mb-3" style={{ fontFamily: 'Exo, Inter' }}>Redes sociais</h4>
              <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'Inter' }}>
                <li>
                  <a className="hover:text-amber-400 transition" href="https://www.instagram.com/omma_oficial" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-amber-400 transition" href="https://www.facebook.com/omma4.0" target="_blank" rel="noreferrer">
                    Facebook
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
