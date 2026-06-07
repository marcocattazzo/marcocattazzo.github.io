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

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'talks', label: 'Talks' }
];

const skills = [
  { area: 'Logica formale & SAT', tags: ['Logica algebrica', 'Theorem provers', 'SAT/MaxSAT', 'Ottimizzazione combinatoria', 'Complessità computazionale'] },
  { area: 'Programmazione', tags: ['Python', 'SQL', 'OR-Tools', 'PuLP', 'JavaScript'] },
  { area: 'Ricerca & modellazione', tags: ['Game theory', 'Verifica formale', 'Modellazione probabilistica', 'Epistemologia'] },
  { area: 'Comunicazione & leadership', tags: ['Public speaking', 'Didattica', 'Facilitazione', 'Progettazione pastorale'] },
  { area: 'Grafica & design', tags: ['Figma', 'Illustrator', 'InDesign', 'Identità visiva', 'Composizione editoriale'] }
];

const formazione = [
  { date: '—', title: 'Liceo Scientifico "Majorana"', place: 'Diploma maturità scientifica', desc: '' },
  { date: '2018 — 2024', title: 'Laurea triennale in Matematica', place: 'Università degli Studi di Milano', desc: 'Algebra, analisi, geometria, fondamenti.' },
  { date: '2024 — attuale', title: 'Laurea magistrale in Matematica · In corso', place: 'Università degli Studi di Milano', desc: 'Indirizzo logico-algebrico. Strutture combinatorie e verifica formale.' },
  { date: '2018', title: 'INDAM — Idoneità borsa', place: 'Istituto Nazionale di Alta Matematica', desc: 'Idoneità a borsa di studio per l\'iscrizione al corso di laurea in Matematica.' },
  { date: '2016 — 2021', title: 'Scuola di Teologia per Laici', place: 'Decanato Seregno-Seveso', desc: 'Percorso pluriennale di formazione teologica sistematica.' },
  { date: '02/2025 — 09/2025', title: 'Esami di Liturgia 1 e 2 (12 CFU)', place: 'Facoltà Teologica dell\'Italia Settentrionale, Milano', desc: 'Approfondimento liturgico-sacramentale.' }
];

const esperienza = [
  { date: '2024 →', title: 'NEWMA — AI per neumi gregoriani', place: 'Ricerca applicata', desc: 'Sistema di trascrizione automatica della notazione neumatica via reti neurali. Relazione tecnica e qualitativa.' },
  { date: '2020 →', title: 'Speaker seminari "Fuori Orario"', place: 'Università degli Studi di Milano', desc: 'Interventi su Dobble e geometria combinatoria (2020) e altre tematiche.' },
  { date: '2022 →', title: 'Tutoraggio Olimpiadi della matematica', place: 'Formazione studenti', desc: 'Preparazione per competizioni nazionali e internazionali.' },
  { date: '2014 — 2018', title: 'Olimpiadi UMI — partecipante', place: 'Unione Matematica Italiana', desc: 'Qualificazioni distrettuali e nazionali.' },
  { date: '2017', title: 'Campus "Teoria dei giochi e reti neurali"', place: 'Marina di Massa', desc: 'Formazione intensiva.' },
  { date: '—', title: 'Direzione progetto pastorale diocesano', place: 'Pastorale giovanile', desc: 'Coordinamento di un progetto sperimentale di accompagnamento giovanile.' }
];

const talks = [
  { title: 'Dobble e la geometria combinatoria', context: 'Fuori Orario — Unimi · 2020' },
  { title: 'Fuori orario — pastorale giovanile e sinodalità', context: 'Convegno diocesano · 2024' },
  { title: 'Exsultet — liturgia e comunità', context: 'Evento formativo · 2024' },
  { title: 'Olimpiadi della matematica — problem solving strutturato', context: 'Didattica · 2023' }
];

export default async function CurriculumPage({ params: { locale } }) {
  setRequestLocale(locale);
  const projects = getAllProjects({ locale });
  const prefix = `/${locale}`;
  const socials = socialList();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sideBrand}>
          <div className={styles.avatar}>
            <Image src="/assets/logo.png" alt="Fil d'Or" width={72} height={72} />
          </div>
          <div className={styles.sideName}>Marco Cattazzo</div>
          <div className={styles.sideRole}>Matematico · Filosofo</div>
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
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
          <Link href={prefix} style={{ color: 'var(--gold-main)', borderLeftColor: 'var(--gold-dim)' }}>← Sito</Link>
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
            CV Europass (PDF) ↓
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
          <h2 id="about-h" className={styles.blockTitle}>About</h2>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutText}>
              Matematico in formazione (Università degli Studi di Milano: triennale 2018–2024, magistrale logico-algebrica in corso; idoneità INDAM 2018), con un percorso parallelo in teologia, pastorale e liturgia (Scuola di Teologia del Decanato Seregno-Seveso 2016–2021; esami di Liturgia 1 e 2 alla FTIS 2025). Lavoro su problemi che richiedono rigore — formali, organizzativi, formativi — con attenzione a cosa il modello *non* sta dicendo.
            </p>
            <div className={styles.infoGrid}>
              <div><strong>Residenza</strong>Italia</div>
              <div><strong>Contatto</strong><Link href={`${prefix}/contatti`} style={{ color: 'var(--gold-main)' }}>/contatti →</Link></div>
              <div><strong>GitHub</strong>marcocattazzo</div>
              <div><strong>Lingue</strong>IT · EN</div>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.block} aria-labelledby="skills-h">
          <h2 id="skills-h" className={styles.blockTitle}>Competenze</h2>
          {skills.map((s) => (
            <div key={s.area} className={styles.skillCluster}>
              <div className={styles.skillArea}>{s.area}</div>
              <div className={styles.skillTags}>
                {s.tags.map((tg) => (
                  <span key={tg} className="tag">{tg}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="resume" className={styles.block} aria-labelledby="resume-h">
          <h2 id="resume-h" className={styles.blockTitle}>Resume</h2>
          <div className={styles.resumeDual}>
            <div className={styles.resumeCol}>
              <h3>Formazione</h3>
              <div className={styles.timeline}>
                {formazione.map((f, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDate}>{f.date}</div>
                    <div className={styles.timelineTitle}>{f.title}</div>
                    <div className={styles.timelinePlace}>{f.place}</div>
                    {f.desc && <div className={styles.timelineDesc}>{f.desc}</div>}
                  </div>
                ))}
              </div>
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/matematica`}>Matematica studiata — Dettagli →</Link>
                <Link href={`${prefix}/chi-sono/teologia`}>Teologia studiata — Dettagli →</Link>
              </div>
            </div>
            <div className={styles.resumeCol}>
              <h3>Esperienza</h3>
              <div className={styles.timeline}>
                {esperienza.map((e, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDate}>{e.date}</div>
                    <div className={styles.timelineTitle}>{e.title}</div>
                    <div className={styles.timelinePlace}>{e.place}</div>
                    {e.desc && <div className={styles.timelineDesc}>{e.desc}</div>}
                  </div>
                ))}
              </div>
              <div className={styles.detailLinks}>
                <Link href={`${prefix}/chi-sono/pastorale`}>Esperienze pastorali — Dettagli →</Link>
                <Link href={`${prefix}/chi-sono/grafica`}>Pratica grafica — Dettagli →</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className={styles.block} aria-labelledby="port-h">
          <h2 id="port-h" className={styles.blockTitle}>Progetti</h2>
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
          <h2 id="talks-h" className={styles.blockTitle}>Talks</h2>
          <div className={styles.talksList}>
            {talks.map((t, i) => (
              <div key={i} className={styles.talkRow}>
                <Image src="/assets/mic.png" alt="" width={28} height={28} />
                <div className={styles.talkBody}>
                  <div className={styles.talkTitle}>{t.title}</div>
                  <div className={styles.talkContext}>{t.context}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
