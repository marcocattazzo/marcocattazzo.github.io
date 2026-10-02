import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import TypedRoles from '../../../components/TypedRoles';
import { socialList } from '../../../components/SocialIcons';
import { getAllProjects } from '../../../lib/mdx';
import styles from './cv.module.css';

export const metadata = {
  title: "Curriculum — Marco Cattazzo"
};

// Fonte: archivio "Core_Carriera" (ottobre 2026).
// Regole: nessuna data di iscrizione; competenze per ambito e uso, non per esame;
// della parte ecclesiale compaiono solo gli incarichi istituzionali.

const ui = {
  it: {
    role: 'Matematica · logica, verifica, ottimizzazione',
    roles: ['Matematico', 'Problem Solver', 'Formatore', 'Coordinatore'],
    site: '← Sito',
    about: 'Profilo',
    skills: 'Competenze',
    resume: 'Percorso',
    leadership: 'Leadership e rappresentanza',
    projects: 'Progetti',
    talks: 'Talks',
    education: 'Formazione',
    experience: 'Esperienza',
    aboutText: 'Matematico con una formazione in logica, ragionamento automatico e ottimizzazione. Imparo in fretta sistemi complessi, formalizzo problemi nuovi e mi assumo la responsabilità della loro correttezza. Lavoro bene come ponte: tra teoria e pratica, trasformando risultati della letteratura in metodi e protocolli, e tra persone con background diversi. Faccio attenzione allo scarto tra il modello e la realtà, e documento dove un modello fallisce invece di nasconderlo. Anni di insegnamento mi hanno allenato a spiegare idee complesse attraverso modelli chiari.',
    infoArea: 'Area', infoAreaVal: 'Monza e Brianza',
    infoContact: 'Contatto', infoLanguages: 'Lingue',
    infoLanguagesVal: 'Italiano · Inglese C1 · Spagnolo B1',
    detail: 'Dettagli →',
    detMat: 'Competenze matematiche', detTeo: 'Formazione teologica',
    detRapp: 'Rappresentanza e incarichi', detGraf: 'Pratica grafica'
  },
  en: {
    role: 'Mathematics · logic, verification, optimization',
    roles: ['Mathematician', 'Problem Solver', 'Trainer', 'Coordinator'],
    site: '← Site',
    about: 'Profile',
    skills: 'Skills',
    resume: 'Path',
    leadership: 'Leadership and representation',
    projects: 'Projects',
    talks: 'Talks',
    education: 'Education',
    experience: 'Experience',
    aboutText: 'Mathematician with a background in logic, automated reasoning and optimization. I learn complex systems quickly, model new problems formally and take responsibility for their correctness. I work best as a bridge: between theory and practice, turning results from the literature into working methods and protocols, and between people with different backgrounds. I pay attention to the gap between a model and reality, and I document where a model fails instead of hiding it. Years of teaching have trained me to explain complex ideas through clear models.',
    infoArea: 'Area', infoAreaVal: 'Monza and Brianza, Italy',
    infoContact: 'Contact', infoLanguages: 'Languages',
    infoLanguagesVal: 'Italian · English C1 · Spanish B1',
    detail: 'Details →',
    detMat: 'Mathematical skills', detTeo: 'Theological training',
    detRapp: 'Representation and roles', detGraf: 'Design practice'
  }
};

const skills = {
  it: [
    { area: 'Logica e verifica formale', use: 'Verifica e validazione di hardware e software, analisi di correttezza.', tags: ['SAT/SMT solving', 'DPLL(T)', 'Superposition e riscrittura', 'Teoria dei modelli', 'Calcolabilità e complessità', 'Automi e linguaggi formali'] },
    { area: 'Ottimizzazione e decisioni', use: 'Logistica, pianificazione, scheduling, supporto alle decisioni.', tags: ['Programmazione lineare e intera', 'Ottimizzazione combinatoria', 'Algoritmi su grafi', 'Vehicle routing e scheduling', 'Teoria dei giochi'] },
    { area: 'Modelli stocastici', use: 'Analisi del rischio, simulazione, sistemi con code.', tags: ['Processi stocastici', 'Catene di Markov', 'Teoria delle code', 'Simulazione a eventi discreti'] },
    { area: 'Programmazione e dati', use: 'Prototipazione di algoritmi, machine learning applicato, analisi di immagini.', tags: ['Python (NumPy, SciPy, OpenCV)', 'PyTorch', 'MATLAB', 'C', 'LaTeX'] },
    { area: 'Formazione e comunicazione', use: 'Formazione tecnica, documentazione, presentazioni.', tags: ['Didattica', 'Public speaking', 'Scrittura tecnica', 'Divulgazione'] },
    { area: 'Coordinamento e rappresentanza', use: 'Lavoro con interlocutori diversi, governance, gestione di team.', tags: ['Facilitazione', 'Stakeholder management', 'Coordinamento di team', 'Governance'] },
    { area: 'Comunicazione visiva', use: 'Presentare in forma visiva risultati complessi.', tags: ['After Effects (avanzato)', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Regia live con OBS'] }
  ],
  en: [
    { area: 'Logic and formal verification', use: 'Hardware and software verification and validation, correctness analysis.', tags: ['SAT/SMT solving', 'DPLL(T)', 'Superposition and rewriting', 'Model theory', 'Computability and complexity', 'Automata and formal languages'] },
    { area: 'Optimization and decisions', use: 'Logistics, planning, scheduling, decision support.', tags: ['Linear and integer programming', 'Combinatorial optimization', 'Graph algorithms', 'Vehicle routing and scheduling', 'Game theory'] },
    { area: 'Stochastic models', use: 'Risk analysis, simulation, queueing systems.', tags: ['Stochastic processes', 'Markov chains', 'Queueing theory', 'Discrete-event simulation'] },
    { area: 'Programming and data', use: 'Algorithm prototyping, applied machine learning, image analysis.', tags: ['Python (NumPy, SciPy, OpenCV)', 'PyTorch', 'MATLAB', 'C', 'LaTeX'] },
    { area: 'Training and communication', use: 'Technical training, documentation, presentations.', tags: ['Teaching', 'Public speaking', 'Technical writing', 'Outreach'] },
    { area: 'Coordination and representation', use: 'Working with diverse stakeholders, governance, team management.', tags: ['Facilitation', 'Stakeholder management', 'Team coordination', 'Governance'] },
    { area: 'Visual communication', use: 'Presenting complex results visually.', tags: ['After Effects (advanced)', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Live direction with OBS'] }
  ]
};

const formazione = {
  it: [
    { date: 'In corso', title: 'Laurea magistrale in Matematica', place: 'Università degli Studi di Milano', desc: 'Logica, informatica teorica, ricerca operativa.' },
    { date: '2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano', desc: '' },
    { date: '2021 · 2022', title: 'Progetti internazionali 4EU+', place: 'Charles University, Praga', desc: '«Isoperimetric Inequality»; «The Mathematics of Letters from Whitechapel».' },
    { date: '2018', title: 'Idoneità INdAM', place: 'Istituto Nazionale di Alta Matematica', desc: '' },
    { date: '2018', title: 'Diploma di maturità scientifica', place: 'Liceo «E. Majorana», Desio', desc: '' },
    { date: 'Dal 2016', title: 'Formazione teologica e liturgica', place: 'Seminario Arcivescovile di Milano · FTIS', desc: 'Scuola di teologia per laici (6 anni); esami di Liturgia I e II (2025); convegno «La Camera Alta» su liturgia, architettura e arte (2026).' }
  ],
  en: [
    { date: 'Ongoing', title: 'Master\'s degree in Mathematics', place: 'University of Milan', desc: 'Logic, theoretical computer science, operations research.' },
    { date: '2024', title: 'Bachelor\'s degree in Mathematics', place: 'University of Milan', desc: '' },
    { date: '2021 · 2022', title: '4EU+ international projects', place: 'Charles University, Prague', desc: '"Isoperimetric Inequality"; "The Mathematics of Letters from Whitechapel".' },
    { date: '2018', title: 'INdAM eligibility', place: 'National Institute of Higher Mathematics', desc: '' },
    { date: '2018', title: 'Scientific high-school diploma', place: 'Liceo "E. Majorana", Desio', desc: '' },
    { date: 'Since 2016', title: 'Theological and liturgical training', place: 'Archiepiscopal Seminary of Milan · FTIS', desc: 'School of theology for laypeople (6 years); Liturgy I and II exams (2025); "La Camera Alta" conference on liturgy, architecture and art (2026).' }
  ]
};

const esperienza = {
  it: [
    { date: 'Dal 2026', title: 'NewMa — riconoscimento della notazione gregoriana', place: 'Progetto personale', desc: 'Pipeline geometrica e modello CNN + BiLSTM + CTC su 2.508 neumi annotati a mano: 77,1% di accuratezza esatta su dati mai visti.' },
    { date: 'Dal 2018', title: 'Allenatore delle Olimpiadi della Matematica', place: 'Liceo «E. Majorana», Desio', desc: 'Con un gruppo di 5–6 tutor, per 30–100 studenti l\'anno. Squadre in finale nazionale (2019, 2020, 2023) e in semifinale (2022, 2024–2026). Software Python per la gestione delle gare a squadre.' },
    { date: '2021 — 2022', title: 'Docente di matematica e fisica', place: 'Collegio Villoresi, Monza', desc: 'Corso di preparazione al SAT (2023).' },
    { date: '2024', title: 'Corsi di recupero di matematica', place: 'Liceo «E. Majorana», Desio', desc: '' },
    { date: '2020 · 2022', title: 'Relatore, seminari «Fuori Orario»', place: 'Università degli Studi di Milano', desc: '' },
    { date: '2015 — 2017', title: 'Coordinatore della web TV MAJOtivù', place: 'Liceo «E. Majorana», Desio', desc: 'Redazione di 10–30 studenti; attrezzature finanziate con fondi europei PON.' }
  ],
  en: [
    { date: 'Since 2026', title: 'NewMa — recognising Gregorian notation', place: 'Personal project', desc: 'Geometric pipeline and CNN + BiLSTM + CTC model on 2,508 hand-annotated neumes: 77.1% exact-match accuracy on unseen data.' },
    { date: 'Since 2018', title: 'Mathematical Olympiad coach', place: 'Liceo "E. Majorana", Desio', desc: 'With a group of 5–6 tutors, for 30–100 students a year. Teams in the national final (2019, 2020, 2023) and semifinal (2022, 2024–2026). Python software to run team contests.' },
    { date: '2021 — 2022', title: 'Mathematics and physics teacher', place: 'Collegio Villoresi, Monza', desc: 'SAT preparation course (2023).' },
    { date: '2024', title: 'Mathematics remedial courses', place: 'Liceo "E. Majorana", Desio', desc: '' },
    { date: '2020 · 2022', title: 'Speaker, "Fuori Orario" seminars', place: 'University of Milan', desc: '' },
    { date: '2015 — 2017', title: 'Coordinator of the MAJOtivù web TV', place: 'Liceo "E. Majorana", Desio', desc: 'A team of 10–30 students; equipment funded through EU PON grants.' }
  ]
};

const leadership = {
  it: [
    { date: 'Settembre 2024', title: 'Delegato laico della Conferenza Episcopale Italiana', place: '53° Congresso Eucaristico Internazionale, Quito', desc: 'Uno dei 5 delegati nazionali.' },
    { date: '2021 — 2024', title: 'Commissione «Riti», tavolo «Giovani e Vescovi»', place: 'Conferenza Episcopale Lombarda', desc: '200 giovani e 14 vescovi da 10 diocesi.' },
    { date: 'Dal 2019', title: 'Consigliere e membro di Giunta', place: 'Comunità Pastorale San Giovanni Paolo II, Seregno', desc: '6 parrocchie, circa 47.000 abitanti; 2 mandati.' },
    { date: '2021 — 2023', title: 'Rappresentante degli studenti', place: 'Consiglio di Dipartimento di Matematica, Università degli Studi di Milano', desc: '2 mandati.' },
    { date: '2017', title: 'Rappresentante degli studenti', place: 'Consiglio d\'Istituto, Liceo «E. Majorana», Desio', desc: '' }
  ],
  en: [
    { date: 'September 2024', title: 'Lay delegate of the Italian Episcopal Conference', place: '53rd International Eucharistic Congress, Quito', desc: 'One of 5 national delegates.' },
    { date: '2021 — 2024', title: '"Rites" commission, "Youth and Bishops" programme', place: 'Lombard Episcopal Conference', desc: '200 young people and 14 bishops from 10 dioceses.' },
    { date: 'Since 2019', title: 'Council and executive board member', place: 'St. John Paul II Pastoral Community, Seregno', desc: '6 parishes, about 47,000 inhabitants; 2 terms.' },
    { date: '2021 — 2023', title: 'Student representative', place: 'Department Council of Mathematics, University of Milan', desc: '2 terms.' },
    { date: '2017', title: 'Student representative', place: 'School Council, Liceo "E. Majorana", Desio', desc: '' }
  ]
};

// I titoli dei talk restano nella lingua originale (sono titoli propri dei seminari).
const talks = [
  { title: 'Chi ha rubato le carte di Dobble?', context: 'Fuori Orario — Unimi · 2020' },
  { title: 'Topologia algebrica con le mani — corde e trecce', context: 'Fuori Orario High School — Unimi · 2022' }
];

function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((it, i) => (
        <div key={i} className={styles.timelineItem}>
          <div className={styles.timelineDate}>{it.date}</div>
          <div className={styles.timelineTitle}>{it.title}</div>
          <div className={styles.timelinePlace}>{it.place}</div>
          {it.desc && <div className={styles.timelineDesc}>{it.desc}</div>}
        </div>
      ))}
    </div>
  );
}

export default async function CurriculumPage({ params: { locale } }) {
  setRequestLocale(locale);
  const projects = getAllProjects({ locale });
  const prefix = `/${locale}`;
  const socials = socialList();
  const s = ui[locale] || ui.it;
  const L = (obj) => obj[locale] || obj.it;

  const navSections = [
    { id: 'about', label: s.about },
    { id: 'skills', label: s.skills },
    { id: 'resume', label: s.resume },
    { id: 'leadership', label: s.leadership },
    { id: 'portfolio', label: s.projects },
    { id: 'talks', label: s.talks }
  ];

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sideBrand}>
          <div className={styles.avatar}>
            <Image src="/assets/logo.png" alt="Fil d'Or" width={72} height={72} />
          </div>
          <div className={styles.sideName}>Marco Cattazzo</div>
          <div className={styles.sideRole}>{s.role}</div>
        </div>

        <div className={styles.sideContacts}>
          <a className={styles.sideContact} href="https://github.com/marcocattazzo" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1"/></svg>
            github.com/marcocattazzo
          </a>
          <a className={styles.sideContact} href="https://it.linkedin.com/in/marco-cattazzo-176a211a3" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1"/></svg>
            LinkedIn
          </a>
          <a className={styles.sideContact} href="https://instagram.com/marcocattazzo" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1"/></svg>
            Instagram
          </a>
        </div>

        <nav className={styles.sideNav} aria-label="Curriculum sections">
          {navSections.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`}>{sec.label}</a>
          ))}
          <Link href={prefix} style={{ color: 'var(--gold-main)', borderLeftColor: 'var(--gold-dim)' }}>{s.site}</Link>
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
        <section id="about" className={styles.heroBlock}>
          <span className={styles.heroEyebrow}>Curriculum vitae</span>
          <h1 className={styles.heroName}>Marco Cattazzo</h1>
          <div className={styles.heroRoles}>
            <TypedRoles roles={s.roles} />
          </div>
        </section>

        <section className={styles.block} aria-labelledby="about-h">
          <h2 id="about-h" className={styles.blockTitle}>{s.about}</h2>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutText}>{s.aboutText}</p>
            <div className={styles.infoGrid}>
              <div><strong>{s.infoArea}</strong>{s.infoAreaVal}</div>
              <div><strong>{s.infoContact}</strong><Link href={`${prefix}/contatti`} style={{ color: 'var(--gold-main)' }}>/contatti →</Link></div>
              <div><strong>GitHub</strong>marcocattazzo</div>
              <div><strong>{s.infoLanguages}</strong>{s.infoLanguagesVal}</div>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.block} aria-labelledby="skills-h">
          <h2 id="skills-h" className={styles.blockTitle}>{s.skills}</h2>
          {L(skills).map((sk) => (
            <div key={sk.area} className={styles.skillCluster}>
              <div className={styles.skillArea}>{sk.area}</div>
              <p className={styles.skillUse}>{sk.use}</p>
              <div className={styles.skillTags}>
                {sk.tags.map((tg) => (
                  <span key={tg} className="tag">{tg}</span>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.detailLinks}>
            <Link href={`${prefix}/chi-sono/matematica`}>{s.detMat} — {s.detail}</Link>
          </div>
        </section>

        <section id="resume" className={styles.block} aria-labelledby="resume-h">
          <h2 id="resume-h" className={styles.blockTitle}>{s.resume}</h2>
          <div className={styles.resumeDual}>
            <div className={styles.resumeCol}>
              <h3>{s.education}</h3>
              <Timeline items={L(formazione)} />
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/teologia`}>{s.detTeo} — {s.detail}</Link>
              </div>
            </div>
            <div className={styles.resumeCol}>
              <h3>{s.experience}</h3>
              <Timeline items={L(esperienza)} />
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/grafica`}>{s.detGraf} — {s.detail}</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className={styles.block} aria-labelledby="leadership-h">
          <h2 id="leadership-h" className={styles.blockTitle}>{s.leadership}</h2>
          <Timeline items={L(leadership)} />
          <div className={styles.detailLinks}>
            <Link href={`${prefix}/chi-sono/rappresentanza`}>{s.detRapp} — {s.detail}</Link>
          </div>
        </section>

        <section id="portfolio" className={styles.block} aria-labelledby="port-h">
          <h2 id="port-h" className={styles.blockTitle}>{s.projects}</h2>
          <div className={styles.portfolioGrid}>
            {projects.map((p) => (
              <Link key={p.slug} href={`${prefix}/lavoro/${p.slug}`} className={styles.portfolioCard}>
                <span className={styles.portfolioLabel}>{p.category}</span>
                <span className={styles.portfolioTitle}>{p.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="talks" className={styles.block} aria-labelledby="talks-h">
          <h2 id="talks-h" className={styles.blockTitle}>{s.talks}</h2>
          <div className={styles.talksList}>
            {talks.map((tk, i) => (
              <div key={i} className={styles.talkRow}>
                <Image src="/assets/mic.png" alt="" width={28} height={28} />
                <div className={styles.talkBody}>
                  <div className={styles.talkTitle}>{tk.title}</div>
                  <div className={styles.talkContext}>{tk.context}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
