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

export default async function SectionPage({ params: { locale, sezione } }) {
  if (!sectionSlugs.includes(sezione)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const articles = getArticlesBySection(sezione, { locale });
  const visible = articles.slice(0, PAGE_SIZE);

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

        {relatedProjects.length > 0 && (
          <section className={styles.relatedProjects}>
            <h2>Progetti correlati</h2>
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
