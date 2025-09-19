#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🖼️  Flowdrop Screenshot Manager\n');

// Check if screenshots folder exists
const screenshotsDir = path.join(process.cwd(), 'screenshots');
const publicScreenshotsDir = path.join(process.cwd(), 'public', 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  console.log('❌ No screenshots folder found. Please create a "screenshots" folder in your project root.');
  process.exit(1);
}

// Create public/screenshots directory if it doesn't exist
if (!fs.existsSync(publicScreenshotsDir)) {
  fs.mkdirSync(publicScreenshotsDir, { recursive: true });
  console.log('✅ Created public/screenshots directory');
}

// Get all PNG files from screenshots folder
const files = fs.readdirSync(screenshotsDir).filter(file => file.endsWith('.png'));

if (files.length === 0) {
  console.log('❌ No PNG files found in screenshots folder.');
  process.exit(1);
}

console.log(`📁 Found ${files.length} screenshot(s):`);
files.forEach(file => console.log(`   - ${file}`));

// Copy files to public/screenshots
let copiedCount = 0;
files.forEach(file => {
  const sourcePath = path.join(screenshotsDir, file);
  const destPath = path.join(publicScreenshotsDir, file);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    copiedCount++;
    console.log(`✅ Copied ${file}`);
  } catch (error) {
    console.log(`❌ Failed to copy ${file}: ${error.message}`);
  }
});

console.log(`\n🎉 Successfully copied ${copiedCount}/${files.length} screenshots to public/screenshots/`);
console.log('\n📝 Next steps:');
console.log('1. Your screenshots are now available at /screenshots/[filename] in your app');
console.log('2. The ProductScreenshots component will automatically use them');
console.log('3. You can update the descriptions in components/ProductScreenshots.tsx');
console.log('4. Adjust image dimensions in ProductScreenshots.tsx if needed');
console.log('\n💡 Tip: Run this script whenever you add new screenshots to keep them in sync!'); 