import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function fixQuemSomos() {
  console.log('🔧 Removendo campos não reconhecidos...');

  try {
    const doc = await client.fetch(`*[_type == "quemSomos"][0]`);

    if (!doc) {
      console.log('❌ Documento não encontrado');
      return;
    }

    console.log('📝 Removendo campos extras...');
    await client
      .patch(doc._id)
      .unset(['statsSection', 'gallerySection', 'valuesSection'])
      .commit();

    console.log('✅ Campos removidos com sucesso!');
    console.log('\n📝 Próximos passos:');
    console.log('1. Reinicie o servidor Next.js (Ctrl+C e npm run dev)');
    console.log('2. Acesse o Sanity Studio: http://localhost:3000/studio');
    console.log('3. Os novos campos agora estarão disponíveis');
    console.log('4. Rode novamente: npx tsx scripts/seed-quem-somos.ts');
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

fixQuemSomos();
