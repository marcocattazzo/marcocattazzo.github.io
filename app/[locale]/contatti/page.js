import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from './ContactForm';
import styles from './contatti.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('contatti.title')} — Fil d'Or` };
}

export default async function ContattiPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{t('contatti.title')}</h1>
      <p className={styles.intro}>{t('contatti.intro')}</p>

      <ContactForm
        labels={{
          name: t('contatti.name'),
          email: t('contatti.email'),
          message: t('contatti.message'),
          send: t('contatti.send')
        }}
      />

      <div className={styles.contactInfo}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>LinkedIn</span>
          <a href="https://it.linkedin.com/in/marco-cattazzo-176a211a3" target="_blank" rel="noreferrer">linkedin.com/in/marco-cattazzo</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>GitHub</span>
          <a href="https://github.com/marcocattazzo" target="_blank" rel="noreferrer">github.com/marcocattazzo</a>
        </div>
      </div>
    </div>
  );
}
