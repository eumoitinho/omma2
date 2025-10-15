import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seedPages() {
  console.log('🌱 Iniciando seed das páginas...');

  try {
    // Seed Áreas de Atuação
    console.log('📄 Criando documento: Áreas de Atuação');
    await client.create({
      _type: 'areasAtuacao',
      pageTitle: 'Áreas de Atuação',
      heroTitle: 'Áreas de',
      introText:
        'Atuamos em diversos segmentos do mercado, entregando soluções especializadas e personalizadas para cada tipo de projeto. Nossa expertise abrange desde ambientes corporativos até edificações comerciais de alta performance.',
      ctaTitle: 'Pronto para iniciar seu projeto',
      ctaDescription:
        'Entre em contato conosco e descubra como podemos transformar sua visão em realidade.',
      ctaButtonText: 'Fale Conosco',
      sectors: [
        {
          icon: 'briefcase',
          title: 'Ambientes Corporativos',
          description:
            'Espaços eficientes que equilibram foco e colaboração, fortalecendo a cultura e performance diária.',
          features: [
            'Escritórios corporativos',
            'Campus empresariais',
            'Salas de reunião',
          ],
          images: [],
        },
        {
          icon: 'rocket',
          title: 'Startups & Scale-ups',
          description:
            'Ambientes flexíveis e escaláveis que acompanham o crescimento e estimulam velocidade de execução.',
          features: [
            'Escritórios flexíveis',
            'Espaços colaborativos',
            'Áreas de inovação',
          ],
          images: [],
        },
        {
          icon: 'users',
          title: 'Coworkings',
          description:
            'Espaços multiuso desenhados para alta rotatividade, conforto e retenção de clientes e comunidades.',
          features: [
            'Estações de trabalho',
            'Salas privativas',
            'Áreas de convivência',
          ],
          images: [],
        },
        {
          icon: 'heart',
          title: 'Clínicas e Laboratórios',
          description:
            'Ambientes humanizados, funcionais e normativos, com infraestrutura técnica precisa, segurança e fluxos otimizados para elevar a experiência e garantir alta confiabilidade.',
          features: ['Clínicas médicas', 'Laboratórios', 'Consultórios'],
          images: [],
        },
        {
          icon: 'dumbbell',
          title: 'Academias',
          description:
            'Layouts projetados para o máximo desempenho e bem-estar dos usuários, unindo funcionalidade, segurança e conforto.',
          features: [
            'Academias de musculação',
            'Estúdios fitness',
            'Áreas de treinamento',
          ],
          images: [],
        },
        {
          icon: 'building2',
          title: 'Edificações Comerciais',
          description:
            'Edificações e galpões versáteis, desenvolvidos para atender operações de atacado e varejo com eficiência, praticidade e confiabilidade.',
          features: [
            'Lojas de varejo',
            'Galpões comerciais',
            'Centros de distribuição',
          ],
          images: [],
        },
      ],
    });

    // Seed Metodologia
    console.log('📄 Criando documento: Metodologia');
    await client.create({
      _type: 'metodologia',
      pageTitle: 'Metodologia OMMA',
      heroTitle: 'METODOLOGIA',
      subtitle: 'O caminho para o sucesso do seu Projeto',
      ctaTitle: 'Pronto para trabalhar com excelência',
      ctaDescription:
        'Entre em contato e descubra como nossa metodologia pode transformar seu projeto em realidade.',
      ctaButtonText: 'Solicitar Orçamento',
      phases: [
        {
          phase: 'FASE 1',
          title: 'DIAGNÓSTICO',
          items: [
            'Revisão de briefing',
            'Revisão do escopo e requisitos',
            'Estimativa preliminar',
          ],
        },
        {
          phase: 'FASE 2',
          title: 'PLANEJAMENTO',
          items: [
            'Desenvolvimento de Projetos (arquitetônicos e complementares)',
            'Orçamento e cronograma detalhado',
            'Aprovações',
            'Planejamento de suprimentos e gestão',
          ],
        },
        {
          phase: 'FASE 3',
          title: 'EXECUÇÃO',
          items: [
            'Mobilização interna',
            'Demolições e reestrutura',
            'Implantação de instalações',
            'Forros e contrapisos',
            'Acabamentos e revestimentos',
            'Instalação de sistemas',
            'Limpeza do Projeto',
          ],
        },
        {
          phase: 'FASE 4',
          title: 'ENTREGA e PÓS-OBRA',
          items: [
            'Comissionamento e testes',
            'Vistoria e punch list',
            'Entrega Final (As-Built)',
            'Treinamento e Ocupação',
          ],
        },
      ],
    });

    // Seed Trabalhe Conosco
    console.log('📄 Criando documento: Trabalhe Conosco');
    await client.create({
      _type: 'trabalheConosco',
      pageTitle: 'Trabalhe Conosco',
      heroTitle: 'Trabalhe',
      description:
        'Junte-se a uma equipe de profissionais experientes e apaixonados por transformar desafios em realizações. Na OMMA, você encontrará um ambiente que valoriza talento, dedicação e inovação.',
      formTitle: 'Envie seu currículo',
      formDescription: 'Preencha o formulário abaixo e faça parte da nossa equipe',
      benefits: [
        {
          icon: 'trophy',
          title: 'Crescimento Profissional',
          description:
            'Oferecemos oportunidades de desenvolvimento contínuo através de treinamentos e projetos desafiadores que expandem suas habilidades.',
        },
        {
          icon: 'users',
          title: 'Ambiente Colaborativo',
          description:
            'Trabalhe em equipe com profissionais experientes em um ambiente que valoriza a troca de conhecimento e o trabalho em conjunto.',
        },
        {
          icon: 'award',
          title: 'Reconhecimento e Valorização',
          description:
            'Seu trabalho é valorizado e reconhecido através de um plano de carreira estruturado e políticas de remuneração competitivas.',
        },
      ],
    });

    console.log('✅ Seed concluído com sucesso!');
    console.log('\n📝 Próximos passos:');
    console.log('1. Acesse o Sanity Studio em: http://localhost:3000/studio');
    console.log('2. Adicione imagens aos setores em Áreas de Atuação');
    console.log('3. Adicione uma imagem hero para cada página');
    console.log('4. Personalize os textos conforme necessário');
  } catch (error) {
    console.error('❌ Erro ao fazer seed:', error);
    process.exit(1);
  }
}

seedPages();
