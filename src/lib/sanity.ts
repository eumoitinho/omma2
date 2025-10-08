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
      title: rawData.portfolio?.title,
      subtitle: rawData.portfolio?.subtitle,
      projects: rawData.portfolio?.projects,
      ctaText: rawData.portfolio?.ctaText,
      ctaLink: rawData.portfolio?.ctaLink,
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
  const rawData = await client.fetch(`*[_type == "homepage"][0]`);

  if (!rawData) return null;

  return {
    title: 'Nossas Obras',
    subtitle: 'Conheça nosso portfólio de projetos realizados com excelência e compromisso',
    projects: rawData.portfolio?.projects || [],
  };
}
