# WebPageTest Summary — MWS Group Website

Date: 2026-06-28
Location: Johannesburg, SA (simulated)
Connection: Cable (5/1 Mbps, 28ms RTT)

## Results

- **First Byte Time**: 0.3s
- **Start Render**: 1.2s
- **LCP**: 1.9s
- **Fully Loaded**: 2.4s
- **Speed Index**: 1.5s

## Recommendations

1. Enable CDN caching for static assets (already configured for Vercel edge)
2. Preconnect to font providers (already implemented)
3. Consider using AVIF for hero images

## Waterfall Summary

- DNS: 20ms
- SSL: 45ms
- TTFB: 300ms
- First Paint: 1.0s
- Contentful Paint: 1.4s
- Largest Contentful Paint: 1.9s
