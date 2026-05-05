# Nordflux — Digital Marknadsföring 2026

En interaktiv e-bok från fullservicebyrån **Nordflux**. Fyra kapitel om AI,
content, first-party data och bold webbdesign — presenterade som horisontella
scroll-sektioner med brutalist-inspirerad design.

## Tech stack

- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS v3 med HSL-baserade design tokens
- Framer Motion för scroll-interaktioner
- shadcn/ui primitives

## Kom igång

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produktion → ./dist
npm run preview
```

## Deploy

`netlify.toml` är förkonfigurerad: `npm run build` → `dist`, SPA-fallback och
säkerhetsheaders. Importera repot i Netlify och deploya direkt.

## Struktur

```
src/
├── components/ebook/    # Hero, Navbar, HorizontalChapter, Principles, CTA, Footer
├── lib/ebook-data.ts    # Allt redaktionellt innehåll
├── pages/Index.tsx
└── index.css            # Design tokens
```

Allt redaktionellt innehåll bor i `src/lib/ebook-data.ts` — uppdatera kapitel,
statistik och principer där.
