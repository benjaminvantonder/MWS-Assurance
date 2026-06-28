# MWS Assurance and Investment Group — Website Redesign

[![CI/CD](https://github.com/your-org/mwsgroup-redesign/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/mwsgroup-redesign/actions/workflows/ci.yml)

A premium, cinematic JAMstack website for **MWS Assurance and Investment Group** — an Authorised Financial Services Provider (FSP5182) based in Johannesburg, South Africa.

Built with the **NOIR ESSENCE 3D** design system: dark, cinematic, fluid, minimal, and luminous contrast.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18, TypeScript |
| Bundler | Vite |
| Styling | Tailwind CSS v4 (design tokens) |
| Routing | React Router DOM v6 |
| Data Fetching | TanStack Query |
| State Management | Zustand |
| Animations | Framer Motion, GSAP |
| SEO | React Helmet Async |
| Icons | Lucide React |
| Deployment | Vercel |

## Project Structure

```
src/
├── components/
│   ├── animations/     # Parallax, FadeIn, Grain, Glow
│   ├── layout/         # Header, Footer, Layout
│   ├── sections/       # Hero, About, Services, Team, Gallery, News, Contact, VSL, Stats
│   ├── seo/            # SEOHead component
│   └── ui/             # Button, GlassCard, SectionTitle, ScrollToTop, WhatsAppButton
├── pages/              # Home, LifeInsurance, Retirement, Investments, Medical, Compliance
├── data/               # site.json, services.json, team.json, gallery.json, news.json, stats.json
├── hooks/              # useReducedMotion, useScrollToTop, usePrefetchOnHover
├── styles/             # Global CSS
└── utils/              # cn, sitemap generator
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Design System: NOIR ESSENCE 3D

- **Palette**: Near-black (#050505–#1a1a1a) with gold accents (#d4a853)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Effects**: Glassmorphism, vignette overlays, animated grain, GPU-accelerated transforms
- **Motion**: Reduced-motion support via `prefers-reduced-motion`
- **Accessibility**: Focus-visible outlines, semantic HTML, ARIA labels

## Performance

- Code splitting via Vite manual chunks
- Lazy loading of below-fold sections
- GPU-accelerated CSS transforms (`.gpu` utility class)
- Optimised font loading with `preconnect`
- PurgeCSS via Tailwind (automatic)
- Responsive images ready for WebP/AVIF

## SEO

- Schema.org FinancialService structured data
- Open Graph + Twitter Card meta tags
- Canonical URLs
- Automated sitemap generation
- robots.txt

## Deployment

The site is configured for **Vercel** deployment with:

- SPA rewrites
- Immutable asset caching (1 year)
- Image caching (1 day + stale-while-revalidate)

## CI/CD

GitHub Actions pipeline:
1. Lint → Build → Lighthouse CI → Deploy

## License

Private — All rights reserved. MWS Assurance and Investment Group.
