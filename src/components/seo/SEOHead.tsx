import { Helmet } from 'react-helmet-async'
import site from '@/data/site.json'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  schema?: Record<string, unknown>
}

export function SEOHead({
  title,
  description = 'MWS Assurance and Investment Group – Authorised Financial Services Provider FSP5182. Creating and Protecting Wealth since 2000.',
  image = site.ogImage,
  url = site.url,
  type = 'website',
  schema,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${site.shortName}` : `${site.name} | Established 2000`
  const baseUrl = url.replace(/\/$/, '')
  const ogImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      <meta name="application-name" content={site.shortName} />
      <meta name="apple-mobile-web-app-title" content={site.shortName} />
      <meta name="theme-color" content="#ffffff" />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
