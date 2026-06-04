// Data for /chi-sono/[ambito] detail pages.
// Each ambito is a list of areas; each area has subareas; each subarea has items (topics).
// Predisposto per essere riempito: i placeholder vanno sostituiti coi dati definitivi.

export const ambiti = {
  matematica: [
    {
      area: 'Algebra',
      lead: 'Strutture e morfismi. Dove la matematica si fa lingua.',
      subareas: [
        { name: 'Teoria di Galois', items: ['Estensioni di campo', 'Gruppi di Galois', 'Risolubilità per radicali', 'Costruzioni con riga e compasso'] },
        { name: 'Teoria dei gruppi', items: ['Gruppi finiti', 'Rappresentazioni', 'Gruppi di Lie (introduzione)', 'Azioni di gruppo'] },
        { name: 'Teoria degli anelli', items: ['Anelli commutativi', 'Domini, ideali primi e massimali', 'Anelli noetheriani', 'Localizzazione'] },
        { name: 'Teoria dei reticoli', items: ['Reticoli distributivi', 'Algebre di Boole', 'Reticoli completi', 'Punti fissi'] },
        { name: 'Algebra lineare avanzata', items: ['Forme canoniche', 'Prodotti tensoriali', 'Algebre di Clifford (cenni)'] }
      ]
    },
    {
      area: 'Analisi',
      lead: 'Il continuo, il limite, lo spazio.',
      subareas: [
        { name: 'Analisi reale', items: ['Misura di Lebesgue', 'Spazi Lp', 'Teoremi di convergenza'] },
        { name: 'Analisi complessa', items: ['Funzioni olomorfe', 'Teorema dei residui', 'Continuazione analitica'] },
        { name: 'Analisi funzionale', items: ['Spazi di Banach e Hilbert', 'Teoremi di Hahn-Banach', 'Operatori limitati'] },
        { name: 'Equazioni differenziali', items: ['ODE', 'PDE (cenni)', 'Sistemi dinamici'] }
      ]
    },
    {
      area: 'Geometria',
      lead: 'Lo spazio prima della metrica.',
      subareas: [
        { name: 'Geometria proiettiva', items: ['Piani proiettivi finiti', 'Dualità', 'Configurazioni di Pappo e Desargues'] },
        { name: 'Geometria differenziale', items: ['Varietà', 'Forme differenziali (cenni)', 'Connessioni'] },
        { name: 'Topologia generale', items: ['Spazi metrici', 'Compattezza, connessione', 'Spazi prodotto e quoziente'] },
        { name: 'Topologia algebrica', items: ['Gruppi fondamentali', 'Omologia (introduzione)'] }
      ]
    },
    {
      area: 'Logica e fondamenti',
      lead: 'Il rigore guarda se stesso.',
      subareas: [
        { name: 'Logica del primo ordine', items: ['Sintassi e semantica', 'Teorema di completezza', 'Compattezza, Löwenheim-Skolem'] },
        { name: 'Teoria dei modelli', items: ['Strutture e teorie', 'Tipi e saturazione', 'Giochi di Ehrenfeucht-Fraïssé'] },
        { name: 'Teoria della dimostrazione', items: ['Calcoli dei sequenti', 'Cut elimination', 'Aritmetica di Peano'] },
        { name: 'Teoria della computabilità', items: ['Macchine di Turing', 'Funzioni ricorsive', 'Indecidibilità'] }
      ]
    },
    {
      area: 'Combinatoria & ottimizzazione',
      lead: 'Contare bene è già teoria.',
      subareas: [
        { name: 'Combinatoria enumerativa', items: ['Funzioni generatrici', 'Identità binomiali', 'Permutazioni'] },
        { name: 'Geometria combinatoria', items: ['Piani proiettivi', 'Design (Dobble)', 'Bruck-Ryser-Lam'] },
        { name: 'Ottimizzazione combinatoria', items: ['Programmazione lineare', 'ILP, MaxSAT', 'Branch & bound'] },
        { name: 'Teoria dei giochi', items: ['Giochi a somma zero', 'Equilibri di Nash', 'Game comonads (lettura)'] }
      ]
    },
    {
      area: 'Probabilità & statistica',
      lead: 'Quantificare l\'incertezza, non eliminarla.',
      subareas: [
        { name: 'Probabilità', items: ['Spazi di probabilità', 'Catene di Markov', 'Concentrazione (Chernoff/Hoeffding)'] },
        { name: 'Statistica inferenziale', items: ['Stima', 'Test di ipotesi', 'Modelli bayesiani (cenni)'] }
      ]
    }
  ],

  teologia: [
    {
      area: 'Teologia sistematica',
      lead: 'Pensare Dio dentro la coerenza interna del pensiero.',
      subareas: [
        { name: 'Cristologia', items: ['Cristologia patristica', 'Concili cristologici', 'Cristologia contemporanea (cenni)'] },
        { name: 'Trinitaria', items: ['Trinità immanente ed economica', 'Filioque', 'Modelli relazionali'] },
        { name: 'Ecclesiologia', items: ['Lumen Gentium', 'Sinodalità', 'Chiesa locale e universale'] },
        { name: 'Antropologia teologica', items: ['Imago Dei', 'Grazia e libertà', 'Peccato originale'] }
      ]
    },
    {
      area: 'Sacra Scrittura',
      lead: 'I testi nella loro storia e nel loro corpo.',
      subareas: [
        { name: 'Antico Testamento', items: ['Pentateuco', 'Profeti', 'Sapienziali', 'Salmi'] },
        { name: 'Nuovo Testamento', items: ['Vangeli sinottici', 'Corpus giovanneo', 'Lettere paoline', 'Apocalisse'] },
        { name: 'Metodi esegetici', items: ['Critica storico-letteraria', 'Lettura canonica', 'Approccio narrativo'] }
      ]
    },
    {
      area: 'Liturgia',
      lead: 'Forma del conoscere comune.',
      subareas: [
        { name: 'Liturgia fondamentale (Liturgia 1, FTIS)', items: ['Storia della liturgia', 'Teologia liturgica', 'Anno liturgico'] },
        { name: 'Liturgia sacramentaria (Liturgia 2, FTIS)', items: ['Eucaristia', 'Iniziazione cristiana', 'Liturgia delle Ore', 'Liturgia della Parola'] }
      ]
    },
    {
      area: 'Teologia morale',
      lead: 'L\'agire dentro la fede.',
      subareas: [
        { name: 'Morale fondamentale', items: ['Coscienza', 'Legge naturale', 'Discernimento'] },
        { name: 'Morale sociale', items: ['Dottrina sociale della Chiesa', 'Bene comune', 'Lavoro'] }
      ]
    },
    {
      area: 'Filosofia per la teologia',
      lead: 'I confini in cui la teologia prende fiato.',
      subareas: [
        { name: 'Metafisica', items: ['Tommaso d\'Aquino', 'Pareyson', 'Ontologia contemporanea'] },
        { name: 'Filosofia del linguaggio', items: ['Atti linguistici (Austin/Searle)', 'Performatività liturgica'] }
      ]
    }
  ],

  pastorale: [
    {
      area: 'Pastorale giovanile',
      lead: 'L\'ascolto come pre-condizione del cammino.',
      subareas: [
        { name: 'Animazione gruppi giovanili', items: ['Catechesi adolescenti', 'Cammini post-cresima', 'Accompagnamento personale'] },
        { name: 'Direzione progetto innovativo diocesano', items: ['Coordinamento équipe', 'Progettazione formativa', 'Verifica e rilancio'] }
      ]
    },
    {
      area: 'Servizio comunitario',
      lead: 'Stare nella comunità senza ruoli di facciata.',
      subareas: [
        { name: 'Vita parrocchiale', items: ['Liturgia domenicale', 'Festa patronale', 'Servizio caritativo (placeholder)'] },
        { name: 'Decanato Seregno-Seveso', items: ['Scuola di Teologia per Laici (2016–2021)', 'Iniziative pastorali condivise'] }
      ]
    },
    {
      area: 'Formazione di formatori',
      lead: 'Chi forma altri ha bisogno di essere formato due volte.',
      subareas: [
        { name: 'Corsi e ritiri', items: ['Placeholder per elenco specifico'] },
        { name: 'Convegni e talks', items: ['Fuori orario — pastorale giovanile e sinodalità (2024)', 'Exsultet — liturgia e comunità (2024)'] }
      ]
    },
    {
      area: 'Liturgia e celebrazione',
      lead: 'La liturgia come luogo in cui la comunità si vede.',
      subareas: [
        { name: 'Ministerialità', items: ['Lettorato', 'Animazione liturgica (placeholder)'] },
        { name: 'Tempi forti', items: ['Avvento, Natale', 'Quaresima, Triduo, Pasqua'] }
      ]
    }
  ],

  grafica: [
    {
      area: 'Identità visiva',
      lead: 'Un sistema di segni che riconosce sé stesso.',
      subareas: [
        { name: 'Logo design', items: ['Studio del segno', 'Varianti monocromatiche', 'Costruzione geometrica'] },
        { name: 'Sistema iconografico', items: ['Famiglie di icone line-art', 'Pittogrammi funzionali', 'Coerenza di peso e angolo'] },
        { name: 'Palette e tipografia di marca', items: ['Accoppiamenti tipografici', 'Scala cromatica modale', 'Regole di applicazione'] }
      ]
    },
    {
      area: 'Tipografia',
      lead: 'La forma della lettera è la forma del pensiero.',
      subareas: [
        { name: 'Famiglie tipografiche', items: ['Serif classici (Garamond, Cormorant)', 'Sans contemporanei (Outfit, Inter)', 'Display sperimentali'] },
        { name: 'Composizione tipografica', items: ['Interlinea, crenatura', 'Gerarchia visiva', 'Microtipografia'] },
        { name: 'Letterforme', items: ['Disegno tipografico (cenni)', 'Modulazione del tratto'] }
      ]
    },
    {
      area: 'Impaginazione editoriale',
      lead: 'Tenere il vuoto come si tiene il silenzio.',
      subareas: [
        { name: 'Griglie modulari', items: ['Griglie a colonne', 'Griglie modulari', 'Pagina-modello'] },
        { name: 'Libri e riviste', items: ['Architettura del libro', 'Ritmo di pagina', 'Indice e gerarchia'] },
        { name: 'Editoria liturgica', items: ['Sussidi, libretti', 'Sobrietà e leggibilità'] }
      ]
    },
    {
      area: 'Composizione e immagine',
      lead: 'La regola che decide cosa entra e cosa resta fuori.',
      subareas: [
        { name: 'Composizione visiva', items: ['Equilibrio, tensione, ritmo', 'Punti focali', 'Lettura dell\'occhio'] },
        { name: 'Fotografia editoriale', items: ['Composizione fotografica', 'Color grading', 'Trattamento della luce'] },
        { name: 'Illustrazione line-art', items: ['Single continuous line', 'Tratteggio e texture'] }
      ]
    },
    {
      area: 'Web e digitale',
      lead: 'Il segno che si muove e risponde.',
      subareas: [
        { name: 'Design di interfaccia', items: ['Design system', 'Componenti accessibili', 'Microinterazioni'] },
        { name: 'Motion design', items: ['Animazioni di transizione', 'Easing e ritmo', 'Framer Motion'] }
      ]
    },
    {
      area: 'Strumenti',
      lead: 'Sapere cosa fare a mano e cosa chiedere alla macchina.',
      subareas: [
        { name: 'Vector', items: ['Figma', 'Illustrator', 'Affinity Designer'] },
        { name: 'Editoria', items: ['InDesign', 'Affinity Publisher'] },
        { name: 'Raster e motion', items: ['Photoshop', 'After Effects', 'Procreate'] }
      ]
    }
  ]
};

export const ambitoSlugs = Object.keys(ambiti);
