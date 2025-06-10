const fs = require('fs');
const path = require('path');

/**
 * Image Optimization Guide
 * 
 * For best results on Vercel:
 * 1. Use high-resolution source images (2x the display size)
 * 2. Ensure images are properly compressed
 * 3. Use WebP/AVIF formats when possible
 * 
 * Recommended tools:
 * - For batch optimization: `npm install -g @squoosh/cli`
 * - Command: `squoosh-cli --webp '{quality: 90}' --avif '{quality: 80}' images/`
 * 
 * For profile images specifically:
 * - Original size: 960x960px (for 480px display)
 * - Format: JPEG/WebP
 * - Quality: 90-95%
 */

console.log('Image optimization recommendations:');
console.log('1. Profile image should be 960x960px for crisp display at 480px');
console.log('2. Project images should be 1600x900px for crisp display at 800x450px');
console.log('3. Use quality setting 90-95 for important images');
console.log('4. Vercel automatically serves WebP/AVIF when supported');

// Check if images directory exists
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (fs.existsSync(imagesDir)) {
  console.log('\nImages directory found:', imagesDir);
  
  // List image files
  function listImages(dir, files = []) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        listImages(fullPath, files);
      } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(item)) {
        files.push(fullPath);
      }
    });
    return files;
  }
  
  const imageFiles = listImages(imagesDir);
  console.log('\nFound images:');
  imageFiles.forEach(file => {
    const stats = fs.statSync(file);
    console.log(`- ${path.relative(process.cwd(), file)} (${(stats.size / 1024).toFixed(1)}KB)`);
  });
} else {
  console.log('\nNo images directory found');
} 