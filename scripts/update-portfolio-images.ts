import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Mapeamento dos projetos com suas imagens locais
const portfolioProjects = [
  {
    slug: 'ultracargo',
    client: 'Ultracargo',
    title: 'Centro de Distribuição e Operações Logísticas',
    category: 'Logística e Distribuição',
    location: 'Santos, SP',
    area: '15.000 m²',
    duration: '18 meses',
    year: '2023',
    description: 'Modernização completa do centro de distribuição da Ultracargo com implementação de sistemas automatizados de armazenamento e gestão logística de última geração.',
    thumbnail: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 1.jpg',
    gallery: [
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 1.jpg',
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 2.jpg',
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 3.jpg',
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 4.jpg',
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 5.jpg',
      '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 6.jpg',
    ],
  },
  {
    slug: 'unimed',
    client: 'Unimed',
    title: 'Hospital e Centro Médico Integrado',
    category: 'Saúde',
    location: 'São Paulo, SP',
    area: '22.000 m²',
    duration: '24 meses',
    year: '2022',
    description: 'Construção de moderno complexo hospitalar com salas cirúrgicas de última geração, UTIs equipadas e infraestrutura completa para atendimento de alta complexidade.',
    thumbnail: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 1.png',
    gallery: [
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 1.png',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 2.jpg',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 3.jpg',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 4.jpg',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 5.jpg',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 6.jpg',
      '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 7.jpg',
    ],
  },
  {
    slug: 'praca-paraisopolis',
    client: 'Praça Paraisópolis',
    title: 'Praça da Cidadania e Espaço Comunitário',
    category: 'Infraestrutura Pública',
    location: 'São Paulo, SP',
    area: '8.500 m²',
    duration: '14 meses',
    year: '2023',
    description: 'Revitalização urbana com criação de praça comunitária, áreas de lazer, quadras esportivas e espaços de convivência para a comunidade de Paraisópolis.',
    thumbnail: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 1.jpg',
    gallery: [
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 1.jpg',
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 2.jpg',
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 3.png',
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 4.jpg',
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 5.jpg',
      '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 6.jpg',
    ],
  },
  {
    slug: 'movile',
    client: 'Movile',
    title: 'Campus Corporativo e Centro de Inovação',
    category: 'Corporativo',
    location: 'Campinas, SP',
    area: '12.000 m²',
    duration: '16 meses',
    year: '2022',
    description: 'Sede corporativa moderna com espaços de coworking, laboratórios de inovação, áreas de convivência e infraestrutura tecnológica de ponta.',
    thumbnail: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg',
    gallery: [
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg',
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 2.jpg',
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 3.jpg',
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 4.jpg',
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 5.jpg',
      '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 6.jpg',
    ],
  },
  {
    slug: 'ivanhoe-cambridge',
    client: 'Ivanhoé Cambridge',
    title: 'Shopping Center e Complexo Comercial',
    category: 'Varejo',
    location: 'Rio de Janeiro, RJ',
    area: '35.000 m²',
    duration: '28 meses',
    year: '2021',
    description: 'Construção de shopping center de alto padrão com mais de 200 lojas, cinemas, praça de alimentação e estacionamento para 2.000 veículos.',
    thumbnail: '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg',
    gallery: [
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg',
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 2.png',
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 3.jpg',
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 4.jpg',
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 5.jpg',
      '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 6.jpg',
    ],
  },
];

async function updatePortfolioImages() {
  try {
    console.log('Buscando homepage atual...');

    // Buscar o documento homepage
    const homepage = await client.fetch(`*[_type == "homepage"][0]`);

    if (!homepage) {
      console.error('Homepage não encontrada!');
      return;
    }

    console.log('Atualizando portfolio com imagens locais...');

    // Atualizar o portfolio com as imagens locais
    const updatedHomepage = await client
      .patch(homepage._id)
      .set({
        'portfolio.projects': portfolioProjects,
      })
      .commit();

    console.log('✅ Portfolio atualizado com sucesso!');
    console.log(`Total de projetos: ${portfolioProjects.length}`);
    portfolioProjects.forEach((project, index) => {
      console.log(`  ${index + 1}. ${project.client} (${project.gallery.length} fotos)`);
    });
  } catch (error) {
    console.error('Erro ao atualizar portfolio:', error);
  }
}

updatePortfolioImages();
