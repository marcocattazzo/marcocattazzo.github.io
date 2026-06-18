// Sfondo animato della home: onde dorate che scorrono in parallasse.
// Ogni onda è una sinusoide periodica; scorre orizzontalmente a velocità
// e direzione diverse (effetto profondità). Loop seamless: la traslazione
// è esattamente un periodo, quindi l'onda si richiude su se stessa.
// CSS-only (nessun JS a runtime), rispetta prefers-reduced-motion.

import styles from './ThreadBackground.module.css';

const VIEW_W = 1600;
const X_START = -VIEW_W;
const X_END = VIEW_W * 2; // disegna 3 viewport: copre lo scorrimento in entrambi i versi
const STEP = 18;

// Genera il path di una sinusoide y = cy + amp·sin(2π x / period).
function wavePath(cy, amp, period) {
  let d = '';
  for (let x = X_START; x <= X_END; x += STEP) {
    const y = cy + amp * Math.sin((2 * Math.PI * x) / period);
    d += (d === '' ? 'M' : 'L') + x.toFixed(0) + ',' + y.toFixed(1) + ' ';
  }
  return d.trim();
}

// Periodi che dividono 1600 → loop perfettamente seamless.
const waves = [
  { cy: 170, amp: 46, period: 800,  w: 1.4, dur: 21, dir: 'l', tone: 'main',  op: 0.16 },
  { cy: 300, amp: 64, period: 1600, w: 1.0, dur: 33, dir: 'r', tone: 'dim',   op: 0.10 },
  { cy: 410, amp: 34, period: 400,  w: 1.7, dur: 17, dir: 'l', tone: 'light', op: 0.18 },
  { cy: 520, amp: 70, period: 800,  w: 0.9, dur: 41, dir: 'r', tone: 'dim',   op: 0.08 },
  { cy: 620, amp: 40, period: 320,  w: 1.2, dur: 25, dir: 'l', tone: 'main',  op: 0.13 },
  { cy: 720, amp: 58, period: 1600, w: 1.6, dur: 29, dir: 'r', tone: 'light', op: 0.15 },
  { cy: 815, amp: 36, period: 400,  w: 1.1, dur: 23, dir: 'l', tone: 'main',  op: 0.11 }
];

const toneVar = {
  main: 'var(--gold-main)',
  dim: 'var(--gold-dim)',
  light: 'var(--gold-light)'
};

export default function ThreadBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {waves.map((wv, i) => {
          const shift = wv.dir === 'l' ? -wv.period : wv.period;
          return (
            <g
              key={i}
              className={styles.wave}
              style={{ '--shift': `${shift}px`, animationDuration: `${wv.dur}s` }}
            >
              <path
                d={wavePath(wv.cy, wv.amp, wv.period)}
                fill="none"
                stroke={toneVar[wv.tone]}
                strokeWidth={wv.w}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={wv.op}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
