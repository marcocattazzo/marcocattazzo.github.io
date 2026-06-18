'use client';

// Sfondo animato: fili dorati sottili che ondeggiano lentamente.
// In palette (oro su fondo profondo), leggero, CSS-only (nessun rAF),
// rispetta prefers-reduced-motion. Sostituisce le foto di sfondo.

import styles from './ThreadBackground.module.css';

// Curve sinusoidali orizzontali, ciascuna con ampiezza/fase diverse.
const threads = [
  { cls: 't1', d: 'M-100,260 C 200,180 500,340 800,260 S 1400,180 1700,260', w: 1.1 },
  { cls: 't2', d: 'M-100,360 C 240,300 520,420 820,350 S 1380,290 1700,360', w: 0.8 },
  { cls: 't3', d: 'M-100,460 C 180,400 540,540 840,460 S 1360,380 1700,460', w: 1.3 },
  { cls: 't4', d: 'M-100,560 C 260,520 500,620 800,560 S 1420,500 1700,560', w: 0.7 },
  { cls: 't5', d: 'M-100,660 C 220,600 560,720 860,650 S 1340,580 1700,660', w: 1.0 }
];

export default function ThreadBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1600 880"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {threads.map((t) => (
          <path
            key={t.cls}
            className={`${styles.thread} ${styles[t.cls]}`}
            d={t.d}
            strokeWidth={t.w}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
