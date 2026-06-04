import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import StaggeredList, { StaggeredItem } from '../../../components/StaggeredList';
import styles from './about.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('chiSono.title')} — Fil d'Or` };
}

const formazioneMat = [
  {
    date: '2017 — 2020',
    title: 'Laurea triennale in Matematica',
    place: 'Università degli Studi di Milano',
    desc: 'Algebra, analisi, geometria, fondamenti.'
  },
  {
    date: '2020 — 2023',
    title: 'Laurea magistrale in Matematica',
    place: 'Università degli Studi di Milano',
    desc: 'Indirizzo logico-algebrico. Tesi su strutture combinatorie e verifica formale.'
  },
  {
    date: '2023',
    title: 'INDAM — Idoneità alla borsa di studio',
    place: 'Istituto Nazionale di Alta Matematica',
    desc: 'Selezione per il dottorato in matematica.'
  },
  {
    date: '2014 — 2018',
    title: 'Olimpiadi della Matematica UMI',
    place: 'Unione Matematica Italiana',
    desc: 'Qualificazioni distrettuali e nazionali.'
  },
  {
    date: '2017',
    title: 'Campus "Teoria dei giochi e reti neurali"',
    place: 'Marina di Massa',
    desc: 'Settimana intensiva di formazione su game theory applicata.'
  },
  {
    date: '2020 →',
    title: 'Seminari "Fuori Orario" — Unimi',
    place: 'Speaker',
    desc: 'Interventi su Dobble e geometria combinatoria, problem solving olimpico, altre tematiche.'
  }
];

const formazioneTeo = [
  {
    date: '2016 — 2021',
    title: 'Scuola di Teologia per Laici',
    place: 'Decanato Seregno-Seveso',
    desc: 'Percorso pluriennale di formazione teologica sistematica.'
  },
  {
    date: '02/2025 — 09/2025',
    title: 'Esami di Liturgia 1 e 2',
    place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano',
    desc: '12 CFU. Approfondimento liturgico-sacramentale.'
  }
];

const esperienzePastorali = [
  {
    date: '—',
    title: 'Animazione e coordinamento comunitario',
    place: 'Decanato Seregno-Seveso',
    desc: 'Placeholder per elenco preciso da integrare. Ruoli, periodi, contesti.'
  },
  {
    date: '—',
    title: 'Direzione progetto innovativo diocesano',
    place: 'Pastorale giovanile',
    desc: 'Placeholder per descrizione completa.'
  }
];

const graficaDesign = [
  {
    date: '—',
    title: 'Identità visiva e composizione editoriale',
    place: 'Strumenti: Figma, Illustrator, InDesign',
    desc: 'Placeholder per portfolio progetti grafici. Tratto pulito, attenzione tipografica.'
  }
];

const sidebarLinks = [
  { id: 'intro', key: 'intro' },
  { id: 'matematica', key: 'formazioneMat' },
  { id: 'teologia', key: 'formazioneTeo' },
  { id: 'pastorali', key: 'esperienzePast' },
  { id: 'grafica', key: 'graficaDesign' }
];

function Entry({ entry }) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryDate}>{entry.date}</div>
      <div className={styles.entryBody}>
        <span className={styles.entryTitle}>{entry.title}</span>
        <span className={styles.entryPlace}>{entry.place}</span>
        {entry.desc && <span className={styles.entryDesc}>{entry.desc}</span>}
      </div>
    </div>
  );
}

export default async function ChiSonoPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} aria-label="Indice pagina">
        {sidebarLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`}>{t(`chiSono.${l.key}`)}</a>
        ))}
      </aside>

      <main className={styles.main}>
        <section id="intro" className={styles.section} style={{ marginTop: 0 }}>
          <h1 className={styles.title}>{t('chiSono.title')}</h1>
          <p className={styles.bio}>{t('chiSono.bio')}</p>
        </section>

        <section id="matematica" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.formazioneMat')}</h2>
          <p className={styles.sectionLead}>
            La matematica come pratica del pensiero: dalla logica algebrica alla combinatoria, passando per i giochi olimpici e i seminari interni di Unimi.
          </p>
          <StaggeredList className={styles.list}>
            {formazioneMat.map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/matematica`} className={styles.detailCta}>
            {t('ambiti.matematica')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="teologia" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.formazioneTeo')}</h2>
          <p className={styles.sectionLead}>
            Un percorso parallelo, dentro la teologia sistematica e la liturgia. Stesso rigore, oggetto diverso.
          </p>
          <StaggeredList className={styles.list}>
            {formazioneTeo.map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/teologia`} className={styles.detailCta}>
            {t('ambiti.teologia')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="pastorali" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.esperienzePast')}</h2>
          <p className={styles.sectionLead}>
            Comunità, gruppi, accompagnamento. Il pensiero teologico passa attraverso le persone, sempre.
          </p>
          <StaggeredList className={styles.list}>
            {esperienzePastorali.map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/pastorale`} className={styles.detailCta}>
            {t('ambiti.pastorale')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="grafica" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.graficaDesign')}</h2>
          <p className={styles.sectionLead}>
            Il segno come forma di pensiero. Tipografia, composizione, identità.
          </p>
          <StaggeredList className={styles.list}>
            {graficaDesign.map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/grafica`} className={styles.detailCta}>
            {t('ambiti.grafica')} — {t('ambiti.detailLink')}
          </Link>

          <div className={styles.cvBlock}>
            <p className={styles.cvBlockText}>{t('chiSono.cvLinkBlock')}</p>
            <Link href={`${prefix}/curriculum`} className={styles.cvBlockCta}>
              {t('chiSono.cvLinkCta')}
            </Link>
            <p className={styles.cvEuropass}>
              CV completo formato Europass → <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer">scarica PDF (IT)</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
