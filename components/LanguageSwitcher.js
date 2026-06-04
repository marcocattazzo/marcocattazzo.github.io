'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const other = locale === 'it' ? 'en' : 'it';
  const stripped = pathname.replace(/^\/(it|en)/, '') || '/';
  const target = other === 'it' ? stripped : `/en${stripped === '/' ? '' : stripped}`;

  const linkStyle = {
    fontFamily: 'Outfit, system-ui, sans-serif',
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Link
        href={locale === 'it' ? '#' : target}
        style={{ ...linkStyle, color: locale === 'it' ? 'var(--gold-main)' : 'var(--text-muted)', fontWeight: locale === 'it' ? 500 : 400 }}
      >IT</Link>
      <span style={{ color: 'var(--text-dim)' }}>·</span>
      <Link
        href={locale === 'en' ? '#' : target}
        style={{ ...linkStyle, color: locale === 'en' ? 'var(--gold-main)' : 'var(--text-muted)', fontWeight: locale === 'en' ? 500 : 400 }}
      >EN</Link>
    </div>
  );
}
