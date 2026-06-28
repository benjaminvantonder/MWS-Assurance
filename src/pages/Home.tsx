import { SEOHead } from '@/components/seo/SEOHead'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Team } from '@/components/sections/Team'
import { Gallery } from '@/components/sections/Gallery'
import { News } from '@/components/sections/News'
import { VSL } from '@/components/sections/VSL'
import { Contact } from '@/components/sections/Contact'
import site from '@/data/site.json'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  founder: {
    '@type': 'Person',
    name: site.founder.name,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.city,
    addressCountry: 'ZA',
  },
  knowsAbout: ['Life Insurance', 'Disability Insurance', 'Retirement Planning', 'Investments', 'Medical Schemes', 'Estate Planning'],
  fspLicense: site.fspLicense,
}

export function Home() {
  return (
    <>
      <SEOHead
        schema={schema}
        description={`${site.name} – ${site.tagline}. Authorised Financial Services Provider FSP${site.fspLicense}. Life insurance, retirement planning, investments, and medical schemes.`}
      />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Gallery />
      <VSL />
      <News />
      <Contact />
    </>
  )
}
