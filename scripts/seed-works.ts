import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';
const imagesMap = JSON.parse(fs.readFileSync(path.join(__dirname, 'images-map.json'), 'utf-8'));
const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skMM1A6GdgZ9wLKwjPBtMkmS3EtW4chx6goCreTDSBMYrlJzMerFI4SotSg0VvyLFXy023TcLu6iuSUCUMoGs1tgtCIZwPVsUxXj8At8b0ul0mWIurde9HcMpxYbYvNWaMJBC6QtoPhcmnUXfEfTm8v4Xarhf7ukJQgr0YycQCxHuXvLpU6v',
});
interface Work {
  title: string;
  description: string;
  category: string;
  location: string;
  area?: string;
  imagePath?: string;
}
const works: Work[] = [
  // AMBIENTES CORPORATIVOS
  {
    title: 'Novo escritório e showroom (Projeto Turnkey)',
    description: 'Implantação de dois andares do novo escritório da empresa + um andar dedicado ao showroom com área de eventos e cozinha.',
    category: 'Ambientes Corporativos',
    location: 'Barra Funda – São Paulo',
    area: '3000m²',
    imagePath: 'projetos/1.ROJEMAC-20251027T192710Z-1-001/1.ROJEMAC/IMG_5380-HDR.jpg',
  },
  {
    title: 'Implantação de novo escritório (Projeto Turnkey)',
    description: 'Implantação do novo escritório de empresa de tecnologia em edifício Triple A. Ocupação híbrida com 145 colaboradores.',
    category: 'Ambientes Corporativos',
    location: 'Morumbi – São Paulo',
    area: '725m²',
  },
  {
    title: 'Funcionalidade (Projeto Turnkey)',
    description: 'Implantação do novo escritório de empresa química onde a funcionalidade era o principal desejo do cliente.',
    category: 'Ambientes Corporativos',
    location: 'Alphaville – São Paulo',
    area: '230m²',

  },
  {
    title: 'Open Space',
    description: 'Implantação de novo escritório da empresa.',
    category: 'Ambientes Corporativos',
    location: 'Paulista – São Paulo',
    area: '230m²',

  },
  {
    title: 'Tradição e Modernidade (Projeto Turnkey)',
    description: 'Implantação do novo escritório de empresa, aliando tradição e modernidade.',
    category: 'Ambientes Corporativos',
    location: 'Pinheiro – São Paulo',
    area: '3.500m²',

  },
  {
    title: 'Versatilidade',
    description: 'Implantação do novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Identidade e Cultura Corporativa',
    description: 'Implantação de novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Identidade',
    description: 'Implantação de novo escritório',
    category: 'Ambientes Corporativos',
    location: 'Ribeirão Preto - São Paulo',

  },
  {
    title: 'Novo escritório',
    description: 'Implantação do novo escritório da empresa',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Novo escritório',
    description: 'Implantação do novo escritório da empresa',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Charme e elegância',
    description: 'Implantação de biblioteca',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Novo escritório',
    description: 'Implantação do novo escritório da empresa',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Área de staff',
    description: 'Expansão de nova área para colaboradores',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Ambiente funcional',
    description: 'Retrofit em escritório existente',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Espaços funcionais',
    description: 'Implantação de novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Espaços descontraídos',
    description: 'Implantação do novo escritório da empresa.',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Cores da marca',
    description: 'Implantação de novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',

  },
  {
    title: 'Luminosidade (Projeto Turnkey)',
    description: 'Implantação de novo escritório de escritório em edifício Tripe A.',
    category: 'Ambientes Corporativos',
    location: 'Faria Lima – São Paulo',
    area: '230m²',

  },
  {
    title: 'Modernidade',
    description: 'Implantação do novo escritório de empresa',
    category: 'Ambientes Corporativos',
    location: 'São Carlos – São Paulo',
    area: '750m²',

  },
  
  // CLÍNICAS E LABORATÓRIOS
  {
    title: 'Áreas de atendimentos',
    description: 'Implantação de nova clínica de atendimento',
    category: 'Clínicas e Laboratórios',
    location: 'São Paulo',

  },
  
  // ACADEMIAS
  {
    title: 'Nova unidade',
    description: 'Implantação de nova unidade de rede de academias.',
    category: 'Academias',
    location: 'Itapevi – São Paulo',
    area: '1230m²',

  },
  
  // EDIFICAÇÕES COMERCIAIS
  {
    title: 'Nova Unidade',
    description: 'Implantação de nova unidade de rede de varejo.',
    category: 'Edificações Comerciais',
    location: 'Jaçanã – São Paulo',

  },
  
  // STARTUPS & SCALE-UPS
  {
    title: 'Descompressão e criatividade',
    description: 'Implantação do novo escritório com muito espaço de integração.',
    category: 'Startups & Scale-Ups',
    location: 'Rio de Janeiro',
    area: '1000m²',

  },
];
async function seedWorks() {
  try {
    console.log('🔄 Verificando se a página de obras já existe...');
    
    const existing = await client.fetch('*[_type == "obrasRealizadas"][0]');
    
    const worksData = {
      pageTitle: 'Nossas Obras',
      heroTitle: 'Nossas Obras',
      subtitle: 'Conheça nosso portfólio de projetos realizados com excelência e compromisso',
      projects: works.map((work, index) => {
        // Definir imagem de fallback baseada na categoria
        let fallbackImage = '';
        
        if (work.category === 'Ambientes Corporativos') {
          fallbackImage = '/bloco 4/1 CORPORATIVOS.jpg';
        } else if (work.category === 'Startups & Scale-Ups') {
          fallbackImage = '/bloco 4/2 START UPS.jpg';
        } else if (work.category === 'Coworkings') {
          fallbackImage = '/bloco 4/3 COWORKING.jpg';
        } else if (work.category === 'Clínicas e Laboratórios') {
          fallbackImage = '/bloco 4/4 CLINICAS.jpeg';
        } else if (work.category === 'Academias') {
          fallbackImage = '/bloco4home/5 ACADEMIAS.jpeg';
        } else if (work.category === 'Edificações Comerciais') {
          fallbackImage = '/bloco4home/5 EDIFICAÇÕES COMERCIAIS.jpeg';
        }
        
        return {
          _key: `project-${index}`,
          clientName: work.title,
          location: work.location,
          area: work.area || '',
          description: [
            {
              _type: 'block',
              _key: `desc-${index}`,
              children: [
                {
                  _type: 'span',
                  text: work.description,
                },
              ],
            },
          ],
          fallbackImage: fallbackImage,
          localImages: imagesMap[index] || [],

        };
      }),
    };
    
    if (!existing) {
      console.log('✨ Criando página de obras...');
      await client.create({
        _type: 'obrasRealizadas',
        ...worksData,
      });
      console.log('✅ Página de obras criada com sucesso!');
    } else {
      console.log('🔄 Atualizando página de obras existente...');
      await client
        .patch(existing._id)
        .set(worksData)
        .commit();
      console.log('✅ Página de obras atualizada com sucesso!');
    }
  } catch (error) {
    console.error('❌ Erro ao criar/atualizar página de obras:', error);
  }
}
seedWorks();
