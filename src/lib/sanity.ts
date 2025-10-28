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
  const rawData = await client.fetch(`*[_type == "homepage"][0]{
    ...,
    heroSection {
      ...,
      backgroundImage {
        asset->{_id, url}
      }
    },
    sectorsSection {
      ...,
      sectors[] {
        title,
        description,
        image {
          asset->{_id, url}
        }
      }
    },
    aboutSection {
      ...,
      images[] {
        asset->{_id, url}
      }
    }
  }`);

  if (!rawData) return null;

  // Map the raw data to the expected structure
  return {
    heroSection: {
      title: rawData.heroSection?.title,
      subtitle: rawData.heroSection?.subtitle,
      ctaText: rawData.heroSection?.ctaText,
      ctaLink: rawData.heroSection?.ctaLink,
      backgroundImage: rawData.heroSection?.backgroundImage,
    },
    statsSection: {
      title: rawData.statsSection?.sectionTitle || 'Resultados que comprovam nossa expertise',
      stats: rawData.statsSection?.stats || [],
    },
    managementSection: {
      title: rawData.managementSection?.title,
      description: rawData.managementSection?.description,
      features: rawData.managementSection?.features,
      ctaText: rawData.managementSection?.ctaText,
      ctaLink: rawData.managementSection?.ctaLink,
    },
    sectorsSection: {
      title: rawData.sectorsSection?.title || 'Expertise NEOOMA em diversos setores',
      subtitle: rawData.sectorsSection?.subtitle,
      sectors: rawData.sectorsSection?.sectors?.map((sector: { title: string; description: string; image?: { asset?: { url?: string } } }) => ({
        title: sector.title,
        description: sector.description,
        imageUrl: sector.image?.asset?.url,
      })) || [],
    },
    whyChooseSection: {
      title: rawData.whyChooseSection?.title || 'Por que escolher a NEOOMA?',
      subtitle: rawData.whyChooseSection?.subtitle,
      benefits: rawData.whyChooseSection?.benefits || [],
    },
    clientsSection: {
      title: rawData.clientsSection?.title || 'NOSSOS CLIENTES',
      clients: rawData.clientsSection?.clients || [],
    },
    methodologySection: {
      title: rawData.methodologySection?.title,
      subtitle: rawData.methodologySection?.subtitle,
      phases: rawData.methodologySection?.phases || [],
      ctaText: rawData.methodologySection?.ctaText,
      ctaLink: rawData.methodologySection?.ctaLink,
    },
    architectsSection: {
      title: rawData.architectsSection?.title,
      description: rawData.architectsSection?.description,
      ctaText: rawData.architectsSection?.ctaText,
      ctaLink: rawData.architectsSection?.ctaLink,
    },
    portfolioSection: {
      title: rawData.portfolioSection?.title || 'Portfólio de Obras',
      subtitle: rawData.portfolioSection?.subtitle || 'Conheça alguns dos nossos principais projetos',
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
      ctaText: rawData.portfolioSection?.ctaText || 'Ver todas as obras',
      ctaLink: rawData.portfolioSection?.ctaLink || '/obras',
    },
    aboutSection: {
      title: rawData.aboutSection?.title,
      subtitle: rawData.aboutSection?.subtitle,
      description: rawData.aboutSection?.description,
      images: rawData.aboutSection?.images?.map((img: { asset?: { _id: string; url: string } }) => img.asset) || [],
      ctaText: rawData.aboutSection?.ctaText,
      ctaLink: rawData.aboutSection?.ctaLink,
    },
    contactFormSection: {
      title: rawData.contactFormSection?.title || 'Descubra como garantir a excelência do seu próximo investimento em infraestrutura!',
      subtitle: rawData.contactFormSection?.subtitle || 'Preencha seus dados e agende uma conversa estratégica hoje mesmo. Estamos prontos para construir o futuro do seu negócio com solidez e inteligência.',
    },
    contactInfoSection: {
      title: rawData.contactInfoSection?.title || 'Contato',
      address: rawData.contactInfoSection?.address,
      phone: rawData.contactInfoSection?.phone,
      emails: rawData.contactInfoSection?.emails,
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
  // Buscar dados do Sanity
  const sanityData = await client.fetch(`
    *[_type == "obrasRealizadas"][0] {
      projects[] {
        clientName,
        location,
        area,
        description,
        category,
        fallbackImage,
        localImages,
        images
      }
    }
  `);

  // Se não houver dados no Sanity, retornar array vazio
  if (!sanityData || !sanityData.projects) {
    return {
      title: 'Nossas Obras',
      subtitle: 'Conheça nosso portfólio de projetos realizados com excelência e compromisso',
      projects: [],
    };
  }

  // Mapear projetos do Sanity para o formato esperado
  const projects = sanityData.projects.map((project: {
    clientName?: string;
    location?: string;
    area?: string;
    description?: Array<{ children?: Array<{ text?: string }> }>;
    category?: string;
    fallbackImage?: string;
    localImages?: string[];
  }, index: number) => {
    // Usar first image from localImages se disponível
    const thumbnail = project.localImages?.[0] || project.fallbackImage || '';
    
    return {
      _id: String(index + 1),
      slug: `project-${index + 1}`,
      client: project.clientName || '',
      title: project.clientName || '',
      category: project.category || 'Geral',
      location: project.location || '',
      area: project.area || '',
      description: project.description?.[0]?.children?.[0]?.text || '',
      thumbnail: thumbnail,
      gallery: project.localImages || [],
    };
  });

  return {
    title: 'Nossas Obras',
    subtitle: 'Conheça nosso portfólio de projetos realizados com excelência e compromisso',
    projects,
  };
}
