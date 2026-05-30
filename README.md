# Nordflux E-Book

An interactive editorial microsite for **Nordflux**, designed as a digital 2026 marketing report with horizontal chapters, bold typography, and motion-led reading flow.

![Nordflux E-Book homepage](./docs/screenshots/home.png)

## Live Site

- GitHub Pages: [elli2022.github.io/nordflux-ebook](https://elli2022.github.io/nordflux-ebook/)

## Project Overview

This project presents four themed chapters about digital marketing in 2026:

- AI and search behavior
- content systems
- first-party data
- bolder web design and brand presence

Instead of behaving like a traditional PDF-style report, the site is built as a reading experience on the web. It combines large-format editorial layout, animated transitions, and horizontally framed chapter sections to make the content feel more like a designed digital product than a static document.

## What The Project Shows

- editorial-style frontend design
- scroll-based motion and section transitions
- strong visual hierarchy with brutalist-inspired direction
- structured long-form content in a modern React/Vite stack
- a public static deployment flow through GitHub Pages

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- shadcn/ui primitives

## Version History

`nordflux-ebook` is the canonical home for this project.

It now also preserves the earlier predecessor repo `digital-text-canvas` as version branches:

- `main`
  - current standalone `nordflux-ebook`
- `version/2026-05-01-digital-text-canvas-before-template-cleanup`
  - earlier predecessor state before the final cleanup pass
- `version/2026-05-05-digital-text-canvas-final`
  - later predecessor state just before the project became its own standalone repo

This keeps the development story visible without leaving duplicate repositories behind.

## Local Development

```bash
npm install
npm run dev
```

Default local development URL:

```text
http://localhost:8080
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

The repo includes a GitHub Actions workflow that builds and deploys the static site automatically on pushes to `main`.

Deployment details:

- platform: GitHub Pages
- build output: `dist/`
- base path: `/nordflux-ebook/`

Because this is a static Vite project, GitHub Pages is a good fit and avoids the need for a separate hosting budget for this demo.

## Project Structure

```text
src/
├── components/ebook/    # Hero, navbar, chapters, principles, CTA, footer
├── lib/ebook-data.ts    # Structured report content
├── pages/Index.tsx      # Main reading experience
└── index.css            # Design tokens and global styling
```

## Content Editing

Most of the editorial content is managed in:

- [src/lib/ebook-data.ts](./src/lib/ebook-data.ts)

That makes it easy to update chapter copy, insight blocks, and report details without touching the whole component tree.

## Why This Repo Matters

This repo is not only a design piece. It also reflects a cleanup decision:

- the duplicate predecessor repos were consolidated
- the best current version was kept as the public main repo
- earlier stages were preserved through branches instead of cluttering GitHub with copies

So it works both as a frontend showcase and as an example of better repository hygiene.
