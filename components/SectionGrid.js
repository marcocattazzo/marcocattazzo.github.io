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
  { slug: 'musica', img: null },
  { slug: 'giochi', img: null },
  { slug: 'pensieri', img: '/assets/philosophy.png' }
];

export default function SectionGrid({ locale }) {
  const t = useTranslations();
  const prefix = `/${locale}`;

  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      {sections.map(({ slug, img }) => {
        const Icon = sectionIcons[slug];
        return (
          <motion.div
            key={slug}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <Link href={`${prefix}/intrecci/${slug}`} className={styles.cell}>
              <span className={styles.icon}>
                {img ? (
                  <Image src={img} alt="" width={36} height={36} />
                ) : (
                  <Icon size={36} />
                )}
              </span>
              <span className={styles.name}>{t(`sections.${slug}`)}</span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
