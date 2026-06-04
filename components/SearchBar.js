'use client';

import Link from 'next/link';

export default function SearchBar({ locale, label = 'Cerca' }) {
  const prefix = `/${locale}`;
  return (
    <Link
      href={`${prefix}/cerca`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.85rem',
        border: '0.5px solid var(--border-medium)',
        color: 'var(--text-muted)',
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}
      aria-label={label}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1" />
        <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      {label}
    </Link>
  );
}
