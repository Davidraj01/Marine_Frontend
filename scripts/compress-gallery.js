/**
 * Compress Vedantangal gallery images to WebP
 * Uses sharp (already in devDependencies)
 * Run: node scripts/compress-gallery.js
 */
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QUALITY = 80; // WebP quality (0-100)
const MAX_WIDTH = 1600; // max pixel width

const folders = ["vedantangal", "kovalam"];

for (const folder of folders) {
  const dir = join(__dirname, "..", "public", "gallery", folder);
  if (!existsSync(dir)) {
    console.log(`⏭  Skipping ${folder} (directory not found)`);
    continue;
  }

  const files = readdirSync(dir).filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())
  );

  if (files.length === 0) {
    console.log(`⏭  No images in ${folder}`);
    continue;
  }

  console.log(`\n📂 ${folder} — ${files.length} images`);

  for (const file of files) {
    const inputPath = join(dir, file);
    const outputName = basename(file, extname(file)) + ".webp";
    const outputPath = join(dir, outputName);

    try {
      const info = await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const origSize = (await sharp(inputPath).metadata()).size || 0;
      const ratio = origSize > 0 ? ((1 - info.size / origSize) * 100).toFixed(0) : "?";
      console.log(
        `  ✅ ${file} → ${outputName}  (${(info.size / 1024).toFixed(0)} KB, -${ratio}%)`
      );
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }
}

console.log("\n🎉 Done! Update galleryData.js to use .webp filenames.");
