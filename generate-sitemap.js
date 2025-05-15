const fs = require('fs');
const path = require('path');

const baseUrl = 'https://blrgroove.co'; 
const blogsDir = path.join(__dirname, 'out', 'blogs');

// Get all blog slugs dynamically
let blogRoutes = [];
if (fs.existsSync(blogsDir)) {
  blogRoutes = fs
    .readdirSync(blogsDir, { withFileTypes: true })
    .filter(dirent => dirent.name.includes('html') || dirent.isDirectory()) // Ensure it's a directory
    .map(dirent => `/blogs/${dirent.name}`);
}
console.warn({blogRoutes: blogRoutes?.length})
// Define static pages
const pages = [
  '/',
  '/about',
  '/book-a-band',
  '/book-an-artist',
  '/contact-us',
  '/blogs',
  '/signin',
  ...blogRoutes, // Add blog routes dynamically
];

const sitemapEntries = pages
  .map(page => {
    return `<url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

// Write the sitemap to the out directory after export
const sitemapPath = path.join(__dirname, 'out', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully at ' + sitemapPath);

const robots = `User-agent: *
Disallow: /admin
Disallow: /login
Disallow: /reset-password
Disallow: /signin
Disallow: /signup

Sitemap: ${baseUrl}/sitemap.xml`;

const robotsPath = path.join(__dirname, 'out', 'robots.txt');
fs.writeFileSync(robotsPath, robots);
console.log('robots.txt generated successfully at ' + robotsPath);
