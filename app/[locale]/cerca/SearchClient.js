'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import lunr from 'lunr';
import styles from './search.module.css';

export default function SearchClient({ docs, locale, labels, sectionLabels }) {
  const [q, setQ] = useState('');
  const prefix = locale === 'it' ? '' : `/${locale}`;

  const idx = useMemo(() => {
    return lunr(function () {
      this.ref('id');
      this.field('title', { boost: 5 });
      this.field('abstract', { boost: 2 });
      this.field('tags');
      this.field('section');
      docs.forEach((d) =>
        this.add({
          id: d.id,
          title: d.title,
          abstract: d.abstract || '',
          tags: (d.tags || []).join(' '),
          section: d.section
        })
      );
    });
  }, [docs]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    try {
      const r = idx.search(`${q.trim()}*`);
      const byId = new Map(docs.map((d) => [d.id, d]));
      return r.map((x) => byId.get(x.ref)).filter(Boolean);
    } catch {
      return [];
    }
  }, [q, idx, docs]);

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder={labels.placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoFocus
      />
      {q && (
        <div className={styles.count}>
          {results.length} {labels.results}
        </div>
      )}
      <div className={styles.results}>
        {q && results.length === 0 && (
          <p className={styles.noResults}>{labels.noResults}</p>
        )}
        {results.map((r) => (
          <Link
            key={r.id}
            href={`${prefix}/intrecci/${r.section}/${r.slug}`}
            style={{ display: 'block', padding: '1.5rem 0', borderBottom: '0.5px solid var(--border-subtle)' }}
          >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 500, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-main)' }}>
                {sectionLabels[r.section] || r.section}
              </span>
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--text-secondary)' }}>{r.title}</div>
            {r.abstract && (
              <div style={{ fontFamily: 'EB Garamond', color: 'var(--text-muted)', fontSize: 14.5, marginTop: '0.4rem', lineHeight: 1.65 }}>
                {r.abstract}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
