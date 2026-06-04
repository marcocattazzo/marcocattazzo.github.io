import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ThreadCard from '../../components/ThreadCard';
import SectionGrid from '../../components/SectionGrid';
import ArticleCard from '../../components/ArticleCard';
import HeroAnimation from '../../components/HeroAnimation';
import { getAllArticles } from '../../lib/mdx';
import styles from './home.module.css';

export default async function HomePage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = locale === 'it' ? '' : `/${locale}`;

  const articles = getAllArticles({ locale });
  const recent = [];
  const seenSections = new Set();
  for (const a of articles) {
    if (seenSections.has(a.section)) continue;
    seenSections.add(a.section);
    recent.push(a);
    if (recent.length >= 4) break;
  }

  const [line1, line2] = t('home.heroTitle').split('\n');
  // line1 esempio: "Rigore e senso." → italic l'ultima parola
  const line1Words = line1.split(' ');
  const line1Head = line1Words.slice(0, -1).join(' ');
  const line1Tail = line1Words[line1Words.length - 1];

  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroTexture} aria-hidden />
        <HeroAnimation>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <span className={styles.eyebrow}>{t('home.eyebrow')}</span>
              <h1 className={styles.title}>
                {line1Head} <em>{line1Tail}</em>
                <br />
                {line2}
              </h1>
              <p className={styles.body}>{t('home.heroBody')}</p>
              <div className={styles.ctaRow}>
                <Link href={`${prefix}/intrecci/matematica`} className="btn-primary">
                  {t('home.ctaPrimary')}
                </Link>
                <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
                  {t('home.ctaSecondary')} →
                </a>
              </div>
            </div>
            <div className={styles.heroRight}>
              <ThreadCard
                label={t('sections.matematica')}
                title="Logica come forma di cura"
                href={`${prefix}/intrecci/matematica`}
                italicWord="cura"
              />
              <ThreadCard
                label={t('sections.fede-e-chiesa')}
                title="Pensare la fede dentro il tempo"
                href={`${prefix}/intrecci/fede-e-chiesa`}
                italicWord="tempo"
              />
              <ThreadCard
                label={t('lavoro.title')}
                title="Modellare problemi complessi"
                href={`${prefix}/lavoro`}
                italicWord="complessi"
              />
            </div>
          </div>
        </HeroAnimation>
      </section>

      <hr className="divider-hero" />

      <section className={styles.threadsSection} aria-labelledby="threads-heading">
        <div className={styles.sectionHeader}>
          <span id="threads-heading" className="label">{t('home.threadsLabel')}</span>
        </div>
        <SectionGrid locale={locale} />
      </section>

      <section className={styles.recent} aria-labelledby="recent-heading">
        <div className={styles.sectionHeader}>
          <span id="recent-heading" className="label">{t('home.recentLabel')}</span>
        </div>
        <div className={styles.recentList}>
          {recent.map((a) => (
            <ArticleCard
              key={`${a.section}-${a.slug}`}
              article={a}
              locale={locale}
              sectionLabel={t(`sections.${a.section}`)}
              showAbstract={false}
            />
          ))}
        </div>
        <div className={styles.recentFoot}>
          <Link href={`${prefix}/cerca`}>{t('home.allArticles')} →</Link>
        </div>
      </section>
    </div>
  );
}
