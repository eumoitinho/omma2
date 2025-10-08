import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper functions for fetching data
export async function getHomepageData() {
  const rawData = await client.fetch(`*[_type == "homepage"][0]`);

  if (!rawData) return null;

  // Map the raw data to the expected structure
  return {
    heroSection: {
      title: rawData.title,
      subtitle: rawData.subtitle,
      ctaText: rawData.mainCta?.text,
      ctaLink: rawData.mainCta?.link,
    },
    statsSection: {
      title: 'Resultados que comprovam nossa expertise',
      stats: rawData.bigNumbers,
    },
    managementSection: {
      title: rawData.gestaoSection?.title,
      description: rawData.gestaoSection?.description,
      highlights: rawData.gestaoSection?.highlights,
      ctaText: rawData.gestaoSection?.ctaText,
    },
    sectorsSection: {
      title: 'Expertise OMMA em diversos setores',
      sectors: rawData.expertiseItems,
    },
    whyChooseSection: {
      title: 'Por que escolher a OMMA?',
      benefits: rawData.benefits,
    },
    clientsSection: {
      title: 'NOSSOS CLIENTES',
      logos: rawData.clientLogos,
    },
    methodologySection: {
      title: rawData.methodology?.title,
      phases: rawData.methodology?.phases?.map((phase: any, index: number) => ({
        number: index + 1,
        name: phase.name,
        title: phase.name,
        steps: phase.items || [],
      })),
      ctaText: rawData.methodology?.ctaText,
    },
    architectsSection: {
      title: rawData.architectPartner?.title,
      description: rawData.architectPartner?.description,
      ctaText: rawData.architectPartner?.ctaText,
    },
    portfolioSection: {
      title: rawData.portfolio?.title || 'Portfólio de Obras',
      subtitle: rawData.portfolio?.subtitle || 'Conheça alguns dos nossos principais projetos',
      projects: [
        {
          _id: '1',
          slug: 'ultracargo',
          client: 'Ultracargo',
          title: 'Centro de Distribuição e Operações Logísticas',
          category: 'Logística e Distribuição',
          location: 'Santos, SP',
          area: '15.000 m²',
          duration: '18 meses',
          thumbnail: '/cases/2823dd82e2efaa0de9675a5e68e6d275/Ultracargo/Ultracargo 1.jpg',
        },
        {
          _id: '2',
          slug: 'unimed',
          client: 'Unimed',
          title: 'Hospital e Centro Médico Integrado',
          category: 'Saúde',
          location: 'São Paulo, SP',
          area: '22.000 m²',
          duration: '24 meses',
          thumbnail: '/cases/1b8c917b8644a16c37fb95ec68e6d27b/Unimed/Unimed 1.png',
        },
        {
          _id: '3',
          slug: 'praca-paraisopolis',
          client: 'Praça Paraisópolis',
          title: 'Praça da Cidadania e Espaço Comunitário',
          category: 'Infraestrutura Pública',
          location: 'São Paulo, SP',
          area: '8.500 m²',
          duration: '14 meses',
          thumbnail: '/cases/0116d02df0f87c87093b8ab668e6d26e/Praça da Cidadania/Praça da Cidadania 1.jpg',
        },
        {
          _id: '4',
          slug: 'movile',
          client: 'Movile',
          title: 'Campus Corporativo e Centro de Inovação',
          category: 'Corporativo',
          location: 'Campinas, SP',
          area: '12.000 m²',
          duration: '16 meses',
          thumbnail: '/cases/713a729e8202c0be137ac64e68e6d26c/Movile/Movile 1.jpg',
        },
        {
          _id: '5',
          slug: 'ivanhoe-cambridge',
          client: 'Ivanhoé Cambridge',
          title: 'Shopping Center e Complexo Comercial',
          category: 'Varejo',
          location: 'Rio de Janeiro, RJ',
          area: '35.000 m²',
          duration: '28 meses',
          thumbnail: '/cases/1e331a44a921916a5efadcfe68e6d25f/Ivanhoé/Ivanhoé 1.jpg',
        },
      ],
      ctaText: rawData.portfolio?.ctaText || 'Ver todas as obras',
      ctaLink: rawData.portfolio?.ctaLink || '/obras',
    },
    aboutSection: {
      title: rawData.aboutSection?.title,
      description: rawData.aboutSection?.description,
      ctaText: rawData.aboutSection?.ctaText,
    },
    contactFormSection: {
      title: rawData.contactForm?.title || 'Descubra como garantir a excelência do seu próximo investimento em infraestrutura!',
      description: rawData.contactForm?.description || 'Preencha seus dados e agende uma conversa estratégica hoje mesmo. Estamos prontos para construir o futuro do seu negócio com solidez e inteligência.',
    },
    contactInfoSection: {
      title: rawData.contactInfo?.title || 'Contato',
      address: rawData.contactInfo?.address,
      phone: rawData.contactInfo?.phone,
      emails: rawData.contactInfo?.emails,
      socialMedia: rawData.contactInfo?.socialMedia,
    },
  };
}

export async function getNavbarData() {
  return client.fetch(`*[_type == "navbar"][0]`);
}

export async function getFooterData() {
  return client.fetch(`*[_type == "footer"][0]`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getQuemSomosData() {
  return client.fetch(`*[_type == "quemSomos"][0]`);
}

export async function getAreasAtuacaoData() {
  return client.fetch(`*[_type == "areasAtuacao"][0]`);
}

export async function getMetodologiaData() {
  return client.fetch(`*[_type == "metodologia"][0]`);
}

export async function getObrasRealizadasData() {
  return client.fetch(`*[_type == "obrasRealizadas"][0]`);
}

export async function getTrabalheConoscoData() {
  return client.fetch(`*[_type == "trabalheConosco"][0]`);
}

export async function getContatoData() {
  return client.fetch(`*[_type == "contato"][0]`);
}

export async function getObrasData() {
  // Usando imagens locais do /public/cases
  const projects = [
    {
      _id: '1',
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
      _id: '2',
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
      _id: '3',
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
      _id: '4',
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
      _id: '5',
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

  return {
    title: 'Nossas Obras',
    subtitle: 'Conheça nosso portfólio de projetos realizados com excelência e compromisso',
    projects,
  };
}
