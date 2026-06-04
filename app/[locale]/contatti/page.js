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
          <span className={styles.infoLabel}>Email</span>
          <a href="mailto:hello@fildor.example">hello@fildor.example</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>LinkedIn</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>GitHub</span>
          <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a>
        </div>
      </div>
    </div>
  );
}
