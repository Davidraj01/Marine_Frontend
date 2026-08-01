import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const assetsDir = path.resolve(__dirname, '../src/assets');

// Convert image to WebP with quality optimization
async function convertToWebP(inputPath, quality = 75) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  try {
    const metadata = await sharp(inputPath).metadata();
    let pipeline = sharp(inputPath);
    
    // Resize if wider than 1920px
    if (metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
    }
    
    await pipeline
      .webp({ quality, effort: 6 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB, ${savings}% smaller)`);
  } catch (err) {
    console.error(`❌ Failed: ${path.basename(inputPath)} — ${err.message}`);
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await convertToWebP(fullPath);
    }
  }
}

console.log('🖼️  Converting images to WebP...\n');
await processDirectory(publicDir);
await processDirectory(assetsDir);
console.log('\n✅ Done! You can now update image references to use .webp');
