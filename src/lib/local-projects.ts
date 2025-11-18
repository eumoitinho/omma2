import fs from 'fs';
import path from 'path';

export interface LocalProject {
  id: string;
  slug: string;
  title: string;
  folderName: string;
  thumbnail: string;
  gallery: string[];
  category: string;
  location: string;
  area: string;
  duration: string;
  year: string;
  description: string;
}

// Mapeamento de nomes de projetos para dados estruturados
const projectMetadata: Record<string, Partial<LocalProject>> = {
  '1.ROJEMAC': {
    title: 'Novo escritório e showroom (Projeto Turnkey)',
    category: 'Ambientes Corporativos',
    location: 'Barra Funda – São Paulo',
    area: '3000m²',
    year: '2024',
    description: 'Implantação de dois andares do novo escritório da empresa + um andar dedicado ao showroom com área de eventos e cozinha.'
  },
  '2.AUTODOC': {
    title: 'Implantação de novo escritório (Projeto Turnkey)',
    category: 'Ambientes Corporativos',
    location: 'Morumbi – São Paulo',
    area: '725m²',
    year: '2024',
    description: 'Implantação do novo escritório de empresa de tecnologia em edifício Triple A. Ocupação híbrida com 145 colaboradores.'
  },
  '3.THOR': {
    title: 'Funcionalidade (Projeto Turnkey)',
    category: 'Ambientes Corporativos',
    location: 'Alphaville – São Paulo',
    area: '230m²',
    year: '2024',
    description: 'Implantação do novo escritório de empresa química onde a funcionalidade era o principal desejo do cliente.'
  },
  '4.SAO CARLOS': {
    title: 'Open Space',
    category: 'Ambientes Corporativos',
    location: 'Paulista – São Paulo',
    area: '230m²',
    year: '2024',
    description: 'Implantação de novo escritório da empresa.'
  },
  '5.MELHORAMENTOS': {
    title: 'Tradição e Modernidade (Projeto Turnkey)',
    category: 'Ambientes Corporativos',
    location: 'Pinheiro – São Paulo',
    area: '3.500m²',
    year: '2023',
    description: 'Implantação do novo escritório de empresa, aliando tradição e modernidade.'
  },
  '6.DECATHLON': {
    title: 'Versatilidade',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2023',
    description: 'Implantação do novo escritório'
  },
  '7.AMBEV AC': {
    title: 'Identidade e Cultura Corporativa',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2023',
    description: 'Implantação de novo escritório'
  },
  '8.AMBEV RPO': {
    title: 'Identidade',
    category: 'Ambientes Corporativos',
    location: 'Ribeirão Preto - São Paulo',
    area: '',
    year: '2023',
    description: 'Implantação de novo escritório'
  },
  '9.MERCADO ELETRÔNICO': {
    title: 'Novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2023',
    description: 'Implantação do novo escritório da empresa'
  },
  '11.ONOFRE': {
    title: 'Charme e elegância',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2022',
    description: 'Implantação de biblioteca'
  },
  '12.IASP': {
    title: 'Novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2022',
    description: 'Implantação do novo escritório da empresa'
  },
  '13.ORTHO': {
    title: 'Áreas de atendimentos',
    category: 'Clínicas e Laboratórios',
    location: 'São Paulo',
    area: '',
    year: '2022',
    description: 'Implantação de nova clínica de atendimento'
  },
  '14.CIP CEA': {
    title: 'Área de staff',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2022',
    description: 'Expansão de nova área para colaboradores'
  },
  '15.DASA': {
    title: 'Ambiente funcional',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2022',
    description: 'Retrofit em escritório existente'
  },
  '16.DPSP': {
    title: 'Espaços funcionais',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2021',
    description: 'Implantação de novo escritório'
  },
  '17.FIAT': {
    title: 'Espaços descontraídos',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2021',
    description: 'Implantação do novo escritório da empresa.'
  },
  '18.REED': {
    title: 'Cores da marca',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2021',
    description: 'Implantação de novo escritório'
  },
  '19.STOCHE FORBES': {
    title: 'Luminosidade (Projeto Turnkey)',
    category: 'Ambientes Corporativos',
    location: 'Faria Lima – São Paulo',
    area: '230m²',
    year: '2021',
    description: 'Implantação de novo escritório de escritório em edifício Tripe A.'
  },
  'CAREPLUS': {
    title: 'Modernidade',
    category: 'Ambientes Corporativos',
    location: 'São Carlos – São Paulo',
    area: '750m²',
    year: '2020',
    description: 'Implantação do novo escritório de empresa'
  },
  'GAVIOES': {
    title: 'Nova unidade',
    category: 'Academias',
    location: 'Itapevi – São Paulo',
    area: '1230m²',
    year: '2020',
    description: 'Implantação de nova unidade de rede de academias.'
  },
  'Movile': {
    title: 'Descompressão e criatividade',
    category: 'Startups & Scale-Ups',
    location: 'Rio de Janeiro',
    area: '1000m²',
    year: '2020',
    description: 'Implantação do novo escritório com muito espaço de integração.'
  },
  'PETZ': {
    title: 'Nova Unidade',
    category: 'Edificações Comerciais',
    location: 'Jaçanã – São Paulo',
    area: '',
    year: '2019',
    description: 'Implantação de nova unidade de rede de varejo.'
  },
  'ZOOP RJ': {
    title: 'Novo escritório',
    category: 'Ambientes Corporativos',
    location: 'São Paulo',
    area: '',
    year: '2019',
    description: 'Implantação do novo escritório da empresa'
  }
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getLocalProjects(): LocalProject[] {
  const projectsDir = path.join(process.cwd(), 'public', 'projetos');

  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const projectFolders = fs.readdirSync(projectsDir);
  const projects: LocalProject[] = [];

  projectFolders.forEach((folder) => {
    const folderPath = path.join(projectsDir, folder);

    if (!fs.statSync(folderPath).isDirectory()) return;

    // Encontrar o subdiretório com as imagens
    const subDirs = fs.readdirSync(folderPath);
    let projectName = '';
    let images: string[] = [];

    for (const subDir of subDirs) {
      const subDirPath = path.join(folderPath, subDir);
      if (fs.statSync(subDirPath).isDirectory()) {
        const files = fs.readdirSync(subDirPath).filter(f =>
          f.toLowerCase().endsWith('.jpg') ||
          f.toLowerCase().endsWith('.jpeg') ||
          f.toLowerCase().endsWith('.png')
        );

        if (files.length > 0) {
          projectName = subDir;
          images = files.map(file =>
            `/projetos/${encodeURIComponent(folder)}/${encodeURIComponent(subDir)}/${encodeURIComponent(file)}`
          );
          break;
        }
      }
    }

    // Pular projetos sem imagens
    if (images.length === 0) return;

    const metadata = projectMetadata[projectName] || {};
    const title = metadata.title || projectName;

    projects.push({
      id: folder,
      slug: slugify(title),
      title,
      folderName: folder,
      thumbnail: images[0], // Primeira imagem como thumbnail
      gallery: images,
      category: metadata.category || 'Comercial',
      location: metadata.location || 'São Paulo, SP',
      area: metadata.area || '1.000 m²',
      duration: metadata.duration || '12 meses',
      year: metadata.year || '2024',
      description: metadata.description || `Projeto ${title}`
    });
  });

  // Ordenar por ano (mais recente primeiro)
  return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export function getProjectBySlug(slug: string): LocalProject | null {
  const projects = getLocalProjects();
  return projects.find(p => p.slug === slug) || null;
}
