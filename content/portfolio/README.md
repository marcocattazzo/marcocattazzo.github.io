# Portfolio grafico — come si compila

Ogni lavoro è un file `.mdx` in questa cartella (versione inglese opzionale: `slug.en.mdx`).
Il blocco **Portfolio** compare in *Intrecci › Grafica* (`/it/intrecci/grafica#portfolio`)
solo quando almeno una scheda ha `draft: false`. Finché è `draft: true` la scheda resta nascosta.

## Frontmatter

```yaml
title: "Titolo del lavoro"
anno: "2017"                 # anno o intervallo, es. "2015 — 2017"
contesto: "Dove / per chi"
ruolo: "Che cosa hai fatto tu"
strumenti: ["After Effects", "Photoshop"]
cover: "/assets/portfolio/slug/cover.jpg"     # usata se `immagini` è vuoto
immagini:                                      # opzionale, mostrate in colonna
  - "/assets/portfolio/slug/01.jpg"
order: 1                     # ordine di comparsa (crescente)
draft: true                  # metti false per pubblicare
```

Le immagini vanno in `public/assets/portfolio/<slug>/` (JPG/PNG/WebP, lato lungo ~1600 px).

## Corpo = il concept

Sotto il frontmatter scrivi 1–3 paragrafi brevi sul **concept**: il problema di comunicazione,
la scelta di segno/colore/forma e perché, che cosa hai lasciato fuori. Evita la cronaca del lavoro.

I commenti `{/* ... */}` nei file non vengono mostrati sul sito.
