import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AmbitoAreas from '../../../../components/AmbitoAreas';
import { ambiti, getAmbitoSlugs } from '../../../../lib/ambiti';
import { locales } from '../../../../i18n';
import styles from './ambito.module.css';

export function generateStaticParams() {
  const out = [];
  const slugs = getAmbitoSlugs();
  for (const locale of locales) {
    for (const ambito of slugs) {
      out.push({ locale, ambito });
    }
  }
  return out;
}

export async function generateMetadata({ params: { locale, ambito } }) {
  const slugs = getAmbitoSlugs();
  if (!slugs.includes(ambito)) return {};
  const t = await getTranslations({ locale });
  return { title: `${t(`ambiti.${ambito}`)} — Fil d'Or` };
}

const navOrder = ['matematica', 'teologia', 'rappresentanza', 'grafica'];

export default async function AmbitoPage({ params: { locale, ambito } }) {
  const slugs = getAmbitoSlugs();
  if (!slugs.includes(ambito)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const areas = (ambiti[locale] || ambiti.it)[ambito];

  const idx = navOrder.indexOf(ambito);
  const prev = idx > 0 ? navOrder[idx - 1] : null;
  const next = idx >= 0 && idx < navOrder.length - 1 ? navOrder[idx + 1] : null;

  return (
    <div className={styles.wrap}>
      <Link href={`${prefix}/chi-sono`} className={styles.back}>{t('ambiti.backToChiSono')}</Link>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>{t('ambiti.eyebrow')}</span>
        <h1 className={styles.title}>{t(`ambiti.${ambito}`)}</h1>
        <p className={styles.intro}>{t(`ambiti.intro.${ambito}`)}</p>
        <p className={styles.note}>
          {t('ambiti.note')}
        </p>
      </header>

      <AmbitoAreas areas={areas} styles={styles} />

      <footer className={styles.footer}>
        {prev ? (
          <Link href={`${prefix}/chi-sono/${prev}`}>← {t(`ambiti.${prev}`)}</Link>
        ) : <span />}
        <Link href={`${prefix}/chi-sono`}>{t('ambiti.backToChiSono')}</Link>
        {next ? (
          <Link href={`${prefix}/chi-sono/${next}`}>{t(`ambiti.${next}`)} →</Link>
        ) : <span />}
      </footer>
    </div>
  );
}

