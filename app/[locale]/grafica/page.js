import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import styles from './grafica.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('grafica.title')} — Fil d'Or` };
}

const portfolio = [
  { label: '2024', caption: 'Identità visiva — placeholder', pattern: 'circles' },
  { label: '2024', caption: 'Impaginazione editoriale', pattern: 'grid' },
  { label: '2023', caption: 'Manifesto tipografico', pattern: 'lines' },
  { label: '2023', caption: 'Sistema iconografico', pattern: 'circles' },
  { label: '2022', caption: 'Locandine evento', pattern: 'grid' },
  { label: '2022', caption: 'Tavole tipografiche', pattern: 'lines' }
];

const tools = ['Figma', 'Illustrator', 'InDesign', 'After Effects', 'Photoshop', 'Procreate'];

function Pattern({ kind }) {
  if (kind === 'circles') {
    return (
      <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.4" />
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none">
        {[10, 25, 40, 55, 70, 85].map((x) => (
          <line key={`v${x}`} x1={x} y1="10" x2={x} y2="90" stroke="currentColor" strokeWidth="0.4" />
        ))}
        {[10, 25, 40, 55, 70, 85].map((y) => (
          <line key={`h${y}`} x1="10" y1={y} x2="90" y2={y} stroke="currentColor" strokeWidth="0.4" />
        ))}
      </svg>
    );
  }
  return (
    <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none">
      {[20, 30, 40, 50, 60, 70, 80].map((y) => (
        <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="currentColor" strokeWidth="0.4" />
      ))}
    </svg>
  );
}

export default async function GraficaPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;

  return (
    <div className="container">
      <div className={styles.wrap}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Studio · Pratica · Pensiero</span>
          <h1 className={styles.title}>{t('grafica.title')}</h1>
          <p className={styles.subtitle}>{t('grafica.subtitle')}</p>
          <hr className={styles.divider} />
          <p className={styles.manifesto}>{t('grafica.manifesto')}</p>
        </header>

        <section className={styles.block} aria-labelledby="portfolio-h">
          <h2 id="portfolio-h" className={styles.blockTitle}>{t('grafica.portfolioLabel')}</h2>
          <div className={styles.portfolioGrid}>
            {portfolio.map((p, i) => (
              <div key={i} className={styles.portfolioItem}>
                <div className={styles.portfolioPattern}>
                  <Pattern kind={p.pattern} />
                </div>
                <span className={styles.portfolioLabel}>{p.label}</span>
                <span className={styles.portfolioCaption}>{p.caption}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block} aria-labelledby="tools-h">
          <h2 id="tools-h" className={styles.blockTitle}>{t('grafica.toolsLabel')}</h2>
          <div className={styles.tools}>
            {tools.map((tg) => (
              <span key={tg} className="tag">{tg}</span>
            ))}
          </div>
        </section>

        <Link href={`${prefix}/chi-sono#grafica`} className={styles.formationLink}>
          <span>Percorso formativo in grafica e design</span>
          <span>{t('grafica.formationLink')}</span>
        </Link>
      </div>
    </div>
  );
}
