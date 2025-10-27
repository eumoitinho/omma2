import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

const client = createClient({
  projectId: '6xp8522n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skMM1A6GdgZ9wLKwjPBtMkmS3EtW4chx6goCreTDSBMYrl pleased enter your token here',
});

const projetosDir = path.join(process.cwd(), 'public', 'projetos');

async function getImageFiles(folderPath: string): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const items = fs.readdirSync(folderPath, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(folderPath, item.name);
      
      if (item.isDirectory()) {
        // Recursively search in subdirectories
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (item.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item.name)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error);
  }
  
  return files;
}

async function uploadImage(imagePath: string): Promise<any> {
  try {
    const fileBuffer = fs.readFileSync(imagePath);
    const fileName = path.basename(imagePath);
    
    console.log(`📤 Uploading ${fileName}...`);
    
    const asset = await client.assets.upload('image', fileBuffer, {
      filename: fileName,
    });
    
    console.log(`✅ Uploaded: ${fileName}`);
    return asset;
  } catch (error) {
    console.error(`❌ Error uploading ${imagePath}:`, error);
    return null;
  }
}

async function main() {
  console.log('🔄 Starting image upload process...');
  
  try {
    const folders = fs.readdirSync(projetosDir, { withFileTypes: true })
      .filter(item => item.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));
    
    console.log(`📁 Found ${folders.length} project folders`);
    
    for (const folder of folders) {
      const folderPath = path.join(projetosDir, folder.name);
      console.log(`\n📂 Processing folder: ${folder.name}`);
      
      const imageFiles = await getImageFiles(folderPath);
      console.log(`   Found ${imageFiles.length} images`);
      
      const uploadedAssets = [];
      
      for (const imageFile of imageFiles) {
        const asset = await uploadImage(imageFile);
        if (asset) {
          uploadedAssets.push(asset);
        }
      }
      
      console.log(`   ✅ Uploaded ${uploadedAssets.length}/${imageFiles.length} images`);
      console.log(`   Assets IDs:`, uploadedAssets.map(a => a._id));
    }
    
    console.log('\n✅ Image upload process completed!');
  } catch (error) {
    console.error('❌ Error during image upload process:', error);
  }
}

main();

