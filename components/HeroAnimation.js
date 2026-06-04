'use client';

import { motion } from 'framer-motion';

export default function HeroAnimation({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
