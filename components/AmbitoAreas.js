'use client';

import { motion } from 'framer-motion';

export default function AmbitoAreas({ areas, styles }) {
  return (
    <div className={styles.areas}>
      {areas.map((area, ai) => (
        <motion.section
          key={area.area}
          className={styles.area}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className={styles.areaHeader}>
            <span className={styles.areaIndex}>{String(ai + 1).padStart(2, '0')}</span>
            <h2 className={styles.areaName}>{area.area}</h2>
          </header>
          {area.lead && <p className={styles.areaLead}>{area.lead}</p>}

          <motion.div
            className={styles.subareas}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          >
            {area.subareas.map((sub) => (
              <motion.div
                key={sub.name}
                className={styles.subarea}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                <div className={styles.subareaName}>{sub.name}</div>
                <motion.ul
                  className={styles.items}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                >
                  {sub.items.map((item) => (
                    <motion.li
                      key={item}
                      className={styles.item}
                      variants={{
                        hidden: { opacity: 0, x: 8 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.35 } }
                      }}
                    >
                      <span className={styles.itemDot} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
