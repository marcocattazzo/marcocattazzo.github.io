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
  husserlRicerche: {
    tipo: 'libro',
    autori: 'E. Husserl',
    titolo: 'Ricerche logiche',
    edizione: { editore: 'Il Saggiatore', citta: 'Milano', anno: 2015 },
    annoOriginale: 1900
  },
  husserlIdee: {
    tipo: 'libro',
    autori: 'E. Husserl',
    titolo: 'Idee per una fenomenologia pura e per una filosofia fenomenologica',
    edizione: { editore: 'Einaudi', citta: 'Torino', anno: 2002 },
    annoOriginale: 1913
  },
  husserlCrisi: {
    tipo: 'libro',
    autori: 'E. Husserl',
    titolo: 'La crisi delle scienze europee e la fenomenologia trascendentale',
    edizione: { editore: 'Il Saggiatore', citta: 'Milano', anno: 2015 },
    annoOriginale: 1936
  },
  rotaIndiscrete: {
    tipo: 'libro',
    autori: 'G.-C. Rota',
    titolo: 'Indiscrete Thoughts',
    edizione: { editore: 'Birkhäuser', citta: 'Boston', anno: 1997 }
  },

  // -- Logica e fondamenti --
  goedel1931: {
    tipo: 'articolo',
    autori: 'K. Gödel',
    titolo: 'Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I',
    in: 'Monatshefte für Mathematik und Physik',
    volume: '38',
    annoOriginale: 1931,
    pagine: '173–198'
  },
  popperLogica: {
    tipo: 'libro',
    autori: 'K. Popper',
    titolo: 'Logica della scoperta scientifica',
    edizione: { editore: 'Einaudi', citta: 'Torino', anno: 1970 },
    annoOriginale: 1934
  },

  // -- Bellezza e affectus --
  hardyApologia: {
    tipo: 'libro',
    autori: 'G. H. Hardy',
    titolo: 'Apologia di un matematico',
    edizione: { editore: 'Garzanti', citta: 'Milano', anno: 2002 },
    annoOriginale: 1940
  },
  diracBeauty: {
    tipo: 'articolo',
    autori: 'P. A. M. Dirac',
    titolo: 'The Relation between Mathematics and Physics',
    in: 'Proceedings of the Royal Society of Edinburgh',
    volume: '59',
    annoOriginale: 1939,
    pagine: '122–129'
  },
  rousselotIntellectualisme: {
    tipo: 'libro',
    autori: 'P. Rousselot',
    titolo: 'L\'intellectualisme de saint Thomas',
    edizione: { editore: 'Beauchesne', citta: 'Parigi', anno: 1936 },
    annoOriginale: 1908
  },
  wignerEffectiveness: {
    tipo: 'articolo',
    autori: 'E. P. Wigner',
    titolo: 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences',
    in: 'Communications on Pure and Applied Mathematics',
    volume: '13 (1)',
    annoOriginale: 1960,
    pagine: '1–14'
  },

  // -- Critica della tecnoscienza --
  galimbertiPsiche: {
    tipo: 'libro',
    autori: 'U. Galimberti',
    titolo: 'Psiche e techne',
    sottotitolo: 'L\'uomo nell\'età della tecnica',
    edizione: { editore: 'Feltrinelli', citta: 'Milano', anno: 1999 }
  },
  hanRiti: {
    tipo: 'libro',
    autori: 'B.-C. Han',
    titolo: 'La scomparsa dei riti',
    sottotitolo: 'Una topologia del presente',
    edizione: { editore: 'nottetempo', citta: 'Milano', anno: 2021 },
    annoOriginale: 2019
  },

  // -- Magistero --
  leoneXIV2026: {
    tipo: 'enciclica',
    autori: 'Leone XIV',
    titolo: 'Magnifica Humanitas',
    sottotitolo: 'Lettera enciclica sulla custodia della persona umana nel tempo dell\'intelligenza artificiale',
    annoOriginale: 2026
  },
  leoneXIIIRerumNovarum: {
    tipo: 'enciclica',
    autori: 'Leone XIII',
    titolo: 'Rerum Novarum',
    sottotitolo: 'Lettera enciclica sulla questione operaia',
    annoOriginale: 1891
  },
  vaticanoIIGaudium: {
    tipo: 'nota',
    nota: 'Concilio Vaticano II, Costituzione pastorale Gaudium et spes sulla Chiesa nel mondo contemporaneo, 7 dicembre 1965.'
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
