import Link from 'next/link';
import styles from './ArticleCard.module.css';

function fmtDate(d, locale) {
  if (!d) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(d));
  } catch {
    return d;
  }
}

export default function ArticleCard({ article, locale, sectionLabel, showAbstract = true, showTags = false }) {
  const prefix = locale === 'it' ? '' : `/${locale}`;
  const href = `${prefix}/intrecci/${article.section}/${article.slug}`;

  return (
    <Link href={href} className={styles.item}>
      <div className={styles.meta}>
        {sectionLabel && <span className={styles.section}>{sectionLabel}</span>}
        <span className={styles.date}>{fmtDate(article.date, locale)}</span>
      </div>
      <h3 className={styles.title}>{article.title}</h3>
      {showAbstract && article.abstract && <p className={styles.abstract}>{article.abstract}</p>}
      {showTags && article.tags?.length > 0 && (
        <div className={styles.tags}>
          {article.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
