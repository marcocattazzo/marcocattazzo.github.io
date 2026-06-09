// Registro centrale delle fonti citabili dal sito.
// Ogni voce ha un id univoco (la chiave). Le voci sono indicizzate per `tipo`.
//
// TIPI SUPPORTATI:
//   libro      — { autori, titolo, sottotitolo?, edizione: { editore, citta, anno }, annoOriginale?, traduzione? }
//   articolo   — { autori, titolo, in (rivista), volume?, annoOriginale, pagine? }
//   capitolo   — { autori, titolo, curatore?, in (libro), edizione: {...}, pagine? }
//   enciclica  — { autori, titolo, sottotitolo?, annoOriginale }
//   seminario  — { autori, titolo, luogo?, data? }
//   nota       — { nota }  testo libero (per riferimenti che non sono opere specifiche)
//
// CONVENZIONI:
//   - autori: stringa "N. Cognome" oppure "N. Cognome — M. Cognome" per multipli
//   - id: cognomeAnno o nomeMnemonic (es. benacerraf1965, leoneXIV2026, schellingTautegorico)
//
// La formattazione finale è in components/Riferimenti.js.

export const bibliografia = {
  // -- Filosofia della matematica --
  benacerraf1965: {
    tipo: 'articolo',
    autori: 'P. Benacerraf',
    titolo: 'What Numbers Could Not Be',
    in: 'The Philosophical Review',
    volume: '74 (1)',
    annoOriginale: 1965,
    pagine: '47–73'
  },
  benacerraf1973: {
    tipo: 'articolo',
    autori: 'P. Benacerraf',
    titolo: 'Mathematical Truth',
    in: 'The Journal of Philosophy',
    volume: '70 (19)',
    annoOriginale: 1973,
    pagine: '661–679'
  },

  // -- Pareyson --
  pareyson1971: {
    tipo: 'libro',
    autori: 'L. Pareyson',
    titolo: 'Verità e interpretazione',
    edizione: { editore: 'Mursia', citta: 'Milano', anno: 1971 }
  },
  pareyson1954: {
    tipo: 'libro',
    autori: 'L. Pareyson',
    titolo: 'Estetica',
    sottotitolo: 'Teoria della formatività',
    edizione: { editore: 'Bompiani', citta: 'Milano', anno: 1988 },
    annoOriginale: 1954
  },
  pareysonEsistenzaPersona: {
    tipo: 'libro',
    autori: 'L. Pareyson',
    titolo: 'Esistenza e persona',
    edizione: { editore: 'Il Melangolo', citta: 'Genova', anno: 2002 },
    annoOriginale: 1950
  },

  // -- Schelling (concetto ripreso) --
  schellingTautegorico: {
    tipo: 'nota',
    nota: 'F. W. J. Schelling, sul simbolo tautegorico, ripreso da L. Pareyson via G. Ferretti.'
  },

  // -- Fenomenologia --
  husserl1929: {
    tipo: 'libro',
    autori: 'E. Husserl',
    titolo: 'Logica formale e logica trascendentale',
    sottotitolo: 'Saggio di critica della ragione logica',
    edizione: { editore: 'Mimesis', citta: 'Milano', anno: 2009 },
    annoOriginale: 1929
  },
  rotaIndiscrete: {
    tipo: 'libro',
    autori: 'G.-C. Rota',
    titolo: 'Indiscrete Thoughts',
    edizione: { editore: 'Birkhäuser', citta: 'Boston', anno: 1997 }
  },

  // -- Magistero --
  leoneXIV2026: {
    tipo: 'enciclica',
    autori: 'Leone XIV',
    titolo: 'Magnifica Humanitas',
    sottotitolo: 'Lettera enciclica sulla custodia della persona umana nel tempo dell\'intelligenza artificiale',
    annoOriginale: 2026
  },

  // -- Seminari personali (esempio) --
  seminarioDobble2020: {
    tipo: 'seminario',
    autori: 'M. Cattazzo',
    titolo: 'Chi ha rubato le carte di Dobble?',
    luogo: 'Seminario «Fuori Orario», Università degli Studi di Milano',
    data: '15 maggio 2020'
  },
  seminarioTrecce2022: {
    tipo: 'seminario',
    autori: 'M. Cattazzo',
    titolo: 'Topologia algebrica con le mani — corde e trecce',
    luogo: 'Seminario «Fuori Orario» High School, Università degli Studi di Milano',
    data: '13 aprile 2022'
  }
};

// Helper: verifica esistenza id (lato build/dev per fail-fast).
export function bibHas(id) {
  return Object.prototype.hasOwnProperty.call(bibliografia, id);
}
