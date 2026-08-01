import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.marinebiodiversityconservation.com';
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Routes with priority levels
const routes = [
  // High priority - main pages
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'weekly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/donate', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'weekly' },
  
  // Medium priority - content pages
  { path: '/getinvolved', priority: '0.8', changefreq: 'weekly' },
  { path: '/careers', priority: '0.8', changefreq: 'weekly' },
  { path: '/fellowship', priority: '0.8', changefreq: 'weekly' },
  { path: '/marine-life', priority: '0.8', changefreq: 'weekly' },
  { path: '/countries', priority: '0.8', changefreq: 'weekly' },
  { path: '/marine-news', priority: '0.8', changefreq: 'daily' },
  { path: '/threats', priority: '0.8', changefreq: 'monthly' },
  { path: '/opine', priority: '0.7', changefreq: 'weekly' },
  { path: '/heros', priority: '0.7', changefreq: 'weekly' },
  { path: '/marine-quiz', priority: '0.7', changefreq: 'monthly' },
  { path: '/ocean-drive', priority: '0.7', changefreq: 'monthly' },
  
  // Low priority - legal/policy pages
  { path: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.4', changefreq: 'yearly' },
  { path: '/cancellation-refund-policy', priority: '0.4', changefreq: 'yearly' },
  { path: '/membership-agreement', priority: '0.4', changefreq: 'yearly' },
  { path: '/donation-policy', priority: '0.4', changefreq: 'yearly' },
];

const generateSitemap = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();
