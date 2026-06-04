import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, locale }) {
  const prefix = locale === 'it' ? '' : `/${locale}`;
  const label = [project.category, project.year].filter(Boolean).join(' · ');

  return (
    <Link href={`${prefix}/lavoro/${project.slug}`} className={styles.card}>
      {label && <span className={styles.label}>{label}</span>}
      <h3 className={styles.title}>{project.title}</h3>
      {project.abstract && <p className={styles.abstract}>{project.abstract}</p>}
      {project.tags?.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
      <span className={styles.arrow}>Leggi →</span>
    </Link>
  );
}
