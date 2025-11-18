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
    title: 'ROJEMAC',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '1.200 m²',
    year: '2024',
    description: 'Projeto comercial de alta complexidade'
  },
  '2.AUTODOC': {
    title: 'AUTODOC',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '800 m²',
    year: '2024',
    description: 'Centro automotivo moderno'
  },
  '3.THOR': {
    title: 'THOR',
    category: 'Industrial',
    location: 'São Paulo, SP',
    area: '1.500 m²',
    year: '2024',
    description: 'Complexo industrial'
  },
  '4.SAO CARLOS': {
    title: 'SÃO CARLOS',
    category: 'Comercial',
    location: 'São Paulo, SP - Av. Paulista',
    area: '2.000 m²',
    year: '2024',
    description: 'Edifício comercial na Av. Paulista'
  },
  '5.MELHORAMENTOS': {
    title: 'MELHORAMENTOS',
    category: 'Industrial',
    location: 'São Paulo, SP',
    area: '3.000 m²',
    year: '2023',
    description: 'Complexo industrial'
  },
  '6.DECATHLON': {
    title: 'DECATHLON',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '2.500 m²',
    year: '2023',
    description: 'Loja de artigos esportivos'
  },
  '7.AMBEV AC': {
    title: 'AMBEV AC',
    category: 'Industrial',
    location: 'Acre',
    area: '5.000 m²',
    year: '2023',
    description: 'Unidade industrial AMBEV'
  },
  '8.AMBEV RPO': {
    title: 'AMBEV RPO',
    category: 'Industrial',
    location: 'Ribeirão Preto, SP',
    area: '4.500 m²',
    year: '2023',
    description: 'Unidade industrial AMBEV'
  },
  '9.MERCADO ELETRÔNICO': {
    title: 'MERCADO ELETRÔNICO',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '1.000 m²',
    year: '2023',
    description: 'Centro comercial eletrônico'
  },
  '11.ONOFRE': {
    title: 'ONOFRE',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '600 m²',
    year: '2022',
    description: 'Farmácia de alto padrão'
  },
  '12.IASP': {
    title: 'IASP',
    category: 'Institucional',
    location: 'São Paulo, SP',
    area: '1.800 m²',
    year: '2022',
    description: 'Instituto IASP'
  },
  '13.ORTHO': {
    title: 'ORTHO',
    category: 'Saúde',
    location: 'São Paulo, SP',
    area: '900 m²',
    year: '2022',
    description: 'Clínica ortopédica'
  },
  '14.CIP CEA': {
    title: 'CIP CEA',
    category: 'Institucional',
    location: 'São Paulo, SP',
    area: '2.200 m²',
    year: '2022',
    description: 'Centro institucional'
  },
  '15.DASA': {
    title: 'DASA',
    category: 'Saúde',
    location: 'São Paulo, SP',
    area: '1.500 m²',
    year: '2022',
    description: 'Laboratório DASA'
  },
  '16.DPSP': {
    title: 'DPSP',
    category: 'Institucional',
    location: 'São Paulo, SP',
    area: '3.500 m²',
    year: '2021',
    description: 'Departamento de Polícia'
  },
  '17.FIAT': {
    title: 'FIAT',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '2.000 m²',
    year: '2021',
    description: 'Concessionária FIAT'
  },
  '18.REED': {
    title: 'REED',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '1.200 m²',
    year: '2021',
    description: 'Centro comercial'
  },
  '19.STOCHE FORBES': {
    title: 'STOCHE FORBES',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '800 m²',
    year: '2021',
    description: 'Escritório comercial'
  },
  'CAREPLUS': {
    title: 'CAREPLUS',
    category: 'Saúde',
    location: 'São Paulo, SP',
    area: '1.800 m²',
    year: '2020',
    description: 'Hospital Care Plus'
  },
  'GAVIOES': {
    title: 'GAVIÕES',
    category: 'Institucional',
    location: 'São Paulo, SP',
    area: '5.000 m²',
    year: '2020',
    description: 'Sede social'
  },
  'Movile': {
    title: 'Movile',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '1.500 m²',
    year: '2020',
    description: 'Escritório corporativo'
  },
  'PETZ': {
    title: 'PETZ',
    category: 'Comercial',
    location: 'São Paulo, SP',
    area: '1.000 m²',
    year: '2019',
    description: 'Loja pet shop'
  },
  'ZOOP RJ': {
    title: 'ZOOP RJ',
    category: 'Comercial',
    location: 'Rio de Janeiro, RJ',
    area: '900 m²',
    year: '2019',
    description: 'Escritório comercial'
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
          images = files.map(file => `/projetos/${folder}/${subDir}/${file}`);
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
