import { config } from 'dotenv';
import { createClient } from '@sanity/client';

// Carregar variáveis de ambiente
config({ path: '.env.local' });

// Criar cliente Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function seedSanity() {
  console.log('🌱 Iniciando população do Sanity...\n');

  try {
    // 1. Site Settings
    console.log('📝 Criando Site Settings...');
    const siteSettings = await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      siteName: 'OMMA Engenharia',
      siteDescription: 'Transformando ambientes em resultados desde 1998',
      contactInfo: {
        address: 'Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP\n04546-005',
        phone: '+55 11 3056 2340',
        emails: [
          { label: 'Contato', email: 'contato@omma.com.br' },
          { label: 'Fornecedores', email: 'fornecedores@omma.com.br' },
          { label: 'Trabalhe Aqui', email: 'trabalheaqui@omma.com.br' },
        ],
      },
      socialMedia: {
        instagram: 'https://www.instagram.com/omma_oficial',
        linkedin: 'https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes',
        facebook: 'https://www.facebook.com/omma4.0',
      },
    });
    console.log('✅ Site Settings criado!\n');

    // 2. Navbar
    console.log('📝 Criando Navbar...');
    const navbar = await client.createOrReplace({
      _id: 'navbar',
      _type: 'navbar',
      menuItems: [
        { label: 'Home', link: '/', highlighted: false },
        { label: 'Quem somos', link: '/quem-somos', highlighted: false },
        { label: 'Atuação', link: '/areas-de-atuacao', highlighted: false },
        { label: 'Metodologia', link: '/metodologia', highlighted: false },
        { label: 'Obras', link: '/obras-realizadas', highlighted: false },
        { label: 'Trabalhe conosco', link: '/trabalhe-conosco', highlighted: true },
      ],
      ctaButton: {
        text: 'Contato',
        link: '/contato',
      },
    });
    console.log('✅ Navbar criado!\n');

    // 3. Footer
    console.log('📝 Criando Footer...');
    const footer = await client.createOrReplace({
      _id: 'footer',
      _type: 'footer',
      companyName: 'OMMA Engenharia',
      description: 'Transformando ambientes em resultados desde 1998.',
      copyrightText: 'Todos os direitos reservados.',
      links: [
        { text: 'Política de Privacidade', url: '#' },
        { text: 'Termos de Uso', url: '#' },
      ],
    });
    console.log('✅ Footer criado!\n');

    // 4. Homepage
    console.log('📝 Criando Homepage...');
    const homepage = await client.createOrReplace({
      _id: 'homepage',
      _type: 'homepage',

      // Bloco 1 - Hero
      heroSection: {
        title: 'TRANSFORMANDO AMBIENTES EM RESULTADOS',
        subtitle: 'Projetos de alto padrão que traduzem a identidade da sua empresa em cada detalhe.',
        ctaText: 'FALE COM NOSSOS ESPECIALISTAS',
        ctaLink: '#contato',
      },

      // Bloco 2 - Stats
      statsSection: {
        sectionTitle: 'Resultados que comprovam nossa expertise',
        stats: [
          {
            number: '+1.000',
            label: 'obras entregues',
            description: 'Experiência comprovada em projetos de grande escala.',
          },
          {
            number: '+850',
            label: 'clientes',
            description: 'Parcerias de sucesso com empresas que confiam na OMMA.',
          },
          {
            number: '+24 anos',
            label: 'de experiência',
            description: 'Tradição e inovação a serviço do seu projeto corporativo.',
          },
        ],
      },

      // Bloco 3 - Management
      managementSection: {
        title: 'Gestão completa para obras rápidas e eficientes',
        description: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'A OMMA Engenharia cuida de toda a gestão da sua obra, do planejamento à chave na mão, garantindo que cada etapa seja executada com precisão técnica e rigor. Nossa metodologia comprovada nos permite entregar cada projeto com agilidade, evitando custos extras com aluguel de espaços provisórios ou interrupções nas suas operações.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Transparência, previsibilidade e segurança fazem parte do nosso compromisso. E mais do que entregar ambientes funcionais, criamos espaços sofisticados, que refletem a essência da sua marca e fortalecem sua presença no mercado.',
              },
            ],
          },
        ],
        features: [
          'Obras a partir de 300m²',
          'Projetos em edifícios AAA',
          'Método Design & Built',
          'Gestão completa da obra',
        ],
        ctaText: 'FAÇA SEU PROJETO COM A OMMA!',
        ctaLink: '#contato',
      },

      // Bloco 4 - Sectors
      sectorsSection: {
        title: 'Expertise NEOOMA em diversos setores',
        subtitle: 'Atuamos em diversos segmentos com excelência e compromisso com resultados',
        sectors: [
          {
            title: 'Ambientes Corporativos',
            description: 'Espaços eficientes que equilibram foco e colaboração, fortalecendo a cultura e performance diária.',
          },
          {
            title: 'Startups & Scale-ups',
            description: 'Ambientes flexíveis e escaláveis que acompanham o crescimento e estimulam velocidade de execução.',
          },
          {
            title: 'Coworkings',
            description: 'Espaços multiuso desenhados para alta rotatividade, conforto e retenção de clientes e comunidades.',
          },
          {
            title: 'Clínicas e Laboratórios',
            description: 'Ambientes humanizados, funcionais e normativos, com infraestrutura técnica precisa e fluxos otimizados.',
          },
          {
            title: 'Academias',
            description: 'Layouts projetados para o máximo desempenho e bem-estar, unindo funcionalidade, segurança e conforto.',
          },
          {
            title: 'Espaços Comerciais',
            description: 'Edificações e galpões versáteis para operações de atacado e varejo com eficiência e confiabilidade.',
          },
        ],
      },

      // Bloco 5 - Why Choose
      whyChooseSection: {
        title: 'Por que escolher a OMMA?',
        benefits: [
          {
            title: 'Agilidade na entrega',
            description: 'Projeto concluído com agilidade, sem comprometer a qualidade.',
          },
          {
            title: 'Gestão completa',
            description: 'Do planejamento à entrega, sem preocupações.',
          },
          {
            title: 'Alto padrão estético',
            description: 'Ambientes que unem funcionalidade e beleza.',
          },
          {
            title: 'Serviços complementares',
            description: 'Instalações e acabamentos de excelência.',
          },
          {
            title: 'Abrangência nacional',
            description: 'Expertise disponível para todo o território nacional.',
          },
          {
            title: 'Gestão transparente',
            description: 'Previsibilidade e segurança em cada etapa.',
          },
        ],
      },

      // Bloco 6 - Clients
      clientsSection: {
        title: 'NOSSOS CLIENTES',
        clients: [
          { name: 'Ambev' },
          { name: 'Azul' },
          { name: 'Sensitech' },
          { name: 'Onofre' },
          { name: 'Nutrien' },
          { name: 'McDonalds' },
          { name: 'Decathlon' },
          { name: 'Unimed' },
          { name: 'Ultracargo' },
          { name: 'Movile' },
        ],
      },

      // Bloco 7 - Methodology
      methodologySection: {
        title: 'METODOLOGIA OMMA',
        subtitle: 'O caminho para o sucesso do seu projeto',
        phases: [
          {
            number: 1,
            name: 'FASE 1',
            title: 'DIAGNÓSTICO',
            steps: [
              'Revisão de briefing',
              'Revisão do escopo e requisitos',
              'Estimativa preliminar',
            ],
          },
          {
            number: 2,
            name: 'FASE 2',
            title: 'PLANEJAMENTO',
            steps: [
              'Desenvolvimento de projetos (complementares)',
              'Orçamento e cronograma detalhado',
              'Aprovações',
              'Planejamento de suprimentos e gestão',
            ],
          },
          {
            number: 3,
            name: 'FASE 3',
            title: 'EXECUÇÃO',
            steps: [
              'Mobilização interna',
              'Demolições e reestrutura',
              'Implantação de instalações',
              'Forros e contrapisos',
              'Acabamentos e revestimentos',
              'Instalação de sistemas',
              'Limpeza da obra',
            ],
          },
          {
            number: 4,
            name: 'FASE 4',
            title: 'ENTREGA e PÓS-OBRA',
            steps: [
              'Comissionamento e testes',
              'Vistoria e punch list',
              'Entrega Final (As-Built)',
              'Treinamento e Ocupação',
            ],
          },
        ],
        ctaText: 'SOLICITE UM ORÇAMENTO AGORA!',
        ctaLink: '#contato',
      },

      // Bloco 8 - Architects
      architectsSection: {
        title: 'Seja um arquiteto parceiro da OMMA',
        description: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Você é arquiteto e não sabe como gerir a sua obra? A OMMA é a solução que você precisa para levar seus projetos do conceito à entrega com segurança e eficiência.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Nós cuidamos de toda a parte de engenharia e construção, assumindo a precificação, o gerenciamento completo do canteiro, os projetos complementares e a entrega final, enquanto você foca apenas no design e no projeto.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Com nosso modelo de preço fechado, você ainda tem total previsibilidade de custos e evita surpresas no orçamento. O resultado? Projetos que se destacam pela união entre estética, funcionalidade e resultados reais.',
              },
            ],
          },
        ],
        ctaText: 'SEJA UM ARQUITETO PARCEIRO AGORA!',
        ctaLink: '#contato',
      },

      // Bloco 8.5 - Portfolio
      portfolioSection: {
        title: 'Portfólio de Obras',
        subtitle: 'Conheça alguns dos nossos principais projetos',
        ctaText: 'Ver todas as obras',
        ctaLink: '/obras',
      },

      // Bloco 9 - About
      aboutSection: {
        title: 'QUEM SOMOS?',
        description: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nos diferenciamos pela gestão de obras pelo modelo "chave na mão" (turn-key), conduzindo todo o gerenciamento do projeto para entregar ambientes completos, prontos para uso e totalmente funcionais. Para isso, contamos com arquitetos parceiros e também oferecemos suporte de engenharia e construção para seus projetos.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Além de escritórios corporativos, nosso portfólio contempla clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.',
              },
            ],
          },
        ],
        ctaText: 'SOLICITE UM ORÇAMENTO AGORA!',
        ctaLink: '#contato',
      },

      // Bloco 10 - Contact Form
      contactFormSection: {
        title: 'Descubra como garantir a excelência do seu próximo investimento em infraestrutura!',
        subtitle: 'Preencha seus dados e agende uma conversa estratégica hoje mesmo. Estamos prontos para construir o futuro do seu negócio com solidez e inteligência.',
      },

      // Bloco 11 - Contact Info
      contactInfoSection: {
        title: 'Contato',
        address: 'Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP\n04546-005',
        phone: '+55 11 3056 2340',
        emails: [
          { label: 'Contato', email: 'contato@omma.com.br' },
          { label: 'Fornecedores', email: 'fornecedores@omma.com.br' },
          { label: 'Trabalhe Aqui', email: 'trabalheaqui@omma.com.br' },
        ],
      },
    });
    console.log('✅ Homepage criada!\n');

    // 5. Quem Somos
    console.log('📝 Criando página Quem Somos...');
    const quemSomos = await client.createOrReplace({
      _id: 'quemSomos',
      _type: 'quemSomos',
      pageTitle: 'Quem Somos - OMMA Engenharia',
      heroTitle: 'Quem somos?',
      introSection: {
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nossa jornada é marcada pela paixão de transformar visões em realidade, sempre com um compromisso inabalável com a excelência e a satisfação do cliente.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Oferecemos uma gestão completa de projetos, do planejamento detalhado à entrega pronta para uso. Isso significa que cuidamos de cada detalhe, desde a burocracia inicial até os acabamentos finais, desonerando sua equipe de todas as complexidades e preocupações. É um único ponto de contato, com total previsibilidade, comunicação clara e ausência de surpresas.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Nosso portfólio contempla escritórios corporativos, clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. São projetos de 300m² em diante, executados em edifícios de alto padrão, para corporações que buscam expandir ou modernizar suas instalações.',
              },
            ],
          },
        ],
      },
      purposeSection: {
        title: 'Nosso propósito',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Na OMMA, nosso foco é entregar soluções completas em obras, com gestão integral que elimina preocupações e assegura previsibilidade para cada cliente. Acreditamos que transformar um projeto em realidade exige mais do que um bom design: exige excelência na gestão, agilidade na execução e compromisso com resultados.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Nossa equipe, formada por engenheiros, arquitetos e especialistas em engenharia corporativa, é a alma da OMMA. Mais do que construir estruturas, cultivamos relacionamentos sólidos, baseados na transparência, no profissionalismo e na busca constante por superar expectativas.',
              },
            ],
          },
        ],
      },
    });
    console.log('✅ Quem Somos criada!\n');

    // 6. Áreas de Atuação
    console.log('📝 Criando página Áreas de Atuação...');
    const areasAtuacao = await client.createOrReplace({
      _id: 'areasAtuacao',
      _type: 'areasAtuacao',
      pageTitle: 'Áreas de Atuação - OMMA Engenharia',
      heroTitle: 'Conheça nossas principais áreas de atuação',
      introText: 'A OMMA transforma ideias em espaços funcionais e de alto padrão. Atuamos em diferentes segmentos, sempre com a mesma dedicação em garantir qualidade, eficiência e resultados que superam expectativas.',
      areas: [
        {
          title: 'Escritórios',
          description: 'Planejamos e executamos ambientes corporativos que unem funcionalidade, conforto e design, criando espaços que aumentam a produtividade e refletem a identidade da sua empresa.',
        },
        {
          title: 'Startups',
          description: 'Entregamos soluções ágeis e adaptáveis para empresas em crescimento, criando escritórios modernos e flexíveis que acompanham o ritmo dinâmico do negócio.',
        },
        {
          title: 'Coworkings',
          description: 'Desenvolvemos ambientes colaborativos, com infraestrutura completa e design inteligente, pensados para estimular conexões e a criatividade.',
        },
        {
          title: 'Clínicas médicas',
          description: 'Projetamos e construímos clínicas funcionais, com foco na experiência do paciente e no atendimento humanizado, respeitando normas técnicas de saúde.',
        },
        {
          title: 'Escolas',
          description: 'Desenvolvemos ambientes educacionais que favorecem o aprendizado, a segurança e o bem-estar dos alunos, com soluções sob medida para cada instituição.',
        },
        {
          title: 'Estabelecimentos comerciais',
          description: 'Transformamos pontos de venda em experiências memoráveis, unindo praticidade, estética e funcionalidade para atrair e fidelizar clientes.',
        },
        {
          title: 'Infraestrutura pública',
          description: 'Atuamos em projetos de impacto social, como praças e áreas públicas, com soluções que valorizam a comunidade e a qualidade de vida.',
        },
        {
          title: 'Imóveis built to suit',
          description: 'Planejamos e executamos imóveis sob medida para empresas, desde a concepção até a entrega final, garantindo que cada detalhe esteja alinhado às necessidades do seu negócio.',
        },
      ],
    });
    console.log('✅ Áreas de Atuação criada!\n');

    // 7. Metodologia
    console.log('📝 Criando página Metodologia...');
    const metodologia = await client.createOrReplace({
      _id: 'metodologia',
      _type: 'metodologia',
      pageTitle: 'Metodologia - OMMA Engenharia',
      heroTitle: 'METODOLOGIA',
      subtitle: 'Obras ágeis do planejamento à entrega',
      introContent: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Na OMMA, somos reconhecidos por nossa metodologia de execução acelerada e eficiente. Isso não é apenas sobre velocidade, mas sobre a otimização rigorosa de cronogramas, recursos e fluxos de trabalho, garantindo a entrega do seu projeto dentro do prazo e do orçamento, sem comprometer a qualidade ou a segurança.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Nosso foco inabalável é entregar ambientes de alta qualidade e performance construtiva, garantindo durabilidade, funcionalidade, estética, conformidade rigorosa ao seu projeto arquitetônico e às normas técnicas mais exigentes.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Com a OMMA, você capitaliza mais rapidamente nas vantagens operacionais e estratégicas do seu novo espaço – seja para expandir suas operações, aumentar a produtividade da sua equipe, aprimorar a experiência dos seus clientes ou fortalecer a imagem da sua marca. Isso permite que você e sua equipe foquem integralmente no crescimento e na inovação do seu core business, enquanto nós cuidamos da infraestrutura.',
            },
          ],
        },
      ],
      methodologyTitle: 'Confira nossa metodologia:',
      phases: [
        {
          number: 1,
          name: 'FASE 1',
          title: 'DIAGNÓSTICO',
          steps: [
            'Revisão de briefing',
            'Revisão do escopo e requisitos',
            'Estimativa preliminar',
          ],
        },
        {
          number: 2,
          name: 'FASE 2',
          title: 'PLANEJAMENTO',
          steps: [
            'Desenvolvimento de projetos (complementares)',
            'Orçamento e cronograma detalhado',
            'Aprovações',
            'Planejamento de suprimentos e gestão',
          ],
        },
        {
          number: 3,
          name: 'FASE 3',
          title: 'EXECUÇÃO',
          steps: [
            'Mobilização interna',
            'Demolições e reestrutura',
            'Implantação de instalações',
            'Forros e contrapisos',
            'Acabamentos e revestimentos',
            'Instalação de sistemas',
            'Limpeza da obra',
          ],
        },
        {
          number: 4,
          name: 'FASE 4',
          title: 'ENTREGA e PÓS-OBRA',
          steps: [
            'Comissionamento e testes',
            'Vistoria e punch list',
            'Entrega Final (As-Built)',
            'Treinamento e Ocupação',
          ],
        },
      ],
    });
    console.log('✅ Metodologia criada!\n');

    // 8. Obras Realizadas
    console.log('📝 Criando página Obras Realizadas...');
    const obrasRealizadas = await client.createOrReplace({
      _id: 'obrasRealizadas',
      _type: 'obrasRealizadas',
      pageTitle: 'Obras Realizadas - OMMA Engenharia',
      heroTitle: 'Obras realizadas',
      subtitle: 'Descubra um pouco do que já construímos, junto aos nossos parceiros, ao longo desses anos, para clientes muito especiais.',
      projects: [
        {
          clientName: 'Ultracargo',
          clientDescription: 'referência em armazenagem de granéis líquidos',
          location: 'Brigadeiro Luís Antônio – São Paulo',
          area: '250 metros quadrados',
          duration: '4 dias',
          description: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Em 2020, a OMMA Engenharia foi incumbida de reformar um andar da Ultracargo, com o objetivo de criar uma área exclusiva para a diretoria, aprimorar a área gourmet e o espaço de descompressão. O desafio principal era otimizar o uso do espaço existente para acomodar novas necessidades.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Em 2022, a confiança na OMMA foi reafirmada quando fomos novamente chamados para adequar a área da diretoria, que havia expandido, e integrar novas salas de reuniões e uma copa.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'A execução dessas intervenções foi realizada durante um feriado de 4 dias, garantindo a continuidade das operações do cliente. O planejamento meticuloso, que incluiu mobilização de equipe, contratação e logística, foi concluído em apenas 10 dias, demonstrando nossa capacidade de resposta rápida e eficiente.',
                },
              ],
            },
          ],
        },
        {
          clientName: 'Unimed',
          clientDescription: 'líder nacional em planos de saúde',
          location: 'Alameda Santos – São Paulo',
          area: '5.400 m²',
          duration: '80 dias',
          description: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'A OMMA Engenharia enfrentou o desafio de otimizar o cronograma de uma obra de grande porte para a Unimed Nacional, abrangendo 5.400 m² distribuídos em 10 andares e 4 subsolos.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Para garantir a agilidade e a qualidade, mobilizamos 4 frentes de engenheiros e estabelecemos uma "house" dentro do canteiro de obras, agilizando os processos e a tomada de decisões. A execução simultânea em todos os andares exigiu um trabalho de equipe complexo e altamente coordenado, atendendo às expectativas de um cliente exigente e detalhista.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'O resultado foi a criação de uma nova sede que não apenas otimiza o espaço, mas também inspira e encanta usuários e colaboradores, oferecendo novas formas de interação e uma administração moderna e eficiente.',
                },
              ],
            },
          ],
        },
        {
          clientName: 'Praça da Cidadania de Paraisópolis',
          location: 'Paraisópolis',
          architect: 'Fundo Social do Governo do Estado de São Paulo',
          area: '3.700 m²',
          duration: '120 dias',
          description: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'A Praça da Cidadania de Paraisópolis, fruto de um convênio entre o Fundo Social de São Paulo e a Prefeitura Municipal de São Paulo, com apoio do Instituto Unimed, representou um desafio de otimização de custos e ampliação de espaço.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Para expandir a área inicial restrita, a OMMA Engenharia criou um platô no terreno. O grande desafio foi cercar esse platô de forma econômica, optando por taludes no fundo e na frente, com angulação precisa para evitar danos e custos elevados de estruturas de concreto.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Dentro dos 3.700 m², foram implementadas uma quadra poliesportiva, academia ao ar livre, parquinho infantil e um edifício em containers para as Escolas de Qualificação Profissional, entregando um espaço multifuncional e acessível à comunidade.',
                },
              ],
            },
          ],
        },
        {
          clientName: 'Movile',
          clientDescription: 'investidora em tecnologia e inovação',
          location: 'São Carlos',
          architect: 'Sérgio Camargo – SCAA',
          area: '748 m²',
          duration: '45 dias',
          description: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Em colaboração com o arquiteto Sérgio Camargo, a OMMA Engenharia assumiu a missão de transformar um galpão abandonado em São Carlos em um escritório corporativo que refletisse a identidade forte e sólida da Movile.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'O desafio era preservar o aspecto industrial original do galpão, com tijolos aparentes, enquanto se criavam espaços modernos e funcionais. Nossa equipe superou as complexidades de reformar uma estrutura existente, transportando a essência da marca para o ambiente.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'O resultado foi a criação de diversos espaços que otimizam o aproveitamento e o desempenho da equipe Movile, incluindo uma arquibancada para treinamento e um mezanino com uma ampla área de descompressão, demonstrando nossa capacidade de inovar e adaptar.',
                },
              ],
            },
          ],
        },
        {
          clientName: 'Ivanhoé Cambridge',
          clientDescription: 'gigante global do setor imobiliário',
          location: 'Brigadeiro Faria Lima – Pátio Malzone (São Paulo)',
          architect: 'Perkins & Will',
          area: '315 m²',
          duration: '60 dias',
          description: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'O projeto para a Ivanhoé Cambridge, localizado no Pátio Malzone, um dos terrenos mais valiosos do Brasil, apresentou desafios únicos que transcendiam a área de construção.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'A OMMA Engenharia precisou atuar em um prédio autossuficiente, com rigorosos pré-requisitos e a necessidade de não interferir nas operações diárias. Superamos obstáculos como a construção de um mezanino com pé direito alto, a instalação de vidro polarizado e a adequação do forro Buffle para otimização acústica.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'A excelência da OMMA em suas construções foi refletida com êxito e reconhecida tanto pelo cliente quanto pela administração do prédio, consolidando nossa reputação em projetos de alta complexidade e valor.',
                },
              ],
            },
          ],
        },
      ],
    });
    console.log('✅ Obras Realizadas criada!\n');

    // 9. Trabalhe Conosco
    console.log('📝 Criando página Trabalhe Conosco...');
    const trabalheConosco = await client.createOrReplace({
      _id: 'trabalheConosco',
      _type: 'trabalheConosco',
      pageTitle: 'Trabalhe Conosco - OMMA Engenharia',
      heroTitle: 'Trabalhe conosco',
      description: 'Somos uma equipe apaixonada por construir, inovar e superar desafios, transformando visões em realidade com excelência e agilidade. Se você busca um ambiente dinâmico, colaborativo e com oportunidades de crescimento, seu lugar é aqui!',
      formTitle: 'Preencha o formulário e envie seu currículo!',
    });
    console.log('✅ Trabalhe Conosco criada!\n');

    // 10. Contato
    console.log('📝 Criando página Contato...');
    const contato = await client.createOrReplace({
      _id: 'contato',
      _type: 'contato',
      pageTitle: 'Contato - OMMA Engenharia',
      heroTitle: 'Contato',
      address: 'Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP\n04546-005',
      phone: '+55 11 3056 2340',
      emails: [
        { label: 'Contato', email: 'contato@omma.com.br' },
        { label: 'Fornecedores', email: 'fornecedores@omma.com.br' },
        { label: 'Trabalhe Aqui', email: 'trabalheaqui@omma.com.br' },
      ],
    });
    console.log('✅ Contato criada!\n');

    console.log('🎉 Todos os dados foram populados com sucesso!');
    console.log('\n📌 Próximos passos:');
    console.log('1. Acesse http://localhost:3000/studio para visualizar o conteúdo');
    console.log('2. Faça upload das imagens necessárias (logos, fotos, ícones)');
    console.log('3. Ajuste qualquer conteúdo conforme necessário');

  } catch (error) {
    console.error('❌ Erro ao popular o Sanity:', error);
    throw error;
  }
}

// Executar o script
seedSanity();
