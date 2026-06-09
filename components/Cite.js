'use client';

// <Cite id="..." pages="§71"/>  →  <sup>[3, §71]</sup> con link a #rif-id.
//
// Il numero viene assegnato dal Provider di Citazioni in base all'ordine di
// prima apparizione. Se l'id non esiste in lib/bibliografia, viene segnalato
// visivamente con un ? accanto al numero.

import { useCiteRegister } from './Citazioni';
import { bibHas } from '../lib/bibliografia';
import styles from './Cite.module.css';

export default function Cite({ id, pages }) {
  const n = useCiteRegister(id);
  const exists = bibHas(id);

  if (n === null) {
    // Renderizzato fuori da un CitazioniProvider — fallback silenzioso.
    return <sup className={styles.cite}><span className={styles.missing}>[{id}?]</span></sup>;
  }

  return (
    <sup className={styles.cite}>
      <a href={`#rif-${id}`} className={`${styles.link} ${exists ? '' : styles.missing}`}>
        [{n}{exists ? '' : '?'}{pages ? <><span className={styles.pages}>, {pages}</span></> : null}]
      </a>
    </sup>
  );
}
