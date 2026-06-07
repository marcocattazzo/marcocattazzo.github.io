# Fil d'Or — Struttura del sito e scelte testuali

Documento di handoff per Claude chat. Descrive la struttura attuale del sito, ogni pagina, ogni stringa di copy "fissa", il design system, gli asset e cosa è placeholder vs definitivo. Lo scopo è poter chiedere a Claude modifiche puntuali senza dover ricostruire il contesto.

Repo: `marcocattazzo/marcocattazzo.github.io` (deploy su GitHub Pages).
Working dir locale: `C:\Users\marco\Dropbox\DiamondAlpha9997\Scuola\Programmazione e Softwares\html\fildor\`.

---

## 1. Visione e tono

**Fil d'Or** è il sito personale di Marco Cattazzo. Profilo ibrido: matematico (Unimi, magistrale logico-algebrica, idoneità INDAM), teologo/liturgista (Decanato Seregno-Seveso, Liturgia 1+2 alla FTIS), filosofo del linguaggio, designer.

Il nome evoca un **filo d'oro** che attraversa domini apparentemente lontani: matematica, fede, parole, musica, giochi, grafica, pensieri. La metafora è sia visiva (logo a filo, sfondo `filo.jpg`) sia concettuale (connessione tra discipline).

Tono dei testi:
- **Meditativo, umile, preciso.** Non performativo, non aziendale.
- Frasi brevi, ritmo riflessivo. Italic strategici nei titoli.
- Nessun lorem ipsum: ogni placeholder è scritto coerente col profilo.
- Citazioni in blockquote per i passaggi-chiave (`> ...`).

---

## 2. Stack tecnico

- **Next.js 14** App Router, JavaScript puro (no TypeScript)
- **next-intl** per i18n (`/it/` e `/en/`, prefisso sempre presente)
- **CSS Modules** + CSS custom properties (no Tailwind, no Bootstrap, no librerie UI)
- **Framer Motion** per animazioni
- **MDX locali** per articoli (`/content/[sezione]/*.mdx`)
- **next-mdx-remote/rsc** per render, **remark-math + rehype-katex** per formule
- **lunr.js** client-side per `/cerca`
- **Giscus** per commenti (richiede `.env.local` configurato)
- **Shiki** in deps per code highlight (non ancora collegato)
- Font Google: **Cormorant Garamond**, **EB Garamond**, **Outfit** (via `next/font`)
- Deploy: **GitHub Pages** con `output: 'export'` + workflow custom (no `actions/configure-pages`)

`next.config.js`:
```js
output: 'export',
trailingSlash: true,
images: { unoptimized: true }
```

Workflow: `.github/workflows/deploy.yml` (manuale, niente `configure-pages` che era incompatibile con next-intl plugin wrapping).

---

## 3. Design system — Palette M (definitiva)

```css
/* Backgrounds */
--bg-deep:    #1A1A1C;
--bg-surface: #222226;
--bg-raised:  #2C2C30;
--bg-muted:   #484850;

/* Testo */
--text-primary:   #E2D8B8;
--text-secondary: #C8BFA0;
--text-muted:     #888894;
--text-dim:       #484850;

/* Oro */
--gold-main:  #BEA878;
--gold-light: #D8C898;
--gold-dim:   #8A7850;
--gold-deep:  #3A3020;

/* Bordi */
--border-subtle: #2C2C30;
--border-medium: #484850;
--border-gold:   #8A7850;
```

### Tipografia (CSS variables)
- `--font-display: 'Cormorant Garamond'` — titoli, hero, italic strategici
- `--font-body: 'EB Garamond'` — testi lunghi, articoli (line-height 1.85, max 65ch)
- `--font-ui: 'Outfit'` — nav, label, bottoni, meta (uppercase, letter-spacing 0.1–0.18em)

### Scala
```
--text-hero:  clamp(32px, 5vw, 52px)
--text-h2:    clamp(22px, 3vw, 34px)
--text-h3:    20px
--text-body:  16px
--text-small: 14px
--text-label: 11px
```

### Spacing
`--space-xs 4` · `--space-sm 8` · `--space-md 16` · `--space-lg 32` · `--space-xl 64` · `--space-2xl 96`.

### Regole ferme
1. NO librerie UI (no shadcn/MUI/Chakra/Bootstrap)
2. NO Inter/Roboto/Arial — solo i 3 font dichiarati
3. NO `border-radius` salvo avatar circolari (50%) e badge pill (4px max)
4. NO `drop-shadow` — bordi `0.5px` fanno il lavoro
5. NO progress bar percentuali in nessuna sezione (anti-skill-bar policy)
6. Italic + gold-main per accenti chiave
7. Separatore decorativo: gradient `transparent → gold-dim → transparent`

---

## 4. Architettura route

Tutte le route sono mirror IT/EN. Prefisso sempre presente (`localePrefix: 'always'`) perché il static export non ha middleware runtime.

```
/                            → meta-refresh → /it/
/it/                         → Homepage
/it/intrecci/matematica/     → Sezione tematica
/it/intrecci/fede-e-chiesa/
/it/intrecci/parole/
/it/intrecci/musica/
/it/intrecci/giochi/
/it/intrecci/grafica/        → settimo thread (rifocalizzato come "segno, tratto, rappresentazione, simbolo")
/it/intrecci/pensieri/
/it/intrecci/[sezione]/[slug]/  → singolo articolo

/it/lavoro/                  → Vetrina professionale
/it/lavoro/[slug]/           → Singolo progetto (newma, dobble, sat-ottimizzazione)

/it/chi-sono/                → About con sidebar sticky
/it/chi-sono/matematica/     → Pagina tecnica dettagliata
/it/chi-sono/teologia/
/it/chi-sono/pastorale/
/it/chi-sono/grafica/

/it/contatti/                → Form Formspree
/it/cerca/                   → Ricerca lunr.js client-side
/it/curriculum/              → Standalone, layout proprio (no navbar/footer globale)

/en/...                      → Mirror inglese
```

### Cose che NON ci sono (di proposito)
- Non c'è una pagina `/grafica` top-level — è stata spostata dentro Intrecci
- Il **link al curriculum NON compare** nella navbar né nella homepage
- Curriculum è raggiungibile solo da `/chi-sono` (link discreto in fondo a sezione grafica) o digitando direttamente `/curriculum/`

---

## 5. Navbar e Footer (globali)

### Navbar
```
[logo 28px] Fil d'Or    Intrecci ▾   Lavoro   Chi Sono   IT · EN  | [LI] [GH] [FB] [IG]
```

- Dropdown Intrecci: **Matematica · Fede e Chiesa · Parole · Musica · Giochi · Grafica · Pensieri** (con icone)
- 4 social SVG sottili (LinkedIn, GitHub, Facebook, Instagram) — separati con border-left
- Sticky con `backdrop-filter: blur(8px)`, border-bottom appare allo scroll
- Mobile (< 900px): hamburger → overlay full-screen, slide-in da destra, voci grandi in Cormorant

### Footer
```
Fil d'Or [italic gold] — Uno spazio per pensare.    [Lavoro] [Grafica] [Chi Sono] [Contatti] [Cerca]
─
"Lo stesso filo, da capo, ogni volta."                          [LI] [GH] [FB] [IG]
─
© 2026 Marco Cattazzo                                                       IT · EN
```

**Importante**: copyright a nome **Marco Cattazzo** (non "Fil d'Or"). Anno automatico.

---

## 6. Homepage (`/it/`)

### Hero (full-viewport)
- Sfondo: `/assets/filo.jpg` con overlay gradient da `rgba(26,26,28,0.82)` a `rgba(26,26,28,1)`
- SVG animato in alto: **HeroThread** — un filo che si dipana (stroke-dashoffset, durata 2.2s, ease custom)

Copy esatto:
```
[label gold] Fil d'Or — uno spazio per pensare

Rigore e senso.            ← "senso." italic + gold-main
Lo stesso filo.

Penso sistemi. Alcuni sono algoritmi, alcuni sono comunità,
alcuni sono giochi. Li studio con lo stesso rigore e la stessa cura.

[Chi sono →]      [Esplora gli intrecci →]
```

CTA primaria "Chi sono" è in Cormorant italic 24px gold, NON un bottone classico. Secondaria è un link Outfit minimalista. **Nessun link al CV.**

### Sezione Intrecci (sotto hero)
Intro filosofica centrata, Cormorant italic 20–26px:

> *Ogni disciplina è un modo di abitare il reale. La matematica lo misura, la fede lo abita, le parole lo nominano, la musica lo vibra. Il filo d'oro le attraversa tutte.*

Sotto: griglia 3 colonne × ~3 righe (7 thread → 3+3+1 desktop, 2+2+2+1 tablet, 1 col mobile). Ogni cella 280×220px min, fade-in stagger da Framer Motion. Mostra icona 48px + nome Cormorant 28px + sottotitolo italic + freccia angolo basso-destra.

### Sezione "Recenti"
4 article card a 2 colonne. Bordo sinistro oro (`gold-dim → gold-main` su hover), nessuna thumbnail. Mostra meta (sezione · data) + titolo Cormorant. In fondo: "Tutti gli articoli →" allineato a destra.

---

## 7. Intrecci — i 7 thread

Ogni pagina sezione `/it/intrecci/[slug]/` ha:
- **Icona grande 120px** (PNG o SVG line-art)
- **Eyebrow** "Intrecci" (Outfit uppercase gold)
- **Titolo** Cormorant 40–60px
- **Sottotitolo** Cormorant italic gold
- **Intro filosofica** (paragrafo EB Garamond)
- **Nav interna ancorata**: Articoli · Note · Risorse
- **Lista articoli** sotto: card grandi con meta + titolo + abstract + tag
- Sezioni "Note" e "Risorse" attualmente con placeholder "—"

### Copy per sezione (sottotitolo + intro filosofica)

#### Matematica — `math.png`
**Sottotitolo**: *Logica come forma di cura.*

**Intro**:
> Studio la matematica come una pratica del pensiero, non come un repertorio di tecniche. La logica, la combinatoria, l'ontologia degli oggetti formali — strumenti per abitare con rigore il mondo dei modelli e per chiedersi cosa, di esso, sopravvive al cambio di descrizione.

**Articoli presenti**:
- "Ontologia dell'oggetto matematico — il problema di Benacerraf"
- "Pareyson e la verità simbolica: il neorealismo"

#### Fede e Chiesa — `faith.png`
**Sottotitolo**: *Pensare la fede dentro il tempo.*

**Intro**:
> Teologia, pastorale, liturgia: tre modi di pensare la fede dentro il tempo. La sinodalità non è un'opinione organizzativa, è una grammatica del decidere insieme. La liturgia non è un teatro, è una forma del conoscere comune.

**Articoli**:
- "Sinodalità e strutture decisionali: una lettura epistemica"
- "Pastorale giovanile e complessità — appunti dal campo"

#### Parole — SVG inline (sketch di firma)
**Sottotitolo**: *Il nome porta il mondo.*

**Intro**:
> Ogni lingua porta un mondo dentro le sue radici. Il latino vede e classifica, l'ebraico agisce e nomina. Conoscere una parola fino in fondo è tenere in palmo la sua storia — e ricordarsi che chi la usa, oggi, la sta abitando senza più ricordarla.

**Articoli**:
- "Radici latine ed ebraiche: quando la parola porta il mondo"
- "La semantica performativa: fare cose con le parole"

#### Musica — `mic.png`
**Sottotitolo**: *Il suono come struttura.*

**Intro**:
> Cadenze, modulazioni, fughe: la musica condivide con la logica una grammatica di tensione e risoluzione. Qui appunti su armonia, tempo, struttura — e su quei luoghi precisi in cui la matematica, smesso il calcolo, comincia a suonare.

**Articoli**:
- "Struttura armonica e forma logica — un'analogia"
- "Il tempo nella musica e nella matematica"

#### Giochi — SVG inline (cubo con simboli)
**Sottotitolo**: *La regola come libertà.*

**Intro**:
> Un gioco perfetto non è un gioco senza regole — è un gioco le cui regole hanno una struttura. Geometria combinatoria, teoria dei giochi, game design come pensiero che si fa esperibile.

**Articoli**:
- "Dobble e la geometria combinatoria — come nasce un gioco perfetto" (collegato al progetto `/lavoro/dobble`)
- "Game comonads: quando la logica gioca"

**Extra**: questa sezione ha un blocco "Progetti correlati" che linka a `/lavoro/[slug]` per progetti con tag `game|dobble|gioch`.

#### Grafica — SVG inline (pennino + tratto + macchia inchiostro) ★ settimo thread, riposizionato
**Sottotitolo**: *Segno, tratto, rappresentazione, simbolo.*

**Intro**:
> Il segno prima della parola. Un tratto è già una decisione: dove cominciare, dove fermarsi, cosa lasciare fuori. Qui si pensa la grafica come ontologia minima della rappresentazione — il simbolo che dice e tace, la composizione che sceglie, l'immagine che non illustra ma argomenta.

**Articoli presenti** (nuovi):
- "Il segno prima della parola" — tre livelli: tratto / rappresentazione / simbolo
- "La composizione come sottrazione" — tre forme di sottrazione (superfluo / giusto / bello)

#### Pensieri — `philosophy.png`
**Sottotitolo**: *Lo scarto epistemologico.*

**Intro**:
> Note brevi, frammenti aperti, scarti epistemologici. Il modello non è il territorio: imparare a leggere ciò che il modello non sta dicendo è la disciplina più sottile del rigore.

**Articoli**:
- "Lo scarto epistemologico tra realtà e modello"
- "Il ruolo del matematico nel tempo dell'intelligenza artificiale"

---

## 8. Pagine tecniche `/chi-sono/[ambito]/`

4 pagine generate da una sola route con `[ambito] = matematica | teologia | pastorale | grafica`. Data structure in `lib/ambiti.js` — predisposta per essere riempita con i contenuti reali.

### Schema dati
```js
ambiti[slug] = [
  {
    area: 'Algebra',
    lead: 'Strutture e morfismi. Dove la matematica si fa lingua.',
    subareas: [
      { name: 'Teoria di Galois', items: ['Estensioni di campo', 'Gruppi di Galois', ...] },
      ...
    ]
  },
  ...
]
```

### Animazioni (tre livelli stagger)
1. Ogni `area` entra dal basso (`opacity 0 → 1, y 24 → 0`, durata 0.6s) quando entra nel viewport
2. Subareas appaiono a cascata (stagger 0.08s, ease cubic-bezier)
3. Singoli items entrano uno per uno (stagger 0.04s, slide-x leggero)

### Layout per pagina
```
[← Torna a Chi sono]

[eyebrow "Chi sono — dettaglio"]
Matematica studiata
"Tutto ciò su cui mi sono fermato, anno per anno..."  ← intro italic
[nota piccola] "Pagina predisposta per accogliere l'elenco completo..."

01  Algebra
    "Strutture e morfismi. Dove la matematica si fa lingua."
    ┌─ Teoria di Galois ─┐  ┌─ Teoria dei gruppi ─┐
    │ • Estensioni campo │  │ • Gruppi finiti     │
    │ • Gruppi di Galois │  │ • Rappresentazioni  │
    │ • ...              │  │ • ...               │
    └────────────────────┘  └─────────────────────┘
    [altre subareas in griglia 2 col]

02  Analisi
    ...
```

In fondo: nav prev/next tra ambiti + link back.

### Scaffolding caricato (esempio per ogni ambito)

**Matematica** — 6 aree:
1. Algebra (Galois, Gruppi, Anelli, Reticoli, Lineare avanzata)
2. Analisi (reale, complessa, funzionale, EDO)
3. Geometria (proiettiva, differenziale, topologia generale, topologia algebrica)
4. Logica e fondamenti (FOL, modelli, proof theory, computabilità)
5. Combinatoria & ottimizzazione (enumerativa, geometrica, ILP/SAT, teoria giochi)
6. Probabilità & statistica

**Teologia** — 5 aree:
1. Sistematica (Cristologia, Trinitaria, Ecclesiologia, Antropologia)
2. Sacra Scrittura (AT, NT, metodi)
3. Liturgia — *aree corrispondenti agli esami FTIS: Liturgia 1 + Liturgia 2*
4. Morale (fondamentale + sociale)
5. Filosofia per la teologia (metafisica, filosofia del linguaggio)

**Pastorale** — 4 aree:
1. Pastorale giovanile (animazione, direzione progetto innovativo diocesano)
2. Servizio comunitario (Scuola di Teologia per Laici Decanato Seregno-Seveso 2016–2021, vita parrocchiale)
3. Formazione di formatori (corsi/ritiri, convegni 2024)
4. Liturgia e celebrazione (ministerialità, tempi forti)

**Grafica** — 6 aree:
1. Identità visiva (logo design, sistema iconografico, palette)
2. Tipografia (famiglie, composizione, letterforme)
3. Impaginazione editoriale (griglie, libri, editoria liturgica)
4. Composizione e immagine (visiva, fotografia, line-art)
5. Web e digitale (UI, motion)
6. Strumenti (Vector, Editoria, Raster/motion)

**Tutti gli items sono placeholder** — vanno sostituiti con i contenuti reali (Marco lo sta riempiendo). La struttura e le animazioni restano.

### Link da `/chi-sono` e `/curriculum`
- `/chi-sono`: in fondo a ciascuna sottosezione (matematica, teologia, pastorali, grafica) c'è un CTA "**[Nome ambito] — Pagina dettagliata →**" (Outfit uppercase, gold)
- `/curriculum`: sotto le colonne Formazione/Esperienza ci sono 4 link compatti raggruppati

---

## 9. Lavoro (`/lavoro/`)

### Intro
> Modello problemi complessi. Alcuni sono algoritmi di ottimizzazione, alcuni sono organizzazioni, alcuni sono sistemi di senso. Lo strumento cambia, il metodo no.

### Tre progetti (card grandi)

#### NEWMA — `/lavoro/newma/`
- **Label**: "Ricerca applicata · AI · Liturgia · 2024"
- **Titolo**: "NEWMA — AI per trascrizione di neumi gregoriani"
- **Abstract**: *Sistema di trascrizione automatica della notazione neumatica gregoriana attraverso reti neurali. All'incrocio tra computer vision, paleografia musicale e liturgia.*
- **Tag**: AI, computer vision, neumi, gregoriano, ricerca
- Case study con struttura: Problema → Approccio (segmentazione/classificazione/trascrizione) → Modellazione (incertezza paleografica) → Risultati → Insight
- **PDF allegati**: `progetto_newma_relazione_tecnica.pdf`, `progetto_newma_relazione_qualitativa.pdf`

#### Dobble — `/lavoro/dobble/`
- **Label**: "Game design · Matematica · 2024"
- **Titolo**: "Dobble e la geometria combinatoria"
- **Abstract**: *Analisi matematica della struttura del gioco Dobble tramite piani proiettivi finiti. Formalizzazione e implementazione.*
- Linka all'articolo `/intrecci/giochi/dobble-geometria-combinatoria`

#### SAT/Ottimizzazione — `/lavoro/sat-ottimizzazione/`
- **Label**: "Informatica teorica · 2024"
- **Titolo**: "Ottimizzazione combinatoria — da SAT a ILP"
- **Abstract**: *Modellazione di problemi NP-hard tramite SAT/MaxSAT e ILP. Confronto tra approcci e analisi dei limiti epistemici dei modelli.*

### Talks (sezione separata)
3 talk con `mic.png` come decoration:
- "Fuori orario — pastorale giovanile e sinodalità" (Convegno diocesano · 2024)
- "Exsultet — liturgia e comunità" (Evento formativo · 2024)
- "Olimpiadi della matematica — introduzione al problem solving strutturato" (Didattica · 2023)

### CTA finale
> *Una conversazione sulla tua sfida — tecnica, organizzativa, formativa — è il modo più rapido per capire se posso essere utile.*

[Parliamo →] (primary)   [Chi sono →] (ghost)

**Non c'è il pulsante "Scarica CV"** — è stato rimosso.

---

## 10. Chi sono (`/chi-sono/`)

Layout: sidebar sticky a sinistra + main scrollabile.

### Sidebar
Lista ancore: Introduzione · Formazione matematica · Formazione teologica · Esperienze pastorali · Grafica e design.

### Bio
> Studio sistemi — formali, umani, linguistici. Ho una formazione in matematica teorica e un percorso parallelo in teologia, pastorale e filosofia del linguaggio. Non li considero mondi separati. Il filo d'oro li unisce.

### Sezioni (ognuna con lead italic + entries Stagger-animati + CTA "Pagina dettagliata →")

**Formazione matematica** — entries: laurea triennale Unimi (2017–2020), magistrale Unimi (2020–2023), INDAM idoneità (2023), Olimpiadi UMI (2014–2018), Campus Marina di Massa "Teoria dei giochi e reti neurali" (2017), Seminari "Fuori Orario" Unimi speaker (Dobble 2020).

**Formazione teologica** — entries: Scuola di Teologia per Laici Decanato Seregno-Seveso (2016–2021), Esami Liturgia 1 e 2 FTIS (02/2025–09/2025, 12 CFU).

**Esperienze pastorali** — entries placeholder, da riempire.

**Grafica e design** — entry placeholder. Sotto, blocco CV discreto:
> "Vuoi vedere il mio percorso completo in formato curriculum?"
>
> [→ Vai alla pagina Curriculum]
>
> *CV completo formato Europass → scarica PDF (IT)*

Questo è l'**unico posto in cui compare il link al curriculum** (oltre alla pagina /curriculum stessa).

---

## 11. Curriculum (`/curriculum/`)

**Layout standalone** — propria `layout.js` separato, NON usa navbar/footer globale.

Ispirazione: template BootstrapMade MyResume rebrandizzato completamente con Palette M (no Bootstrap originale).

### Sidebar 280px fissa
- Avatar 96px circolare (logo)
- Nome: **Marco Cattazzo** (Cormorant 26px)
- Ruolo: "Matematico · Filosofo"
- Contatti: email, GitHub, LinkedIn (con icone SVG sottili)
- Nav ancorata: About · Skills · Resume · Progetti · Talks
- "← Sito" linka a `/it/`
- 4 social icons centrati
- In fondo, **link discreto**: "CV Europass (PDF) ↓" → `/assets/curriculum.pdf`

### Main scrollabile

**Hero**: nome + ruoli animati (TypedRoles custom — typing effect):
`Matematico · Filosofo · Problem Solver · Formatore`

**About**: bio professionale + dati personali in griglia (Residenza, Email, GitHub, Lingue).

**Skills** — cluster di tag testuali per area, **NO progress bar**:
- Logica formale & SAT: Logica algebrica, Theorem provers, SAT/MaxSAT, Ottimizzazione combinatoria, Complessità computazionale
- Programmazione: Python, SQL, OR-Tools, PuLP, JavaScript
- Ricerca & modellazione: Game theory, Verifica formale, Modellazione probabilistica, Epistemologia
- Comunicazione & leadership: Public speaking, Didattica, Facilitazione, Progettazione pastorale
- Grafica & design: Figma, Illustrator, InDesign, Identità visiva, Composizione editoriale

**Resume** — dual-column timeline:

*Formazione* (sinistra): Liceo Majorana → Triennale Matematica Unimi (2017–2020) → Magistrale Unimi (2020–2023) → INDAM idoneità (2023) → Scuola Teologia Decanato Seregno-Seveso (2016–2021) → Liturgia 1+2 FTIS (02/2025–09/2025, 12 CFU)

*Esperienza* (destra): NEWMA AI neumi (2024 →) · Speaker "Fuori Orario" Unimi (2020 →) · Tutoraggio Olimpiadi (2022 →) · Olimpiadi UMI partecipante (2014–2018) · Campus Marina di Massa (2017) · Direzione progetto pastorale diocesano

Sotto ogni colonna, 4 detail links: "**Matematica studiata — Dettagli →**" ecc. (linkano a `/chi-sono/[ambito]`).

**Progetti**: 3 card NEWMA + Dobble + SAT.

**Talks**: stessa lista di /lavoro + "Dobble e la geometria combinatoria — Fuori Orario Unimi 2020" come quarto.

---

## 12. Contatti (`/contatti/`)

Form Formspree (endpoint via `.env.local`): nome, email, messaggio.

Intro:
> Scrivimi per progetti, collaborazioni, conversazioni.

Sotto, link diretti: email (mailto), LinkedIn, GitHub.

---

## 13. Cerca (`/cerca/`)

Search bar full-width, lunr.js client-side. Indicizza titolo + abstract + tag + sezione di tutti gli MDX. Risultati come ArticleCard.

---

## 14. Componenti riusabili (`/components/`)

| Componente | Cosa fa |
|---|---|
| `Navbar.js` | Navbar sticky con dropdown Intrecci, social, lang switch, hamburger mobile |
| `Footer.js` | Footer 3-righe con nav, social, copyright Marco Cattazzo |
| `HeroAnimation.js` | Wrapper Framer Motion per fade-up sul mount |
| `HeroThread.js` | SVG path del filo d'oro animato (stroke-dashoffset) |
| `SectionIcons.js` | 7 SVG line-art per le sezioni Intrecci (oro `#BEA878`, single-line) |
| `SocialIcons.js` | 4 social SVG (LinkedIn, GitHub, Facebook, Instagram) + lista helper |
| `SectionGrid.js` | Griglia delle 7 sezioni (variante `large` per home, compact non più usata) |
| `ArticleCard.js` | Card articolo con meta + titolo + abstract + tag |
| `ProjectCard.js` | Card progetto per `/lavoro` |
| `ThreadCard.js` | Card thread con italic word evidenziata (usata in legacy hero) |
| `MdxRenderer.js` | Render MDX server-side con remark-math + rehype-katex |
| `GiscusComments.js` | Embed Giscus se env vars presenti, altrimenti placeholder |
| `LanguageSwitcher.js` | Toggle IT · EN che mantiene la route |
| `SearchBar.js` | Bottone "Cerca" stilizzato che linka a `/cerca` |
| `TypedRoles.js` | Typing animation custom (no typed.js) per i ruoli del curriculum |
| `StaggeredList.js` + `StaggeredItem.js` | Wrappers per liste con stagger Framer Motion |
| `AmbitoAreas.js` | Render delle pagine `/chi-sono/[ambito]` con tre livelli di animazione |
| `ContactForm.js` | Form Formspree client-side |

---

## 15. Animazioni — filosofia

- **Framer Motion** per pagine principali, **useInView** per scroll-triggered
- **Stagger generoso ma non eccessivo**: durate 0.4–0.6s, ease `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo)
- **Hero**: fade-up + thread SVG che si disegna
- **Section grid**: staggered fade-up (0.08s gap)
- **Card hover**: bordo `subtle → gold`, background `surface → raised`, freccia che trasla 4px
- **Mobile menu**: slide-in da destra + stagger su voci
- **Pagine tecniche `/chi-sono/[ambito]/`**: tre livelli stagger (area → subareas → items)
- **Cursore custom**: previsto opzionale, non ancora implementato

---

## 16. Internazionalizzazione

- File: `messages/it.json` e `messages/en.json`
- Tutte le stringhe UI tradotte
- Articoli MDX hanno `lang: "it"` nel frontmatter; pagine EN attualmente vuote (sezioni inglesi mostrano "—")
- Routing: `localePrefix: 'always'` (necessario per static export — no middleware runtime)
- Switcher in navbar: `IT · EN` testo puro, no bandiere
- Root `/` reindirizza via meta-refresh a `/it/`

### Chiavi principali (estratto)
- `nav.{intrecci, lavoro, chiSono, contatti, curriculum, cerca, close}`
- `sections.{matematica, fede-e-chiesa, parole, musica, giochi, grafica, pensieri}`
- `sectionSubtitles.*`, `sectionIntros.*`
- `sectionAnchors.{articoli, note, risorse}`
- `home.{eyebrow, heroTitle, heroBody, ctaPrimary, ctaSecondary, intrecciIntro, threadsLabel, recentLabel, allArticles}`
- `lavoro.{title, bio, talks, downloadCV, letsTalk}`
- `chiSono.{title, bio, intro, formazioneMat, formazioneTeo, esperienzePast, graficaDesign, cvLinkBlock, cvLinkCta}`
- `ambiti.{matematica, teologia, pastorale, grafica, intro.*, detailLink, backToChiSono}`
- `contatti.{title, intro, name, email, message, send}`
- `search.{title, placeholder, noResults, results}`
- `article.{previous, next, relatedProject, readAlso, comments}`
- `footer.{tagline, thread}` — copyright è hardcoded "Marco Cattazzo"

---

## 17. Asset (`/public/assets/`)

| File | Uso |
|---|---|
| `logo.png` | Logo gomitolo/filo d'oro — navbar, favicon, avatar CV |
| `math.png` | Icona Matematica (hero sezione 120px) |
| `faith.png` | Icona Fede e Chiesa |
| `philosophy.png` | Icona Pensieri |
| `mic.png` | Icona Musica + decoration Talks |
| `filo.jpg` | Sfondo hero homepage (con overlay 80%) |
| `loom.jpg`, `loom2.jpg` | Texture tessuto, disponibili per overlay decorativi |
| `depositphotos_*.jpg` | Filo continuo line-art (disponibile, non ancora usato) |
| `curriculum.pdf` | CV Europass — placeholder vuoto (`%PDF-1.4\n%%EOF`) |
| `progetto_newma_relazione_tecnica.pdf` | PDF NEWMA tecnico — placeholder |
| `progetto_newma_relazione_qualitativa.pdf` | PDF NEWMA qualitativo — placeholder |

Le icone SVG per **Parole**, **Giochi**, **Grafica** sono in `components/SectionIcons.js` (inline, line-art `#BEA878`).

---

## 18. Cosa è placeholder vs definitivo

### Definitivo (struttura + scelte estetiche)
- Palette M, tipografia, design system
- Architettura route, navbar, footer
- Layout di tutte le pagine
- Tono dei testi, frasi-chiave (heroTitle, sezioni Intrecci subtitle, intrecciIntro homepage)
- Sottotitoli e intro filosofiche per i 7 thread Intrecci
- Bio in `/chi-sono` e `/lavoro`
- Copy dei tre case study (NEWMA, Dobble, SAT)
- Skill tags del curriculum
- Animazioni e componenti

### Placeholder (da riempire da Marco)
- `lib/ambiti.js` — la struttura è completa ma le voci `items` vanno sostituite con i contenuti reali
- Sezione "Esperienze pastorali" in `/chi-sono` (alcune entry generiche)
- Sezione "Grafica e design" in `/chi-sono` (una entry generica)
- Email reale (`hello@fildor.example`) → da sostituire
- Endpoint Formspree (`PLACEHOLDER` in `.env.local`)
- Variabili Giscus (`.env.local`)
- File PDF (curriculum.pdf, NEWMA *.pdf) sono headers vuoti — da sostituire con i veri PDF
- Articoli MDX in `/content/`: 14 articoli con contenuti coerenti ma "tipo placeholder" — possono essere ampliati o sostituiti
- URL social: `linkedin.com`, `github.com/marcocattazzo`, `facebook.com`, `instagram.com` — da puntare ai profili reali

### Note attive

- Hero homepage: il filo SVG si dipana da una piccola spirale a sinistra e termina con un punto a destra
- Il root `/` ha solo un meta-refresh a `/it/` (necessario per static export)
- Layout `/curriculum/` è completamente isolato (no navbar/footer)
- Il sito è 100% statico: nessuna API route, nessuna server action

---

## 19. Deploy & repo

- Branch: `main`
- Workflow: `.github/workflows/deploy.yml` (push → build → deploy-pages@v4)
- URL produzione: `https://marcocattazzo.github.io`
- Build verification: non eseguibile localmente (Node non installato nella workstation); verifica via GitHub Actions
- Ultimi commit:
  - `0654c40` fix: GitHub Pages deploy (rimossi configure-pages + localePrefix always + root redirect)
  - `12b4a7c` redesign: Palette M, navbar/footer rifatti, /chi-sono con sidebar, /curriculum MyResume rebrand
  - `0555a03` feat: Grafica come Intreccio + 4 pagine tecniche `/chi-sono/[ambito]/`

---

## 20. Come modificare cose (pro tip per la prossima conversazione)

- **Cambiare un testo della homepage**: `messages/it.json` → `home.*`
- **Cambiare il sottotitolo/intro di un Intreccio**: `messages/it.json` → `sectionSubtitles.*` e `sectionIntros.*`
- **Aggiungere un articolo**: nuovo `.mdx` in `content/[sezione]/` con frontmatter standard
- **Riempire una pagina tecnica `/chi-sono/[ambito]`**: editare `lib/ambiti.js`
- **Cambiare il copyright**: hardcoded in `components/Footer.js` (linea con `© {year} Marco Cattazzo`)
- **Aggiungere un progetto a /lavoro**: nuovo `.mdx` in `content/lavoro/`
- **Cambiare palette**: `styles/globals.css` (top, CSS variables)
- **Aggiungere una lingua**: aggiornare `i18n.js` (`locales` array) + creare `messages/[lang].json`

---

*Fine documento. Generato 2026-06-06.*
