import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import styles from './about.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('chiSono.title')} — Fil d'Or` };
}

const formazione = [
  { title: "Laurea magistrale in Matematica", meta: "Indirizzo logico-algebrico", desc: "Tesi su strutture combinatorie e verifica formale." },
  { title: "Percorso teologico-pastorale", meta: "Formazione interdisciplinare", desc: "Teologia sistematica, pastorale giovanile, filosofia del linguaggio." },
  { title: "Olimpiadi della matematica", meta: "Formazione e tutoraggio", desc: "Anni come tutor e formatore per il problem solving olimpico." }
];

const interessi = [
  "Logica & ontologia",
  "Teologia & sinodalità",
  "Lingue antiche",
  "Musica & armonia",
  "Game design",
  "Filosofia del linguaggio"
];

export default async function ChiSonoPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = locale === 'it' ? '' : `/${locale}`;

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{t('chiSono.title')}</h1>
      <p className={styles.bio}>{t('chiSono.bio')}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('chiSono.formazione')}</h2>
        <div className={styles.list}>
          {formazione.map((f, i) => (
            <div key={i} className={styles.entry}>
              <span className={styles.entryTitle}>{f.title}</span>
              <span className={styles.entryMeta}>{f.meta}</span>
              <span className={styles.entryDesc}>{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('chiSono.interessi')}</h2>
        <div className={styles.interestsGrid}>
          {interessi.map((i) => (
            <div key={i} className={styles.interestCard}>{i}</div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('chiSono.comeLavoro')}</h2>
        <p className={styles.howIWork}>
          Parto sempre dalla domanda: cosa stiamo davvero provando a capire? La risposta a questa domanda decide quasi tutto il resto — il metodo, gli strumenti, il livello di formalizzazione adatto. Lavoro bene in contesti dove c'è spazio per fermarsi, riformulare, ammettere ciò che non si sa.
        </p>
      </section>

      <div className={styles.links}>
        <Link href={`${prefix}/lavoro`} className="btn-primary">Lavoro →</Link>
        <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer" className="btn-ghost">Curriculum ↓</a>
      </div>
    </div>
  );
}
