import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ArticleCard from '../../../../components/ArticleCard';
import { sectionIcons } from '../../../../components/SectionIcons';
import { getArticlesBySection, getAllProjects, sectionSlugs } from '../../../../lib/mdx';
import { locales } from '../../../../i18n';
import styles from './section.module.css';

const sectionImg = {
  matematica: '/assets/math.png',
  'fede-e-chiesa': '/assets/faith.png',
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

const PAGE_SIZE = 10;

export default async function SectionPage({ params: { locale, sezione }, searchParams }) {
  if (!sectionSlugs.includes(sezione)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = locale === 'it' ? '' : `/${locale}`;

  const articles = getArticlesBySection(sezione, { locale });
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10));
  const total = Math.ceil(articles.length / PAGE_SIZE) || 1;
  const visible = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const Icon = sectionIcons[sezione];
  const img = sectionImg[sezione];

  // Related projects for /giochi
  let relatedProjects = [];
  if (sezione === 'giochi') {
    relatedProjects = getAllProjects({ locale }).filter((p) =>
      (p.tags || []).some((t) => /game|dobble|gioch/i.test(t))
    );
  }

  return (
    <div className="container">
      <div className={styles.wrap}>
        <header className={styles.heroSection}>
          <div className={styles.icon}>
            {img ? <Image src={img} alt="" width={64} height={64} /> : <Icon size={64} />}
          </div>
          <h1 className={styles.title}>{t(`sections.${sezione}`)}</h1>
          <hr className={styles.divider} />
          <p className={styles.subtitle}>{t(`sectionSubtitles.${sezione}`)}</p>
        </header>

        {visible.length === 0 ? (
          <p className={styles.empty}>—</p>
        ) : (
          <div className={styles.list}>
            {visible.map((a) => (
              <ArticleCard
                key={a.slug}
                article={a}
                locale={locale}
                sectionLabel={t(`sections.${a.section}`)}
                showAbstract
                showTags
              />
            ))}
          </div>
        )}

        {total > 1 && (
          <nav className={styles.pagination} aria-label="Paginazione">
            {page > 1 ? (
              <Link href={`${prefix}/intrecci/${sezione}?page=${page - 1}`}>← {t('article.previous')}</Link>
            ) : <span className={styles.disabled}>← {t('article.previous')}</span>}
            <span style={{ color: 'var(--text-dim)' }}>{page} / {total}</span>
            {page < total ? (
              <Link href={`${prefix}/intrecci/${sezione}?page=${page + 1}`}>{t('article.next')} →</Link>
            ) : <span className={styles.disabled}>{t('article.next')} →</span>}
          </nav>
        )}

        {relatedProjects.length > 0 && (
          <section className={styles.relatedProjects}>
            <h2>Progetti correlati</h2>
            <div className={styles.projectLinks}>
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`${prefix}/lavoro/${p.slug}`} className={styles.projectLink}>
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
