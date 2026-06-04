import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import TypedRoles from '../../../components/TypedRoles';
import { getAllProjects } from '../../../lib/mdx';
import styles from './cv.module.css';

export const metadata = {
  title: "Curriculum — Fil d'Or"
};

const sections = [
  { id: 'about', label: 'About' },
  { id: 'formazione', label: 'Formazione' },
  { id: 'esperienze', label: 'Esperienze' },
  { id: 'portfolio', label: 'Progetti' },
  { id: 'talks', label: 'Talks' },
  { id: 'contatti', label: 'Contatti' }
];

const skills = [
  {
    area: 'Logica formale & SAT',
    tags: ['Logica algebrica', 'Theorem provers', 'SAT/MaxSAT', 'Ottimizzazione combinatoria', 'Complessità computazionale']
  },
  {
    area: 'Programmazione',
    tags: ['Python', 'SQL', 'OR-Tools', 'PuLP', 'JavaScript']
  },
  {
    area: 'Ricerca & modellazione',
    tags: ['Game theory', 'Verifica formale', 'Modellazione probabilistica', 'Epistemologia']
  },
  {
    area: 'Comunicazione & leadership',
    tags: ['Public speaking', 'Didattica', 'Facilitazione', 'Progettazione pastorale']
  }
];

const formazione = [
  { date: '2020 — 2023', title: 'Laurea magistrale in Matematica', place: 'Università degli Studi', desc: 'Indirizzo logico-algebrico. Tesi su strutture combinatorie e verifica formale.' },
  { date: '2018 — 2022', title: 'Percorso teologico-pastorale', place: 'Istituto teologico', desc: 'Teologia sistematica, pastorale giovanile, filosofia del linguaggio.' },
  { date: '2017 — 2020', title: 'Laurea triennale in Matematica', place: 'Università degli Studi', desc: 'Algebra, analisi, geometria, fondamenti.' }
];

const esperienze = [
  { date: '2024', title: 'Progetto NEWMA — Ricerca applicata', place: 'Verifica formale + probabilità', desc: 'Pipeline di verifica formale per sistemi probabilistici. Relazione tecnica e qualitativa.' },
  { date: '2023 — 2024', title: 'Direzione progetto innovativo diocesano', place: 'Pastorale giovanile', desc: 'Coordinamento progetto sperimentale di pastorale giovanile su scala diocesana.' },
  { date: '2022 — oggi', title: 'Tutoraggio Olimpiadi della matematica', place: 'Didattica avanzata', desc: 'Formazione di studenti per le competizioni nazionali e internazionali.' },
  { date: '2020 — oggi', title: 'Volontariato e leadership comunitaria', place: 'Comunità locale', desc: 'Animazione di gruppi giovanili e coordinamento di percorsi formativi.' }
];

const talks = [
  { title: "Fuori orario — pastorale giovanile e sinodalità", context: "Convegno diocesano · 2024" },
  { title: "Exsultet — liturgia e comunità", context: "Evento formativo · 2024" },
  { title: "Olimpiadi della matematica — problem solving strutturato", context: "Didattica · 2023" }
];

export default async function CurriculumPage({ params: { locale } }) {
  setRequestLocale(locale);
  const projects = getAllProjects({ locale });
  const prefix = `/${locale}`;

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sideBrand}>
          <Image src="/assets/logo.png" alt="Fil d'Or" width={48} height={48} />
          <div className={styles.sideName}>Fil <em>d'Or</em></div>
          <div className={styles.sideRole}>Matematico · Filosofo</div>
        </div>

        <div className={styles.sideContacts}>
          <a className={styles.sideContact} href="mailto:hello@fildor.example">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1"/></svg>
            hello@fildor.example
          </a>
          <a className={styles.sideContact} href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1"/></svg>
            LinkedIn
          </a>
          <a className={styles.sideContact} href="https://github.com" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1"/></svg>
            GitHub
          </a>
        </div>

        <nav className={styles.sideNav} aria-label="Curriculum sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
          <Link href={prefix} style={{ color: 'var(--gold-main)' }}>← Torna al sito</Link>
        </nav>

        <div className={styles.sideThread}>
          Lo stesso filo.
        </div>
      </aside>

      <main className={styles.main}>
        <section id="about" className={styles.heroBlock}>
          <span className={styles.heroEyebrow}>Curriculum vitae</span>
          <h1 className={styles.heroName}>Nome Cognome</h1>
          <div className={styles.heroRoles}>
            <TypedRoles />
          </div>
        </section>

        <section className={styles.block} aria-labelledby="about-h">
          <h2 id="about-h" className={styles.blockTitle}>About</h2>
          <p className={styles.aboutText}>
            Matematico per formazione, con un percorso parallelo in teologia, pastorale e filosofia del linguaggio. Lavoro su problemi che richiedono rigore — formali, organizzativi, formativi — con una particolare attenzione a cosa il modello *non* sta dicendo.
          </p>
          <div className={styles.infoGrid}>
            <div><strong>Età</strong>—</div>
            <div><strong>Residenza</strong>Italia</div>
            <div><strong>Email</strong>hello@fildor.example</div>
            <div><strong>Lingue</strong>Italiano, Inglese</div>
          </div>
        </section>

        <section id="skills" className={styles.block} aria-labelledby="skills-h">
          <h2 id="skills-h" className={styles.blockTitle}>Competenze</h2>
          {skills.map((s) => (
            <div key={s.area} className={styles.skillCluster}>
              <div className={styles.skillArea}>{s.area}</div>
              <div className={styles.skillTags}>
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="formazione" className={styles.block} aria-labelledby="form-h">
          <h2 id="form-h" className={styles.blockTitle}>Formazione</h2>
          <div className={styles.timeline}>
            {formazione.map((f, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{f.date}</div>
                <div className={styles.timelineTitle}>{f.title}</div>
                <div className={styles.timelinePlace}>{f.place}</div>
                <div className={styles.timelineDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="esperienze" className={styles.block} aria-labelledby="esp-h">
          <h2 id="esp-h" className={styles.blockTitle}>Esperienze</h2>
          <div className={styles.timeline}>
            {esperienze.map((e, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{e.date}</div>
                <div className={styles.timelineTitle}>{e.title}</div>
                <div className={styles.timelinePlace}>{e.place}</div>
                <div className={styles.timelineDesc}>{e.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className={styles.block} aria-labelledby="port-h">
          <h2 id="port-h" className={styles.blockTitle}>Progetti</h2>
          <div className={styles.portfolioGrid}>
            {projects.map((p) => (
              <Link key={p.slug} href={`${prefix}/lavoro/${p.slug}`} style={{
                padding: '1.25rem', background: 'var(--bg-surface)', border: '0.5px solid var(--border-subtle)',
                display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'border-color 200ms'
              }}>
                <span style={{ fontFamily: 'Outfit', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-main)' }}>{p.category}</span>
                <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 19, color: 'var(--text-primary)' }}>{p.title}</span>
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

        <section id="contatti" className={styles.block} aria-labelledby="cont-h">
          <h2 id="cont-h" className={styles.blockTitle}>Contatti</h2>
          <div className={styles.contactBox}>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className="label">Email</span>
                <a href="mailto:hello@fildor.example">hello@fildor.example</a>
              </div>
              <div className={styles.contactItem}>
                <span className="label">LinkedIn</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className="label">GitHub</span>
                <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className="label">Sito</span>
                <Link href={prefix}>fildor — torna al sito</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
