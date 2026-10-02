import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import StaggeredList, { StaggeredItem } from '../../../components/StaggeredList';
import styles from './about.module.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return { title: `${t('chiSono.title')} — Fil d'Or` };
}

// Contenuti localizzati: { it: [...], en: [...] }. Si seleziona per locale.
// Fonte: archivio "Core_Carriera" (ottobre 2026). Per la laurea si indica solo
// l'anno di conclusione della triennale e "in corso" per la magistrale.
const formazioneMat = {
  it: [
    { date: 'In corso', title: 'Laurea magistrale in Matematica', place: 'Università degli Studi di Milano', desc: 'Logica, informatica teorica, ricerca operativa.' },
    { date: '2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano', desc: 'Algebra, geometria, analisi, probabilità, fisica matematica.' },
    { date: '2021 · 2022', title: 'Progetti internazionali 4EU+', place: 'Charles University, Praga', desc: '«Isoperimetric Inequality» (2021); «The Mathematics of Letters from Whitechapel» (2022), con un team di sei studenti da Italia, Repubblica Ceca e Polonia.' },
    { date: '2018', title: 'Idoneità INdAM', place: 'Istituto Nazionale di Alta Matematica', desc: 'Idoneità alle borse di studio per l\'iscrizione al corso di laurea in Matematica.' },
    { date: '2017 · 2018', title: 'Olimpiadi della Matematica', place: 'Unione Matematica Italiana', desc: 'Finale nazionale individuale (2017) e a squadre (2018), Cesenatico.' },
    { date: '2017', title: 'Campus «Teoria dei giochi e reti neurali»', place: 'Scuola Lagrange, Marina di Massa', desc: 'Prima rete neurale, in MATLAB, addestrata con un algoritmo genetico.' }
  ],
  en: [
    { date: 'Ongoing', title: 'Master\'s degree in Mathematics', place: 'University of Milan', desc: 'Logic, theoretical computer science, operations research.' },
    { date: '2024', title: 'Bachelor\'s degree in Mathematics', place: 'University of Milan', desc: 'Algebra, geometry, analysis, probability, mathematical physics.' },
    { date: '2021 · 2022', title: '4EU+ international projects', place: 'Charles University, Prague', desc: '"Isoperimetric Inequality" (2021); "The Mathematics of Letters from Whitechapel" (2022), with a team of six students from Italy, the Czech Republic and Poland.' },
    { date: '2018', title: 'INdAM eligibility', place: 'National Institute of Higher Mathematics', desc: 'Eligibility for the scholarships reserved to students enrolling in Mathematics.' },
    { date: '2017 · 2018', title: 'Italian Mathematical Olympiad', place: 'Italian Mathematical Union', desc: 'National final, individual (2017) and team (2018), Cesenatico.' },
    { date: '2017', title: 'Campus "Game theory and neural networks"', place: 'Lagrange School, Marina di Massa', desc: 'A first neural network, in MATLAB, trained with a genetic algorithm.' }
  ]
};

const didattica = {
  it: [
    { date: 'Dal 2018', title: 'Allenatore delle Olimpiadi della Matematica', place: 'Liceo Scientifico e Classico «E. Majorana», Desio', desc: 'Squadre in finale nazionale nel 2019, 2020 e 2023 e in semifinale nel 2022, 2024, 2025 e 2026; studenti in finale individuale nel 2019, 2020 e 2022. Co-progettazione del percorso su tre livelli; dal 2026/27 un corso unico in peer education.' },
    { date: '2021 — 2022', title: 'Docente di matematica e fisica', place: 'Collegio Villoresi, Monza', desc: 'Classi con molti studenti con DSA; didattica a distanza per l\'istruzione domiciliare. Corso di preparazione al SAT (2023).' },
    { date: '2024', title: 'Corsi di recupero di matematica', place: 'Liceo «E. Majorana», Desio', desc: '' },
    { date: '2020 · 2022', title: 'Seminari «Fuori Orario»', place: 'Università degli Studi di Milano', desc: '«Chi ha rubato le carte di Dobble?» (2020); «Topologia algebrica con le mani — corde e trecce», per studenti delle superiori (2022).' },
    { date: 'In corso', title: 'Lezioni private', place: 'Matematica e fisica', desc: 'Scuola superiore e università; preparazione ai test di ammissione di Normale, Sant\'Anna e Galileiana.' }
  ],
  en: [
    { date: 'Since 2018', title: 'Mathematical Olympiad coach', place: 'Liceo Scientifico e Classico "E. Majorana", Desio', desc: 'Teams in the national final in 2019, 2020 and 2023 and in the semifinal in 2022, 2024, 2025 and 2026; students in the individual final in 2019, 2020 and 2022. Co-designed the three-tier programme; from 2026/27 a single peer-education course.' },
    { date: '2021 — 2022', title: 'Mathematics and physics teacher', place: 'Collegio Villoresi, Monza', desc: 'Classes with many students with learning disorders; remote teaching for home-schooled students. SAT preparation course (2023).' },
    { date: '2024', title: 'Mathematics remedial courses', place: 'Liceo "E. Majorana", Desio', desc: '' },
    { date: '2020 · 2022', title: '"Fuori Orario" seminars', place: 'University of Milan', desc: '"Who stole the Dobble cards?" (2020); "Algebraic topology by hand — strings and braids", for high-school students (2022).' },
    { date: 'Ongoing', title: 'Private tutoring', place: 'Mathematics and physics', desc: 'High school and university; preparation for the admission exams of the Scuola Normale, Sant\'Anna and Galileiana.' }
  ]
};

const formazioneTeo = {
  it: [
    { date: '6 anni', title: 'Scuola di teologia per laici', place: 'Seminario Arcivescovile di Milano — Decanato di Seregno-Seveso', desc: 'Sacra Scrittura, antropologia teologica, teologia sistematica, ecclesiologia e sacramenti, teologia morale, anno monografico.' },
    { date: '2025', title: 'Esami di Liturgia I e II', place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano', desc: 'Storia e teologia della riforma liturgica conciliare; teologia dei sacramenti a partire dalla forma rituale.' },
    { date: 'Giugno 2026', title: 'Convegno «La Camera Alta»', place: 'Monastero di Fonte Avellana', desc: 'Partecipazione al primo convegno su liturgia, architettura e arte, «Una Chiesa che pensa gli spazi». Tra i relatori: Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi.' }
  ],
  en: [
    { date: '6 years', title: 'School of theology for laypeople', place: 'Archiepiscopal Seminary of Milan — Seregno-Seveso Deanery', desc: 'Sacred Scripture, theological anthropology, systematic theology, ecclesiology and sacraments, moral theology, monographic year.' },
    { date: '2025', title: 'Liturgy I and II exams', place: 'Theological Faculty of Northern Italy, Milan', desc: 'History and theology of the conciliar liturgical reform; theology of the sacraments starting from their ritual form.' },
    { date: 'June 2026', title: 'Conference "La Camera Alta"', place: 'Monastery of Fonte Avellana', desc: 'Attended the first conference on liturgy, architecture and art, "A Church that thinks its spaces". Speakers included Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi.' }
  ]
};

const rappresentanza = {
  it: [
    { date: 'Settembre 2024', title: 'Delegato laico della Conferenza Episcopale Italiana', place: '53° Congresso Eucaristico Internazionale, Quito', desc: 'Uno dei 5 delegati nazionali, nella prima delegazione CEI aperta ai laici.' },
    { date: '2021 — 2024', title: 'Commissione «Riti», tavolo «Giovani e Vescovi»', place: 'Conferenza Episcopale Lombarda', desc: 'Percorso sinodale con 200 giovani e 14 vescovi delle 10 diocesi lombarde.' },
    { date: 'Dal 2019', title: 'Consigliere e membro di Giunta', place: 'Comunità Pastorale San Giovanni Paolo II, Seregno', desc: 'Due mandati. Una comunità di 6 parrocchie e circa 47.000 abitanti; un consiglio di oltre 40 membri.' },
    { date: '2021 — 2023', title: 'Rappresentante degli studenti', place: 'Consiglio di Dipartimento di Matematica, Università degli Studi di Milano', desc: 'Due mandati consecutivi.' },
    { date: '2017', title: 'Rappresentante degli studenti', place: 'Consiglio d\'Istituto, Liceo «E. Majorana», Desio', desc: '' }
  ],
  en: [
    { date: 'September 2024', title: 'Lay delegate of the Italian Episcopal Conference', place: '53rd International Eucharistic Congress, Quito', desc: 'One of 5 national delegates, in the first CEI delegation open to lay members.' },
    { date: '2021 — 2024', title: '"Rites" commission, "Youth and Bishops" programme', place: 'Lombard Episcopal Conference', desc: 'A synodal process with 200 young people and 14 bishops from the 10 Lombard dioceses.' },
    { date: 'Since 2019', title: 'Council and executive board member', place: 'St. John Paul II Pastoral Community, Seregno', desc: 'Two terms. A community of 6 parishes and about 47,000 inhabitants; a council of more than 40 members.' },
    { date: '2021 — 2023', title: 'Student representative', place: 'Department Council of Mathematics, University of Milan', desc: 'Two consecutive terms.' },
    { date: '2017', title: 'Student representative', place: 'School Council, Liceo "E. Majorana", Desio', desc: '' }
  ]
};

const graficaDesign = {
  it: [
    { date: '2015 — 2017', title: 'Coordinatore della redazione — MAJOtivù', place: 'Web TV degli studenti, Liceo «E. Majorana», Desio', desc: 'Redazione di 10–30 studenti volontari: identità grafica per ogni format, video, dirette, podcast e stampa. Attrezzature acquistate con fondi europei PON.' },
    { date: '2025', title: 'Comunicazione coordinata — Exsultet! 2025', place: 'Festival di musica liturgica, Varese', desc: 'Estensione dell\'identità visiva esistente ai nuovi materiali; trattamento delle immagini dei relatori.' },
    { date: 'Dal 2017', title: 'Dirette, animazione e motion graphics', place: 'OBS Studio · Adobe After Effects · Adobe Animate', desc: 'Regia della diretta per l\'intitolazione dell\'Aula Magna «G. Ambrosoli» (2017); animazioni disegnate a mano; grafiche e magliette per la squadra delle Olimpiadi (2019–2026).' }
  ],
  en: [
    { date: '2015 — 2017', title: 'Editorial coordinator — MAJOtivù', place: 'Student web TV, Liceo "E. Majorana", Desio', desc: 'A team of 10–30 student volunteers: a visual identity for each format, videos, live streams, podcasts and print. Equipment purchased with EU PON funds.' },
    { date: '2025', title: 'Coordinated communication — Exsultet! 2025', place: 'Liturgical music festival, Varese', desc: 'Extended the existing visual identity to new materials; treated the speakers\' images.' },
    { date: 'Since 2017', title: 'Live streaming, animation and motion graphics', place: 'OBS Studio · Adobe After Effects · Adobe Animate', desc: 'Directed the live stream of the naming ceremony of the "G. Ambrosoli" Main Hall (2017); hand-drawn animation; graphics and T-shirts for the Olympiad team (2019–2026).' }
  ]
};

const leads = {
  matematica: {
    it: 'La matematica come pratica del pensiero: logica, informatica teorica e ottimizzazione, con due progetti internazionali e le gare olimpiche alle spalle.',
    en: 'Mathematics as a practice of thought: logic, theoretical computer science and optimization, with two international projects and olympiad competitions behind it.'
  },
  didattica: {
    it: 'Insegnare la matematica come un metodo: esplorare, congetturare, dimostrare, scrivere con rigore.',
    en: 'Teaching mathematics as a method: explore, conjecture, prove, write with rigor.'
  },
  teologia: {
    it: 'Un percorso parallelo, dentro la teologia sistematica e la liturgia. Stesso rigore, oggetto diverso.',
    en: 'A parallel path, within systematic theology and liturgy. The same rigor, a different object.'
  },
  rappresentanza: {
    it: 'Incarichi elettivi e di nomina che crescono di livello, dalla scuola alla delegazione nazionale. Il tratto comune: far lavorare insieme gruppi eterogenei e arrivare a decisioni condivise.',
    en: 'Elected and appointed roles growing in scope, from school to a national delegation. The common thread: getting heterogeneous groups to work together and reach shared decisions.'
  },
  grafica: {
    it: 'Il segno come forma di pensiero. Identità visive, video, dirette.',
    en: 'The mark as a form of thought. Visual identities, video, live streams.'
  }
};

const sidebarLinks = [
  { id: 'intro', key: 'intro' },
  { id: 'matematica', key: 'formazioneMat' },
  { id: 'didattica', key: 'didattica' },
  { id: 'teologia', key: 'formazioneTeo' },
  { id: 'rappresentanza', key: 'rappresentanza' },
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

function Section({ id, title, lead, entries, detailHref, detailLabel, styles: s }) {
  return (
    <section id={id} className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      <p className={s.sectionLead}>{lead}</p>
      <StaggeredList className={s.list}>
        {entries.map((e, i) => (
          <StaggeredItem key={i}><Entry entry={e} /></StaggeredItem>
        ))}
      </StaggeredList>
      {detailHref && (
        <Link href={detailHref} className={s.detailCta}>{detailLabel}</Link>
      )}
    </section>
  );
}

export default async function ChiSonoPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const prefix = `/${locale}`;
  const L = (obj) => obj[locale] || obj.it;
  const detail = (key) => `${t(`ambiti.${key}`)} — ${t('ambiti.detailLink')}`;

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
          </div>
        </section>

        <Section
          id="matematica" styles={styles}
          title={t('chiSono.formazioneMat')} lead={L(leads.matematica)} entries={L(formazioneMat)}
          detailHref={`${prefix}/chi-sono/matematica`} detailLabel={detail('matematica')}
        />
        <Section
          id="didattica" styles={styles}
          title={t('chiSono.didattica')} lead={L(leads.didattica)} entries={L(didattica)}
        />
        <Section
          id="teologia" styles={styles}
          title={t('chiSono.formazioneTeo')} lead={L(leads.teologia)} entries={L(formazioneTeo)}
          detailHref={`${prefix}/chi-sono/teologia`} detailLabel={detail('teologia')}
        />
        <Section
          id="rappresentanza" styles={styles}
          title={t('chiSono.rappresentanza')} lead={L(leads.rappresentanza)} entries={L(rappresentanza)}
          detailHref={`${prefix}/chi-sono/rappresentanza`} detailLabel={detail('rappresentanza')}
        />
        <Section
          id="grafica" styles={styles}
          title={t('chiSono.graficaDesign')} lead={L(leads.grafica)} entries={L(graficaDesign)}
          detailHref={`${prefix}/chi-sono/grafica`} detailLabel={detail('grafica')}
        />
      </main>
    </div>
  );
}
