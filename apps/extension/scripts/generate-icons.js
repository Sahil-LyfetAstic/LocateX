#!/usr/bin/env node
/**
 * Generate PNG icons from SVG for LocateX extension
 * Requires: sharp (npm install sharp)
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Error: sharp package is required. Install it with:');
  console.error('  cd apps/extension && pnpm add -D sharp');
  process.exit(1);
}

const svgPath = path.join(__dirname, '../src/assets/img/icon.svg');
const sizes = [32, 34, 48, 128];

async function generateIcons() {
  if (!fs.existsSync(svgPath)) {
    console.error(`SVG file not found: ${svgPath}`);
    process.exit(1);
  }

  console.log('🎨 Generating LocateX icons...\n');

  for (const size of sizes) {
    const outputPath = path.join(__dirname, `../src/assets/img/icon-${size}.png`);
    
    try {
      await sharp(svgPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated icon-${size}.png (${size}x${size})`);
    } catch (error) {
      console.error(`✗ Failed to generate icon-${size}.png:`, error.message);
    }
  }

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);

