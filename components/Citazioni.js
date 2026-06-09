'use client';

// Provider + hook per la numerazione automatica delle citazioni in stile
// accademico. Il provider espone un registro mutabile via Context. Ogni <Cite/>
// che renderizza si registra (in ordine di apparizione, deduplicato per id).
// <Riferimenti/> in fondo all'articolo legge la stessa lista e produce la
// bibliografia numerata.
//
// Note implementative:
// - Il registro è ricreato a ogni render del Provider (idempotente in Strict
//   Mode dev): l'ordine è funzione pura della struttura del tree.
// - Tutto funziona sia in SSR (build statico di Next) sia in hydration.

import { createContext, useContext } from 'react';

const Ctx = createContext(null);

export function CitazioniProvider({ children }) {
  // Registro fresh per ogni render. Mutato durante il render dei figli.
  const registry = { order: [], seen: new Set() };
  return <Ctx.Provider value={registry}>{children}</Ctx.Provider>;
}

// Hook usato da <Cite id="..."/>. Registra l'id se nuovo e ritorna il numero
// progressivo (1-based). Se siamo fuori dal Provider, ritorna null.
export function useCiteRegister(id) {
  const registry = useContext(Ctx);
  if (!registry) return null;
  if (!registry.seen.has(id)) {
    registry.seen.add(id);
    registry.order.push(id);
  }
  return registry.order.indexOf(id) + 1;
}

// Hook usato da <Riferimenti/>. Ritorna la lista degli id già registrati,
// nell'ordine di prima apparizione nel testo.
export function useRiferimentiList() {
  const registry = useContext(Ctx);
  return registry?.order || [];
}
