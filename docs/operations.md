# Operations Guide — MWS Group Website

## Architecture Overview

Single-page application (SPA) with client-side routing. All content is JSON-driven — no CMS or database required.

## Key URLs

- **Production**: https://mwsgroup.co.za
- **Staging**: https://staging-mwsgroup.vercel.app

## Content Updates

All site content lives in `src/data/` as JSON files:

| File | Content |
|------|---------|
| `site.json` | Business info, contact, navigation |
| `services.json` | Service offerings |
| `team.json` | Team members |
| `gallery.json` | Gallery images |
| `news.json` | News/articles |
| `stats.json` | Statistics |

**To update content**: Edit the relevant JSON file, commit, and push. CI/CD deploys automatically.

## Adding Pages

1. Create the page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add the sitemap entry in `src/utils/sitemap.ts`
4. Add nav link in `src/data/site.json`

## Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥95 |
| Lighthouse Accessibility | ≥95 |
| LCP | <2.0s |
| CLS | <0.05 |
| TBT | <100ms |

## Monitoring

- Vercel Analytics (built-in)
- Lighthouse CI on every PR

## Security

- All dependencies audited via `npm audit`
- No server-side processing — static SPA only
- Environment variables for API keys

## Rollback

Vercel automatically keeps production deployments. To roll back:
1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment
3. Click "Promote to Production"
