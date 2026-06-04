'use client';

import { motion } from 'framer-motion';

// Animated SVG: a golden thread that unwinds from a loose curl on the left
// and ends in a long horizontal stroke. Uses stroke-dashoffset animation.
export default function HeroThread({ width = 220, height = 60 }) {
  const path =
    'M 8 30 ' +
    'C 8 18, 22 18, 22 30 ' +
    'C 22 42, 8 42, 8 30 ' +
    'M 22 30 ' +
    'C 40 24, 60 36, 80 30 ' +
    'C 110 22, 140 38, 170 30 ' +
    'L 210 30';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 60"
      fill="none"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 2.2, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.4 } }}
      />
      <motion.circle
        cx="210"
        cy="30"
        r="2"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.4 }}
      />
    </svg>
  );
}
