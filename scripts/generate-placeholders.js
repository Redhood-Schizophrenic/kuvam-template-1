// This is a helper script to generate placeholder images
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public',
  'public/hero',
  'public/services',
  'public/products',
  'public/categories',
  'public/subcategories',
  'public/testimonials'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder image URLs with industry-specific icons and gradients
const placeholders = {
  // Logo and Hero Images
  'public/logo.png': 'https://placehold.co/40x40/2563eb/ffffff?text=K',
  
  // Product Images with specific industry icons
  'public/products/product-1.jpg': 'https://placehold.co/800x600/2563eb/ffffff?text=CNC+Machine',
  'public/products/product-2.jpg': 'https://placehold.co/800x600/0891b2/ffffff?text=3D+Printer',
  'public/products/product-3.jpg': 'https://placehold.co/800x600/4f46e5/ffffff?text=Assembly+Line',
  'public/products/product-4.jpg': 'https://placehold.co/800x600/3b82f6/ffffff?text=Testing+Equipment',
  'public/products/product-5.jpg': 'https://placehold.co/800x600/6366f1/ffffff?text=Automation+System',
  'public/products/product-6.jpg': 'https://placehold.co/800x600/8b5cf6/ffffff?text=Quality+Control',

  // Service Category Images
  'public/categories/manufacturing.jpg': 'https://placehold.co/1200x800/2563eb/ffffff?text=Manufacturing',
  'public/categories/prototyping.jpg': 'https://placehold.co/1200x800/0891b2/ffffff?text=Prototyping',
  'public/categories/assembly.jpg': 'https://placehold.co/1200x800/4f46e5/ffffff?text=Assembly',
  'public/categories/testing.jpg': 'https://placehold.co/1200x800/3b82f6/ffffff?text=Testing',

  // Service Subcategory Images
  'public/subcategories/cnc-machining.jpg': 'https://placehold.co/800x600/2563eb/ffffff?text=CNC+Machining',
  'public/subcategories/injection-molding.jpg': 'https://placehold.co/800x600/0891b2/ffffff?text=Injection+Molding',
  'public/subcategories/3d-printing.jpg': 'https://placehold.co/800x600/4f46e5/ffffff?text=3D+Printing',
  'public/subcategories/metal-fabrication.jpg': 'https://placehold.co/800x600/3b82f6/ffffff?text=Metal+Fabrication',
  'public/subcategories/surface-finishing.jpg': 'https://placehold.co/800x600/6366f1/ffffff?text=Surface+Finishing',
  'public/subcategories/quality-control.jpg': 'https://placehold.co/800x600/8b5cf6/ffffff?text=Quality+Control',

  // Service Process Images
  'public/services/process-1.jpg': 'https://placehold.co/1200x800/2563eb/ffffff?text=Design+Phase',
  'public/services/process-2.jpg': 'https://placehold.co/1200x800/0891b2/ffffff?text=Manufacturing+Phase',
  'public/services/process-3.jpg': 'https://placehold.co/1200x800/4f46e5/ffffff?text=Testing+Phase',
  'public/services/process-4.jpg': 'https://placehold.co/1200x800/3b82f6/ffffff?text=Delivery+Phase',

  // Product Detail Images
  'public/products/details/product-1-detail.jpg': 'https://placehold.co/1920x1080/2563eb/ffffff?text=CNC+Machine+Details',
  'public/products/details/product-2-detail.jpg': 'https://placehold.co/1920x1080/0891b2/ffffff?text=3D+Printer+Details',
  'public/products/details/product-3-detail.jpg': 'https://placehold.co/1920x1080/4f46e5/ffffff?text=Assembly+Line+Details',

  // Service Detail Images
  'public/services/details/service-1-detail.jpg': 'https://placehold.co/1920x1080/2563eb/ffffff?text=Manufacturing+Process',
  'public/services/details/service-2-detail.jpg': 'https://placehold.co/1920x1080/0891b2/ffffff?text=Prototyping+Process',
  'public/services/details/service-3-detail.jpg': 'https://placehold.co/1920x1080/4f46e5/ffffff?text=Assembly+Process'
};

// Function to download images (commented out for now, just logging URLs)
async function downloadImage(url, filepath) {
  console.log(`Would download ${url} to ${filepath}`);
  // Actual download logic would go here
  // const response = await fetch(url);
  // const buffer = await response.buffer();
  // await fs.promises.writeFile(filepath, buffer);
}

console.log('🎨 Creating placeholder images...');

// Log the URLs and paths
console.log('\nPlaceholder image URLs:');
Object.entries(placeholders).forEach(([file, url]) => {
  console.log(`\n${file}:`);
  console.log(url);
  // downloadImage(url, file); // Uncomment to actually download images
});

// Generate SVG patterns for backgrounds
const svgPatterns = {
  'public/patterns/grid.svg': `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  `,
  'public/patterns/dots.svg': `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="2" fill="rgba(0,0,0,0.1)"/>
      </pattern>
      <rect width="100" height="100" fill="url(#dots)" />
    </svg>
  `
};

// Save SVG patterns
Object.entries(svgPatterns).forEach(([file, content]) => {
  console.log(`\nGenerating SVG pattern: ${file}`);
  // fs.writeFileSync(file, content.trim()); // Uncomment to actually save SVGs
});

console.log('\n✨ Done! Use these URLs and patterns to create actual placeholder images.'); 