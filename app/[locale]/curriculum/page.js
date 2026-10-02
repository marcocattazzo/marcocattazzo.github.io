import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import TypedRoles from '../../../components/TypedRoles';
import { socialList } from '../../../components/SocialIcons';
import styles from './cv.module.css';

export const metadata = {
  title: "Curriculum — Marco Cattazzo"
};

// Fonte: archivio "Core_Carriera" (ottobre 2026).
// Gerarchia: in primo piano il profilo matematico (campi, formazione, ricerca);
// gli altri aspetti stanno in schede chiuse, da aprire per approfondire.
// Regole: nessuna data di iscrizione; della parte ecclesiale solo incarichi istituzionali.

const ui = {
  it: {
    role: 'Matematico',
    area: 'Monza e Brianza',
    roles: ['Matematico', 'Problem Solver', 'Formatore', 'Coordinatore'],
    site: '← Sito',
    contact: 'Contatti',
    nav: { profilo: 'Profilo', campi: 'Campi', formazione: 'Formazione', ricerca: 'Ricerca', altro: 'Oltre la matematica' },
    profileText: 'Matematico, con una formazione in logica, informatica teorica e ricerca operativa all\'Università degli Studi di Milano. Mi interessano i problemi che chiedono rigore — formali, organizzativi, formativi — e il passaggio dai risultati teorici a metodi che funzionano, con attenzione a ciò che il modello non sta dicendo. Accanto alla matematica: anni di insegnamento, incarichi di rappresentanza a livello cittadino, regionale e nazionale, studi teologici e una pratica di comunicazione visiva.',
    fieldsTitle: 'Campi della matematica',
    fieldsLead: 'Le aree in cui mi sono formato, e dove servono fuori dall\'università.',
    eduTitle: 'Formazione',
    toolsTitle: 'Strumenti',
    langTitle: 'Lingue',
    researchTitle: 'Ricerca e progetti',
    moreTitle: 'Oltre la matematica',
    moreLead: 'Gli altri fili del percorso. Apri una scheda per approfondire.',
    detailMat: 'Tutte le competenze matematiche →'
  },
  en: {
    role: 'Mathematician',
    area: 'Monza and Brianza, Italy',
    roles: ['Mathematician', 'Problem Solver', 'Trainer', 'Coordinator'],
    site: '← Site',
    contact: 'Contact',
    nav: { profilo: 'Profile', campi: 'Fields', formazione: 'Education', ricerca: 'Research', altro: 'Beyond mathematics' },
    profileText: 'Mathematician, trained in logic, theoretical computer science and operations research at the University of Milan. I am drawn to problems that demand rigour — formal, organisational, educational — and to turning theoretical results into methods that work, with attention to what the model is not saying. Alongside mathematics: years of teaching, representative roles at city, regional and national level, theological studies and a practice of visual communication.',
    fieldsTitle: 'Fields of mathematics',
    fieldsLead: 'The areas I trained in, and where they are useful outside university.',
    eduTitle: 'Education',
    toolsTitle: 'Tools',
    langTitle: 'Languages',
    researchTitle: 'Research and projects',
    moreTitle: 'Beyond mathematics',
    moreLead: 'The other threads of the path. Open a card to read more.',
    detailMat: 'All mathematical skills →'
  }
};

const facts = {
  it: [
    { k: 'Laurea magistrale', v: 'In corso — logica, informatica teorica, ricerca operativa' },
    { k: 'Dal 2018', v: 'Allenatore delle Olimpiadi della Matematica' },
    { k: '2021 · 2022', v: 'Progetti internazionali 4EU+, Charles University' },
    { k: '2026', v: 'NewMa — machine learning per il canto gregoriano' }
  ],
  en: [
    { k: 'Master\'s degree', v: 'Ongoing — logic, theoretical CS, operations research' },
    { k: 'Since 2018', v: 'Mathematical Olympiad coach' },
    { k: '2021 · 2022', v: '4EU+ international projects, Charles University' },
    { k: '2026', v: 'NewMa — machine learning for Gregorian chant' }
  ]
};

const fields = {
  it: [
    { name: 'Logica e ragionamento automatico', use: 'Verifica formale di hardware e software, AI simbolica.', tags: ['Logica matematica', 'Teoria dei modelli', 'Logica algebrica e categoriale', 'SAT/SMT e dimostrazione automatica'] },
    { name: 'Informatica teorica', use: 'Che cosa si può calcolare, a quale costo, con quale linguaggio.', tags: ['Calcolabilità', 'Complessità computazionale', 'Automi e linguaggi formali'] },
    { name: 'Ricerca operativa e ottimizzazione', use: 'Logistica, pianificazione, scheduling, supporto alle decisioni.', tags: ['Programmazione lineare e intera', 'Ottimizzazione combinatoria e grafi', 'Teoria dei giochi', 'Decisioni multi-obiettivo'] },
    { name: 'Probabilità e modelli stocastici', use: 'Analisi del rischio, simulazione, sistemi con code e attese.', tags: ['Processi stocastici', 'Catene di Markov', 'Teoria delle code', 'Simulazione'] },
    { name: 'Algebra, geometria e topologia', use: 'Il linguaggio delle strutture: codici, crittografia, modellazione astratta.', tags: ['Algebra e teoria di Galois', 'Teoria delle categorie', 'Geometria proiettiva', 'Topologia algebrica'] },
    { name: 'Analisi e modelli continui', use: 'Modelli fisici e ingegneristici, metodi numerici.', tags: ['Analisi reale e complessa', 'Equazioni differenziali', 'Fisica matematica', 'Calcolo numerico'] }
  ],
  en: [
    { name: 'Logic and automated reasoning', use: 'Formal verification of hardware and software, symbolic AI.', tags: ['Mathematical logic', 'Model theory', 'Algebraic and categorical logic', 'SAT/SMT and automated proving'] },
    { name: 'Theoretical computer science', use: 'What can be computed, at what cost, in which language.', tags: ['Computability', 'Computational complexity', 'Automata and formal languages'] },
    { name: 'Operations research and optimization', use: 'Logistics, planning, scheduling, decision support.', tags: ['Linear and integer programming', 'Combinatorial optimization and graphs', 'Game theory', 'Multi-objective decisions'] },
    { name: 'Probability and stochastic models', use: 'Risk analysis, simulation, queueing systems.', tags: ['Stochastic processes', 'Markov chains', 'Queueing theory', 'Simulation'] },
    { name: 'Algebra, geometry and topology', use: 'The language of structures: codes, cryptography, abstract modelling.', tags: ['Algebra and Galois theory', 'Category theory', 'Projective geometry', 'Algebraic topology'] },
    { name: 'Analysis and continuous models', use: 'Physical and engineering models, numerical methods.', tags: ['Real and complex analysis', 'Differential equations', 'Mathematical physics', 'Numerical computing'] }
  ]
};

const formazione = {
  it: [
    { date: 'In corso', title: 'Laurea magistrale in Matematica', place: 'Università degli Studi di Milano', desc: 'Indirizzo in logica, informatica teorica e ricerca operativa.' },
    { date: '2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano' },
    { date: '2018', title: 'Idoneità INdAM', place: 'Istituto Nazionale di Alta Matematica' },
    { date: '2018', title: 'Diploma di liceo scientifico', place: 'Liceo «E. Majorana», Desio', desc: 'Finalista nazionale alle Olimpiadi della Matematica, individuale (2017) e a squadre (2018); Campus Lagrange (2017).' }
  ],
  en: [
    { date: 'Ongoing', title: 'Master\'s degree in Mathematics', place: 'University of Milan', desc: 'Focus on logic, theoretical computer science and operations research.' },
    { date: '2024', title: 'Bachelor\'s degree in Mathematics', place: 'University of Milan' },
    { date: '2018', title: 'INdAM eligibility', place: 'National Institute of Higher Mathematics' },
    { date: '2018', title: 'Scientific high-school diploma', place: 'Liceo "E. Majorana", Desio', desc: 'National finalist at the Mathematical Olympiad, individual (2017) and team (2018); Campus Lagrange (2017).' }
  ]
};

const tools = ['Python (NumPy, SciPy, OpenCV)', 'PyTorch', 'C', 'MATLAB', 'LaTeX · TikZ'];
const languages = {
  it: [['Italiano', 'madrelingua'], ['Inglese', 'C1'], ['Spagnolo', 'B1'], ['Latino', 'lettura']],
  en: [['Italian', 'native'], ['English', 'C1'], ['Spanish', 'B1'], ['Latin', 'reading']]
};

const ricerca = {
  it: [
    { year: '2026', title: 'NewMa', sub: 'Riconoscimento automatico della notazione gregoriana', desc: 'Pipeline geometrica e modello CNN + BiLSTM + CTC su 2.508 neumi annotati a mano: 77,1% di trascrizioni esatte su dati mai visti.', href: '/lavoro/newma' },
    { year: '2026', title: 'Majo\'s Contest Manager', sub: 'Software per le gare a squadre', desc: 'Applicazione Python per gestire le gare a squadre di allenamento alle Olimpiadi della Matematica.' },
    { year: '2022', title: 'Letters from Whitechapel', sub: '4EU+ · Charles University, Praga', desc: 'Un gioco di inseguimento su due grafi collegati, analizzato con un team internazionale.' },
    { year: '2021', title: 'Isoperimetric Inequality', sub: '4EU+ · Charles University, Praga', desc: 'Progetto internazionale sulla disuguaglianza isoperimetrica.' }
  ],
  en: [
    { year: '2026', title: 'NewMa', sub: 'Automatic recognition of Gregorian notation', desc: 'Geometric pipeline and CNN + BiLSTM + CTC model on 2,508 hand-annotated neumes: 77.1% exact transcriptions on unseen data.', href: '/lavoro/newma' },
    { year: '2026', title: 'Majo\'s Contest Manager', sub: 'Software for team contests', desc: 'A Python application to run Mathematical Olympiad team training contests.' },
    { year: '2022', title: 'Letters from Whitechapel', sub: '4EU+ · Charles University, Prague', desc: 'A pursuit game on two linked graphs, analysed with an international team.' },
    { year: '2021', title: 'Isoperimetric Inequality', sub: '4EU+ · Charles University, Prague', desc: 'International project on the isoperimetric inequality.' }
  ]
};

// Schede chiuse: gli altri aspetti del percorso.
const altro = {
  it: [
    {
      id: 'insegnamento', title: 'Insegnamento e divulgazione', hook: 'Dal 2018 alleno le squadre delle Olimpiadi della Matematica.',
      items: [
        { date: 'Dal 2018', title: 'Allenatore delle Olimpiadi della Matematica', place: 'Liceo «E. Majorana», Desio', desc: 'Con un gruppo di 5–6 tutor, per 30–100 studenti l\'anno. Squadre in finale nazionale (2019, 2020, 2023) e in semifinale (2022, 2024–2026); finalisti individuali (2019, 2020, 2022).' },
        { date: '2021 — 2022', title: 'Docente di matematica e fisica', place: 'Collegio Villoresi, Monza', desc: 'Corso di preparazione al SAT (2023).' },
        { date: '2024', title: 'Corsi di recupero di matematica', place: 'Liceo «E. Majorana», Desio' },
        { date: '2022', title: '«Topologia algebrica con le mani — corde e trecce»', place: 'Fuori Orario High School · Università degli Studi di Milano', href: '/intrecci/matematica/teoria-delle-trecce' },
        { date: '2020', title: '«Chi ha rubato le carte di Dobble?»', place: 'Fuori Orario · Università degli Studi di Milano', desc: 'La regola del gioco come assioma di un piano proiettivo finito.', href: '/lavoro/dobble' }
      ],
      links: [{ href: '/chi-sono#didattica', label: 'Chi sono — Insegnamento →' }]
    },
    {
      id: 'rappresentanza', title: 'Leadership e rappresentanza', hook: 'Incarichi elettivi e di nomina, dalla scuola a una delegazione nazionale.',
      items: [
        { date: '2024', title: 'Delegato laico della Conferenza Episcopale Italiana', place: '53° Congresso Eucaristico Internazionale, Quito', desc: 'Uno dei 5 delegati nazionali.' },
        { date: '2021 — 2024', title: 'Commissione «Riti», tavolo «Giovani e Vescovi»', place: 'Conferenza Episcopale Lombarda', desc: '200 giovani e 14 vescovi da 10 diocesi.' },
        { date: 'Dal 2019', title: 'Consigliere e membro di Giunta', place: 'Comunità Pastorale San Giovanni Paolo II, Seregno', desc: '6 parrocchie, circa 47.000 abitanti; 2 mandati.' },
        { date: '2021 — 2023', title: 'Rappresentante degli studenti', place: 'Consiglio di Dipartimento di Matematica, Università degli Studi di Milano', desc: '2 mandati.' },
        { date: '2017', title: 'Rappresentante degli studenti', place: 'Consiglio d\'Istituto, Liceo «E. Majorana», Desio' }
      ],
      links: [{ href: '/chi-sono/rappresentanza', label: 'Rappresentanza e incarichi →' }]
    },
    {
      id: 'teologia', title: 'Formazione teologica', hook: 'Un secondo percorso di studio, accanto alla matematica.',
      items: [
        { date: '2026', title: 'Convegno «La Camera Alta»', place: 'Monastero di Fonte Avellana', desc: 'Liturgia, architettura e arte.' },
        { date: '2025', title: 'Esami di Liturgia I e II', place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano' },
        { date: '6 anni', title: 'Scuola di teologia per laici', place: 'Seminario Arcivescovile di Milano, Decanato di Seregno-Seveso' }
      ],
      links: [{ href: '/chi-sono/teologia', label: 'Formazione teologica →' }]
    },
    {
      id: 'grafica', title: 'Comunicazione visiva', hook: 'Video, dirette, animazione e identità visive.',
      items: [
        { date: '2025', title: 'Exsultet! — coordinamento della comunicazione', place: 'Varese' },
        { date: '2015 — 2017', title: 'Coordinatore della web TV MAJOtivù', place: 'Liceo «E. Majorana», Desio', desc: 'Redazione di 10–30 studenti; attrezzature finanziate con fondi europei PON.' },
        { date: 'Strumenti', title: 'After Effects (avanzato), Photoshop, Illustrator, Premiere Pro, OBS' }
      ],
      links: [{ href: '/chi-sono/grafica', label: 'Pratica grafica →' }, { href: '/intrecci/grafica', label: 'Intrecci › Grafica →' }]
    }
  ],
  en: [
    {
      id: 'insegnamento', title: 'Teaching and outreach', hook: 'Since 2018 I have coached Mathematical Olympiad teams.',
      items: [
        { date: 'Since 2018', title: 'Mathematical Olympiad coach', place: 'Liceo "E. Majorana", Desio', desc: 'With a group of 5–6 tutors, for 30–100 students a year. Teams in the national final (2019, 2020, 2023) and semifinal (2022, 2024–2026); individual finalists (2019, 2020, 2022).' },
        { date: '2021 — 2022', title: 'Mathematics and physics teacher', place: 'Collegio Villoresi, Monza', desc: 'SAT preparation course (2023).' },
        { date: '2024', title: 'Mathematics remedial courses', place: 'Liceo "E. Majorana", Desio' },
        { date: '2022', title: '"Topologia algebrica con le mani — corde e trecce"', place: 'Fuori Orario High School · University of Milan', href: '/intrecci/matematica/teoria-delle-trecce' },
        { date: '2020', title: '"Chi ha rubato le carte di Dobble?"', place: 'Fuori Orario · University of Milan', desc: 'The rule of the game as the axiom of a finite projective plane.', href: '/lavoro/dobble' }
      ],
      links: [{ href: '/chi-sono#didattica', label: 'About — Teaching →' }]
    },
    {
      id: 'rappresentanza', title: 'Leadership and representation', hook: 'Elected and appointed roles, from school to a national delegation.',
      items: [
        { date: '2024', title: 'Lay delegate of the Italian Episcopal Conference', place: '53rd International Eucharistic Congress, Quito', desc: 'One of 5 national delegates.' },
        { date: '2021 — 2024', title: '"Rites" commission, "Youth and Bishops" programme', place: 'Lombard Episcopal Conference', desc: '200 young people and 14 bishops from 10 dioceses.' },
        { date: 'Since 2019', title: 'Council and executive board member', place: 'St. John Paul II Pastoral Community, Seregno', desc: '6 parishes, about 47,000 inhabitants; 2 terms.' },
        { date: '2021 — 2023', title: 'Student representative', place: 'Department Council of Mathematics, University of Milan', desc: '2 terms.' },
        { date: '2017', title: 'Student representative', place: 'School Council, Liceo "E. Majorana", Desio' }
      ],
      links: [{ href: '/chi-sono/rappresentanza', label: 'Representation and roles →' }]
    },
    {
      id: 'teologia', title: 'Theological training', hook: 'A second path of study, alongside mathematics.',
      items: [
        { date: '2026', title: '"La Camera Alta" conference', place: 'Monastery of Fonte Avellana', desc: 'Liturgy, architecture and art.' },
        { date: '2025', title: 'Liturgy I and II exams', place: 'Theological Faculty of Northern Italy, Milan' },
        { date: '6 years', title: 'School of theology for laypeople', place: 'Archiepiscopal Seminary of Milan, Seregno-Seveso Deanery' }
      ],
      links: [{ href: '/chi-sono/teologia', label: 'Theological training →' }]
    },
    {
      id: 'grafica', title: 'Visual communication', hook: 'Video, live streams, animation and visual identities.',
      items: [
        { date: '2025', title: 'Exsultet! — communication coordination', place: 'Varese' },
        { date: '2015 — 2017', title: 'Coordinator of the MAJOtivù web TV', place: 'Liceo "E. Majorana", Desio', desc: 'A team of 10–30 students; equipment funded through EU PON grants.' },
        { date: 'Tools', title: 'After Effects (advanced), Photoshop, Illustrator, Premiere Pro, OBS' }
      ],
      links: [{ href: '/chi-sono/grafica', label: 'Design practice →' }, { href: '/intrecci/grafica', label: 'Threads › Design →' }]
    }
  ]
};

function Rows({ items, prefix }) {
  return (
    <ol className={styles.rows}>
      {items.map((it, i) => (
        <li key={i} className={styles.row}>
          <span className={styles.rowDate}>{it.date}</span>
          <div className={styles.rowBody}>
            <div className={styles.rowTitle}>
              {it.href ? <Link href={`${prefix}${it.href}`}>{it.title}</Link> : it.title}
            </div>
            {it.place && <div className={styles.rowPlace}>{it.place}</div>}
            {it.desc && <p className={styles.rowDesc}>{it.desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default async function CurriculumPage({ params: { locale } }) {
  setRequestLocale(locale);
  const prefix = `/${locale}`;
  const socials = socialList();
  const s = ui[locale] || ui.it;
  const L = (obj) => obj[locale] || obj.it;

  const navSections = ['profilo', 'campi', 'formazione', 'ricerca', 'altro'];

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sideBrand}>
          <div className={styles.avatar}>
            <Image src="/assets/logo.png" alt="Fil d'Or" width={72} height={72} />
          </div>
          <div className={styles.sideName}>Marco Cattazzo</div>
          <div className={styles.sideRole}>{s.role}</div>
          <div className={styles.sideArea}>{s.area}</div>
        </div>

        <nav className={styles.sideNav} aria-label="Curriculum">
          {navSections.map((id) => (
            <a key={id} href={`#${id}`}>{s.nav[id]}</a>
          ))}
          <Link href={`${prefix}/contatti`}>{s.contact}</Link>
          <Link href={prefix} className={styles.sideBack}>{s.site}</Link>
        </nav>

        <div className={styles.sideSocials}>
          {socials.map(({ id, label, href, Icon }) => (
            <a key={id} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon width={18} height={18} />
            </a>
          ))}
        </div>
      </aside>

      <main className={styles.main}>
        <section id="profilo" className={styles.heroBlock}>
          <span className={styles.heroEyebrow}>Curriculum vitae</span>
          <h1 className={styles.heroName}>Marco Cattazzo</h1>
          <div className={styles.heroRoles}>
            <TypedRoles roles={s.roles} />
          </div>
          <p className={styles.profileText}>{s.profileText}</p>
          <dl className={styles.facts}>
            {L(facts).map((f) => (
              <div key={f.k} className={styles.fact}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="campi" className={styles.block} aria-labelledby="campi-h">
          <h2 id="campi-h" className={styles.blockTitle}>{s.fieldsTitle}</h2>
          <p className={styles.blockLead}>{s.fieldsLead}</p>
          <div className={styles.fieldGrid}>
            {L(fields).map((f) => (
              <article key={f.name} className={styles.fieldCard}>
                <h3 className={styles.fieldName}>{f.name}</h3>
                <p className={styles.fieldUse}>{f.use}</p>
                <ul className={styles.fieldTags}>
                  {f.tags.map((tg) => <li key={tg}>{tg}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.detailLinks}>
            <Link href={`${prefix}/chi-sono/matematica`}>{s.detailMat}</Link>
          </div>
        </section>

        <section id="formazione" className={styles.block} aria-labelledby="form-h">
          <div className={styles.split}>
            <div>
              <h2 id="form-h" className={styles.blockTitle}>{s.eduTitle}</h2>
              <Rows items={L(formazione)} prefix={prefix} />
            </div>
            <aside className={styles.toolsBox}>
              <h3 className={styles.boxTitle}>{s.toolsTitle}</h3>
              <ul className={styles.plainList}>
                {tools.map((tl) => <li key={tl}>{tl}</li>)}
              </ul>
              <h3 className={styles.boxTitle}>{s.langTitle}</h3>
              <ul className={styles.langList}>
                {L(languages).map(([lang, lvl]) => (
                  <li key={lang}><span>{lang}</span><span>{lvl}</span></li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="ricerca" className={styles.block} aria-labelledby="ric-h">
          <h2 id="ric-h" className={styles.blockTitle}>{s.researchTitle}</h2>
          <div className={styles.projGrid}>
            {L(ricerca).map((p) => {
              const inner = (
                <>
                  <span className={styles.projYear}>{p.year}</span>
                  <h3 className={styles.projTitle}>{p.title}</h3>
                  <span className={styles.projSub}>{p.sub}</span>
                  <p className={styles.projDesc}>{p.desc}</p>
                </>
              );
              return p.href ? (
                <Link key={p.title} href={`${prefix}${p.href}`} className={`${styles.projCard} ${styles.projLink}`}>{inner}</Link>
              ) : (
                <article key={p.title} className={styles.projCard}>{inner}</article>
              );
            })}
          </div>
        </section>

        <section id="altro" className={styles.block} aria-labelledby="altro-h">
          <h2 id="altro-h" className={styles.blockTitle}>{s.moreTitle}</h2>
          <p className={styles.blockLead}>{s.moreLead}</p>
          <div className={styles.more}>
            {L(altro).map((a) => (
              <details key={a.id} id={a.id} className={styles.moreItem}>
                <summary className={styles.moreSummary}>
                  <span className={styles.moreHead}>
                    <span className={styles.moreTitle}>{a.title}</span>
                    <span className={styles.moreHook}>{a.hook}</span>
                  </span>
                  <span className={styles.moreIcon} aria-hidden="true" />
                </summary>
                <div className={styles.moreBody}>
                  <Rows items={a.items} prefix={prefix} />
                  <div className={styles.moreLinks}>
                    {a.links.map((l) => (
                      <Link key={l.href} href={`${prefix}${l.href}`}>{l.label}</Link>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
