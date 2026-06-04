import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { socialList } from './SocialIcons';
import styles from './Footer.module.css';

export default async function Footer({ locale }) {
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const year = new Date().getFullYear();
  const socials = socialList();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Fil <em>d'Or</em></span>
            <span className={styles.tagline}>{t('footer.tagline')}</span>
          </div>

          <nav className={styles.navLinks} aria-label="Footer">
            <Link href={`${prefix}/lavoro`}>{t('nav.lavoro')}</Link>
            <Link href={`${prefix}/intrecci/grafica`}>{t('sections.grafica')}</Link>
            <Link href={`${prefix}/chi-sono`}>{t('nav.chiSono')}</Link>
            <Link href={`${prefix}/contatti`}>{t('nav.contatti')}</Link>
            <Link href={`${prefix}/cerca`}>{t('nav.cerca')}</Link>
          </nav>
        </div>

        <div className={styles.middle}>
          <span className={styles.tagline}>{t('footer.thread')}</span>
          <div className={styles.socials}>
            {socials.map(({ id, label, href, Icon }) => (
              <a key={id} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Marco Cattazzo</span>
          <span>IT · EN</span>
        </div>
      </div>
    </footer>
  );
}
