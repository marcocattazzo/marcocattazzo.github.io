// Single-line SVG icons for the three sections without PNG assets.
// Style: continuous line, stroke gold-main, no fill, viewBox 32x32.

const stroke = '#C8B07A';

export function ParoleIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M5 22 C 8 8, 14 8, 16 16 C 18 24, 24 24, 27 10"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 26 L23 26" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MusicaIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M10 23 C 10 25.2, 7.8 26, 6.5 25 C 5.2 24, 5.5 22, 7 21.5 C 8.5 21, 10 21.5, 10 23 Z M10 23 L10 7 L24 5 L24 21 C 24 23.2, 21.8 24, 20.5 23 C 19.2 22, 19.5 20, 21 19.5 C 22.5 19, 24 19.5, 24 21"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 11 L24 9" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function GiochiIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 12 Q 6 9, 9 9 L 23 9 Q 26 9, 26 12 L 26 20 Q 26 23, 23 23 L 9 23 Q 6 23, 6 20 Z"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="16" r="1.3" stroke={stroke} strokeWidth="1.2" />
      <circle cx="21" cy="13" r="1.3" stroke={stroke} strokeWidth="1.2" />
      <circle cx="21" cy="19" r="1.3" stroke={stroke} strokeWidth="1.2" />
      <path d="M14 13 L17 13 M15.5 13 L15.5 19 M14 19 L17 19" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MatematicaIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 25 L13 7 L19 25 M9 18 L17 18" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12 L26 16 L22 20 M22 16 L26 16" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FedeIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 5 L16 27 M9 12 L23 12" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 22 Q 16 28, 22 22" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function GraficaIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* nib + brush stroke + ink dot */}
      <path
        d="M5 26 C 10 16, 16 12, 24 10"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 10 L26 8 L28 10 L26 12 Z"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="7" cy="24" r="1.2" fill={stroke} stroke="none" />
      <path d="M9 22 L11 20" stroke={stroke} strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function PensieriIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6 C 11 6, 8 10, 9 14 C 9.5 16, 11 17, 11 20 L 21 20 C 21 17, 22.5 16, 23 14 C 24 10, 21 6, 16 6 Z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 23 L20 23 M13 26 L19 26" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export const sectionIcons = {
  matematica: MatematicaIcon,
  'fede-e-chiesa': FedeIcon,
  parole: ParoleIcon,
  musica: MusicaIcon,
  giochi: GiochiIcon,
  grafica: GraficaIcon,
  pensieri: PensieriIcon
};
