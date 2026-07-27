// Dutch copy. Mirrors en.ts key for key — the pages read from whichever
// dictionary the locale resolves to, so a missing key here is a type error
// rather than a silently English string on a Dutch page.
//
// Written as Dutch, not translated word-for-word from the English: the same
// claims, phrased the way a Dutch reader would put them. Financial terms
// follow the vocabulary the app itself uses in Dutch bank exports.

import type { Copy } from "./index";

export const nl: Copy = {
  meta: {
    lang: "nl",
    tagline: "Al je rekeningen in één rustig overzicht",
    description:
      "beatrax is een local-first dashboard voor je persoonlijke financiën. Het leest de afschriften die je bank toch al exporteert, legt verbanden tussen je rekeningen, en toont je hele maand op één plek. Er verlaat niets je computer.",
  },

  nav: {
    features: "Functies",
    how: "Hoe het werkt",
    audience: "Voor wie",
    formats: "Banken & formaten",
    licence: "Open source",
    community: "Community",
    faq: "FAQ",
    privacy: "Privacy",
    contribute: "Bijdragen",
    changelog: "Changelog",
    roadmap: "Roadmap",
    download: "Downloaden",
    skip: "Naar de inhoud",
    theme: "Thema wisselen",
    language: "Taal",
    menu: "Menu",
  },

  hero: {
    eyebrow: "Local-first · open source met ethische clausules",
    titleLead: "Alle rekeningen.",
    titleAccent: "Eén rustig overzicht.",
    body: "beatrax brengt je bank, creditcard, PayPal en app-store-abonnementen samen in één beeld van de maand — en legt daarna de ketens bloot, zodat je ziet wat er werkelijk waarvoor betaald heeft.",
    ctaPrimary: "Download voor desktop",
    ctaSecondary: "Bekijk hoe het werkt",
    proof: "Geen telemetrie · geen cloudaccount · geen syncserver die niet van jou is",
    shotAlt:
      "Het beatrax-dashboard met drift-alerts, ongebruikelijke afschrijvingen, inkomsten en uitgaven van de maand, en de voortgang van spaardoelen.",
  },

  promises: {
    eyebrow: "Drie beloften",
    title: "Wat je er echt aan hebt.",
    items: [
      {
        title: "Het blijft op je eigen computer",
        body: "De database, de OAuth-tokens, de opgeslagen bonnen — allemaal op je eigen schijf. Geen telemetrie, geen cloudsync, geen account om aan te maken. Als apparaten wél synchroniseren, doen ze dat rechtstreeks met elkaar, end-to-end versleuteld, via een relay die alleen versleutelde tekst te zien krijgt.",
      },
      {
        title: "Het leest wat je bank al levert",
        body: "CAMT.053, MT940 en CSV van Europese banken, ICS-creditcardafschriften in pdf, PayPal-exports. Geen screen-scraping, geen gedeelde inloggegevens. Er is een optionele open-banking-koppeling, standaard uit, met je eigen API-sleutel.",
      },
      {
        title: "Het legt de ketens bloot",
        body: "Een PayPal-betaling die door je bank gefinancierd is. Een creditcardaankoop die weken later in één bulkincasso wordt afgerekend. beatrax verbindt beide kanten, zodat een transactie geen raadsel meer is maar een antwoord.",
      },
    ],
  },

  problem: {
    eyebrow: "Het probleem dat het oplost",
    title: "Je geld staat verspreid over zes afschriften die elkaar tegenspreken.",
    body: "De bank toont een creditcardafrekening van € 225. Het cardafschrift toont vijftien aankopen. PayPal toont een bestelling die de bank een overboeking noemt. Elke maand bouw je datzelfde overzicht met de hand opnieuw op, en elke maand haak je halverwege af.",
    lead: "beatrax doet die reconciliatie één keer, en blijft het daarna doen.",
    points: [
      "Koppelt een creditcardaankoop aan de bulkafrekening die hem betaald heeft.",
      "Geeft een naam aan de tegenpartij achter een IBAN die je nog nooit gezien hebt.",
      "Signaleert een abonnement waarvan de prijs ongemerkt omhoog is gegaan.",
    ],
  },

  features: {
    eyebrow: "Wat erin zit",
    title: "De hele maand, niet alleen het saldo.",
    lead: "Elk scherm hieronder is echt — dit zijn schermafbeeldingen van de app die draait op een demodataset, geen mockups.",
    groups: [
      { key: "see", label: "Zien" },
      { key: "operate", label: "Sturen" },
      { key: "trust", label: "Vertrouwen" },
    ],
  },

  how: {
    eyebrow: "Hoe het werkt",
    title: "Vier stappen, daarna houdt het zichzelf bij.",
    steps: [
      {
        title: "Zet een afschrift erin",
        body: "De setup-wizard loodst je langs je bank, je creditcard, PayPal en — als je dat wilt — je e-mailbonnen. Elke stap is over te slaan en later opnieuw te doen.",
      },
      {
        title: "beatrax leest en ontdubbelt",
        body: "Het herkent het formaat, geeft elke regel een vingerafdruk zodat hetzelfde bestand opnieuw importeren niets verandert, en zoekt de tegenpartij achter elk IBAN op.",
      },
      {
        title: "Jij bevestigt de randgevallen",
        body: "Onbekende tegenpartijen komen in een triagewachtrij die je met het toetsenbord afhandelt. Ongecategoriseerde regels komen in een inbox. Eén toetsaanslag per stuk, en de regels werken door in latere imports.",
      },
      {
        title: "Het houdt de wacht",
        body: "Terugkerende afschrijvingen worden herkend, prijsdrift wordt gemeld, ongebruikelijke afschrijvingen komen bovendrijven, en de prognose projecteert je saldo 30 tot 365 dagen vooruit.",
      },
    ],
  },

  privacy: {
    eyebrow: "Privacy",
    title: "Er is geen server om te vertrouwen.",
    body: "beatrax heeft geen backend. Geen account, geen telemetrie, geen crashmelder die naar huis belt, en geen gehoste kopie van je administratie. De SQLite-database staat in je application-support-map en is van jou om te bewaren, te verplaatsen of te verwijderen.",
    points: [
      {
        title: "Sync gaat peer-to-peer",
        body: "Apparaten koppelen via een QR-code of een uitgesproken woordcode en verifiëren elkaar met een veiligheidsnummer. Ze praten rechtstreeks over je eigen netwerk als ze allebei aan staan, en vallen terug op een relay die alleen versleutelde tekst opslaat die hij niet kan lezen.",
      },
      {
        title: "Versleuteld op schijf",
        body: "Elk apparaat versleutelt zijn eigen kopie met een sleutel die is afgeleid van je wachtwoordzin en alleen door de app-vergrendeling wordt vrijgegeven. Een apparaat verwijderen roteert de groepssleutel en verpakt hem opnieuw voor de apparaten die je houdt.",
      },
      {
        title: "Open banking blijft optioneel",
        body: "De koppeling staat standaard uit en vraagt om je eigen sleutel bij de aggregator. Staat hij aan, dan praat jouw machine rechtstreeks met die aggregator — er zit geen beatrax-server tussen, want die bestaat niet.",
      },
    ],
  },

  status: {
    eyebrow: "Waar het staat",
    title: "Uitgebracht, en nog in beweging.",
    shipped: "Uitgebracht",
    inProgress: "In v2.0",
    remaining: "Nog te doen",
    liveNote: "Bij het bouwen uit de GitHub-organisatie gelezen — niemand werkt deze pagina met de hand bij.",
    snapshotNote: "Toont de laatst bekende momentopname.",
  },

  banks: {
    verifiedTitle: "Geverifieerd",
    verifiedBody: "Vormen die beatrax expliciet herkent, met een adapter of headerprofiel en tests erachter. Worden automatisch herkend zodra je uploadt.",
    expectedTitle: "Werkt naar verwachting",
    expectedBody: "Deze instellingen bieden hun rekeninghouders CAMT.053 of MT940, en dat leest beatrax generiek. Ze zijn niet stuk voor stuk getest — gaat er één mis op een bestand dat aan de standaard voldoet, dan is dat een bug om te melden, geen niet-ondersteunde bank.",
    colBank: "Instelling",
    colCountry: "Land",
    colFormats: "Formaten",
    note: "De beschikbaarheid verschilt soms tussen particuliere en zakelijke producten. Correcties van wie het echt geprobeerd heeft zijn welkom — alleen zo verschuift een regel van verwacht naar geverifieerd.",
    source: "De volledige lijst staat in de specificatie →",
  },

  community: {
    statCountries: "landen met een corpus",
    statMerchants: "winkelpatronen",
    statGovernment: "overheidspatronen",
    colCountry: "Land",
    colMerchants: "Winkels",
    colGovernment: "Overheid",
    colBankFees: "Bankkosten",
    tableNote: "De aantallen zijn patroontotalen, geen kwaliteitscijfer. Een laag getal is een uitnodiging om bij te dragen, geen waarschuwing — en de landenlijst wordt bij het bouwen van deze pagina uit de repository gelezen, dus een corpus dat iemand toevoegt staat er bij de volgende build bij.",
  },

  roadmap: {
    title: "Roadmap",
    lead: "Elke release, en wat erin zit. De status wordt bij het bouwen van deze pagina uit de spec-repository en de releases van de organisatie gelezen — beweegt de code, dan beweegt de pagina mee.",
    overall: "Totaal",
    milestones: "releases",
    deliverables: "onderdelen",
    source: "Bron van de roadmap",
    releasedOn: "Uitgebracht",
    unreleased: "Nog niet uitgebracht",
    reposTitle: "De repositories",
    backHome: "Terug naar de voorpagina",
  },

  download: {
    eyebrow: "Installeren",
    title: "Draait op je eigen desktop.",
    body: "macOS, Windows en Linux. Bij elke release verschijnen SHA-256-controlegetallen en een ondertekend manifest, zodat je precies kunt nagaan wat je gedownload hebt.",
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
    note: "Bij elke release verschijnen SHA-256-controlegetallen en een ondertekend manifest.",
    cta: "Releases downloaden",
  },

  coming: {
    badge: "Volgende release",
    eyebrow: "v2.0",
    title: "De grootste release tot nu toe is dichtbij.",
    body: "Alles hieronder staat al op de ontwikkellijn. Wat er nog moet gebeuren voor v2.0 uitkomt is de mobiele client als volwaardige sync-peer, en hem in de app stores krijgen.",
    items: [
      {
        title: "End-to-end versleutelde apparaatsynchronisatie",
        body: "Je apparaten stemmen rechtstreeks met elkaar af — ondertekend wijzigingslogboek, CRDT-samenvoeging, koppelen via QR met veiligheidsnummers, direct over je eigen netwerk met een relay die alleen versleutelde tekst bewaart. Geen account, geen server.",
        headline: true,
      },
      { title: "Envelop-budgettering", body: "Wijs elke euro toe, neem saldi mee, verschuif geld tussen enveloppen." },
      { title: "Mobiele apps", body: "iOS en Android, elk met een eigen versleutelde kopie." },
      { title: "Ondertekende desktop-installers", body: "Code-signed builds voor macOS en Windows." },
      { title: "Open banking", body: "Een optionele koppeling, standaard uit, met je eigen sleutel." },
      { title: "Regels-engine", body: "Regels met meerdere voorwaarden die bij import hernoemen, categoriseren, labelen en aantekenen." },
      { title: "Migratie-importers", body: "Neem je budget mee vanuit YNAB, nYNAB of Actual." },
      { title: "Rapportbouwer", body: "Stel je eigen rapporten samen, bewaar ze en zet ze vast." },
    ],
    cta: "Bekijk de volledige roadmap",
  },

  cta: {
    title: "Lees de broncode. Draai hem zelf.",
    body: "Elke regel van beatrax is openbaar: lezen, bouwen, aanpassen, forken. De licentie voegt daar ethische gebruiksvoorwaarden aan toe, en dat is het enige dat OSI-certificering in de weg staat — het verschil en de onderbouwing staan er volledig uitgeschreven.",
    repo: "Bekijk de code",
    spec: "Lees de specificatie",
  },

  footer: {
    alsoFrom: "Ook van NightWorks",
    happklaar: "Maaltijdplanning voor drukke huishoudens",
    lemonfiber: "Zelfgehoste media, zonder het sysadmin-werk",
    license: "Hippocratic License 3.0",
    sourceAvailable: "Open source met ethische clausules — niet OSI-gecertificeerd",
    community: "Community-corpus",
    colophon: "Colofon",
    repos: "Repositories",
    product: "Product",
    org: "Organisatie",
  },

  contribute: {
    eyebrow: "Bijdragen",
    title: "Het project wordt beter met jou erbij.",
    lead: "beatrax wordt in het openbaar gebouwd onder een licentie met ethische gebruiksclausules. Je kunt elke regel lezen, het zelf draaien en het aanpassen. Deze pagina vertelt wat je concreet doet — de regels hieronder komen rechtstreeks uit de specificatie, dus het zijn dezelfde regels die een reviewer toepast.",

    routesTitle: "Vier manieren om in te stappen, oplopend in moeite.",
    routesBody: "Niet elke waardevolle bijdrage is code. De eerste op deze lijst is wat het product het hardst nodig heeft en vraagt geen enkele lokale installatie.",
    routes: {
      corpus: {
        title: "Vul de gemeenschapscorpus aan",
        body: "Simpele YAML die de cryptische omschrijvingen van je bank koppelt aan namen die mensen herkennen. Geen code, geen toolchain, geen installatie — één bestand per land, in de browser te bewerken.",
        cta: "Hoe de corpus werkt",
      },
      report: {
        title: "Meld wat er misging",
        body: "Een afschrift dat verkeerd inleest, een totaal dat niet klopt, een scherm dat op je telefoon rare dingen doet. Beschrijf de vorm van het probleem; stuur nooit een echt afschrift mee.",
        cta: "Open een issue",
      },
      spec: {
        title: "Wijzig de specificatie",
        body: "Gedrag wordt gespecificeerd voordat het geschreven wordt. Wil je dat beatrax iets anders doet, dan landt de specificatiewijziging eerst en verwijst de code ernaar.",
        cta: "Lees het wijzigingsproces",
      },
      code: {
        title: "Schrijf de code",
        body: "Pak openstaand werk op of breng je eigen idee mee. Bij grote wijzigingen loont het om vooraf de vorm af te stemmen — dat is goedkoper dan achteraf herbouwen.",
        cta: "Lees de bijdragegids",
      },
    },

    openTitle: "Openstaand werk, op dit moment.",
    openBody: "Alles binnen de organisatie dat nu gelabeld staat voor nieuwkomers. Deze lijst is de live issue-zoekopdracht, geen handmatig bijgehouden kopie.",
    openNone: "Er staat op dit moment niets gelabeld voor nieuwkomers.",
    openAll: "Bekijk alle open issues",

    gatesTitle: "De poorten.",
    gatesBody: "Elke pull request komt hier langs voordat de review begint. Draai ze eerst lokaal — het zijn dezelfde commando's die CI draait.",

    rulesTitle: "De afspraken die afgedwongen worden.",
    rulesBody: "Dit zijn geen reviewvoorkeuren. Ze worden door tests gecontroleerd, dus een wijziging die er één breekt laat de build falen in plaats van een opmerking op te leveren.",

    docsTitle: "Wat verder het lezen waard is.",
    docsBody: "De specificatie is leidend voor hoe beatrax zich gedraagt — boven deze website en boven elke README.",
    docContributing: "Bijdragegids",
    docStandards: "Codestandaarden",
    docComments: "Commentaarbeleid",
    docTesting: "Teststrategie",
    docDone: "Definitie van klaar",
    docAi: "Bijdragen met AI-ondersteuning",
  },

  changelog: {
    eyebrow: "Releases",
    title: "Alles wat is uitgebracht.",
    lead: "Gegenereerd uit het commit-logboek op het moment dat een versie getagd wordt, zodat deze pagina niet kan afwijken van wat er werkelijk is uitgegaan.",
    statReleases: "releases",
    statChanges: "vastgelegde wijzigingen",
    statLatest: "laatste",
    latest: "Laatste",
    downloads: "installers bijgevoegd",
    onGitHub: "Bekijk de releases op GitHub",
    unavailable: "De releases konden bij het bouwen niet geladen worden.",
  },

  faq: {
    eyebrow: "Vragen",
    title: "Wat mensen als eerste vragen.",
    lead: "Inclusief de lastige. De antwoorden komen uit de specificatie, dus ze zeggen hier hetzelfde als overal elders.",
    source: "Lees de FAQ in de specificatie",
    unavailable: "De vragen konden bij het bouwen niet geladen worden.",
  },

  colophon: {
    eyebrow: "Colofon",
    title: "Gebouwd op het werk van anderen.",
    lead: "beatrax is een klein project dat op een grote hoeveelheid opensourcesoftware staat. Deze pagina noemt die bij naam — de lijst staat in de specificatie en wordt hier weergegeven, zodat de vermelding niet stilletjes veroudert.",
    source: "Lees het in de specificatie",
    readInSpec: "Lees het colofon in de specificatie",
    unavailable: "De lijst kon bij het bouwen niet geladen worden.",
  },

  notFound: {
    title: "Deze pagina bestaat niet.",
    body: "De link is misschien verouderd, of de pagina is verplaatst.",
    cta: "Terug naar de voorpagina",
  },
};
