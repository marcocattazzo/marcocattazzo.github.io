import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import 'katex/dist/katex.min.css';
import MdxRenderer from '../../../../components/MdxRenderer';
import { getProject, getAllProjects, getArticle } from '../../../../lib/mdx';
import { locales } from '../../../../i18n';
import styles from './project.module.css';

export function generateStaticParams() {
  const out = [];
  for (const locale of locales) {
    for (const p of getAllProjects({ locale })) {
      out.push({ locale, slug: p.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params: { locale, slug } }) {
  const p = getProject(slug, { locale });
  if (!p) return {};
  return { title: `${p.title} — Fil d'Or`, description: p.abstract };
}

export default async function ProjectPage({ params: { locale, slug } }) {
  setRequestLocale(locale);
  const project = getProject(slug, { locale });
  if (!project) notFound();
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;

  let related = null;
  if (project.relatedArticle) {
    related = getArticle(project.relatedArticle.section, project.relatedArticle.slug, { locale });
  }

  return (
    <article className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.meta}>
          {project.category && <span className={styles.label}>{project.category}</span>}
          {project.year && <span className={styles.year}>{project.year}</span>}
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        {project.abstract && <p className={styles.abstract}>{project.abstract}</p>}
        {project.tags?.length > 0 && (
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </header>

      {project._fallback && (
        <p style={{
          fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.04em',
          color: 'var(--text-muted)', borderLeft: '2px solid var(--gold-dim)',
          padding: '0.5rem 0 0.5rem 0.85rem', margin: '0 0 1.5rem'
        }}>
          {t('article.langFallback')}
        </p>
      )}

      <div className="prose">
        <MdxRenderer source={project.content} />
      </div>

      {project.pdfs?.length > 0 && (
        <div className={styles.pdfsBox}>
          <span className={styles.pdfsLabel}>{t('lavoro.documents')}</span>
          {project.pdfs.map((pdf, i) => (
            <a key={i} href={pdf.file} target="_blank" rel="noreferrer" className={styles.pdfLink}>
              <span>{pdf.label}</span>
              <span>PDF ↓</span>
            </a>
          ))}
        </div>
      )}

      {related && (
        <section className={styles.relatedBox}>
          <span className={styles.relatedLabel}>{t('article.readAlso')}</span>
          <Link href={`${prefix}/intrecci/${related.section}/${related.slug}`} className={styles.relatedCard}>
            <span className={styles.relatedSection}>{t(`sections.${related.section}`)}</span>
            <div className={styles.relatedTitle}>{related.title}</div>
          </Link>
        </section>
      )}
    </article>
  );
}
