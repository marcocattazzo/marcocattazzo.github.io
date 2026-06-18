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

const ui = {
  it: {
    role: 'Matematico · Filosofo',
    site: '← Sito',
    cvDownload: 'CV Europass (PDF) ↓',
    about: 'About',
    skills: 'Competenze',
    resume: 'Resume',
    projects: 'Progetti',
    talks: 'Talks',
    education: 'Formazione',
    experience: 'Esperienza',
    aboutText: 'Matematico in formazione (Università degli Studi di Milano: triennale 2018–2024, magistrale logico-algebrica in corso; idoneità INDAM 2018), con un percorso parallelo in teologia, pastorale e liturgia (Scuola di Teologia del Decanato Seregno-Seveso 2016–2021; esami di Liturgia 1 e 2 alla FTIS 2025). Lavoro su problemi che richiedono rigore — formali, organizzativi, formativi — con attenzione a cosa il modello *non* sta dicendo.',
    infoResidence: 'Residenza', infoResidenceVal: 'Italia',
    infoContact: 'Contatto', infoLanguages: 'Lingue',
    detail: 'Dettagli →',
    detMat: 'Matematica studiata', detTeo: 'Teologia studiata',
    detPast: 'Esperienze pastorali', detGraf: 'Pratica grafica'
  },
  en: {
    role: 'Mathematician · Philosopher',
    site: '← Site',
    cvDownload: 'Europass CV (PDF) ↓',
    about: 'About',
    skills: 'Skills',
    resume: 'Resume',
    projects: 'Projects',
    talks: 'Talks',
    education: 'Education',
    experience: 'Experience',
    aboutText: 'Mathematician in training (University of Milan: bachelor 2018–2024, master in logic-algebra ongoing; INDAM eligibility 2018), with a parallel path in theology, pastoral work and liturgy (School of Theology of the Seregno-Seveso Deanery 2016–2021; Liturgy 1 and 2 exams at the FTIS 2025). I work on problems that demand rigor — formal, organizational, educational — with attention to what the model is *not* saying.',
    infoResidence: 'Residence', infoResidenceVal: 'Italy',
    infoContact: 'Contact', infoLanguages: 'Languages',
    detail: 'Details →',
    detMat: 'Mathematics studied', detTeo: 'Theology studied',
    detPast: 'Pastoral experience', detGraf: 'Design practice'
  }
};

const skills = {
  it: [
    { area: 'Logica formale & SAT', tags: ['Logica algebrica', 'Theorem provers', 'SAT/MaxSAT', 'Ottimizzazione combinatoria', 'Complessità computazionale'] },
    { area: 'Programmazione', tags: ['Python', 'SQL', 'OR-Tools', 'PuLP', 'JavaScript'] },
    { area: 'Ricerca & modellazione', tags: ['Game theory', 'Verifica formale', 'Modellazione probabilistica', 'Epistemologia'] },
    { area: 'Comunicazione & leadership', tags: ['Public speaking', 'Didattica', 'Facilitazione', 'Progettazione pastorale'] },
    { area: 'Grafica & design', tags: ['Figma', 'Illustrator', 'InDesign', 'Identità visiva', 'Composizione editoriale'] }
  ],
  en: [
    { area: 'Formal logic & SAT', tags: ['Algebraic logic', 'Theorem provers', 'SAT/MaxSAT', 'Combinatorial optimization', 'Computational complexity'] },
    { area: 'Programming', tags: ['Python', 'SQL', 'OR-Tools', 'PuLP', 'JavaScript'] },
    { area: 'Research & modeling', tags: ['Game theory', 'Formal verification', 'Probabilistic modeling', 'Epistemology'] },
    { area: 'Communication & leadership', tags: ['Public speaking', 'Teaching', 'Facilitation', 'Pastoral design'] },
    { area: 'Graphics & design', tags: ['Figma', 'Illustrator', 'InDesign', 'Visual identity', 'Editorial layout'] }
  ]
};

const formazione = {
  it: [
    { date: '—', title: 'Liceo Scientifico "Majorana"', place: 'Desio · Diploma di maturità scientifica', desc: '' },
    { date: '2018 — 2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano', desc: 'Algebra, analisi, geometria, fondamenti.' },
    { date: '2024 — attuale', title: 'Laurea magistrale in Matematica · In corso', place: 'Università degli Studi di Milano', desc: 'Indirizzo logico-algebrico. Strutture combinatorie e verifica formale.' },
    { date: '2018', title: 'INDAM — Idoneità borsa', place: 'Istituto Nazionale di Alta Matematica', desc: 'Idoneità a borsa di studio per l\'iscrizione al corso di laurea in Matematica.' },
    { date: '2016 — 2021', title: 'Scuola di Teologia per Laici', place: 'Decanato Seregno-Seveso', desc: 'Percorso pluriennale di formazione teologica sistematica.' },
    { date: '02/2025 — 09/2025', title: 'Esami di Liturgia 1 e 2 (12 CFU)', place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano', desc: 'Approfondimento liturgico-sacramentale.' },
    { date: 'Giugno 2026', title: 'Convegno "La Camera Alta"', place: 'Liturgia, architettura e arte', desc: 'Partecipazione al primo convegno su liturgia, architettura e arte.' }
  ],
  en: [
    { date: '—', title: 'Liceo Scientifico "Majorana"', place: 'Desio · Scientific high-school diploma', desc: '' },
    { date: '2018 — 2024', title: 'Bachelor\'s degree in Mathematics', place: 'University of Milan', desc: 'Algebra, analysis, geometry, foundations.' },
    { date: '2024 — present', title: 'Master\'s degree in Mathematics · Ongoing', place: 'University of Milan', desc: 'Logic-algebra track. Combinatorial structures and formal verification.' },
    { date: '2018', title: 'INDAM — Scholarship eligibility', place: 'National Institute of Higher Mathematics', desc: 'Eligibility for a scholarship toward enrolment in the Mathematics degree.' },
    { date: '2016 — 2021', title: 'School of Theology for Laypeople', place: 'Seregno-Seveso Deanery', desc: 'A multi-year path of systematic theological training.' },
    { date: '02/2025 — 09/2025', title: 'Liturgy 1 and 2 exams (12 ECTS)', place: 'Theological Faculty of Northern Italy, Milan', desc: 'Liturgical-sacramental study.' },
    { date: 'June 2026', title: 'Conference "La Camera Alta"', place: 'Liturgy, architecture and art', desc: 'Attendance at the first conference on liturgy, architecture and art.' }
  ]
};

const esperienza = {
  it: [
    { date: '2024 →', title: 'NEWMA — AI per neumi gregoriani', place: 'Ricerca applicata', desc: 'Sistema di trascrizione automatica della notazione neumatica via reti neurali. Relazione tecnica e qualitativa.' },
    { date: '2020 → 2022', title: 'Speaker seminari "Fuori Orario"', place: 'Università degli Studi di Milano', desc: 'Interventi su Dobble e geometria combinatoria (2020) e su teoria delle trecce e topologia algebrica (2022).' },
    { date: '2022 →', title: 'Tutoraggio Olimpiadi della matematica', place: 'Liceo Scientifico "Majorana", Desio', desc: 'Preparazione di studenti alle Olimpiadi della matematica, con risultati eccellenti.' },
    { date: '2014 — 2018', title: 'Olimpiadi UMI — partecipante', place: 'Unione Matematica Italiana', desc: 'Qualificazioni distrettuali e nazionali.' },
    { date: '2017', title: 'Campus "Teoria dei giochi e reti neurali"', place: 'Marina di Massa', desc: 'Formazione intensiva.' },
    { date: '2019 — 2028', title: 'Consigliere di Comunità Pastorale', place: 'Comunità Pastorale San Giovanni Paolo II, Seregno', desc: 'Consigliere e membro di Giunta (due mandati).' },
    { date: '2021 — 2024', title: 'Tavoli ecclesiali CEL e Diocesi di Milano', place: 'Giovani e Vescovi · Consulta giovanile', desc: 'Tavolo Giovani e Vescovi (Commissione Regionale Riti, CEL); Consulta giovanile diocesana.' },
    { date: '2024', title: 'Delegato CEI — 53° Congresso Eucaristico', place: 'Quito, Ecuador', desc: 'Laico delegato della Conferenza Episcopale Italiana.' }
  ],
  en: [
    { date: '2024 →', title: 'NEWMA — AI for Gregorian neumes', place: 'Applied research', desc: 'Automatic transcription of neumatic notation via neural networks. Technical and non-technical reports.' },
    { date: '2020 → 2022', title: 'Speaker, "Fuori Orario" seminars', place: 'University of Milan', desc: 'Talks on Dobble and combinatorial geometry (2020) and on braid theory and algebraic topology (2022).' },
    { date: '2022 →', title: 'Mathematical Olympiad tutoring', place: 'Liceo Scientifico "Majorana", Desio', desc: 'Preparing students for the Mathematical Olympiad, with excellent results.' },
    { date: '2014 — 2018', title: 'UMI Olympiad — participant', place: 'Italian Mathematical Union', desc: 'District and national qualifications.' },
    { date: '2017', title: 'Campus "Game theory and neural networks"', place: 'Marina di Massa', desc: 'Intensive training.' },
    { date: '2019 — 2028', title: 'Pastoral Community Councillor', place: 'St. John Paul II Pastoral Community, Seregno', desc: 'Councillor and board member (two terms).' },
    { date: '2021 — 2024', title: 'Church working groups, CEL and Archdiocese of Milan', place: 'Youth & Bishops · Youth Council', desc: 'Youth and Bishops group (Regional Rites Commission, CEL); diocesan Youth Council.' },
    { date: '2024', title: 'CEI delegate — 53rd Eucharistic Congress', place: 'Quito, Ecuador', desc: 'Lay delegate of the Italian Episcopal Conference.' }
  ]
};

// I titoli dei talk restano nella lingua originale (sono titoli propri dei seminari).
const talks = [
  { title: 'Chi ha rubato le carte di Dobble?', context: 'Fuori Orario — Unimi · 2020' },
  { title: 'Topologia algebrica con le mani — corde e trecce', context: 'Fuori Orario — Unimi · 2022' }
];

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

        <div className={styles.sideCv}>
          <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer">
            {s.cvDownload}
          </a>
        </div>
      </aside>

      <main className={styles.main}>
        <section id="about" className={styles.heroBlock}>
          <span className={styles.heroEyebrow}>Curriculum vitae</span>
          <h1 className={styles.heroName}>Marco Cattazzo</h1>
          <div className={styles.heroRoles}>
            <TypedRoles />
          </div>
        </section>

        <section className={styles.block} aria-labelledby="about-h">
          <h2 id="about-h" className={styles.blockTitle}>{s.about}</h2>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutText}>{s.aboutText}</p>
            <div className={styles.infoGrid}>
              <div><strong>{s.infoResidence}</strong>{s.infoResidenceVal}</div>
              <div><strong>{s.infoContact}</strong><Link href={`${prefix}/contatti`} style={{ color: 'var(--gold-main)' }}>/contatti →</Link></div>
              <div><strong>GitHub</strong>marcocattazzo</div>
              <div><strong>{s.infoLanguages}</strong>IT · EN</div>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.block} aria-labelledby="skills-h">
          <h2 id="skills-h" className={styles.blockTitle}>{s.skills}</h2>
          {L(skills).map((sk) => (
            <div key={sk.area} className={styles.skillCluster}>
              <div className={styles.skillArea}>{sk.area}</div>
              <div className={styles.skillTags}>
                {sk.tags.map((tg) => (
                  <span key={tg} className="tag">{tg}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="resume" className={styles.block} aria-labelledby="resume-h">
          <h2 id="resume-h" className={styles.blockTitle}>{s.resume}</h2>
          <div className={styles.resumeDual}>
            <div className={styles.resumeCol}>
              <h3>{s.education}</h3>
              <div className={styles.timeline}>
                {L(formazione).map((f, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDate}>{f.date}</div>
                    <div className={styles.timelineTitle}>{f.title}</div>
                    <div className={styles.timelinePlace}>{f.place}</div>
                    {f.desc && <div className={styles.timelineDesc}>{f.desc}</div>}
                  </div>
                ))}
              </div>
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/matematica`}>{s.detMat} — {s.detail}</Link>
                <Link href={`${prefix}/chi-sono/teologia`}>{s.detTeo} — {s.detail}</Link>
              </div>
            </div>
            <div className={styles.resumeCol}>
              <h3>{s.experience}</h3>
              <div className={styles.timeline}>
                {L(esperienza).map((e, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDate}>{e.date}</div>
                    <div className={styles.timelineTitle}>{e.title}</div>
                    <div className={styles.timelinePlace}>{e.place}</div>
                    {e.desc && <div className={styles.timelineDesc}>{e.desc}</div>}
                  </div>
                ))}
              </div>
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/pastorale`}>{s.detPast} — {s.detail}</Link>
                <Link href={`${prefix}/chi-sono/grafica`}>{s.detGraf} — {s.detail}</Link>
              </div>
            </div>
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
