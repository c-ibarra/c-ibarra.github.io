# c-ibarra.github.io

Carlos Ibarra's portfolio — a Next.js + Fumadocs site documenting real, shipped AI engineering projects as case studies, organized around four concept domains rather than a generic "about me" page.

Architecture rationale (why Next.js + Fumadocs over Docusaurus/Astro Starlight/MkDocs/VitePress/Nextra) and the information architecture behind the four domains are documented in the planning notes this repo was built from.

Static-export Next.js app, deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Structure

| Path | Description |
| --- | --- |
| `content/<domain>/index.mdx` | Case study for each of the four domains |
| `content/<domain>/articles/*.mdx` | Deep-dive articles per domain |
| `content/learning-log/` | Coursework, kept separate from project evidence |
| `src/app/(home)` | Landing page |
| `src/app/docs` | Documentation layout and pages |
| `src/lib/source.ts` | Content source adapter ([`loader()`](https://fumadocs.dev/docs/headless/source-api)) |

## Development

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm lint
pnpm run types:check
pnpm build     # static export to ./out
```
