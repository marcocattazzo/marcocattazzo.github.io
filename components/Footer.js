import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import styles from './Footer.module.css';

export default async function Footer({ locale }) {
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Fil <em>d'Or</em></span>
          <span className={styles.tagline}>{t('footer.tagline')}</span>
        </div>

        <nav className={styles.linksCol} aria-label="Footer">
          <Link href={`${prefix}/lavoro`}>{t('nav.lavoro')}</Link>
          <Link href={`${prefix}/chi-sono`}>{t('nav.chiSono')}</Link>
          <Link href={`${prefix}/contatti`}>{t('nav.contatti')}</Link>
          <Link href={`${prefix}/cerca`}>{t('nav.cerca')}</Link>
          <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer">
            {t('nav.curriculum')}
          </a>
        </nav>

        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1" />
              <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} {t('footer.copyright')}</span>
        <span>IT · EN</span>
      </div>
    </footer>
  );
}
