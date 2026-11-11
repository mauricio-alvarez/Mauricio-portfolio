# mauricioalvarezj.tech

Personal portfolio of Mauricio Alvarez. Static site built with [Astro](https://astro.build),
in Spanish (`/`) and English (`/en/`), deployed to GitHub Pages on every push to `main`.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # output in dist/
```

## Edit the content

| What | Where |
| --- | --- |
| Email, LinkedIn, GitHub links | `src/data/site.ts` |
| Projects (both languages) | `src/data/projects.ts` |
| Experience, education, skills | `src/data/cv.ts` |
| Every other text on the page | `src/i18n/ui.ts` |
| Project screenshots | `src/assets/projects/` |
| Colours and layout | `src/styles/global.css` |

A link left as `null` in `site.ts` is hidden, so nothing half-filled gets published.

## CV download

Drop the PDF in `public/cv/` and the "Download CV" buttons appear on the next build:

- `Mauricio-Alvarez-CV-ES.pdf` for the Spanish page
- `Mauricio-Alvarez-CV-EN.pdf` for the English page
- `Mauricio-Alvarez-CV.pdf` as a fallback for both

## Domain

`public/CNAME` points GitHub Pages at `mauricioalvarezj.tech`. DNS at the registrar:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mauricio-alvarez.github.io |
