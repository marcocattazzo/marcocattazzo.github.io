# Guida autore — Fil d'Or

Documento pratico per modificare il sito, caricare contenuti, sostituire immagini. Affianca `STRUTTURA_SITO.md` (panoramica generale).

---

## Come funziona l'update del sito

Ogni `git push` sul ramo `main` fa partire **GitHub Actions** (workflow `.github/workflows/deploy.yml`): clona → build → pubblica su GitHub Pages. Tempo medio: **2–3 minuti**.

URL live: <https://marcocattazzo.github.io>
URL Actions: <https://github.com/marcocattazzo/marcocattazzo.github.io/actions>

### Due strade per fare modifiche

| Strada | Quando usarla | Cosa serve |
|---|---|---|
| **A. Interfaccia web di GitHub** | Modifica piccola, una stringa, un articolo | Solo il browser |
| **B. Locale + git push** | Più file, immagini, nuovi articoli | Cartella `fildor/` + git |

### Vedere il sito prima di pushare (opzionale)

Installa Node.js LTS 20+ una volta sola, poi:
```bash
cd fildor
npm install     # solo la prima volta
npm run dev     # http://localhost:3000
```

Senza Node l'unica preview è quella live dopo il deploy.

---

## A) Modificare un pezzo esistente

### Dove sta cosa

| Cosa vuoi cambiare | File |
|---|---|
| Testi UI (hero homepage, sottotitoli/intro sezioni, CTA, label) | `messages/it.json` |
| Bio in `/chi-sono` (paragrafo iniziale) | `messages/it.json` → `chiSono.bio` |
| Bio in `/lavoro` ("Modello problemi complessi…") | `messages/it.json` → `lavoro.bio` |
| Voci formazione matematica/teologica in `/chi-sono` | `app/[locale]/chi-sono/page.js` → array `formazioneMat` / `formazioneTeo` |
| Voci pastorali + grafica in `/chi-sono` | `app/[locale]/chi-sono/page.js` → `esperienzePastorali` / `graficaDesign` |
| Voci formazione/esperienza nel `/curriculum` | `app/[locale]/curriculum/page.js` → `formazione` / `esperienza` |
| Voci dettagliate `/chi-sono/[ambito]/` (Galois, anelli, ecc.) | `lib/ambiti.js` |
| Copyright in footer | `components/Footer.js` |
| URL social | `components/SocialIcons.js` → `socialList()` |
| Sottotitolo / intro di un Intreccio | `messages/it.json` → `sectionSubtitles.*` e `sectionIntros.*` |

### Esempio (strada A — GitHub web)

Cambiare il sottotitolo della sezione Matematica:

1. Apri <https://github.com/marcocattazzo/marcocattazzo.github.io>
2. Vai a `messages/it.json`
3. Matita in alto a destra → modifica la riga `sectionSubtitles.matematica`
4. In basso: messaggio commit (es. "tweak sottotitolo matematica") → **Commit changes**
5. Aspetta 2–3 min, controlla la live.

### Esempio (strada B — locale)

```bash
cd "C:\Users\marco\Dropbox\...\fildor"
# edita messages/it.json con VS Code o Notepad++
git add messages/it.json
git commit -m "tweak sottotitolo matematica"
git push
```

---

## B) Cambiare un'immagine di riferimento

Tutte le immagini stanno in `public/assets/`. Sono referenziate per nome dal codice.

### Immagini in uso

| File | Dove appare |
|---|---|
| `logo.png` | Navbar, avatar curriculum, favicon |
| `math.png`, `faith.png`, `philosophy.png` | Hero delle relative sezioni `/intrecci/*` (120px) |
| `mic.png` | Sezione Talks in `/lavoro` + `/curriculum`; hero `/intrecci/musica` |
| `filo.jpg` | **Sfondo hero homepage** (con overlay scuro 80%) |
| `loom.jpg`, `loom2.jpg` | Disponibili, non usate al momento |
| `curriculum.pdf` | Linkato da `/chi-sono` (CV Europass) |
| `progetto_newma_*.pdf` | Linkati dal case study NEWMA |

### Caso 1 — sostituire un'immagine esistente

Modo più semplice. La nuova immagine deve avere **lo stesso nome** del file da sostituire.

1. Rinomina la tua immagine come quella da rimpiazzare (es. `filo.jpg`).
2. Mettila in `fildor/public/assets/` sovrascrivendo.
3. ```bash
   git add public/assets/filo.jpg
   git commit -m "update hero background"
   git push
   ```

Nessuna modifica al codice serve: il riferimento è già `/assets/filo.jpg`.

### Caso 2 — aggiungere una nuova immagine

Esempio: nuovo sfondo `gomitolo.jpg`.

1. Metti `public/assets/gomitolo.jpg`.
2. Apri `app/[locale]/home.module.css`, cerca `background-image: url('/assets/filo.jpg');` (dentro `.heroBg`) → cambia in `url('/assets/gomitolo.jpg');`.
3. Commit + push.

### Caso 3 — cambiare l'icona di una sezione

Sostituisci direttamente `public/assets/math.png` (stesso nome): nessun cambio codice.
Oppure metti `math-new.png` e cambia il riferimento in `app/[locale]/intrecci/[sezione]/page.js` → oggetto `sectionImg`.

### Caso 4 — caricare i PDF reali (CV, NEWMA)

I file attuali sono **placeholder vuoti da 14 byte** (header `%PDF` + `%%EOF` solamente — voluto per non lasciare 404 sui link). I lettori PDF non riescono a renderizzarli e mostrano pagina vuota.

Per sostituirli con i veri:
1. Rinomina i tuoi PDF con esattamente questi nomi:
   - `curriculum.pdf`
   - `progetto_newma_relazione_tecnica.pdf`
   - `progetto_newma_relazione_qualitativa.pdf`
2. Mettili in `public/assets/` sovrascrivendo i placeholder.
3. ```bash
   git add public/assets/*.pdf
   git commit -m "upload real PDFs"
   git push
   ```

---

## C) Aggiungere un articolo

Un solo file `.mdx` nella sottocartella `content/[sezione]/`.

### Sezioni disponibili

- `content/matematica/`
- `content/fede-e-chiesa/`
- `content/parole/`
- `content/musica/`
- `content/giochi/`
- `content/grafica/`
- `content/pensieri/`
- `content/lavoro/` (per i case study di progetto — schema leggermente diverso)

### Lo slug

**È il nome del file senza estensione.** File `spazi-di-hilbert.mdx` → URL `/it/intrecci/matematica/spazi-di-hilbert/`.

Regole pratiche: minuscolo, parole separate da `-`, niente accenti né spazi né caratteri speciali.

### Frontmatter minimo

```yaml
---
title: "Il titolo dell'articolo"
date: "2026-06-10"
abstract: "Una/due righe. Compare in lista e nei risultati di ricerca."
section: "matematica"
tags: ["topologia", "algebra"]
lang: "it"
---
```

### Campi opzionali utili

- `source: "Seminario X (2022)"` — promemoria di provenienza, non viene mostrato.
- `progetto: "newma"` — aggancia l'articolo a un progetto `/lavoro/[slug]` (card "Progetto correlato →").
- `relatedArticle: { section: "matematica", slug: "altro-articolo" }` — card "Leggi anche →".

### Sintassi corpo

- **Markdown standard**: liste, blockquote, link, bold/italic, tabelle.
- **Formule KaTeX**: inline `$x^2$`, blocco `$$ ... $$`.
- **Codice**: blocchi ``` ```python ```` ` con specifica linguaggio.
- **Immagini**: `![alt](/assets/nome.jpg)` — file in `public/assets/`.

→ Modello completo e annotato in `TEMPLATE_ARTICOLO.mdx` nella cartella `html/` (un livello sopra `fildor/`). Duplica quello, rinomina, riempi.

### Procedura passo per passo (locale)

1. Duplica `TEMPLATE_ARTICOLO.mdx` o un altro articolo simile in `content/[sezione]/`.
2. Rinomina con lo slug desiderato.
3. Aggiorna frontmatter e corpo.
4. ```bash
   git add content/matematica/nuovo-articolo.mdx
   git commit -m "content: nuovo articolo X"
   git push
   ```

### Cosa succede in automatico

- Appare nella **lista** sotto `/intrecci/[sezione]/` (ordinato per data desc)
- È **indicizzato dalla ricerca** `/cerca` (lunr.js)
- Tag come **badge cliccabili** sotto al corpo
- Navigazione **prev/next** verso adiacenti per data nella stessa sezione

### Aggiungere un progetto in `/lavoro/`

Stesso meccanismo ma in `content/lavoro/`. Frontmatter:

```yaml
---
title: "Nome progetto"
slug: "nome-progetto"
date: "2026-06-10"
year: "2026"
category: "Categoria · sottocategoria · anno"
abstract: "Sommario."
tags: ["tag1", "tag2"]
lang: "it"
pdfs:
  - { label: "Relazione tecnica", file: "/assets/nome-pdf.pdf" }
relatedArticle: { section: "matematica", slug: "articolo-correlato" }
---
```

### Aggiungere immagini dentro un articolo

1. Metti l'immagine in `public/assets/articoli/[nome-articolo]/figura-1.jpg`.
2. Nel markdown: `![didascalia](/assets/articoli/nome-articolo/figura-1.jpg)`.

---

## Cose utili da sapere

### Rollback rapido se rompi qualcosa

- Locale: `git revert HEAD && git push`
- Web: vai alla pagina del commit, **Revert**.

### Vedere se il build è OK

<https://github.com/marcocattazzo/marcocattazzo.github.io/actions>

Verde = pubblicato. Rosso = problema. Cliccando sul run vedi l'errore esatto.

### Documentazione di riferimento

- `STRUTTURA_SITO.md` — panoramica completa del sito (struttura, design system, scelte testuali)
- `TEMPLATE_ARTICOLO.mdx` (nella cartella `html/`, fuori dal repo) — articolo modello con tutti i pezzi

### Formspree — far funzionare il form di /contatti

1. Account su <https://formspree.io> → crea un form → copia URL endpoint (`https://formspree.io/f/xxxxx`).
2. Mettilo come variabile in `.env.local` (per dev locale):
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
   ```
3. **Per la build di produzione**: vai su GitHub → repo → Settings → Secrets and variables → Actions → **Variables** → New repository variable → nome `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, valore l'endpoint.
4. Il workflow di build leggerà la variabile e la incorporerà nel bundle.

Da quel momento, i messaggi arrivano alla casella collegata all'account Formspree senza mai esporre la tua email.

### Giscus — abilitare i commenti negli articoli

Stesso meccanismo: vai su <https://giscus.app>, configura per il repo, copia le 4 variabili nell'`.env.local` e/o nelle Variables del workflow:

```
NEXT_PUBLIC_GISCUS_REPO=marcocattazzo/marcocattazzo.github.io
NEXT_PUBLIC_GISCUS_REPO_ID=...
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=...
```

Senza queste, in fondo agli articoli compare un placeholder "Commenti disponibili una volta configurato Giscus."

---

*Aggiornato 2026-06-10.*
