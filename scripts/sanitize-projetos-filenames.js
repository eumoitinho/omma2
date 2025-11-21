#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const publicRoot = path.join(process.cwd(), 'public');
const projetosRoot = path.join(publicRoot, 'projetos');
const imagesMapPath = path.join(process.cwd(), 'scripts', 'images-map.json');

function sanitizeSegment(seg) {
  // remove diacritics, replace invalid chars with '-', collapse dashes
  const normalized = seg.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  return normalized
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files = files.concat(walkFiles(full));
    } else if (ent.isFile()) {
      files.push(full);
    }
  }
  return files;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      removeEmptyDirs(full);
    }
  }
  // after cleaning children, remove if empty
  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

if (!fs.existsSync(projetosRoot)) {
  console.error('No public/projetos directory found. Aborting.');
  process.exit(1);
}

console.log('Scanning files under public/projetos...');
const files = walkFiles(projetosRoot);
const mapping = {}; // original -> sanitized (with leading slash)

for (const abs of files) {
  const rel = path.relative(publicRoot, abs).split(path.sep).join('/'); // e.g., projetos/..../IMG.jpg
  const segments = rel.split('/');
  const sanitizedSegments = segments.map(sanitizeSegment);
  const newRel = sanitizedSegments.join('/');
  const oldPath = path.join(publicRoot, rel);
  const newPath = path.join(publicRoot, newRel);

  // if any sanitized segment turned empty, skip moving to avoid wrong destinations
  if (sanitizedSegments.some(s => s === '')) {
    mapping['/' + rel] = '/' + rel;
    console.warn('Skipping (empty segment after sanitize):', rel);
    continue;
  }

  if (oldPath === newPath) {
    mapping['/' + rel] = '/' + newRel;
    continue;
  }

  // ensure target dir exists
  ensureDir(path.dirname(newPath));

  // Move file
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${rel} -> ${newRel}`);
    mapping['/' + rel] = '/' + newRel;
  } catch (err) {
    console.error('Failed to move', rel, err);
    // fallback: keep original mapping
    mapping['/' + rel] = '/' + rel;
  }
}

// Remove any empty directories under projetos
removeEmptyDirs(projetosRoot);

// Update scripts/images-map.json if exists
if (fs.existsSync(imagesMapPath)) {
  console.log('Updating scripts/images-map.json...');
  const raw = fs.readFileSync(imagesMapPath, 'utf8');
  const backupPath = imagesMapPath + '.bak';
  fs.copyFileSync(imagesMapPath, backupPath);
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse images-map.json:', err);
    process.exit(1);
  }

  const newData = {};
  for (const key of Object.keys(data)) {
    newData[key] = data[key].map((p) => {
      // p expected like '/projetos/...'
      if (mapping[p]) return mapping[p];
      // try decode and match
      const dec = decodeURI(p);
      if (mapping[dec]) return mapping[dec];
      // otherwise keep original
      return p;
    });
  }

  fs.writeFileSync(imagesMapPath, JSON.stringify(newData, null, 2), 'utf8');
  console.log('images-map.json updated (backup at ' + backupPath + ').');
} else {
  console.log('No scripts/images-map.json found — skipping update.');
}

// Print summary
console.log('Sanitization complete. Files processed:', files.length);
process.exit(0);
