import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seedQuemSomos() {
  console.log('🌱 Atualizando dados da página Quem Somos...');

  try {
    // Buscar documento existente
    const existing = await client.fetch(`*[_type == "quemSomos"][0]`);

    if (existing) {
      console.log('📝 Atualizando documento existente...');
      await client
        .patch(existing._id)
        .set({
          pageTitle: 'Quem Somos - OMMA Engenharia',
          heroTitle: 'Sobre a OMMA Engenharia',
          statsSection: {
            title: 'Resultados que comprovam nossa expertise',
            stats: [
              {
                number: '+27',
                label: 'anos de experiência',
                description: 'Tradição e inovação a serviço do seu Projeto corporativo.',
              },
              {
                number: '+1000',
                label: 'de obras entregues',
                description: 'Experiência comprovada em projetos de qualquer escala.',
              },
              {
                number: '+750 mil m²',
                label: 'de obras executadas',
                description: 'Consolidação da OMMA como referência no setor de engenharia.',
              },
            ],
          },
          gallerySection: {
            title: 'Nossos Projetos',
            projects: [
              { title: 'Movile - Campus Corporativo', image: null },
              { title: 'Praça Paraisópolis', image: null },
              { title: 'Ivanhoé Cambridge', image: null },
              { title: 'Unimed Hospital', image: null },
              { title: 'Ultracargo Logística', image: null },
              { title: 'Movile Inovação', image: null },
            ],
          },
          valuesSection: {
            title: 'Nossos Valores',
            values: [
              {
                title: 'Excelência',
                description: 'Compromisso com a mais alta qualidade em todos os projetos',
              },
              {
                title: 'Inovação',
                description: 'Soluções criativas e tecnológicas para desafios complexos',
              },
              {
                title: 'Transparência',
                description: 'Comunicação clara e honesta em todas as etapas',
              },
            ],
          },
        })
        .commit();
      console.log('✅ Documento atualizado com sucesso!');
    } else {
      console.log('📄 Criando novo documento...');
      await client.create({
        _type: 'quemSomos',
        pageTitle: 'Quem Somos - OMMA Engenharia',
        heroTitle: 'Sobre a OMMA Engenharia',
        introSection: {
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Com mais de 24 anos de experiência, a OMMA Engenharia é referência em gestão e execução de obras de alta complexidade. Nossa expertise abrange desde projetos corporativos até infraestrutura pública, sempre com foco em qualidade, prazo e inovação.',
                },
              ],
            },
          ],
        },
        purposeSection: {
          title: 'Nossa Missão',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Entregar projetos de infraestrutura com excelência técnica, cumprindo prazos e superando expectativas. Transformamos desafios complexos em soluções inovadoras através de gestão especializada e equipe altamente qualificada.',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Nossa abordagem integra tecnologia, sustentabilidade e segurança em cada etapa, garantindo resultados que geram valor real para nossos clientes.',
                },
              ],
            },
          ],
        },
        statsSection: {
          title: 'Resultados que comprovam nossa expertise',
          stats: [
            {
              number: '+27',
              label: 'anos de experiência',
              description: 'Tradição e inovação a serviço do seu Projeto corporativo.',
            },
            {
              number: '+1000',
              label: 'de obras entregues',
              description: 'Experiência comprovada em projetos de qualquer escala.',
            },
            {
              number: '+750 mil m²',
              label: 'de obras executadas',
              description: 'Consolidação da OMMA como referência no setor de engenharia.',
            },
          ],
        },
        gallerySection: {
          title: 'Nossos Projetos',
          projects: [
            { title: 'Movile - Campus Corporativo', image: null },
            { title: 'Praça Paraisópolis', image: null },
            { title: 'Ivanhoé Cambridge', image: null },
            { title: 'Unimed Hospital', image: null },
            { title: 'Ultracargo Logística', image: null },
            { title: 'Movile Inovação', image: null },
          ],
        },
        valuesSection: {
          title: 'Nossos Valores',
          values: [
            {
              title: 'Excelência',
              description: 'Compromisso com a mais alta qualidade em todos os projetos',
            },
            {
              title: 'Inovação',
              description: 'Soluções criativas e tecnológicas para desafios complexos',
            },
            {
              title: 'Transparência',
              description: 'Comunicação clara e honesta em todas as etapas',
            },
          ],
        },
      });
      console.log('✅ Documento criado com sucesso!');
    }

    console.log('\n📝 Próximos passos:');
    console.log('1. Acesse o Sanity Studio em: http://localhost:3000/studio');
    console.log('2. Vá em "Quem Somos"');
    console.log('3. Adicione imagens:');
    console.log('   - Imagem Hero (fundo da seção principal)');
    console.log('   - Imagem Principal e Secundária (seção Nossa Missão)');
    console.log('   - Imagens dos projetos na galeria');
    console.log('4. Personalize todos os textos conforme necessário');
  } catch (error) {
    console.error('❌ Erro ao fazer seed:', error);
    process.exit(1);
  }
}

seedQuemSomos();
