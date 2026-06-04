'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionIcons } from './SectionIcons';
import styles from './Navbar.module.css';

const sectionSlugs = ['matematica', 'fede-e-chiesa', 'parole', 'musica', 'giochi', 'pensieri'];

export default function Navbar({ locale }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const prefix = `/${locale}`;
  const homeHref = prefix;

  const otherLocale = locale === 'it' ? 'en' : 'it';
  const switchPath = (() => {
    const stripped = pathname.replace(/^\/(it|en)/, '');
    return `/${otherLocale}${stripped || ''}`;
  })();

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href={homeHref} className={styles.brand} aria-label="Fil d'Or — home">
            <Image src="/assets/logo.png" alt="" width={28} height={28} priority />
            <span className={styles.brandText}>
              Fil <span className={styles.brandTextItalic}>d'Or</span>
            </span>
          </Link>

          <div className={styles.links}>
            <div
              className={styles.linkItem}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${styles.dropdownButton} ${pathname.includes('/intrecci') ? styles.linkActive : ''}`}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
              >
                {t('nav.intrecci')}
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 1 L4 4 L7 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className={styles.dropdown}
                    role="menu"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {sectionSlugs.map((slug) => {
                      const Icon = sectionIcons[slug];
                      return (
                        <Link
                          key={slug}
                          href={`${prefix}/intrecci/${slug}`}
                          className={styles.dropdownItem}
                          role="menuitem"
                        >
                          <Icon size={20} />
                          {t(`sections.${slug}`)}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={`${prefix}/lavoro`}
              className={`${styles.link} ${isActive(`${prefix}/lavoro`) ? styles.linkActive : ''}`}
            >
              {t('nav.lavoro')}
            </Link>
            <Link
              href={`${prefix}/chi-sono`}
              className={`${styles.link} ${isActive(`${prefix}/chi-sono`) ? styles.linkActive : ''}`}
            >
              {t('nav.chiSono')}
            </Link>

            <div className={styles.langSwitch}>
              <Link href={locale === 'it' ? '#' : switchPath} className={locale === 'it' ? styles.langActive : ''}>
                IT
              </Link>
              <span aria-hidden>·</span>
              <Link href={locale === 'en' ? '#' : switchPath} className={locale === 'en' ? styles.langActive : ''}>
                EN
              </Link>
            </div>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className={styles.mobileTop}>
              <span className={styles.brandText}>Fil <em>d'Or</em></span>
              <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>
                Chiudi
              </button>
            </div>
            <motion.div
              className={styles.mobileLinks}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {[
                { href: `${prefix}/lavoro`, label: t('nav.lavoro') },
                { href: `${prefix}/chi-sono`, label: t('nav.chiSono') },
                { href: `${prefix}/contatti`, label: t('nav.contatti') },
                { href: `${prefix}/cerca`, label: t('nav.cerca') }
              ].map((it) => (
                <motion.div
                  key={it.href}
                  variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link href={it.href} className={styles.mobileLink}>{it.label}</Link>
                </motion.div>
              ))}
              <div style={{ marginTop: '1rem' }} />
              {sectionSlugs.map((slug) => {
                const Icon = sectionIcons[slug];
                return (
                  <motion.div
                    key={slug}
                    variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <Link href={`${prefix}/intrecci/${slug}`} className={styles.mobileSection}>
                      <Icon size={22} />
                      {t(`sections.${slug}`)}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
