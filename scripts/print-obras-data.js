const fs = require('fs');

(function () {
  try {
    const imagesMapPath = `${process.cwd()}/scripts/images-map.json`;
    let imagesMap = {};
    if (fs.existsSync(imagesMapPath)) {
      imagesMap = JSON.parse(fs.readFileSync(imagesMapPath, 'utf-8'));
    }

    const configuredProjects = [
      { title: 'Novo escritório e showroom (Projeto Turnkey)', category: 'Ambientes Corporativos', location: 'Barra Funda – São Paulo', area: '3000m²' },
      { title: 'Implantação de novo escritório (Projeto Turnkey)', category: 'Ambientes Corporativos', location: 'Morumbi – São Paulo', area: '725m²' },
      { title: 'Funcionalidade (Projeto Turnkey)', category: 'Ambientes Corporativos', location: 'Alphaville – São Paulo', area: '230m²' },
      { title: 'Open Space', category: 'Ambientes Corporativos', location: 'Paulista – São Paulo', area: '230m²' },
      { title: 'Tradição e Modernidade (Projeto Turnkey)', category: 'Ambientes Corporativos', location: 'Pinheiro – São Paulo', area: '3.500m²' },
      { title: 'Versatilidade', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Identidade e Cultura Corporativa', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Identidade', category: 'Ambientes Corporativos', location: 'Ribeirão Preto - São Paulo', area: '' },
      { title: 'Novo escritório', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Novo escritório', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Charme e elegância (biblioteca)', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Novo escritório', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Área de staff (expansão)', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Ambiente funcional (retrofit)', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Espaços funcionais', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Espaços descontraídos', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Cores da marca', category: 'Ambientes Corporativos', location: 'São Paulo', area: '' },
      { title: 'Luminosidade (Projeto Turnkey)', category: 'Ambientes Corporativos', location: 'Faria Lima – São Paulo', area: '230m²' },
      { title: 'Áreas de atendimentos', category: 'Clínicas e Laboratórios', location: 'São Paulo', area: '' },
      { title: 'Nova unidade (academia)', category: 'Academias', location: 'Itapevi – São Paulo', area: '1230m²' },
      { title: 'Nova Unidade (varejo)', category: 'Edificações Comerciais', location: 'Jaçanã – São Paulo', area: '' },
      { title: 'Descompressão e criatividade', category: 'Startups & Scale-Ups', location: 'Rio de Janeiro', area: '1000m²' },
      { title: 'Modernidade', category: 'Ambientes Corporativos', location: 'São Carlos – São Paulo', area: '750m²' },
    ];

    const galleriesList = Object.keys(imagesMap).sort((a, b) => Number(a) - Number(b)).map(k => imagesMap[k]);

    const fallbackProjects = configuredProjects.map((p, idx) => {
      const gallery = galleriesList[idx] || [];
      const thumbnail = gallery[0] || '';
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `project-${idx + 1}`;
      return {
        _id: String(idx + 1),
        slug,
        client: '',
        title: p.title,
        category: p.category || 'Geral',
        location: p.location || '',
        area: p.area || '',
        duration: '',
        thumbnail,
        gallery,
      };
    });

    console.log(JSON.stringify({ title: 'Nossas Obras', subtitle: 'Fallback', projects: fallbackProjects }, null, 2));
  } catch (err) {
    console.error('erro:', err);
    process.exit(1);
  }
})();
