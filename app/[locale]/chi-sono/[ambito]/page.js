import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AmbitoAreas from '../../../../components/AmbitoAreas';
import { ambiti, ambitoSlugs } from '../../../../lib/ambiti';
import { locales } from '../../../../i18n';
import styles from './ambito.module.css';

export function generateStaticParams() {
  const out = [];
  for (const locale of locales) {
    for (const ambito of ambitoSlugs) {
      out.push({ locale, ambito });
    }
  }
  return out;
}

export async function generateMetadata({ params: { locale, ambito } }) {
  if (!ambitoSlugs.includes(ambito)) return {};
  const t = await getTranslations({ locale });
  return { title: `${t(`ambiti.${ambito}`)} — Fil d'Or` };
}

const navOrder = ['matematica', 'teologia', 'pastorale', 'grafica'];

export default async function AmbitoPage({ params: { locale, ambito } }) {
  if (!ambitoSlugs.includes(ambito)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const areas = ambiti[ambito];

  const idx = navOrder.indexOf(ambito);
  const prev = idx > 0 ? navOrder[idx - 1] : null;
  const next = idx >= 0 && idx < navOrder.length - 1 ? navOrder[idx + 1] : null;

  return (
    <div className={styles.wrap}>
      <Link href={`${prefix}/chi-sono`} className={styles.back}>{t('ambiti.backToChiSono')}</Link>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>Chi sono — dettaglio</span>
        <h1 className={styles.title}>{t(`ambiti.${ambito}`)}</h1>
        <p className={styles.intro}>{t(`ambiti.intro.${ambito}`)}</p>
        <p className={styles.note}>
          Pagina predisposta per accogliere l'elenco completo. Le voci sotto sono lo scheletro; possono essere ampliate, riarticolate o ridotte senza alterare la struttura.
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
