'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { sectionIcons } from './SectionIcons';
import styles from './SectionGrid.module.css';

const sections = [
  { slug: 'matematica', img: '/assets/math.png' },
  { slug: 'fede-e-chiesa', img: '/assets/faith.png' },
  { slug: 'parole', img: null },
  { slug: 'musica', img: '/assets/mic.png' },
  { slug: 'giochi', img: null },
  { slug: 'grafica', img: null },
  { slug: 'pensieri', img: '/assets/philosophy.png' }
];

export default function SectionGrid({ locale, variant = 'compact' }) {
  const t = useTranslations();
  const prefix = `/${locale}`;
  const isLarge = variant === 'large';

  return (
    <motion.div
      className={isLarge ? styles.gridLarge : styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {sections.map(({ slug, img }) => {
        const Icon = sectionIcons[slug];
        const iconSize = isLarge ? 48 : 36;
        return (
          <motion.div
            key={slug}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <Link href={`${prefix}/intrecci/${slug}`} className={isLarge ? styles.cellLarge : styles.cell}>
              <span className={isLarge ? styles.iconLarge : styles.icon}>
                {img ? (
                  <Image src={img} alt="" width={iconSize} height={iconSize} />
                ) : (
                  <Icon size={iconSize} />
                )}
              </span>
              <span className={isLarge ? styles.nameLarge : styles.name}>{t(`sections.${slug}`)}</span>
              {isLarge && (
                <>
                  <span className={styles.subtitleLarge}>{t(`sectionSubtitles.${slug}`)}</span>
                  <svg className={styles.arrow} width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                    <path d="M1 5 L20 5 M15 1 L20 5 L15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
