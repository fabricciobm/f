// Importação dinâmica das imagens
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const serviceImages = importAll(require.context('./../../assets/', false, /\.(png|jpe?g|svg|webp)$/));
// Definindo os serviços
const Services = [
  {
    image: serviceImages['service5.webp'],
    title: 'Branding',
    description: "<p>Il tuo marchio è la tua identità visiva nel mondo digitale. Un logo ben progettato è fondamentale per distinguerti dalla massa e catturare l'attenzione dei potenziali clienti. Investi nella tua immagine aziendale con un logo professionale che trasmetta credibilità e stile. Sono qui per creare un design unico e memorabile che ti aiuterà a raggiungere i tuoi obiettivi commerciali.</p>",
    description_long: "<h2></h2><p>Offro servizi di progettazione di logo e branding personalizzati per aiutare i professionisti e le imprese a creare una presenza online distintiva. Con una vasta esperienza nel settore del design grafico, posso trasformare le tue idee e la tua visione in un logo accattivante che rifletta l'essenza del tuo marchio. Dall'analisi del mercato alla creazione di concept originali, mi impegno a fornire soluzioni creative e su misura che soddisfino le tue esigenze aziendali. Investi nella tua identità di marca con un logo professionale che ti distinguerà e ti farà brillare nel panorama competitivo.</p>",
    destaque: [],
    url: '/logo-design',
    tags: ['design', 'logo', 'branding'],
    planos: {
      plano1: {
        nome: 'Design logo',
        destaque: [
          "5 Disegni diversi", 
          "Fino a 3 Revisioni", 
          "Palette color", 
          "1 Branding finale", 
          "Formato: PNG, PDF, CDR, AI, PS",
          "Consegna entro 5 giorni"
          ],
        tags: ['design', 'logo', 'branding'],
        price: 60
      }
    }
  },
  {
    image: serviceImages['service1.webp'],
    title: 'Siti Web Statici',
    description: "<p>Investi nel tuo successo online con fiducia. Con il nostro servizio di creazione siti web, hai a disposizione gli strumenti necessari per far crescere la tua presenza digitale e raggiungere nuovi traguardi. Contattaci oggi stesso per iniziare il tuo viaggio verso il successo online.</p>",
    description_long: "<h2>Ottimizza la tua presenza online</h2><p>Massimizza la tua presenza online e raggiungi nuovi orizzonti di successo con il nostro servizio di creazione siti web. Siamo qui per offrirti una soluzione completa, progettata per aumentare la tua visibilità sui motori di ricerca e attirare clienti sempre più numerosi.</p><h2>Funzionalità garantite</h2><ul><li><strong>Ottimizzazione SEO inclusa:</strong> Fatti trovare più facilmente su Google e altri motori di ricerca.</li><li><strong>Design responsivo:</strong> Assicurati che il tuo sito sia fruibile su ogni dispositivo.</li><li><strong>Ottimizzazione della velocità:</strong> Nessuno vuole aspettare che un sito si carichi.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-statici',
    tags: ['design', 'sviluppo'],
    planos: {
      plano1: {
        nome: 'Pacchetto Base',
        destaque: [
          'Sito funzionale', 'Fino a 5 Pagine',
          'Caricamento del contenuto',
          'Formulario di contato',
          'Social icons',
          'Configurazione dominio e hosting', 
          'Fino a 3 Revisioni', 
          'Consegna in 5 giorni'
            ],
        price: 122,
      },
      plano2: {
        nome: 'Pacchetto Silver',
        destaque: [
          'Sito funzionale',
          'Fino a 10 Pagine', 
          'Caricamento del contenuto', 
          'Formulario di contato', 
          'Social icons',
          'Catalogo prodotti/servizi',
          'Checkout con whatsapp', 
          'Configurazione dominio e hosting',
          'Fino a 4 Revisioni',
          'Consegna in 7 giorni'
          ],
        price: 315
      },
      plano3: {
        nome: 'Pacchetto Premium',
        destaque: [
          'Sito funzionale', 
          'Pagine ilimitate', 
          'Caricamento del contenuto', 
          'Formulario di contato',
          'Social icons',
          'Catalogo prodotti/servizi', 
          'Checkout con whatsapp', 
          'Configurazione dominio e hosting',
          'Configurazione Chatbot', 
          'Revisioni ilimitate', 
          'Consulenza Online (12h/anno)',
          'Consegna in 7 giorni'
            ],
        price: 1082
      },
    },
  },
  {
    image: serviceImages['service2.webp'],
    title: 'Siti Web Dinamici',
    description: "<p>Porta la tua presenza online al livello successivo con i nostri siti web dinamici. Grazie alla nostra piattaforma avanzata, potrai creare un'esperienza coinvolgente e interattiva per i tuoi visitatori. Dalla personalizzazione dei contenuti alla gestione intuitiva, i nostri siti dinamici offrono una soluzione completa per soddisfare le esigenze del tuo business. Contattaci oggi stesso per scoprire come possiamo trasformare la tua presenza digitale.</p>",
    description_long: "<p>Con i nostri siti web dinamici, non solo avrai un bell'aspetto, ma potrai anche offrire un'esperienza utente straordinaria. Dai un'occhiata alle nostre funzionalità chiave:</p><ul><li><strong>Pagine Personalizzate:</strong> Crea contenuti dinamici e personalizzati per ogni tipo di visitatore.</li><li><strong>Interattività Avanzata:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-dinamici',
    tags: ['design', 'sviluppo'],
    planos: {
      plano1: { 
        nome: 'Pacchetto Base', 
        destaque: ['Sito funzionante', 'Facile gestione', 'Pagine ilimitate', 'Caricamento del contenuto', 'blog/news', 'Social share buttons', 'Formulario di contatto', 'Gestione utenti','Configurazione dominio e hosting', 'Consegna in 7 giorni'],
        price: 475
      },
      plano2: { 
        nome: 'Pacchetto Silver', 
        destaque: ['Sito funzionante', 'Facile gestione', 'Pagine ilimitate', 'Caricamento del contenuto', 'blog/news', 'Social share buttons', 'Formulario di contatto', 'Gestione utenti','Configurazione dominio e hosting', 'backup 1/7','Consegna in 7 giorni'],
        price: 750 
      },
      plano3: { 
        nome: 'Pacchetto Premium', 
        destaque: ['Sito funzionante', 'Facile gestione', 'Pagine ilimitate', 'Caricamento del contenuto', 'blog/news', 'Social share buttons', 'login sociale', 'Formulario di contatto', 'Gestione utenti','Configurazione dominio e hosting', 'backup 7/7', 'Consulenza Online (12h/anno)', 'Consegna in 7 giorni'],
        price: 1525
      },
    },
  },
  {
    image: serviceImages['service3.webp'],
    title: 'Ecommerce',
    description: "<p>Porta la tua presenza online al livello successivo con i nostri siti web dinamici. Grazie alla nostra piattaforma avanzata, potrai creare un'esperienza coinvolgente e interattiva per i tuoi visitatori. Dalla personalizzazione dei contenuti alla gestione intuitiva, i nostri siti dinamici offrono una soluzione completa per soddisfare le esigenze del tuo business. Contattaci oggi stesso per scoprire come possiamo trasformare la tua presenza digitale.</p>",
    description_long: "<p>Con i nostri siti web dinamici, non solo avrai un bell'aspetto, ma potrai anche offrire un'esperienza utente straordinaria. Dai un'occhiata alle nostre funzionalità chiave:</p><ul><li><strong>Pagine Personalizzate:</strong> Crea contenuti dinamici e personalizzati per ogni tipo di visitatore.</li><li><strong>Interattività Avanzata:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li><li><strong>Assistenza Tecnica:</strong> Il nostro team esperto è qui per aiutarti con qualsiasi problema tecnico e per garantire che il tuo sito funzioni sempre al meglio.</li></ul>",
    destaque: [],
    url: '/sviluppo-e-commerce',
    planos: {
      plano1: { 
        nome: 'Pacchetto Base', 
        destaque: ['Pagine ilimitate', 'Spazio 5Gb Totale', 'Caricamento del contenuto incluso', 'Icone dei social media', 'Formulario di contatto', 'Registrazione utenti', 'Consegna in 7 giorni'],
        price: 600 
      },
      plano2: { 
        nome: 'Pacchetto Silver', 
        destaque: ['Pagine ilimitate', 'Spazio 5Gb Totale', 'Caricamento del contenuto incluso', 'Icone dei social media', 'Formulario di contatto', 'Registrazione utenti', 'Consegna in 7 giorni'],
        price: 900 
      },
      plano3: { 
        nome: 'Pacchetto Premium', 
        destaque: ['Pagine ilimitate', 'Spazio 10Gb Totale', 'Caricamento del contenuto incluso', 'Icone dei social media',  'Formulario di contatto', 'Registrazione utenti', 'Consegna in 5 giorni', 'VIP Support'],
        price: 1200 
      },
    },
  },
  {
    image: serviceImages['service4.webp'],
    title: 'Social Media Design',
    description: 'Creazione di grafiche e contenuti visivi per i social media.',
    destaque: ['Fino a 10 post', 'Fino a 3 revisioni', 'Consegna in 5 giorni'],
    url: '/social-media-design',
    planos: {
      plano1: {
        nome: 'Social Media Design',
        destaque: [''],
        price: 50
        },
    },
  },
  {
    image: serviceImages['service5.webp'],
    title: 'Applicazioni Web Progressive',
    description: 'Sviluppo di app web che offrono un\'esperienza simile a un\'app nativa.',
    destaque: ['Fino a 3 pagine', 'Fino a 3 revisioni', 'Consegna in 10 giorni'],
    url: '/applicazioni-web-progressive',
    planos: {
      plano1: {
        nome: 'Applicazioni Web Progressive',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service6.webp'],
    title: 'SEO (Search Engine Optimization)',
    description: 'Ottimizzazione dei siti web per i motori di ricerca per aumentare la visibilità online.',
    destaque: ['Analisi delle parole chiave', 'Ottimizzazione on-page', 'Consegna in 30 giorni'],
    url: '/seo',
    planos: {
      plano1: {
        nome: 'SEO (Search Engine Optimization)',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service7.webp'],
    title: 'Gestione Campagne PPC',
    description: 'Creazione e gestione di campagne pubblicitarie pay-per-click.',
    destaque: ['Ricerca delle parole chiave', 'Gestione delle offerte', 'Rapporti mensili'],
    url: '/gestione-campagne-ppc',
    planos: {
      plano1: {
        nome: 'Gestione Campagne PPC',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service8.webp'],
    title: 'Marketing sui Social Media',
    description: 'Pianificazione e gestione di strategie di marketing sui social media.',
    destaque: ['Analisi dei concorrenti', 'Creazione di contenuti', 'Monitoraggio delle prestazioni'],
    url: '/marketing-sui-social-media',
    planos: {
      plano1: {
        nome: 'Marketing sui Social Media',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service1.webp'],
    title: 'Email Marketing',
    description: 'Creazione e invio di campagne di email marketing mirate.',
    destaque: ['Creazione di template', 'Segmentazione degli elenchi', 'Rapporti di consegna'],
    url: '/email-marketing',
    planos: {
      plano1: {
        nome: 'Email Marketing',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service2.webp'],
    title: 'Sviluppo di Applicazioni Mobili',
    description: 'Creazione di app mobili per iOS e Android su misura per le esigenze del cliente.',
    url: '/sviluppo-applicazioni-mobili',
    planos: {
      plano1: {
        nome: 'Sviluppo di Applicazioni Mobili',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service3.webp'],
    title: 'Sviluppo di Software Personalizzato',
    description: 'Progettazione e sviluppo di software su misura per le aziende.',
    destaque: ['Analisi dei requisiti', 'Progettazione del software', 'Test e implementazione'],
    url: '/sviluppo-software-personalizzato',
    planos: {
      plano1: {
        nome: 'Sviluppo di Software Personalizzato',
        destaque: [''],
        price: 50
      },
    },
  },
  
];

// Definindo produtos relacionados
Services[0].relatedProducts = [Services[1]];
Services[1].relatedProducts = [Services[0]];

export default Services;
