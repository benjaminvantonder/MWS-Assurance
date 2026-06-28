import site from '@/data/site.json'

interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
}

const pages: SitemapEntry[] = [
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/life-insurance', priority: 0.8, changefreq: 'monthly' },
  { loc: '/retirement', priority: 0.8, changefreq: 'monthly' },
  { loc: '/investments', priority: 0.8, changefreq: 'monthly' },
  { loc: '/medical', priority: 0.8, changefreq: 'monthly' },
  { loc: '/compliance', priority: 0.5, changefreq: 'yearly' },
]

export function generateSitemapXml(): string {
  const urlset = pages
    .map(
      (p) => `  <url>
    <loc>${site.url}${p.loc}</loc>
    <lastmod>${p.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq || 'monthly'}</changefreq>
    <priority>${p.priority || 0.5}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`
}

export function generateRobotsTxt(sitemapUrl: string): string {
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`
}
