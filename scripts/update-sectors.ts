import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const sectors = [
  {
    title: 'CORPORATIVOS',
    description: 'Espaços corporativos que inspiram produtividade e refletem a cultura da sua empresa',
    imageUrl: '/1 CORPORATIVOS.jpg',
  },
  {
    title: 'START UPS',
    description: 'Ambientes flexíveis e inovadores que crescem junto com sua startup',
    imageUrl: '/2 START UPS.jpg',
  },
  {
    title: 'COWORKING',
    description: 'Espaços de trabalho compartilhado que promovem colaboração e networking',
    imageUrl: '/3 COWORKING.jpg',
  },
  {
    title: 'CLÍNICAS',
    description: 'Ambientes acolhedores e funcionais para atendimento médico de excelência',
    imageUrl: '/4 CLINICAS.jpeg',
  },
];

async function updateSectors() {
  try {
    // Buscar o documento da homepage
    const homepage = await client.fetch(`*[_type == "homepage"][0]`);

    if (!homepage) {
      console.log('Homepage document not found');
      return;
    }

    // Atualizar os expertiseItems
    await client
      .patch(homepage._id)
      .set({ expertiseItems: sectors })
      .commit();

    console.log('✅ Sectors updated successfully!');
    console.log('Updated sectors:', sectors);
  } catch (error) {
    console.error('Error updating sectors:', error);
  }
}

updateSectors();
