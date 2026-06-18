import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ProjectCard from '../../../components/ProjectCard';
import { getAllProjects } from '../../../lib/mdx';
import styles from './lavoro.module.css';

const talks = [
  { title: "Chi ha rubato le carte di Dobble?", context: "Fuori Orario — Unimi · 2020" },
  { title: "Topologia algebrica con le mani — corde e trecce", context: "Fuori Orario — Unimi · 2022" }
];

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('lavoro.title')} — Fil d'Or` };
}

export default async function LavoroPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const projects = getAllProjects({ locale });

  return (
    <div className="container">
      <div className={styles.wrap}>
        <header className={styles.hero}>
          <h1 className={styles.title}>{t('lavoro.title')}</h1>
          <p className={styles.bio}>{t('lavoro.bio')}</p>
        </header>

        <section aria-labelledby="projects-heading">
          <span id="projects-heading" className="label">{t('lavoro.projectsLabel')}</span>
          <div className={styles.grid}>
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} locale={locale} />
            ))}
          </div>
        </section>

        <section className={styles.talks} aria-labelledby="talks-heading">
          <div className={styles.talksHeader}>
            <Image src="/assets/mic.png" alt="" width={36} height={36} />
            <h2 id="talks-heading">{t('lavoro.talks')}</h2>
          </div>
          <ul className={styles.talksList}>
            {talks.map((talk, i) => (
              <li key={i} className={styles.talk}>
                <div className={styles.talkTitle}>{talk.title}</div>
                <div className={styles.talkContext}>{talk.context}</div>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.cta}>
          <p className={styles.ctaText}>{t('lavoro.ctaText')}</p>
          <div className={styles.ctaRow}>
            <Link href={`${prefix}/contatti`} className="btn-primary">
              {t('lavoro.letsTalk')} →
            </Link>
            <Link href={`${prefix}/chi-sono`} className="btn-ghost">
              {t('nav.chiSono')} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
