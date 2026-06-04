# Fil d'Or

Sito personale bilingue (IT/EN). Vetrina professionale + spazio editoriale.

## Stack
- Next.js 14 (App Router) — JavaScript
- next-intl per i18n
- MDX locale per i contenuti
- Framer Motion per animazioni
- CSS Modules + custom properties (palette dorata su fondo caldo)
- Giscus per i commenti
- KaTeX + Shiki per matematica e codice
- lunr.js per search client-side

## Setup
```bash
npm install
cp .env.local.example .env.local   # compila Giscus / Formspree
npm run dev
```

## Aggiungere un articolo
1. Crea un file `.mdx` in `content/<sezione>/` (sezioni: matematica, fede-e-chiesa, parole, musica, giochi, pensieri).
2. Frontmatter:
   ```yaml
   ---
   title: "Titolo"
   date: "2025-03-15"
   abstract: "Breve descrizione."
   section: "matematica"
   tags: ["logica", "ontologia"]
   lang: "it"
   progetto: ""    # solo per /giochi se collegato a /lavoro
   ---
   ```
3. Per la versione EN: stesso slug in `content/<sezione>/` con `lang: "en"` e suffisso `-en` opzionale.

## Struttura
- `app/[locale]/` — route per IT e EN
- `app/[locale]/curriculum/` — layout standalone, fuori dal layout globale
- `content/` — MDX organizzati per sezione
- `public/assets/` — logo, icone PNG, texture, PDF
- `styles/` — globals, typography, reset

## Deploy
Deploy su Vercel: collega il repo, le variabili d'ambiente del file `.env.local.example`, e `npm run build` si occupa del resto.
