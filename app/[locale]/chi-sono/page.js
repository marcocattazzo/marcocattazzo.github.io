import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import StaggeredList, { StaggeredItem } from '../../../components/StaggeredList';
import styles from './about.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('chiSono.title')} — Fil d'Or` };
}

// Contenuti localizzati: { it: [...], en: [...] }. Si seleziona per locale.
const formazioneMat = {
  it: [
    { date: '2018 — 2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano', desc: 'Algebra, analisi, geometria, fondamenti.' },
    { date: '2024 — attuale', title: 'Laurea magistrale in Matematica · In corso', place: 'Università degli Studi di Milano', desc: 'Indirizzo logico-algebrico. Lavoro su strutture combinatorie e verifica formale.' },
    { date: '2018', title: 'INDAM — Idoneità alla borsa di studio', place: 'Istituto Nazionale di Alta Matematica', desc: 'Idoneità a borsa di studio per l\'iscrizione al corso di laurea in Matematica.' },
    { date: '2014 — 2018', title: 'Olimpiadi della Matematica UMI', place: 'Unione Matematica Italiana', desc: 'Qualificazioni distrettuali e nazionali.' },
    { date: '2017', title: 'Campus "Teoria dei giochi e reti neurali"', place: 'Marina di Massa', desc: 'Settimana intensiva di formazione su game theory applicata.' },
    { date: '2020 — 2022', title: 'Seminari "Fuori Orario" — Unimi', place: 'Speaker', desc: 'Interventi su Dobble e geometria combinatoria (2020) e su teoria delle trecce e topologia algebrica (2022).' }
  ],
  en: [
    { date: '2018 — 2024', title: 'Bachelor\'s degree in Mathematics', place: 'University of Milan', desc: 'Algebra, analysis, geometry, foundations.' },
    { date: '2024 — present', title: 'Master\'s degree in Mathematics · Ongoing', place: 'University of Milan', desc: 'Logic-algebra track. Working on combinatorial structures and formal verification.' },
    { date: '2018', title: 'INDAM — Scholarship eligibility', place: 'National Institute of Higher Mathematics', desc: 'Eligibility for a scholarship toward enrolment in the Mathematics degree.' },
    { date: '2014 — 2018', title: 'Italian Mathematical Olympiad (UMI)', place: 'Italian Mathematical Union', desc: 'District and national qualifications.' },
    { date: '2017', title: 'Campus "Game theory and neural networks"', place: 'Marina di Massa', desc: 'Intensive week of training in applied game theory.' },
    { date: '2020 — 2022', title: 'Seminars "Fuori Orario" — Unimi', place: 'Speaker', desc: 'Talks on Dobble and combinatorial geometry (2020) and on braid theory and algebraic topology (2022).' }
  ]
};

const formazioneTeo = {
  it: [
    { date: '2016 — 2021', title: 'Scuola di Teologia per Laici', place: 'Decanato Seregno-Seveso', desc: 'Percorso pluriennale di formazione teologica sistematica.' },
    { date: '02/2025 — 09/2025', title: 'Esami di Liturgia 1 e 2', place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano', desc: '12 CFU. Approfondimento liturgico-sacramentale.' },
    { date: 'Giugno 2026', title: 'Convegno "La Camera Alta" — liturgia, architettura e arte', place: 'Una chiesa che pensa gli spazi', desc: 'Partecipazione al primo convegno su liturgia, architettura e arte. Tra i relatori: Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi.' }
  ],
  en: [
    { date: '2016 — 2021', title: 'School of Theology for Laypeople', place: 'Seregno-Seveso Deanery', desc: 'A multi-year path of systematic theological training.' },
    { date: '02/2025 — 09/2025', title: 'Liturgy 1 and 2 exams', place: 'Theological Faculty of Northern Italy, Milan', desc: '12 ECTS. Liturgical-sacramental study.' },
    { date: 'June 2026', title: 'Conference "La Camera Alta" — liturgy, architecture and art', place: 'A church that thinks its spaces', desc: 'Attendance at the first conference on liturgy, architecture and art. Speakers included Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi.' }
  ]
};

const esperienzePastorali = {
  it: [
    { date: '2019 — 2028', title: 'Animazione e coordinamento comunitario', place: 'Comunità Pastorale San Giovanni Paolo II, Seregno', desc: 'Consigliere e membro di Giunta del Consiglio di Comunità Pastorale (due mandati).' },
    { date: '2020 — 2021', title: 'Percorso di Dialogo Interreligioso', place: 'Diocesi di Milano · Centro Islamico di Saronno', desc: 'Cammino di dialogo interreligioso promosso dalla Diocesi di Milano insieme al Centro Islamico di Saronno.' },
    { date: '2021 — 2024', title: 'Tavoli ecclesiali regionali e diocesani', place: 'Conferenza Episcopale Lombarda · Diocesi di Milano', desc: 'Tavolo di Lavoro Giovani e Vescovi — Commissione Regionale Riti, CEL (2021–2024). Tavolo diocesano Movimenti e Associazioni — Consulta giovanile della Diocesi di Milano (2021).' },
    { date: 'Settembre 2024', title: 'Delegato CEI — 53° Congresso Eucaristico Internazionale', place: 'Quito, Ecuador', desc: 'Laico delegato della Conferenza Episcopale Italiana al Congresso Eucaristico Internazionale.' },
    { date: '2017 →', title: 'Educatore in oratorio', place: 'Comunità Pastorale, Seregno', desc: 'Animazione ed educazione nei percorsi giovanili dell\'oratorio.' }
  ],
  en: [
    { date: '2019 — 2028', title: 'Community leadership and coordination', place: 'St. John Paul II Pastoral Community, Seregno', desc: 'Councillor and board member of the Pastoral Community Council (two terms).' },
    { date: '2020 — 2021', title: 'Interreligious Dialogue programme', place: 'Archdiocese of Milan · Islamic Centre of Saronno', desc: 'A path of interreligious dialogue promoted by the Archdiocese of Milan together with the Islamic Centre of Saronno.' },
    { date: '2021 — 2024', title: 'Regional and diocesan church working groups', place: 'Lombard Episcopal Conference · Archdiocese of Milan', desc: 'Youth and Bishops Working Group — Regional Rites Commission, CEL (2021–2024). Diocesan Movements and Associations group — Youth Council of the Archdiocese of Milan (2021).' },
    { date: 'September 2024', title: 'CEI delegate — 53rd International Eucharistic Congress', place: 'Quito, Ecuador', desc: 'Lay delegate of the Italian Episcopal Conference at the International Eucharistic Congress.' },
    { date: '2017 →', title: 'Youth educator (oratory)', place: 'Pastoral Community, Seregno', desc: 'Leadership and education in the oratory\'s youth programmes.' }
  ]
};

const graficaDesign = {
  it: [
    { date: '2015 — 2017', title: 'Direzione editoriale e immagine — MAJOtivù', place: 'Coordinamento redazione · Identità visiva', desc: 'Coordinatore della redazione MAJOtivù: durante la direzione l\'attività si è aggiudicata diversi bandi europei, per alcune decine di migliaia di euro, reinvestiti nel potenziamento della strumentazione. Identità visiva, composizione editoriale e branding come pratica continuativa. Strumenti: Figma, Illustrator, InDesign, After Effects, Cinema 4D.' }
  ],
  en: [
    { date: '2015 — 2017', title: 'Editorial direction and visual identity — MAJOtivù', place: 'Editorial coordination · Visual identity', desc: 'Coordinator of the MAJOtivù editorial team: during this period the project won several European grants, for some tens of thousands of euros, reinvested in upgrading equipment. Visual identity, editorial layout and branding as ongoing practice. Tools: Figma, Illustrator, InDesign, After Effects, Cinema 4D.' }
  ]
};

const leads = {
  matematica: {
    it: 'La matematica come pratica del pensiero: dalla logica algebrica alla combinatoria, passando per i giochi olimpici e i seminari interni di Unimi.',
    en: 'Mathematics as a practice of thought: from algebraic logic to combinatorics, through olympiad problems and the internal seminars at Unimi.'
  },
  teologia: {
    it: 'Un percorso parallelo, dentro la teologia sistematica e la liturgia. Stesso rigore, oggetto diverso.',
    en: 'A parallel path, within systematic theology and liturgy. The same rigor, a different object.'
  },
  pastorale: {
    it: 'Comunità, gruppi, accompagnamento. Il pensiero teologico passa attraverso le persone, sempre.',
    en: 'Communities, groups, accompaniment. Theological thought always passes through people.'
  },
  grafica: {
    it: 'Il segno come forma di pensiero. Tipografia, composizione, identità.',
    en: 'The mark as a form of thought. Typography, composition, identity.'
  }
};

const europassLabel = {
  it: { text: 'CV completo formato Europass →', link: 'scarica PDF (IT)' },
  en: { text: 'Full CV in Europass format →', link: 'download PDF (IT)' }
};

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
  const L = (obj) => obj[locale] || obj.it;

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} aria-label="Index">
        {sidebarLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`}>{t(`chiSono.${l.key}`)}</a>
        ))}
      </aside>

      <main className={styles.main}>
        <section id="intro" className={styles.section} style={{ marginTop: 0 }}>
          <h1 className={styles.title}>{t('chiSono.title')}</h1>
          <p className={styles.bio}>{t('chiSono.bio')}</p>

          <div className={styles.cvBlock}>
            <p className={styles.cvBlockText}>{t('chiSono.cvLinkBlock')}</p>
            <Link href={`${prefix}/curriculum`} className={styles.cvBlockCta}>
              {t('chiSono.cvLinkCta')}
            </Link>
            <p className={styles.cvEuropass}>
              {L(europassLabel).text} <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer">{L(europassLabel).link}</a>
            </p>
          </div>
        </section>

        <section id="matematica" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.formazioneMat')}</h2>
          <p className={styles.sectionLead}>{L(leads.matematica)}</p>
          <StaggeredList className={styles.list}>
            {L(formazioneMat).map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/matematica`} className={styles.detailCta}>
            {t('ambiti.matematica')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="teologia" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.formazioneTeo')}</h2>
          <p className={styles.sectionLead}>{L(leads.teologia)}</p>
          <StaggeredList className={styles.list}>
            {L(formazioneTeo).map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/teologia`} className={styles.detailCta}>
            {t('ambiti.teologia')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="pastorali" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.esperienzePast')}</h2>
          <p className={styles.sectionLead}>{L(leads.pastorale)}</p>
          <StaggeredList className={styles.list}>
            {L(esperienzePastorali).map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/pastorale`} className={styles.detailCta}>
            {t('ambiti.pastorale')} — {t('ambiti.detailLink')}
          </Link>
        </section>

        <section id="grafica" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('chiSono.graficaDesign')}</h2>
          <p className={styles.sectionLead}>{L(leads.grafica)}</p>
          <StaggeredList className={styles.list}>
            {L(graficaDesign).map((e, i) => (
              <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
            ))}
          </StaggeredList>
          <Link href={`${prefix}/chi-sono/grafica`} className={styles.detailCta}>
            {t('ambiti.grafica')} — {t('ambiti.detailLink')}
          </Link>
        </section>
      </main>
    </div>
  );
}
