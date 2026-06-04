import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import 'katex/dist/katex.min.css';
import MdxRenderer from '../../../../../components/MdxRenderer';
import GiscusComments from '../../../../../components/GiscusComments';
import { getArticle, getAdjacentArticles, getProject, sectionSlugs, getAllArticles } from '../../../../../lib/mdx';
import { locales } from '../../../../../i18n';
import styles from './article.module.css';

export function generateStaticParams() {
  const out = [];
  for (const locale of locales) {
    for (const a of getAllArticles({ locale })) {
      out.push({ locale, sezione: a.section, slug: a.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params: { locale, sezione, slug } }) {
  const article = getArticle(sezione, slug, { locale });
  if (!article) return {};
  return { title: `${article.title} — Fil d'Or`, description: article.abstract };
}

function fmtDate(d, locale) {
  if (!d) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'it-IT', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(new Date(d));
  } catch { return d; }
}

export default async function ArticlePage({ params: { locale, sezione, slug } }) {
  if (!sectionSlugs.includes(sezione)) notFound();
  setRequestLocale(locale);
  const article = getArticle(sezione, slug, { locale });
  if (!article) notFound();

  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const { prev, next } = getAdjacentArticles(sezione, slug, { locale });
  const relatedProject = article.progetto ? getProject(article.progetto, { locale }) : null;

  return (
    <article className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.section}>{t(`sections.${sezione}`)}</span>
          <span className={styles.date}>{fmtDate(article.date, locale)}</span>
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        {article.abstract && <p className={styles.abstract}>{article.abstract}</p>}
      </header>

      <div className="prose">
        <MdxRenderer source={article.content} />
      </div>

      {article.tags?.length > 0 && (
        <div className={styles.tags}>
          {article.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {relatedProject && (
        <Link href={`${prefix}/lavoro/${relatedProject.slug}`} className={styles.relatedProject}>
          <span className={styles.relatedLabel}>{t('article.relatedProject')} →</span>
          <span className={styles.relatedTitle}>{relatedProject.title}</span>
        </Link>
      )}

      <nav className={styles.nav} aria-label="Navigazione articoli">
        {prev ? (
          <Link href={`${prefix}/intrecci/${sezione}/${prev.slug}`} className={styles.navItem}>
            <span className={styles.navLabel}>← {t('article.previous')}</span>
            <span className={styles.navTitle}>{prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`${prefix}/intrecci/${sezione}/${next.slug}`} className={`${styles.navItem} ${styles.navItemRight}`}>
            <span className={styles.navLabel}>{t('article.next')} →</span>
            <span className={styles.navTitle}>{next.title}</span>
          </Link>
        ) : <span />}
      </nav>

      <section className={styles.comments} aria-labelledby="comments-label">
        <span id="comments-label" className={styles.commentsLabel}>{t('article.comments')}</span>
        <GiscusComments locale={locale} />
      </section>
    </article>
  );
}
