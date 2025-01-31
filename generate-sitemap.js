const fs = require('fs');
const path = require('path');

const baseUrl = 'https://blrgroove.co'; // Your site URL
const pages = [
  '/', 
  '/about', 
  '/hire-a-band', 
  '/hire-an-artist',
  '/contact-us'
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
