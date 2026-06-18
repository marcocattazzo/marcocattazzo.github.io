import Image from 'next/image';
import styles from './HomeHeroLogo.module.css';

// Logo "gomitolo d'oro" come protagonista dell'hero: alone pulsante + float.
// Animazioni CSS-only (rispettano prefers-reduced-motion).
export default function HomeHeroLogo() {
  return (
    <div className={styles.holder}>
      <span className={styles.glow} aria-hidden="true" />
      <Image
        className={styles.logo}
        src="/assets/logo.png"
        alt="Fil d'Or"
        width={184}
        height={184}
        priority
      />
    </div>
  );
}
