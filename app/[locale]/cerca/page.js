import { getTranslations, setRequestLocale } from 'next-intl/server';
import SearchClient from './SearchClient';
import { getAllArticles } from '../../../lib/mdx';
import styles from './search.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('search.title')} — Fil d'Or` };
}

export default async function CercaPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const docs = getAllArticles({ locale }).map((a) => ({
    id: `${a.section}/${a.slug}`,
    title: a.title,
    abstract: a.abstract,
    tags: a.tags,
    section: a.section,
    date: a.date,
    slug: a.slug
  }));

  const sectionLabels = {};
  ['matematica', 'fede-e-chiesa', 'parole', 'musica', 'giochi', 'pensieri'].forEach((s) => {
    sectionLabels[s] = t(`sections.${s}`);
  });

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{t('search.title')}</h1>
      <SearchClient
        docs={docs}
        locale={locale}
        labels={{
          placeholder: t('search.placeholder'),
          noResults: t('search.noResults'),
          results: t('search.results')
        }}
        sectionLabels={sectionLabels}
      />
    </div>
  );
}
