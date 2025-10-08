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
  return client.fetch(`*[_type == "homepage"][0]`);
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
