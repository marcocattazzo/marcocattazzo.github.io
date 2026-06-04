'use client';

import { useState } from 'react';
import styles from './contatti.module.css';

export default function ContactForm({ labels }) {
  const [status, setStatus] = useState('idle');
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/PLACEHOLDER';

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus('err');
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-name">{labels.name}</label>
        <input id="cf-name" name="name" type="text" required className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-email">{labels.email}</label>
        <input id="cf-email" name="email" type="email" required className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-message">{labels.message}</label>
        <textarea id="cf-message" name="message" required className={styles.textarea} />
      </div>
      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          {status === 'sending' ? '…' : labels.send}
        </button>
      </div>
      {status === 'ok' && (
        <p style={{ color: 'var(--gold-main)', fontStyle: 'italic' }}>Grazie. Ti risponderò presto.</p>
      )}
      {status === 'err' && (
        <p style={{ color: '#d4a07a', fontStyle: 'italic' }}>Qualcosa è andato storto. Riprova o scrivi via email.</p>
      )}
    </form>
  );
}
