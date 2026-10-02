import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sectionIcons } from '../../../../components/SectionIcons';
import MdxRenderer from '../../../../components/MdxRenderer';
import { getArticlesBySection, getAllProjects, getPortfolioWorks, sectionSlugs } from '../../../../lib/mdx';
import { locales } from '../../../../i18n';
import styles from './section.module.css';

const sectionImg = {
  matematica: '/assets/math.png',
  'fede-e-chiesa': '/assets/faith.png',
  musica: '/assets/mic.png',
  pensieri: '/assets/philosophy.png'
};

export function generateStaticParams() {
  const out = [];
  for (const locale of locales) {
    for (const sezione of sectionSlugs) {
      out.push({ locale, sezione });
    }
  }
  return out;
}

export async function generateMetadata({ params: { locale, sezione } }) {
  if (!sectionSlugs.includes(sezione)) return {};
  const t = await getTranslations({ locale });
  return { title: `${t(`sections.${sezione}`)} — Fil d'Or` };
}

function fmtDate(d, locale) {
  if (!d) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'it-IT', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(new Date(d));
  } catch { return d; }
}

export default async function SectionPage({ params: { locale, sezione } }) {
  if (!sectionSlugs.includes(sezione)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const articles = getArticlesBySection(sezione, { locale });

  const Icon = sectionIcons[sezione];
  const img = sectionImg[sezione];

  // Related projects for /giochi
  let relatedProjects = [];
  if (sezione === 'giochi') {
    relatedProjects = getAllProjects({ locale }).filter((p) =>
      (p.tags || []).some((tag) => /game|dobble|gioch/i.test(tag))
    );
  }

  // Portfolio grafico: solo in /grafica e solo se c'è almeno una scheda pubblicata.
  const works = sezione === 'grafica' ? getPortfolioWorks({ locale }) : [];

  return (
    <div className="container">
      <div className={styles.wrap}>
        <header className={styles.heroSection}>
          <div className={styles.icon}>
            {img ? <Image src={img} alt="" width={120} height={120} /> : <Icon size={120} />}
          </div>
          <span className={styles.eyebrow}>Intrecci</span>
          <h1 className={styles.title}>{t(`sections.${sezione}`)}</h1>
          <p className={styles.subtitle}>{t(`sectionSubtitles.${sezione}`)}</p>
          <p className={styles.intro}>{t(`sectionIntros.${sezione}`)}</p>
          <nav className={styles.anchorNav} aria-label="Navigazione interna">
            <a href="#articoli">{t('sectionAnchors.articoli')}</a>
            <a href="#note">{t('sectionAnchors.note')}</a>
            <a href="#risorse">{t('sectionAnchors.risorse')}</a>
            {works.length > 0 && <a href="#portfolio">{t('sectionAnchors.portfolio')}</a>}
          </nav>
        </header>

        <h2 id="articoli" className={styles.sectionHeading}>{t('sectionAnchors.articoli')}</h2>
        {articles.length === 0 ? (
          <p className={styles.empty}>—</p>
        ) : (
          <div className={styles.list}>
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/${locale}/intrecci/${a.section}/${a.slug}`}
                className={styles.articleCard}
              >
                <div className={styles.articleMeta}>
                  <span className={styles.articleDate}>{fmtDate(a.date, locale)}</span>
                  {a.tags?.[0] && <span className={styles.articleTag}>{a.tags[0]}</span>}
                </div>
                <h3 className={styles.articleTitle}>{a.title}</h3>
                {a.abstract && <p className={styles.articleExcerpt}>{a.abstract}</p>}
                {a.tags?.length > 1 && (
                  <div className={styles.articleTags}>
                    {a.tags.slice(1).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        <h2 id="note" className={styles.sectionHeading}>{t('sectionAnchors.note')}</h2>
        <p className={styles.empty}>—</p>

        <h2 id="risorse" className={styles.sectionHeading}>{t('sectionAnchors.risorse')}</h2>
        <p className={styles.empty}>—</p>

        {works.length > 0 && (
          <section id="portfolio" className={styles.portfolio}>
            <h2 className={styles.sectionHeading}>{t('portfolio.title')}</h2>
            <p className={styles.portfolioIntro}>{t('portfolio.intro')}</p>
            {works.map((w) => (
              <article key={w.slug} id={w.slug} className={styles.work}>
                <div className={styles.workMedia}>
                  {(w.immagini?.length ? w.immagini : [w.cover]).filter(Boolean).map((src) => (
                    <Image key={src} src={src} alt={w.title} width={1200} height={800} className={styles.workImg} />
                  ))}
                </div>
                <div className={styles.workText}>
                  <h3 className={styles.workTitle}>{w.title}</h3>
                  <dl className={styles.workMeta}>
                    {w.anno && (<><dt>{t('portfolio.year')}</dt><dd>{w.anno}</dd></>)}
                    {w.contesto && (<><dt>{t('portfolio.context')}</dt><dd>{w.contesto}</dd></>)}
                    {w.ruolo && (<><dt>{t('portfolio.role')}</dt><dd>{w.ruolo}</dd></>)}
                    {w.strumenti?.length > 0 && (<><dt>{t('portfolio.tools')}</dt><dd>{w.strumenti.join(' · ')}</dd></>)}
                  </dl>
                  <div className={styles.workConcept}>
                    <MdxRenderer source={w.content} />
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {relatedProjects.length > 0 && (
          <section className={styles.relatedProjects}>
            <h2>{locale === 'en' ? 'Related projects' : 'Progetti correlati'}</h2>
            <div className={styles.projectLinks}>
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`/${locale}/lavoro/${p.slug}`} className={styles.projectLink}>
                  <span>{p.title}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
