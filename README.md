# Convertor — Modern e-book converter

> Branch: **`Modernized-convertor-e-book`**
> Repo: [`Elli2022/convertor-e-book`](https://github.com/Elli2022/convertor-e-book)

A modernized, production-ready frontend for an e-book conversion tool. Drop a
file (EPUB, MOBI, PDF, TXT, DOCX), pick a target format, and download the
result. Built as a polished SaaS-grade UI ready to plug into a real conversion
backend.

---

## ✨ Highlights

- **Premium dark SaaS UI** — gradient hero, glassmorphism cards, Space Grotesk display + Inter body.
- **Stepwise flow** — Upload → Format → Convert → Download with a live progress timeline.
- **Strict client-side validation** — file type, size (50 MB cap) and empty-file detection.
- **Sanitized filenames** — path separators, control chars and forbidden glyphs stripped before display.
- **Accessible** — semantic HTML, ARIA roles on the dropzone/format picker, keyboard support, visible focus rings.
- **SEO-ready** — proper title/meta description, OpenGraph tags, JSON-LD `WebApplication` schema.
- **Honest demo mode** — the converter clearly labels its output as demo content; the architecture is ready for a real backend.

---

## 🧱 Tech stack

- **React 18** + **TypeScript 5**
- **Vite 5** (fast dev, optimized production build)
- **Tailwind CSS v3** with a token-based design system (HSL semantic tokens, gradients, shadows)
- **shadcn/ui** primitives (Radix UI under the hood) for the accordion, progress, toaster, etc.
- **Sonner** for toasts
- **lucide-react** for icons

---

## 🗂 Project structure

```
src/
├── components/
│   ├── converter/
│   │   ├── ConverterCard.tsx     # Orchestrator (state machine + layout)
│   │   ├── Dropzone.tsx          # Drag & drop, keyboard accessible
│   │   ├── FormatPicker.tsx      # Radio-group of target formats
│   │   ├── Stepper.tsx           # 4-step progress UI
│   │   └── ConvertPanel.tsx      # Progress + result + download
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── FormatsSection.tsx
│   ├── FAQ.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/                       # shadcn primitives
├── lib/converter/
│   ├── types.ts                  # EbookFormat, ConversionStatus, ConversionResult…
│   ├── formats.ts                # FORMATS map, accepted extensions, max size, steps
│   ├── validation.ts             # validateFile, sanitizeFilename, formatBytes
│   └── converter.ts              # runDemoConversion (replace with real backend)
├── pages/
│   ├── Index.tsx                 # Landing + tool
│   └── NotFound.tsx
├── index.css                     # Design tokens, gradients, animations
└── main.tsx
```

---

## 🚀 Getting started

```bash
# install
npm install

# develop
npm run dev          # http://localhost:5173

# typecheck + build
npm run build        # outputs to ./dist

# preview production build
npm run preview

# tests
npm run test
```

---

## 🌍 Deploying to Netlify

A `netlify.toml` is included with:

- `command = "npm run build"`
- `publish = "dist"`
- SPA fallback redirect (`/* → /index.html`)
- Sensible security headers and long-lived `Cache-Control` for `/assets/*`

Steps:

1. Push this branch to GitHub (`Modernized-convertor-e-book`).
2. In Netlify, **Import from Git → select the repo → choose the branch**.
3. Netlify will pick up `netlify.toml` automatically. Click **Deploy**.

---

## 🔌 Replacing the demo converter with a real backend

The conversion entry point lives in **`src/lib/converter/converter.ts`** as
`runDemoConversion`. It currently:

1. Walks through fake "phases" with progress callbacks.
2. Returns a `Blob` of plain-text demo content tagged with the target MIME.

To ship real conversions, replace the body of `runDemoConversion` with a call
to your backend (e.g. a Lovable Cloud Edge Function, an AWS Lambda, or a
Pandoc-powered microservice). The function signature, the progress contract,
and the `ConversionResult` shape are stable — no UI changes required.

```ts
// src/lib/converter/converter.ts
export async function runDemoConversion(opts) {
  const form = new FormData();
  form.append("file", opts.source);
  form.append("target", opts.target);

  const res = await fetch("/api/convert", { method: "POST", body: form, signal: opts.signal });
  if (!res.ok) throw new Error(`Conversion failed (${res.status})`);
  const blob = await res.blob();
  return { blob, filename: `${opts.source.name}.${opts.target}`, format: opts.target, bytes: blob.size, durationMs: 0 };
}
```

> ⚠️ Never hardcode API keys in the frontend. Use environment variables and a
> server-side proxy (Edge Function) for any third-party converter.

---

## 🔒 Security & robustness

- Allow-list of file extensions (`.epub .mobi .pdf .txt .docx`) — anything else is rejected before processing.
- Hard 50 MB file cap.
- All user-visible filenames go through `sanitizeFilename` (strips path separators, control chars, length-caps).
- No `dangerouslySetInnerHTML` on user input.
- Strict CSP-friendly headers via `netlify.toml`.

---

## 📄 License

MIT — see repository for details.
