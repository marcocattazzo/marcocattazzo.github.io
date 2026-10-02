// Dati per le pagine /chi-sono/[ambito].
// Ogni ambito è una lista di aree; ogni area ha un "lead" e delle sottoaree con voci.
// Struttura bilingue: ambiti.it / ambiti.en (stesse chiavi).
// Fonte dei contenuti: archivio personale "Core_Carriera" (ottobre 2026).
// La matematica è ordinata per ambito e spendibilità lavorativa, non per esame:
// il "lead" di ogni area dice dove quella competenza serve fuori dall'università.

export const ambiti = {
  it: {
    matematica: [
      {
        area: "Logica, verifica formale e ragionamento automatico",
        lead: "Dove serve: verifica formale di hardware e software, validazione, analisi di correttezza, AI simbolica.",
        subareas: [
          {
            name: "Ragionamento automatico",
            items: [
              "SAT e SMT solving: DPLL, DPLL(T) ed euristiche",
              "Risoluzione, teorema di Herbrand, calcolo di superposition",
              "Riscrittura di termini e completamento di Knuth–Bendix",
              "Combinazione di procedure di decisione; eliminazione dei quantificatori per l'aritmetica lineare"
            ]
          },
          {
            name: "Logica matematica",
            items: [
              "Completezza e compattezza della logica del primo ordine",
              "Funzioni ricorsive e teoremi di incompletezza di Gödel",
              "Teoria dei modelli: eliminazione dei quantificatori, tipi, modelli saturi"
            ]
          },
          {
            name: "Logica algebrica e categoriale",
            items: [
              "Algebre di Lindenbaum–Tarski, categorie sintattiche, topos",
              "Dualità di Stone, Priestley e Pontryagin"
            ]
          }
        ]
      },
      {
        area: "Informatica teorica e linguaggi formali",
        lead: "Dove serve: progettazione di linguaggi e parser, analisi della complessità degli algoritmi, limiti di ciò che è calcolabile.",
        subareas: [
          {
            name: "Calcolabilità e complessità",
            items: [
              "Indecidibilità e teorema di Rice",
              "Classi P, NP, NL, PSPACE e riduzioni; teoremi di Cook e Savitch"
            ]
          },
          {
            name: "Automi e linguaggi",
            items: [
              "Automi finiti, a pila, pesati e two-way; complessità descrittiva",
              "Gerarchia di Chomsky",
              "Procedure di decisione basate su automi per la logica monadica del secondo ordine"
            ]
          }
        ]
      },
      {
        area: "Ottimizzazione e ricerca operativa",
        lead: "Dove serve: logistica e supply chain, pianificazione della produzione, scheduling, supporto alle decisioni.",
        subareas: [
          {
            name: "Programmazione matematica",
            items: [
              "Programmazione lineare, intera e non lineare",
              "Simplesso e dualità; branch-and-bound e tagli di Gomory; condizioni KKT"
            ]
          },
          {
            name: "Grafi e ottimizzazione combinatoria",
            items: [
              "Alberi ricoprenti, cammini minimi, flusso massimo e taglio minimo, matching"
            ]
          },
          {
            name: "Logistica e decisioni",
            items: [
              "Vehicle routing, scheduling, lot-sizing e modelli di scorte",
              "Metodi multi-obiettivo e decisioni di gruppo",
              "Teoria dei giochi"
            ]
          },
          {
            name: "Applicazioni",
            items: [
              "«Letters from Whitechapel»: un gioco di inseguimento su due grafi collegati, analizzato con un team internazionale (4EU+, Charles University, 2022)",
              "Dobble: la regola del gioco come assioma di un piano proiettivo finito (2020)"
            ]
          }
        ]
      },
      {
        area: "Probabilità e modelli stocastici",
        lead: "Dove serve: analisi del rischio, simulazione, dimensionamento di sistemi con code e tempi di attesa.",
        subareas: [
          {
            name: "Probabilità",
            items: [
              "Teoria della probabilità e teoremi limite",
              "Processi stocastici, martingale, catene di Markov, processi di Poisson e di Wiener"
            ]
          },
          {
            name: "Code e simulazione",
            items: [
              "Teoria delle code",
              "Simulazione a eventi discreti"
            ]
          }
        ]
      },
      {
        area: "Strutture algebriche",
        lead: "Dove serve: crittografia e codici, modellazione astratta di sistemi, architetture costruite per composizione.",
        subareas: [
          {
            name: "Algebra",
            items: [
              "Gruppi, anelli, campi e teoria di Galois",
              "Moduli; algebra commutativa e omologica",
              "Aritmetica modulare e campi finiti"
            ]
          },
          {
            name: "Teoria delle categorie",
            items: [
              "Categorie, funtori, aggiunzioni, monadi, categorie abeliane"
            ]
          }
        ]
      },
      {
        area: "Geometria, analisi e modelli continui",
        lead: "Dove serve: modelli fisici e ingegneristici, metodi numerici, grafica e visione artificiale.",
        subareas: [
          {
            name: "Geometria e topologia",
            items: [
              "Algebra lineare e geometria proiettiva",
              "Topologia generale e algebrica: gruppo fondamentale, rivestimenti, omologia",
              "Varietà differenziabili e coomologia di de Rham",
              "«Isoperimetric Inequality», progetto internazionale 4EU+ (2021)"
            ]
          },
          {
            name: "Analisi",
            items: [
              "Analisi reale ed equazioni differenziali ordinarie",
              "Misura e integrale di Lebesgue",
              "Analisi complessa"
            ]
          },
          {
            name: "Fisica matematica",
            items: [
              "Meccanica classica, elettromagnetismo, relatività ristretta, introduzione alla meccanica quantistica",
              "Meccanica lagrangiana e hamiltoniana",
              "Equazioni alle derivate parziali: onde, calore, metodi di Fourier"
            ]
          }
        ]
      },
      {
        area: "Calcolo, dati e programmazione",
        lead: "Dove serve: prototipazione di algoritmi, machine learning applicato, analisi di immagini e di dati.",
        subareas: [
          {
            name: "Linguaggi e strumenti",
            items: [
              "Python: NumPy, SciPy, scikit-image, OpenCV, Matplotlib, Tkinter",
              "PyTorch",
              "C, MATLAB, LaTeX e TikZ"
            ]
          },
          {
            name: "Calcolo numerico",
            items: [
              "Interpolazione, quadratura, equazioni non lineari, sistemi lineari, autovalori (MATLAB)"
            ]
          },
          {
            name: "Machine learning applicato (NewMa)",
            items: [
              "Costruzione di un dataset annotato a mano: 2.508 campioni in 92 classi",
              "Modello CNN + BiLSTM + CTC in PyTorch",
              "Valutazione con accuratezza esatta e CER; analisi sistematica degli errori"
            ]
          }
        ]
      },
      {
        area: "Problem solving e comunicazione matematica",
        lead: "Dove serve: formazione tecnica, documentazione, modellazione di problemi nuovi, lavoro di squadra sotto pressione.",
        subareas: [
          {
            name: "Problem solving olimpico",
            items: [
              "Teoria dei numeri: congruenze, teorema cinese del resto, Fermat–Eulero–Wilson, valutazioni p-adiche, LTE",
              "Algebra: formule di Viète, equazioni funzionali, ricorrenze",
              "Combinatoria e grafi (lemma di Burnside), geometria (inversione circolare), giochi combinatori",
              "Finalista nazionale delle Olimpiadi della Matematica, individuale (2017) e a squadre (2018)"
            ]
          },
          {
            name: "Didattica e scrittura",
            items: [
              "Allenatore delle Olimpiadi al Liceo «E. Majorana» di Desio dal 2018",
              "Archivio di schede di lezione, gare e soluzioni in LaTeX",
              "Seminari «Fuori Orario» all'Università degli Studi di Milano (2020, 2022)"
            ]
          },
          {
            name: "Epistemologia",
            items: [
              "Epistemologia dei processi matematici (laurea magistrale): metodo assiomatico e conoscenza, infinito potenziale e attuale, induzione"
            ]
          }
        ]
      }
    ],

    teologia: [
      {
        area: "Scuola di teologia per laici",
        lead: "Percorso di sei anni del Seminario Arcivescovile di Milano, Decanato di Seregno-Seveso.",
        subareas: [
          {
            name: "Aree del percorso",
            items: [
              "Sacra Scrittura",
              "Antropologia teologica",
              "Teologia sistematica: cristologia, Trinità, rivelazione",
              "Ecclesiologia e sacramenti",
              "Teologia morale",
              "Anno monografico"
            ]
          }
        ]
      },
      {
        area: "Liturgia",
        lead: "Esami di Liturgia I e II alla Facoltà Teologica dell'Italia Settentrionale, Milano (2025).",
        subareas: [
          {
            name: "Liturgia I",
            items: [
              "Storia della liturgia e riforma liturgica del Concilio Vaticano II",
              "Teologia liturgica"
            ]
          },
          {
            name: "Liturgia II",
            items: [
              "Teologia dei sacramenti a partire dalla forma rituale",
              "Iniziazione cristiana"
            ]
          }
        ]
      },
      {
        area: "Convegni",
        lead: "Liturgia, architettura e arte: lo spazio come forma della celebrazione.",
        subareas: [
          {
            name: "La Camera Alta (2026)",
            items: [
              "Convegno «La Camera Alta. Una Chiesa che pensa gli spazi», Monastero di Fonte Avellana, 11–13 giugno 2026",
              "Tra i relatori: Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi"
            ]
          }
        ]
      },
      {
        area: "Ponti con la matematica",
        lead: "Dove i due percorsi si incontrano.",
        subareas: [
          {
            name: "Progetti e scritti",
            items: [
              "NewMa: riconoscimento automatico della notazione neumatica dei libri di canto ambrosiano",
              "Ciclo di articoli «Epistemologia dei processi matematici»"
            ]
          }
        ]
      }
    ],

    rappresentanza: [
      {
        area: "Livello nazionale e internazionale",
        lead: "Rappresentare un'istituzione davanti a interlocutori di alto livello.",
        subareas: [
          {
            name: "Conferenza Episcopale Italiana",
            items: [
              "Delegato laico al 53° Congresso Eucaristico Internazionale, Quito, Ecuador (settembre 2024)",
              "Uno dei 5 delegati nazionali, nella prima delegazione CEI aperta ai laici"
            ]
          }
        ]
      },
      {
        area: "Livello regionale e diocesano",
        lead: "Processi partecipativi con molti interlocutori.",
        subareas: [
          {
            name: "Conferenza Episcopale Lombarda",
            items: [
              "Commissione «Riti» del tavolo «Giovani e Vescovi» (2021–2024)",
              "Percorso sinodale con 200 giovani e 14 vescovi delle 10 diocesi lombarde"
            ]
          },
          {
            name: "Arcidiocesi di Milano",
            items: [
              "Consulta giovanile di Movimenti e Associazioni (2021)"
            ]
          }
        ]
      },
      {
        area: "Livello cittadino",
        lead: "Governance di una comunità ampia e articolata.",
        subareas: [
          {
            name: "Comunità Pastorale San Giovanni Paolo II, Seregno",
            items: [
              "Consigliere e membro di Giunta (dal 2019, 2 mandati)",
              "6 parrocchie, circa 47.000 abitanti, consiglio di oltre 40 membri"
            ]
          }
        ]
      },
      {
        area: "Scuola e università",
        lead: "Le prime responsabilità elettive.",
        subareas: [
          {
            name: "Università degli Studi di Milano",
            items: [
              "Rappresentante degli studenti nel Consiglio di Dipartimento di Matematica (2021–2023, 2 mandati)"
            ]
          },
          {
            name: "Liceo «E. Majorana», Desio",
            items: [
              "Rappresentante degli studenti nel Consiglio d'Istituto (2017)"
            ]
          }
        ]
      },
      {
        area: "Competenze trasferibili",
        lead: "Quello che questi incarichi allenano, dentro e fuori dalle istituzioni.",
        subareas: [
          {
            name: "Gestione degli interlocutori",
            items: [
              "Far lavorare insieme gruppi eterogenei verso decisioni condivise",
              "Facilitazione di processi partecipativi e sintesi di contributi diversi"
            ]
          },
          {
            name: "Governance",
            items: [
              "Preparazione delle decisioni, lavoro di giunta, verbalizzazione",
              "Reporting verso i vertici di un'istituzione"
            ]
          },
          {
            name: "Comunicazione",
            items: [
              "Public speaking e rappresentanza istituzionale, anche in contesti internazionali"
            ]
          }
        ]
      }
    ],

    grafica: [
      {
        area: "Coordinamento e produzione: MAJOtivù",
        lead: "La web TV degli studenti del Liceo «E. Majorana» di Desio (2015–2017).",
        subareas: [
          {
            name: "Coordinamento",
            items: [
              "Coordinatore della redazione: 10–30 studenti volontari all'anno",
              "Pianificazione, distribuzione dei compiti, supervisione della produzione",
              "Attrezzature acquistate con fondi europei PON"
            ]
          },
          {
            name: "Produzione",
            items: [
              "Identità grafica per ogni format del canale",
              "Video per YouTube, grafiche per Instagram e Facebook, podcast",
              "Materiali di stampa: biglietti da visita, locandine"
            ]
          }
        ]
      },
      {
        area: "Dirette e regia",
        lead: "Eventi dal vivo con grafiche su misura.",
        subareas: [
          {
            name: "Regia in OBS Studio",
            items: [
              "Intitolazione dell'Aula Magna «G. Ambrosoli», Liceo Majorana (febbraio 2017)",
              "Giornata della Memoria",
              "Sottopancia, cartelli, presentazione dei relatori, transizioni"
            ]
          }
        ]
      },
      {
        area: "Animazione e motion graphics",
        lead: "Il segno che si muove.",
        subareas: [
          {
            name: "Animazione",
            items: [
              "Animazioni disegnate a mano in Adobe Animate per un video di candidatura sui buchi neri (Astrolab)",
              "Sigla di «Clipnotes», insieme a un altro creator"
            ]
          }
        ]
      },
      {
        area: "Identità e comunicazione",
        lead: "Sistemi visivi coerenti per realtà diverse.",
        subareas: [
          {
            name: "Exsultet! 2025",
            items: [
              "Comunicazione coordinata del festival di musica liturgica, Varese",
              "Estensione dell'identità visiva esistente e trattamento delle immagini dei relatori"
            ]
          },
          {
            name: "Olimpiadi della Matematica",
            items: [
              "Magliette della squadra (2019–2026), volantini, grafiche per Instagram"
            ]
          }
        ]
      },
      {
        area: "Comunicazione scientifica",
        lead: "Rendere visibile una struttura.",
        subareas: [
          {
            name: "Materiali",
            items: [
              "Schede in LaTeX e TikZ con impaginazione ricorrente",
              "Figure di geometria con GeoGebra",
              "Grafici diagnostici del progetto NewMa"
            ]
          }
        ]
      },
      {
        area: "Strumenti",
        lead: "Livelli dichiarati, senza esagerare.",
        subareas: [
          {
            name: "Motion e video",
            items: ["Adobe After Effects (avanzato)", "Adobe Premiere Pro", "Adobe Animate", "OBS Studio"]
          },
          {
            name: "Immagine e stampa",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Prestampa: livelli separati, goffrature, canale alfa"]
          },
          {
            name: "Altro",
            items: ["Cinema 4D (base)"]
          }
        ]
      }
    ]
  },

  en: {
    matematica: [
      {
        area: "Logic, formal verification and automated reasoning",
        lead: "Where it is used: formal verification of hardware and software, validation, correctness analysis, symbolic AI.",
        subareas: [
          {
            name: "Automated reasoning",
            items: [
              "SAT and SMT solving: DPLL, DPLL(T) and heuristics",
              "Resolution, Herbrand's theorem, superposition calculus",
              "Term rewriting and Knuth–Bendix completion",
              "Combination of decision procedures; quantifier elimination for linear arithmetic"
            ]
          },
          {
            name: "Mathematical logic",
            items: [
              "Completeness and compactness of first-order logic",
              "Recursive functions and Gödel's incompleteness theorems",
              "Model theory: quantifier elimination, types, saturated models"
            ]
          },
          {
            name: "Algebraic and categorical logic",
            items: [
              "Lindenbaum–Tarski algebras, syntactic categories, toposes",
              "Stone, Priestley and Pontryagin dualities"
            ]
          }
        ]
      },
      {
        area: "Theoretical computer science and formal languages",
        lead: "Where it is used: language and parser design, algorithmic complexity analysis, the limits of what can be computed.",
        subareas: [
          {
            name: "Computability and complexity",
            items: [
              "Undecidability and Rice's theorem",
              "P, NP, NL, PSPACE and reductions; Cook's and Savitch's theorems"
            ]
          },
          {
            name: "Automata and languages",
            items: [
              "Finite, pushdown, weighted and two-way automata; descriptional complexity",
              "The Chomsky hierarchy",
              "Automata-based decision procedures for monadic second-order logic"
            ]
          }
        ]
      },
      {
        area: "Optimization and operations research",
        lead: "Where it is used: logistics and supply chain, production planning, scheduling, decision support.",
        subareas: [
          {
            name: "Mathematical programming",
            items: [
              "Linear, integer and nonlinear programming",
              "Simplex and duality; branch-and-bound and Gomory cuts; KKT conditions"
            ]
          },
          {
            name: "Graphs and combinatorial optimization",
            items: [
              "Spanning trees, shortest paths, max-flow/min-cut, matching"
            ]
          },
          {
            name: "Logistics and decisions",
            items: [
              "Vehicle routing, scheduling, lot-sizing and inventory models",
              "Multi-objective and group decision methods",
              "Game theory"
            ]
          },
          {
            name: "Applications",
            items: [
              "\"Letters from Whitechapel\": a pursuit game on two coupled graphs, analysed with an international team (4EU+, Charles University, 2022)",
              "Dobble: the game's rule as the axiom of a finite projective plane (2020)"
            ]
          }
        ]
      },
      {
        area: "Probability and stochastic models",
        lead: "Where it is used: risk analysis, simulation, sizing systems with queues and waiting times.",
        subareas: [
          {
            name: "Probability",
            items: [
              "Probability theory and limit theorems",
              "Stochastic processes, martingales, Markov chains, Poisson and Wiener processes"
            ]
          },
          {
            name: "Queues and simulation",
            items: [
              "Queueing theory",
              "Discrete-event simulation"
            ]
          }
        ]
      },
      {
        area: "Algebraic structures",
        lead: "Where it is used: cryptography and codes, abstract modelling of systems, architectures built by composition.",
        subareas: [
          {
            name: "Algebra",
            items: [
              "Groups, rings, fields and Galois theory",
              "Modules; commutative and homological algebra",
              "Modular arithmetic and finite fields"
            ]
          },
          {
            name: "Category theory",
            items: [
              "Categories, functors, adjunctions, monads, abelian categories"
            ]
          }
        ]
      },
      {
        area: "Geometry, analysis and continuous models",
        lead: "Where it is used: physical and engineering models, numerical methods, graphics and computer vision.",
        subareas: [
          {
            name: "Geometry and topology",
            items: [
              "Linear algebra and projective geometry",
              "General and algebraic topology: fundamental group, covering spaces, homology",
              "Differentiable manifolds and de Rham cohomology",
              "\"Isoperimetric Inequality\", 4EU+ international project (2021)"
            ]
          },
          {
            name: "Analysis",
            items: [
              "Real analysis and ordinary differential equations",
              "Lebesgue measure and integration",
              "Complex analysis"
            ]
          },
          {
            name: "Mathematical physics",
            items: [
              "Classical mechanics, electromagnetism, special relativity, introductory quantum mechanics",
              "Lagrangian and Hamiltonian mechanics",
              "Partial differential equations: wave and heat equations, Fourier methods"
            ]
          }
        ]
      },
      {
        area: "Computation, data and programming",
        lead: "Where it is used: algorithm prototyping, applied machine learning, image and data analysis.",
        subareas: [
          {
            name: "Languages and tools",
            items: [
              "Python: NumPy, SciPy, scikit-image, OpenCV, Matplotlib, Tkinter",
              "PyTorch",
              "C, MATLAB, LaTeX and TikZ"
            ]
          },
          {
            name: "Numerical analysis",
            items: [
              "Interpolation, quadrature, nonlinear equations, linear systems, eigenvalues (MATLAB)"
            ]
          },
          {
            name: "Applied machine learning (NewMa)",
            items: [
              "Building a hand-annotated dataset: 2,508 samples in 92 classes",
              "CNN + BiLSTM + CTC model in PyTorch",
              "Evaluation with exact-match accuracy and CER; systematic error analysis"
            ]
          }
        ]
      },
      {
        area: "Problem solving and mathematical communication",
        lead: "Where it is used: technical training, documentation, modelling new problems, teamwork under pressure.",
        subareas: [
          {
            name: "Olympiad problem solving",
            items: [
              "Number theory: congruences, Chinese remainder theorem, Fermat–Euler–Wilson, p-adic valuations, LTE",
              "Algebra: Vieta's formulas, functional equations, recurrences",
              "Combinatorics and graphs (Burnside's lemma), geometry (circle inversion), combinatorial games",
              "National finalist of the Italian Mathematical Olympiad, individual (2017) and team (2018)"
            ]
          },
          {
            name: "Teaching and writing",
            items: [
              "Olympiad coach at Liceo \"E. Majorana\", Desio, since 2018",
              "Archive of lesson sheets, contests and solutions in LaTeX",
              "\"Fuori Orario\" seminars at the University of Milan (2020, 2022)"
            ]
          },
          {
            name: "Epistemology",
            items: [
              "Epistemology of mathematical processes (master's degree): the axiomatic method and knowledge, potential and actual infinity, induction"
            ]
          }
        ]
      }
    ],

    teologia: [
      {
        area: "School of theology for laypeople",
        lead: "A six-year programme of the Archiepiscopal Seminary of Milan, Seregno-Seveso Deanery.",
        subareas: [
          {
            name: "Areas of the programme",
            items: [
              "Sacred Scripture",
              "Theological anthropology",
              "Systematic theology: Christology, Trinity, revelation",
              "Ecclesiology and sacraments",
              "Moral theology",
              "Monographic year"
            ]
          }
        ]
      },
      {
        area: "Liturgy",
        lead: "Liturgy I and II exams at the Theological Faculty of Northern Italy, Milan (2025).",
        subareas: [
          {
            name: "Liturgy I",
            items: [
              "History of the liturgy and the liturgical reform of the Second Vatican Council",
              "Liturgical theology"
            ]
          },
          {
            name: "Liturgy II",
            items: [
              "Theology of the sacraments starting from their ritual form",
              "Christian initiation"
            ]
          }
        ]
      },
      {
        area: "Conferences",
        lead: "Liturgy, architecture and art: space as the form of celebration.",
        subareas: [
          {
            name: "La Camera Alta (2026)",
            items: [
              "Conference \"La Camera Alta. A Church that thinks its spaces\", Monastery of Fonte Avellana, 11–13 June 2026",
              "Speakers included Jean-Louis Ska, Giuliano Zanchi, Roberto Tagliaferri, Paolo Zermani, Enzo Bianchi, Michele De Lucchi"
            ]
          }
        ]
      },
      {
        area: "Bridges with mathematics",
        lead: "Where the two paths meet.",
        subareas: [
          {
            name: "Projects and writing",
            items: [
              "NewMa: automatic recognition of the neumatic notation in Ambrosian chant books",
              "Article series \"Epistemology of mathematical processes\""
            ]
          }
        ]
      }
    ],

    rappresentanza: [
      {
        area: "National and international level",
        lead: "Representing an institution before high-level counterparts.",
        subareas: [
          {
            name: "Italian Episcopal Conference (CEI)",
            items: [
              "Lay delegate to the 53rd International Eucharistic Congress, Quito, Ecuador (September 2024)",
              "One of 5 national delegates, in the first CEI delegation open to lay members"
            ]
          }
        ]
      },
      {
        area: "Regional and diocesan level",
        lead: "Participatory processes with many stakeholders.",
        subareas: [
          {
            name: "Lombard Episcopal Conference",
            items: [
              "\"Rites\" commission of the \"Youth and Bishops\" programme (2021–2024)",
              "A synodal process with 200 young people and 14 bishops from the 10 Lombard dioceses"
            ]
          },
          {
            name: "Archdiocese of Milan",
            items: [
              "Youth council of Movements and Associations (2021)"
            ]
          }
        ]
      },
      {
        area: "City level",
        lead: "Governance of a large and varied community.",
        subareas: [
          {
            name: "St. John Paul II Pastoral Community, Seregno",
            items: [
              "Council and executive board member (since 2019, 2 terms)",
              "6 parishes, about 47,000 inhabitants, a council of more than 40 members"
            ]
          }
        ]
      },
      {
        area: "School and university",
        lead: "The first elected responsibilities.",
        subareas: [
          {
            name: "University of Milan",
            items: [
              "Student representative on the Department Council of Mathematics (2021–2023, 2 terms)"
            ]
          },
          {
            name: "Liceo \"E. Majorana\", Desio",
            items: [
              "Student representative on the School Council (2017)"
            ]
          }
        ]
      },
      {
        area: "Transferable skills",
        lead: "What these roles train, inside and outside institutions.",
        subareas: [
          {
            name: "Stakeholder management",
            items: [
              "Getting heterogeneous groups to work together toward shared decisions",
              "Facilitating participatory processes and synthesising diverse contributions"
            ]
          },
          {
            name: "Governance",
            items: [
              "Preparing decisions, executive-board work, minute-taking",
              "Reporting to the top of an institution"
            ]
          },
          {
            name: "Communication",
            items: [
              "Public speaking and institutional representation, including international settings"
            ]
          }
        ]
      }
    ],

    grafica: [
      {
        area: "Coordination and production: MAJOtivù",
        lead: "The student web TV of Liceo \"E. Majorana\", Desio (2015–2017).",
        subareas: [
          {
            name: "Coordination",
            items: [
              "Editorial coordinator: 10–30 student volunteers per year",
              "Planning, task assignment, production oversight",
              "Equipment purchased with EU PON funds"
            ]
          },
          {
            name: "Production",
            items: [
              "A visual identity for each format of the channel",
              "YouTube videos, Instagram and Facebook graphics, podcasts",
              "Print materials: business cards, posters"
            ]
          }
        ]
      },
      {
        area: "Live streaming and direction",
        lead: "Live events with custom graphics.",
        subareas: [
          {
            name: "Direction in OBS Studio",
            items: [
              "Naming ceremony of the \"G. Ambrosoli\" Main Hall, Liceo Majorana (February 2017)",
              "Holocaust Remembrance Day",
              "Lower thirds, title cards, speaker introductions, transitions"
            ]
          }
        ]
      },
      {
        area: "Animation and motion graphics",
        lead: "The mark that moves.",
        subareas: [
          {
            name: "Animation",
            items: [
              "Hand-drawn animations in Adobe Animate for an application video on black holes (Astrolab)",
              "Opening titles for \"Clipnotes\", together with another creator"
            ]
          }
        ]
      },
      {
        area: "Identity and communication",
        lead: "Coherent visual systems for different organisations.",
        subareas: [
          {
            name: "Exsultet! 2025",
            items: [
              "Coordinated communication for the liturgical music festival, Varese",
              "Extension of the existing visual identity and treatment of the speakers' images"
            ]
          },
          {
            name: "Mathematical Olympiad",
            items: [
              "Team T-shirts (2019–2026), flyers, Instagram graphics"
            ]
          }
        ]
      },
      {
        area: "Scientific communication",
        lead: "Making a structure visible.",
        subareas: [
          {
            name: "Materials",
            items: [
              "Lesson sheets in LaTeX and TikZ with a recurring layout",
              "Geometry figures with GeoGebra",
              "Diagnostic plots for the NewMa project"
            ]
          }
        ]
      },
      {
        area: "Tools",
        lead: "Levels stated plainly.",
        subareas: [
          {
            name: "Motion and video",
            items: ["Adobe After Effects (advanced)", "Adobe Premiere Pro", "Adobe Animate", "OBS Studio"]
          },
          {
            name: "Image and print",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Prepress: separated layers, embossing, alpha channel"]
          },
          {
            name: "Other",
            items: ["Cinema 4D (basic)"]
          }
        ]
      }
    ]
  }
};

export const getAmbitoSlugs = () => Object.keys(ambiti.it);
