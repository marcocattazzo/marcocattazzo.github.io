'use client';

// <Riferimenti/>  →  lista numerata di tutte le citazioni registrate
// dai <Cite/> precedenti nell'articolo, formattate secondo il tipo.
//
// Va messo in fondo all'MDX. Se nessuna citazione è stata registrata,
// non renderizza nulla.

import { useRiferimentiList } from './Citazioni';
import { bibliografia } from '../lib/bibliografia';
import styles from './Riferimenti.module.css';

function FormatEntry({ entry }) {
  switch (entry.tipo) {
    case 'libro':
      return (
        <>
          {entry.autori}, <em>{entry.titolo}</em>
          {entry.sottotitolo ? <>. <em>{entry.sottotitolo}</em></> : null}
          {entry.edizione && entry.annoOriginale && entry.edizione.anno !== entry.annoOriginale
            ? <> [{entry.annoOriginale}]</>
            : null}
          {entry.edizione ? <>, {entry.edizione.editore}, {entry.edizione.citta} {entry.edizione.anno}</> : null}
          .
        </>
      );

    case 'articolo':
      return (
        <>
          {entry.autori}, «{entry.titolo}», in <em>{entry.in}</em>
          {entry.volume ? <>, {entry.volume}</> : null}
          , {entry.annoOriginale}
          {entry.pagine ? <>, pp. {entry.pagine}</> : null}
          .
        </>
      );

    case 'capitolo':
      return (
        <>
          {entry.autori}, «{entry.titolo}», in {entry.curatore ? <>{entry.curatore} (a cura di), </> : null}
          <em>{entry.in}</em>
          {entry.edizione ? <>, {entry.edizione.editore}, {entry.edizione.citta} {entry.edizione.anno}</> : null}
          {entry.pagine ? <>, pp. {entry.pagine}</> : null}
          .
        </>
      );

    case 'enciclica':
      return (
        <>
          {entry.autori}, <em>{entry.titolo}</em>
          {entry.sottotitolo ? <>. <em>{entry.sottotitolo}</em></> : null}
          , {entry.annoOriginale}.
        </>
      );

    case 'seminario':
      return (
        <>
          {entry.autori}, «{entry.titolo}»
          {entry.luogo ? <>, {entry.luogo}</> : null}
          {entry.data ? <>, {entry.data}</> : null}
          .
        </>
      );

    case 'nota':
      return <>{entry.nota}</>;

    default:
      return <>{entry.autori}, <em>{entry.titolo}</em>.</>;
  }
}

export default function Riferimenti() {
  const ids = useRiferimentiList();
  if (!ids.length) return null;

  return (
    <section className={styles.section} aria-labelledby="riferimenti-title">
      <h2 id="riferimenti-title" className={styles.title}>Riferimenti</h2>
      <ol className={styles.list}>
        {ids.map((id, i) => {
          const entry = bibliografia[id];
          return (
            <li key={id} id={`rif-${id}`} className={styles.item}>
              <span className={styles.num}>[{i + 1}]</span>
              {entry
                ? <FormatEntry entry={entry} />
                : <span className={styles.missing}>Riferimento mancante: <code>{id}</code> — aggiungilo a <code>lib/bibliografia.js</code>.</span>
              }
            </li>
          );
        })}
      </ol>
    </section>
  );
}
