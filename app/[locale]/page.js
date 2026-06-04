import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionGrid from '../../components/SectionGrid';
import HeroAnimation from '../../components/HeroAnimation';
import HeroThread from '../../components/HeroThread';
import { getAllArticles } from '../../lib/mdx';
import styles from './home.module.css';

function fmtDate(d, locale) {
  if (!d) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'it-IT', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(new Date(d));
  } catch { return d; }
}

export default async function HomePage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;

  const articles = getAllArticles({ locale });
  const recent = articles.slice(0, 4);

  const [line1, line2] = t('home.heroTitle').split('\n');
  const line1Words = line1.split(' ');
  const line1Head = line1Words.slice(0, -1).join(' ');
  const line1Tail = line1Words[line1Words.length - 1];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroOverlay} aria-hidden />
        <div className="container">
          <HeroAnimation>
            <div className={styles.heroInner}>
              <div className={styles.threadSvg}>
                <HeroThread />
              </div>
              <span className={styles.eyebrow}>{t('home.eyebrow')}</span>
              <h1 className={styles.title}>
                {line1Head} <em>{line1Tail}</em>
                <br />
                {line2}
              </h1>
              <p className={styles.body}>{t('home.heroBody')}</p>
              <div className={styles.ctaRow}>
                <Link href={`${prefix}/chi-sono`} className={styles.ctaPrimary}>
                  {t('home.ctaPrimary')} →
                </Link>
                <Link href={`${prefix}/intrecci/matematica`} className={styles.ctaSecondary}>
                  {t('home.ctaSecondary')} →
                </Link>
              </div>
            </div>
          </HeroAnimation>
        </div>
      </section>

      <section className={styles.intrecci} aria-labelledby="threads-heading">
        <div className="container">
          <h2 id="threads-heading" className={styles.intrecciIntro}>
            {t('home.intrecciIntro')}
          </h2>
          <SectionGrid locale={locale} variant="large" />
        </div>
      </section>

      <section className={styles.recent} aria-labelledby="recent-heading">
        <div className="container">
          <div className={styles.recentHeader}>
            <span id="recent-heading" className="label">{t('home.recentLabel')}</span>
            <span className="label">/ {recent.length}</span>
          </div>
          <div className={styles.recentGrid}>
            {recent.map((a) => (
              <Link
                key={`${a.section}-${a.slug}`}
                href={`${prefix}/intrecci/${a.section}/${a.slug}`}
                className={styles.recentCard}
              >
                <div className={styles.recentMeta}>
                  <span className={styles.recentSection}>{t(`sections.${a.section}`)}</span>
                  <span className={styles.recentDate}>{fmtDate(a.date, locale)}</span>
                </div>
                <div className={styles.recentTitle}>{a.title}</div>
              </Link>
            ))}
          </div>
          <div className={styles.recentFoot}>
            <Link href={`${prefix}/cerca`}>{t('home.allArticles')} →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
