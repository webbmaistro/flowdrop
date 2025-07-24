const fs = require('fs');
const path = require('path');

// Create the directory structure for product screenshots
const directories = [
  'public/screenshots',
  'public/screenshots/dashboard',
  'public/screenshots/features',
  'public/screenshots/mobile'
];

console.log('🚀 Setting up image directory structure...\n');

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`📁 Directory already exists: ${dir}`);
  }
});

console.log('\n📋 Image Requirements:');
console.log('=====================');
console.log('\n📱 Main Product Gallery (1200x800px):');
console.log('  • main-dashboard.png');
console.log('  • ai-workflow-builder.png');
console.log('  • one-click-deploy.png');
console.log('  • real-time-monitoring.png');
console.log('  • Format: PNG or WebP');
console.log('  • Max size: 500KB each');

console.log('\n⚡ Feature Highlights (800x600px):');
console.log('  • code-editor.png');
console.log('  • team-collaboration.png');
console.log('  • Format: PNG or WebP');
console.log('  • Max size: 300KB each');

console.log('\n📱 Mobile (optional):');
console.log('  • mobile-dashboard.png');
console.log('  • Format: PNG or WebP');
console.log('  • Max size: 400KB');

console.log('\n💡 Optimization Tips:');
console.log('===================');
console.log('1. Use TinyPNG (tinypng.com) for compression');
console.log('2. Convert to WebP for better performance');
console.log('3. Ensure screenshots are high-quality and representative');
console.log('4. Test on different screen sizes');
console.log('5. Consider adding alt text for accessibility');

console.log('\n🎯 Next Steps:');
console.log('==============');
console.log('1. Add your optimized images to the created directories');
console.log('2. The ProductScreenshots component will automatically use them');
console.log('3. Test the gallery on your local development server');
console.log('4. Adjust image dimensions in ProductScreenshots.tsx if needed');

console.log('\n✨ Your product feature section is ready for real images!'); 