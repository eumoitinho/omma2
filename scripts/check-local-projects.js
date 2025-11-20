const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const projectsDir = path.join(process.cwd(), 'public', 'projetos');
if (!fs.existsSync(projectsDir)) {
  console.error('projects dir not found:', projectsDir);
  process.exit(1);
}

const folders = fs.readdirSync(projectsDir);
const results = [];
for (const folder of folders) {
  const folderPath = path.join(projectsDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;
  const subDirs = fs.readdirSync(folderPath);
  let projectName = '';
  let images = [];
  for (const subDir of subDirs) {
    const subDirPath = path.join(folderPath, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
      const files = fs.readdirSync(subDirPath).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
      if (files.length > 0) {
        projectName = subDir;
        images = files.map(file => `/projetos/${encodeURIComponent(folder)}/${encodeURIComponent(subDir)}/${encodeURIComponent(file)}`);
        break;
      }
    }
  }
  if (images.length === 0) continue;
  const title = projectName;
  results.push({ folder, projectName, slug: slugify(title), thumbnail: images[0], imagesCount: images.length });
}

console.log(JSON.stringify(results, null, 2));
