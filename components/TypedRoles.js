'use client';

import { useEffect, useState } from 'react';

const ROLES = ['Matematico', 'Filosofo', 'Problem Solver', 'Formatore'];

export default function TypedRoles({ roles = ROLES }) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing, holding, deleting

  useEffect(() => {
    const current = roles[idx];
    let timeout;
    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setPhase('holding'), 1500);
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), 1200);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 35);
      } else {
        setIdx((idx + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, idx, roles]);

  return (
    <span>
      {text}
      <span style={{
        display: 'inline-block',
        width: '0.4ch',
        marginLeft: '2px',
        color: 'var(--gold-main)',
        animation: 'blink 1s steps(2) infinite'
      }}>|</span>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
