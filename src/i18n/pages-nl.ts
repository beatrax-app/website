import type { Doc } from "../lib/doc";

// Dutch content pages. Same keys and same section structure as pages-en.ts —
// the renderer is shared, so a page that differs structurally would be a bug.
// Written as Dutch rather than translated sentence-by-sentence: same claims,
// phrased the way a Dutch reader would put them.

export const pagesNl: Record<string, Doc> = {
  // ── Voor wie ────────────────────────────────────────────────────
  audience: {
    eyebrow: "Voor wie",
    title: "Gemaakt voor geld dat op meer dan één plek staat.",
    lead: "Beatrax is voor één persoon, of een huishouden van twee, met uitgaven verspreid over meerdere banken, kaarten en betaaldiensten — en die het met de hand bijhouden allang heeft opgegeven.",
    sections: [
      {
        heading: "Je herkent jezelf hierin als",
        cards: [
          {
            title: "Je bij meer dan één bank zit",
            body: "Een betaalrekening hier, een spaarrekening daar, een creditcard van een derde partij, en PayPal ertussenin. Geen enkele app laat het hele plaatje zien, omdat geen enkele instelling het heeft.",
          },
          {
            title: "Je cardafschrift en je bank nooit kloppen",
            body: "De bank toont één afrekening. De card toont vijftien aankopen. Je hebt minstens één keer geprobeerd ze met de hand te matchen, en je bent niet klaargekomen.",
          },
          {
            title: "Je zzp'er bent, of deels",
            body: "Een deel van je uitgaven is aftrekbaar en een deel niet, en aan het eind van het jaar uitzoeken welke betekent een schoenendoos vol afschriften doorspitten. Meteen labelen was makkelijker geweest.",
          },
          {
            title: "Je je financiën liever niet in andermans cloud hebt",
            body: "Niet omdat je iets te verbergen hebt, maar omdat een volledige transactiehistorie zo ongeveer de meest persoonlijke data is die er is, en een account dat je niet beheert zijn voorwaarden kan veranderen.",
          },
          {
            title: "Je geld deelt met één ander",
            body: "Twee mensen, meerdere rekeningen, en steeds dezelfde discussie over waar het heen is. Met sync zien jullie allebei hetzelfde beeld op je eigen apparaat.",
          },
          {
            title: "Je spreadsheet je ontgroeid is",
            body: "Die werkte prima, tot hij onderhoud ging vragen. Beatrax doet de delen die je met de hand deed — matchen, categoriseren, en dat abonnement opmerken dat stiekem duurder werd.",
          },
        ],
      },
      {
        heading: "Het vraagt een beetje van jou",
        body: [
          "Beatrax is een programma dat je installeert, geen dienst waar je je voor aanmeldt. Dat is de ruil die je data op je eigen computer houdt, en het betekent dat een paar dingen jouw werk zijn.",
        ],
        list: [
          {
            title: "Je kunt software installeren",
            body: "Downloaden, installeren, openen. Geen terminal nodig, maar jij bent de beheerder van je eigen gegevens.",
          },
          {
            title: "Je kunt een afschrift exporteren",
            body: "Inloggen bij je bank, een periode kiezen, het bestand downloaden. Beatrax leest de formaten die Europese banken toch al aanbieden; de setup-wizard laat per bank zien waar je moet klikken.",
          },
          {
            title: "Je maakt je eigen back-ups",
            body: "Er is geen server die een kopie voor je bewaart. Beatrax kan een versleutelde back-up maken, maar waar die staat bepaal jij.",
          },
        ],
      },
      {
        heading: "Waarschijnlijk niets voor jou als",
        tone: "warn",
        list: [
          {
            title: "Je bij één bank zit en hun app prima vindt",
            body: "Laat één instelling je al zien wat je wilt weten, dan lost Beatrax een probleem op dat je niet hebt.",
          },
          {
            title: "Je wilt dat iemand anders je data bewaart",
            body: "Er is geen gehoste versie, geen weblogin en geen accountherstel — want er is geen account. Als een verloren laptop je historie kost, is dat een reële prijs, en alleen jij kunt die afwegen.",
          },
          {
            title: "Je boekhouding voor meerdere gebruikers zoekt",
            body: "Beatrax is een persoonlijk kasboek, geen boekhoudpakket. Geen dubbel boekhouden, geen btw-aangifte, geen facturatie en geen plek voor je accountant.",
          },
          {
            title: "Je buiten Europa bankiert",
            body: "De import is gebouwd rond CAMT.053, MT940 en de CSV-vormen die Europese banken exporteren. Generieke CSV-import bestaat, maar hoe verder je van die wereld af zit, hoe meer kolommen je zelf koppelt.",
          },
        ],
      },
    ],
    cta: {
      label: "Bekijk wat het doet",
      href: "/nl#features",
      secondaryLabel: "Welke banken werken",
      secondaryHref: "/nl/formats",
    },
  },

  // ── Open source, eerlijk ────────────────────────────────────────
  licence: {
    eyebrow: "Licentie",
    title: "Open source, eerlijk gezegd.",
    lead: "Elke regel van Beatrax is openbaar, leesbaar, te bouwen en aan te passen. De licentie is ook er één die het Open Source Initiative niet certificeert — en doen alsof dat niet zo is, is precies waar deze pagina voor bestaat.",
    sections: [
      {
        heading: "Wat je er echt mee mag",
        tone: "accent",
        body: [
          "De praktische vrijheden die de meeste mensen met open source bedoelen, heb je:",
        ],
        list: [
          { title: "Alles lezen", body: "De volledige broncode, de specificatie erachter, en de onderbouwing van elke architectuurkeuze." },
          { title: "Zelf bouwen en draaien", body: "Klonen, toolchain installeren, desktopbundel bouwen. Geen licentiesleutel, geen activatie, geen thuisbelroutine." },
          { title: "Aanpassen", body: "Fork hem, patch hem, draai je eigen build zolang je wilt." },
          { title: "Vertrekken mét je data", body: "Het is een SQLite-bestand op je schijf. Exporteer het, lees het met elk SQLite-programma, neem het mee." },
        ],
      },
      {
        heading: "Waar het afwijkt",
        body: [
          "Beatrax valt onder de Hippocratic License 3.0. Die verleent bovenstaande vrijheden en voegt er ethische gebruiksvoorwaarden aan toe — beperkingen op het gebruik van de software om specifieke vormen van schade aan te richten.",
          "De Open Source Definition staat niet toe dat een licentie een toepassingsgebied beperkt, dus een licentie met zulke clausules kan nooit OSI-goedgekeurd zijn, hoe onomstreden de beperking ook is. Daarmee is Beatrax source-available en niet open source in OSI-zin. Beide zijn tegelijk waar, en deze pagina zegt ze liever allebei dan alleen de mooiste.",
        ],
      },
      {
        heading: "Waarom geen MIT of GPL",
        body: [
          "Omdat de licentie de enige knop is waarmee een klein project kan zeggen waar het geen deel van wil uitmaken, en die opgeven kost vandaag niets en later alles.",
          "De volledige redenering staat in de productrepository, inclusief de punten waarop dat argument echt betwist wordt. Het is een ruil, geen gratis winst: de prijs is reëel, en wordt vooral betaald in gesprekken zoals dit.",
        ],
        note: "De volledige onderbouwing staat in NOTICE.md in de productrepository.",
      },
      {
        heading: "Wat dit in de praktijk betekent",
        table: {
          head: ["Vraag", "Antwoord"],
          rows: [
            ["Mag ik de broncode lezen?", "Ja, alles."],
            ["Mag ik hem gratis draaien?", "Ja. Er is geen betaalde variant en geen licentiesleutel."],
            ["Mag ik hem aanpassen voor eigen gebruik?", "Ja."],
            ["Mag ik forken en verspreiden?", "Ja, onder dezelfde licentie."],
            ["Mag ik hem zakelijk gebruiken?", "Ja, met inachtneming van de ethische clausules."],
            ["Is het OSI-goedgekeurde open source?", "Nee — en de licentietekst legt precies uit waarom."],
            ["Wordt het ooit MIT of GPL?", "Daar is geen plan voor. Zou dat veranderen, dan wordt dat openbaar vastgelegd."],
          ],
        },
      },
      {
        heading: "De naam",
        body: [
          "De licentie dekt de code. De naam en het beeldmerk Beatrax vallen daar niet onder — fork de software gerust, maar breng je fork uit onder je eigen naam, zodat niemand zich vergist in wat hij installeert.",
        ],
      },
      {
        heading: "Wat er met jouw bijdrage gebeurt",
        body: [
          "Bijdragen worden aanvaard onder dezelfde licentie als het project. Er is geen overdracht van auteursrecht en geen contributor licence agreement om te tekenen — je blijft eigenaar van je werk, en het wordt aan iedereen onder dezelfde voorwaarden gelicentieerd als de rest.",
        ],
      },
    ],
    cta: {
      label: "Lees de licentie",
      href: "https://github.com/beatrax-app/beatrax/blob/main/LICENSE",
      secondaryLabel: "Lees de onderbouwing",
      secondaryHref: "https://github.com/beatrax-app/beatrax/blob/main/NOTICE.md",
    },
  },

  // ── Privacy ─────────────────────────────────────────────────────
  privacy: {
    eyebrow: "Privacy",
    title: "Er is geen server om te vertrouwen.",
    lead: "De meeste privacypagina's beschrijven hoe zorgvuldig een bedrijf met je gegevens omgaat. Deze beschrijft een architectuur waarin het bedrijf ze nooit ontvangt.",
    sections: [
      {
        heading: "Wat Beatrax verzamelt",
        tone: "accent",
        body: [
          "Niets. Geen analytics, geen crashmelder, geen update-ping met een apparaat-ID, geen foutverzameldienst, en geen account.",
          "Dat is geen beleid dat in een volgende versie herzien kan worden — er is geen backend om de gegevens naartoe te sturen. De applicatie heeft simpelweg geen servercomponent.",
        ],
      },
      {
        heading: "Waar je gegevens werkelijk staan",
        list: [
          { title: "De administratie", body: "Een SQLite-database in de application-support-map van je besturingssysteem. Eén bestand. Van jou om te kopiëren, verplaatsen, bewaren of verwijderen." },
          { title: "OAuth-tokens", body: "Koppel je een mailbox voor het scannen van bonnen, dan staan de tokens met strikte bestandsrechten op schijf — ze gaan nergens heen behalve naar de provider waar ze bij horen." },
          { title: "Bewaarde bonnen", body: "E-mailbonnen die Beatrax gematcht heeft, worden lokaal bewaard zodat ze niet opnieuw opgehaald hoeven worden." },
          { title: "Verder niets", body: "Geen schaduwkopie, geen telemetriewachtrij die staat te wachten, geen cloudback-up waar je niet om gevraagd hebt." },
        ],
      },
      {
        heading: "Wat er beweegt als apparaten synchroniseren",
        body: [
          "Sync gaat peer-to-peer. Je apparaten praten met elkaar; er hoopt zich niets op in het midden.",
        ],
        list: [
          { title: "Koppelen is een bewuste handeling", body: "Een nieuw apparaat doet mee door een QR-code te scannen of een woordcode in te typen, en beide kanten bevestigen hetzelfde veiligheidsnummer voordat er iets stroomt." },
          { title: "Rechtstreeks over je eigen netwerk", body: "Staan twee gekoppelde apparaten allebei aan op hetzelfde netwerk, dan vinden ze elkaar en synchroniseren ze direct. Er verlaat niets je huis." },
          { title: "De relay ziet alleen versleutelde tekst", body: "Is één apparaat offline, dan wachten wijzigingen in een doorgeefrelay. Die bewaart versleutelde bytes waar hij geen sleutel voor heeft, en vergeet ze zodra ze bezorgd zijn." },
          { title: "Ook versleuteld op schijf", body: "Elk apparaat versleutelt zijn eigen kopie met een sleutel die uit je wachtwoordzin is afgeleid en pas vrijkomt als je de app ontgrendelt." },
          { title: "Een apparaat verwijderen trekt het in", body: "Verwijder je een apparaat, dan wordt de gedeelde sleutel geroteerd en opnieuw verpakt voor de apparaten die je houdt, zodat het verwijderde niets meer kan lezen." },
        ],
      },
      {
        heading: "De onderdelen die wél het netwerk op gaan",
        body: [
          "Hier eerlijk over zijn is belangrijker dan een schone lei claimen. Drie functies reiken buiten je computer, allemaal optioneel en allemaal onder jouw controle:",
        ],
        table: {
          head: ["Functie", "Waarmee het contact maakt", "Standaard"],
          rows: [
            ["Bonnen scannen in e-mail", "Je mailprovider (Gmail of Microsoft), rechtstreeks, alleen-lezen", "Uit tot je hem koppelt"],
            ["Open-banking-import", "Een aggregator, met je eigen API-sleutel, vanaf jouw machine", "Uit"],
            ["Wisselkoersen", "Een publieke koersbron, of een meegeleverde offline set", "Meegeleverde koersen werken volledig offline"],
          ],
        },
        note: "Elk daarvan staat standaard uit of werkt offline, en geen ervan loopt via een dienst van Beatrax, want die bestaat niet.",
      },
      {
        heading: "Wat dit je kost",
        tone: "warn",
        body: [
          "Local-first is een ruil, geen gratis winst. Er is geen wachtwoordherstel, want er is geen account. Raak je elk apparaat én elke back-up kwijt, dan is de data weg — niemand kan hem voor je terughalen, en dat is precies dezelfde eigenschap die betekent dat niemand hem aan een ander kan geven.",
          "Beatrax kan een versleutelde back-up maken en herinnert je daaraan. Waar je die bewaart, bepaal jij.",
        ],
      },
    ],
    cta: {
      label: "Hoe sync werkt",
      href: "/nl/sync",
      secondaryLabel: "Lees de licentie",
      secondaryHref: "/nl/licence",
    },
  },

  // ── Formaten & banken ───────────────────────────────────────────
  formats: {
    eyebrow: "Compatibiliteit",
    title: "Welke banken en formaten werken.",
    lead: "Beatrax leest de afschriftformaten die Europese banken toch al exporteren, dus het zit niet vast aan één instelling en het heeft je bankwachtwoord niet nodig.",
    sections: [
      {
        heading: "Formaten die het leest",
        table: {
          head: ["Formaat", "Wat het is", "Waar het vandaan komt"],
          rows: [
            ["CAMT.053", "Het ISO 20022-XML-bankafschrift. De rijkste optie — de meeste structuur, de betrouwbaarste tegenpartijgegevens.", "De meeste Europese banken, vaak aangeduid als SEPA of ISO 20022"],
            ["MT940", "Het oudere SWIFT-afschriftformaat. Breed beschikbaar, iets minder gestructureerd dan CAMT.", "De meeste Europese banken"],
            ["CSV", "Export met kommagescheiden waarden per bank. Beatrax herkent de vorm van de banken die het kent.", "Vrijwel elke bank"],
            ["ICS-pdf", "Maandelijkse creditcardafschriften als pdf, direct uitgelezen.", "International Card Services"],
            ["PayPal-CSV", "De export met transactiedetails, niet het saldorapport.", "PayPal"],
          ],
        },
        note: "Kies CAMT.053 als je bank het aanbiedt — die extra structuur levert betere tegenpartijherkenning op en minder regels die in de triage belanden.",
      },
      { slot: true },
      {
        heading: "Wat het niet doet",
        tone: "warn",
        list: [
          { title: "Geen screen-scraping", body: "Beatrax vraagt nooit om je internetbankierwachtwoord en logt nooit namens jou in." },
          { title: "Geen garantie voor elke bank", body: "Exporteert jouw bank alleen een eigen CSV die niemand in kaart heeft gebracht, dan koppel je zelf een paar kolommen." },
          { title: "Open banking is optioneel", body: "Er is een koppeling voor automatisch ophalen, maar die staat standaard uit en vraagt je eigen API-sleutel bij de aggregator. Bestandsimport is bewust de hoofdweg." },
        ],
      },
      {
        heading: "Kom je van een andere app",
        body: [
          "Houd je je budget al ergens anders bij, dan kan Beatrax dat importeren in plaats van je opnieuw te laten beginnen. Exports uit YNAB, nYNAB en Actual Budget brengen categorieën, budgethistorie, transacties, splitsingen en verwerkt-status mee.",
        ],
      },
    ],
    cta: {
      label: "Overstappen vanuit een andere app",
      href: "/nl/migrate",
      secondaryLabel: "Download Beatrax",
      secondaryHref: "/nl/download",
    },
  },

  // ── Downloaden ──────────────────────────────────────────────────
  download: {
    eyebrow: "Installeren",
    title: "Download Beatrax.",
    lead: "Een desktopprogramma voor macOS, Windows en Linux. Ondertekende installers, met controlegetallen zodat je kunt nagaan wat je gedownload hebt.",
    sections: [
      {
        heading: "Kies je platform",
        cards: [
          { title: "macOS", body: "Een .dmg voor Apple Silicon. Sleep naar Programma's en open. Op Intel-Macs bouw je vanaf de broncode — de repository beschrijft de stappen." },
          { title: "Windows", body: "Een .exe-installer. Na installatie start je hem vanuit het startmenu." },
          { title: "Linux", body: "Een .AppImage voor elke distributie, of een .deb voor Debian, Ubuntu en afgeleiden." },
        ],
        note: "Elk platform komt uit dezelfde release, dus de versienummers lopen altijd gelijk.",
      },
      {
        heading: "Wat je nodig hebt",
        table: {
          head: ["", "Vereiste"],
          rows: [
            ["Besturingssysteem", "macOS op Apple Silicon, Windows 10 of nieuwer, of een actuele Linux-distributie"],
            ["Schijfruimte", "Een paar honderd megabyte, plus je administratie — die blijft klein; jaren aan transacties zijn megabytes"],
            ["Netwerk", "Alleen voor de optionele functies. Beatrax werkt volledig offline"],
            ["Een account", "Geen. Er valt niets aan te melden"],
          ],
        },
      },
      {
        heading: "Je download controleren",
        body: [
          "Bij elke release verschijnen SHA-256-controlegetallen en een ondertekend manifest. Vergelijk je het controlegetal van je bestand met het gepubliceerde, dan weet je dat het onbeschadigd en ongewijzigd is aangekomen.",
        ],
        note: "De verificatie-runbook in de repository behandelt de diepere vraag of het manifest zelf authentiek is.",
      },
      {
        heading: "De eerste keer",
        body: [
          "Beatrax opent met een setup-wizard: je bank, je creditcard, PayPal, en desgewenst je e-mailbonnen. Elke stap is over te slaan en later via Instellingen op te pakken, dus je kunt met één afschrift beginnen en de rest wanneer het uitkomt toevoegen.",
        ],
      },
    ],
    cta: {
      label: "Naar de releases-pagina",
      href: "https://github.com/beatrax-app/beatrax/releases/latest",
      secondaryLabel: "Welke banken werken",
      secondaryHref: "/nl/formats",
    },
  },

  // ── Overstappen ─────────────────────────────────────────────────
  migrate: {
    eyebrow: "Overstappen",
    title: "Neem je budget mee.",
    lead: "Houd je je budget al bij in YNAB, nYNAB of Actual Budget, dan importeert Beatrax dat in plaats van je met een lege administratie te laten beginnen.",
    sections: [
      {
        heading: "Wat er meekomt",
        table: {
          head: ["Vanaf", "Wat er geïmporteerd wordt"],
          rows: [
            ["YNAB 4", "De CSV-exports van register en budget — categorieën, budgethistorie, transacties, splitsingen, begunstigden, rekeningen en overboekingen."],
            ["nYNAB (de webversie)", "Hetzelfde CSV-paar, met een eigen kolomvorm die apart herkend wordt."],
            ["Actual Budget", "Het geëxporteerde budgetbestand wordt rechtstreeks gelezen, inclusief verwerkt-status, splitsingen, planningen en doelen waar aanwezig."],
          ],
        },
      },
      {
        heading: "Hoe de import zich gedraagt",
        list: [
          { title: "Er landt niets tot jij akkoord gaat", body: "De import zet alles eerst klaar en toont een samenvatting. Jij promoveert het naar je administratie, of niet." },
          { title: "Opnieuw draaien verandert niets", body: "Importeer dezelfde export twee keer en de tweede keer gebeurt er niets — elke regel heeft een vingerafdruk." },
          { title: "Het vertelt wat het niet kon plaatsen", body: "Alles zonder plek in het model van Beatrax komt in een overzicht van niet-gekoppelde items te staan, in plaats van stilletjes te verdwijnen." },
          { title: "Samenvoegen gaat drieweg", body: "Importeer je in een administratie waar al gegevens in staan, dan worden botsende records afgestemd in plaats van gedupliceerd." },
        ],
      },
      {
        heading: "Wat er niet meekomt",
        tone: "warn",
        body: [
          "Begunstigden worden tegenpartijen en budgetcategorieën worden enveloppen, wat dichtbij is maar niet identiek — sommige structuren hebben geen equivalent omdat de modellen echt verschillen. Het overzicht van niet-gekoppelde items aan het eind van de import vertelt je precies wat in dat gat viel, zodat er niets ongemerkt verdwijnt.",
        ],
      },
      {
        heading: "Kom je van een bank-app of een spreadsheet",
        body: [
          "Daar is geen importer voor, omdat er niets standaards te importeren valt. Begin in plaats daarvan met een afschriftexport — de meeste banken geven je het laatste jaar of meer in één bestand, en Beatrax reconstrueert je historie daaruit, herkent de terugkerende afschrijvingen en zoekt onderweg de tegenpartijen op.",
        ],
      },
    ],
    cta: {
      label: "Welke formaten werken",
      href: "/nl/formats",
      secondaryLabel: "Vergelijk de alternatieven",
      secondaryHref: "/nl/compare",
    },
  },

  // ── Vergelijking ────────────────────────────────────────────────
  compare: {
    eyebrow: "Alternatieven",
    title: "Waarin Beatrax verschilt.",
    lead: "Er zijn goede programma's in deze categorie. De eerlijke manier om ze te vergelijken is niet het aantal functies maar de structuur: waar je gegevens staan, hoe het zichzelf betaalt, en hoe transacties binnenkomen.",
    sections: [
      {
        heading: "De structurele vergelijking",
        table: {
          head: ["", "Waar de data staat", "Verdienmodel", "Hoe transacties binnenkomen", "Broncode leesbaar"],
          rows: [
            ["Beatrax", "Alleen op jouw computer", "Gratis, geen betaalde variant", "Afschriftbestanden die je exporteert; optioneel open banking met je eigen sleutel", "Ja"],
            ["Dyme", "De cloud van de aanbieder", "Betaald abonnement", "Bankkoppeling via PSD2", "Nee"],
            ["YNAB", "De cloud van de aanbieder", "Betaald abonnement", "Banksynchronisatie of bestandsimport", "Nee"],
            ["Actual Budget", "Je eigen server, of hun hostingoptie", "Gratis zelf hosten; betaalde hosting beschikbaar", "Bestandsimport; banksync via uitbreidingen", "Ja"],
            ["Firefly III", "Je eigen server", "Gratis, zelf gehost", "Bestandsimport; banksync via uitbreidingen", "Ja"],
            ["De app van je eigen bank", "De cloud van de bank", "Inbegrepen bij de rekening", "Vanzelf — het ís je bank", "Nee"],
          ],
        },
        note: "Dit vat het publiek beschreven model van elk product samen, geen functie-voor-functie-audit, en noemt bewust geen prijzen — die veranderen. Klopt hier iets niet of is het verouderd, open dan een issue; dan wordt het rechtgezet.",
      },
      {
        heading: "Waar je bij de betaalde apps voor betaalt, en wat Beatrax daarvoor doet",
        tone: "accent",
        body: [
          "Dyme, YNAB en soortgelijke diensten vragen een maand- of jaarabonnement. Vrijwel alles wat je daarmee koopt, doet Beatrax ook — voor niets, omdat er geen dienst te draaien valt en er dus niets te factureren is.",
        ],
        table: {
          head: ["Waar je voor zou betalen", "Beatrax"],
          rows: [
            ["Al je rekeningen in één overzicht", "Ja — bank, creditcard, PayPal en app-store-abonnementen in één administratie"],
            ["Automatisch categoriseren dat leert", "Ja — merchant-geheugen plus een regels-engine die je zelf kunt schrijven"],
            ["Abonnementen herkennen", "Ja — terugkerende afschrijvingen uit je eigen historie gehaald"],
            ["Melding als een abonnement duurder wordt", "Ja — drift-alerts met het effect op jaarbasis"],
            ["Ongebruikelijke afschrijvingen signaleren", "Ja — afgezet tegen jouw eigen patroon, niet tegen een algemene drempel"],
            ["Envelop- / zero-based budgettering", "Ja — wijs elke euro toe, neem saldi mee, verschuif tussen enveloppen"],
            ["Kasstroomprognose", "Ja — 30 tot 365 dagen, met wat-als-scenario's"],
            ["Spaardoelen en potjes", "Ja"],
            ["Synchronisatie tussen apparaten", "Ja — peer-to-peer en end-to-end versleuteld, zonder account"],
            ["Rapporten en exports", "Ja — een rapportbouwer, CSV- en pdf-export, jaarexport voor de belasting"],
            ["Zoeken door je hele historie", "Ja"],
            ["Mobiel", "Deels — vandaag te installeren op je telefoon; een volwaardige mobiele sync-peer is nog onderweg"],
          ],
        },
        note: "Geen gratis variant, geen proefperiode, geen upsell — dit is het hele product.",
      },
      {
        heading: "Wat je er echt voor inlevert",
        tone: "warn",
        body: [
          "Het zou makkelijk zijn om bij de tabel hierboven te stoppen. Dit zijn de dingen die de betaalde diensten beter doen, en het zijn geen kleinigheden:",
        ],
        list: [
          {
            title: "Transacties komen niet vanzelf binnen",
            body: "Dyme en YNAB koppelen aan je bank en werken zichzelf bij. Bij Beatrax exporteer je een afschrift en zet je het erin — een paar minuten per maand. Er is een open-banking-koppeling, maar die staat standaard uit en vraagt je eigen sleutel bij de aggregator.",
          },
          {
            title: "Geen helpdesk",
            body: "Er zit niemand achter een chatvenster. Je hebt een openbare issue-tracker, een Discord, en wat de community antwoordt.",
          },
          {
            title: "Jij bent de back-up",
            body: "Geen aanbieder bewaart een kopie voor je. Raak je elk apparaat en elke back-up kwijt, dan is het weg — niemand kan het terughalen.",
          },
          {
            title: "Mobiel is nog niet af",
            body: "De interface werkt op een telefoon en is als app te installeren, maar de mobiele client is nog geen volwaardige sync-peer. Wil je dit vooral op je telefoon gebruiken, wacht dan nog even.",
          },
          {
            title: "Minder ogen, minder jaren",
            body: "Een abonnement betaalt een team, een roadmap en een supportrooster. Beatrax is een klein project. Het is jonger, het is door minder mensen getest, en de toekomst hangt af van belangstelling in plaats van omzet.",
          },
          {
            title: "Geen gedeelde huishoudaccounts of adviesfuncties",
            body: "Geen rechten voor meerdere gebruikers, geen coaching, geen productaanbevelingen in de app — en dat laatste waarderen mensen bij de betaalde apps soms oprecht.",
          },
        ],
      },
      {
        heading: "Tegenover de zelfgehoste open programma's",
        body: [
          "Actual Budget en Firefly III delen het uitgangspunt van Beatrax dat je administratie van jou hoort te zijn. Het verschil zit in wat draaien je kost.",
          "Beide zijn in hun volledige vorm serversoftware: iets om te hosten, bij te werken, te back-uppen en te beveiligen. Beatrax is een desktopprogramma — het installeert zoals elk ander programma en synchroniseert peer-to-peer tussen je eigen apparaten, dus er komt helemaal geen server aan te pas, ook geen eigen.",
        ],
        list: [
          { title: "Geen server om te draaien", body: "Geen container, geen reverse proxy, geen certificaat om te vernieuwen, geen database om te onderhouden." },
          { title: "Europese bankformaten van huis uit", body: "CAMT.053, MT940 en ICS-creditcardafschriften zijn eersteklas invoer, geen uitbreiding." },
          { title: "Betaalketens", body: "Een creditcardaankoop koppelen aan de bulkafrekening die hem betaalde is het probleem waar Beatrax omheen gebouwd is; de andere behandelen die doorgaans als losse regels." },
          { title: "Maar Actual ís OSI-open-source", body: "Is een OSI-goedgekeurde licentie voor jou een harde eis, dan voldoet Actual daaraan en Beatrax niet. Dat is een reëel verschil en dat staat hier gewoon." },
        ],
      },
      {
        heading: "Tegenover de app van je eigen bank",
        body: [
          "De app van je bank is echt het beste middel om naar díe bank te kijken. Realtime, gratis, en zonder instellen.",
          "Hij kan de andere rekeningen alleen niet zien. Staat je geld maar op één plek, gebruik hem dan. Beatrax bestaat voor het geval waarin het beeld verdeeld is over een betaalrekening, een creditcard van een ander bedrijf, PayPal ertussenin, en app-store-abonnementen die ergens afgerekend worden waar je naar moet zoeken.",
        ],
      },
    ],
    cta: {
      label: "Importeren uit YNAB of Actual",
      href: "/nl/migrate",
      secondaryLabel: "Voor wie het is",
      secondaryHref: "/nl/audience",
    },
  },

  // ── Hoe sync werkt ──────────────────────────────────────────────
  sync: {
    eyebrow: "Architectuur",
    title: "Hoe sync werkt zonder server.",
    lead: "Beatrax synchroniseert tussen je eigen apparaten, end-to-end versleuteld, zonder account en zonder dienst ertussen die iets kan lezen. Zo ongeveer werkt dat.",
    sections: [
      {
        heading: "Het probleem met gewone sync",
        body: [
          "De gebruikelijke manier om een app te synchroniseren is de gegevens op een server zetten en elk apparaat daarmee laten praten. Die server wordt dan de bron van waarheid, wat betekent dat hij alles kan lezen, en dat iemand hem voor altijd moet draaien en betalen.",
          "Beatrax kiest de andere route: elk apparaat houdt een volledige kopie, en ze stemmen rechtstreeks met elkaar af.",
        ],
      },
      {
        heading: "Elke wijziging is een regel in een logboek",
        body: [
          "In plaats van de database te synchroniseren, synchroniseert Beatrax de geschiedenis van wijzigingen erop. Elke bewerking wordt een regel in een logboek waar alleen aan toegevoegd wordt, ondertekend door het apparaat dat hem maakte en voorzien van een hybride logische klok, zodat regels van verschillende apparaten consistent geordend kunnen worden ook als hun klokken niet gelijklopen.",
          "De database is vervolgens een afgeleide van dat samengevoegde logboek — speel het logboek af en je krijgt dezelfde database, elke keer. Twee apparaten die dezelfde regels gezien hebben, komen altijd op dezelfde toestand uit.",
        ],
      },
      {
        heading: "Conflicten worden per regel opgelost, niet op geluk",
        body: [
          "Bewerken twee apparaten hetzelfde terwijl ze los van elkaar staan, dan wordt de samenvoeging per veld beslist door een vastgelegde regel in plaats van door wie het laatst synchroniseerde. Verzamelingen voegen samen als verzamelingen; verwijderingen winnen van gelijktijdige bewerkingen waar dat het veilige antwoord is; geïmporteerde regels ontdubbelen op dezelfde vingerafdruk die de import toch al gebruikt, zodat hetzelfde afschrift op twee apparaten geen twee administraties oplevert.",
        ],
      },
      {
        heading: "Apparaten bewijzen wie ze zijn",
        list: [
          { title: "Elk apparaat maakt zijn eigen identiteit", body: "Een ondertekensleutel en een sleutel voor sleuteluitwisseling, bij de eerste start op het apparaat aangemaakt. De privéhelften verlaten het nooit." },
          { title: "Koppelen is bewust en geverifieerd", body: "Een nieuw apparaat doet mee via een QR-code of een ingetypte woordcode met een eenmalig geheim, en op beide schermen verschijnt een veiligheidsnummer dat moet overeenkomen voordat er iets synchroniseert." },
          { title: "Sessies zijn wederzijds geauthenticeerd", body: "Gekoppelde apparaten zetten een forward-secret versleutelde sessie op, zodat een opgenomen sessie later niet alsnog te ontcijferen is als er ooit een sleutel uitlekt." },
        ],
      },
      {
        heading: "Direct als het kan, via een relay als het moet",
        body: [
          "Twee apparaten die aan staan op hetzelfde netwerk vinden elkaar en synchroniseren rechtstreeks — er verlaat niets je huis. Slaapt er één, dan wachten wijzigingen in een doorgeefrelay.",
          "Die relay is met opzet oninteressant: hij bewaart versleutelde tekst waar hij geen sleutel voor heeft, kan niet zien wat er veranderd is, en vergeet het zodra het bezorgd is. Een brievenbus, geen database.",
        ],
        tone: "accent",
      },
      {
        heading: "Ook versleuteld waar het stilstaat",
        body: [
          "Gevoelige velden worden op schijf versleuteld met een sleutel die uit je wachtwoordzin is afgeleid en pas vrijkomt als je de app ontgrendelt. Een apparaat verwijderen roteert de gedeelde groepssleutel en verpakt hem opnieuw voor de apparaten die je houdt — zodat een verwijderd apparaat niets kan lezen van wat er daarna verstuurd is.",
        ],
      },
      {
        heading: "Hoe ver dit is",
        tone: "warn",
        body: [
          "De samenvoegmotor, het koppelen van apparaten, het versleutelde transport, de relay en de versleuteling op schijf staan allemaal op de ontwikkellijn. De mobiele client als volwaardige sync-peer is het onderdeel dat nog loopt. De roadmap houdt dat eerlijk bij.",
        ],
      },
    ],
    cta: {
      label: "Bekijk de roadmap",
      href: "/nl/roadmap",
      secondaryLabel: "Lees de privacypagina",
      secondaryHref: "/nl/privacy",
    },
  },

  // ── Beveiliging ─────────────────────────────────────────────────
  security: {
    eyebrow: "Beveiliging",
    title: "Wat er beschermd wordt, en waartegen.",
    lead: "Een financiële applicatie verdient een uitgesproken dreigingsmodel in plaats van geruststellende bijvoeglijke naamwoorden. Dit is waar Beatrax tegen beschermt, en waartegen niet.",
    sections: [
      {
        heading: "Waar het tegen beschermt",
        cards: [
          { title: "Een gecompromitteerde of vijandige relay", body: "De sync-relay bewaart alleen versleutelde tekst waar hij geen sleutel voor heeft. Er één draaien geeft geen leestoegang." },
          { title: "Iemand op je netwerk", body: "Sessies tussen apparaten zijn wederzijds geauthenticeerd en forward-secret, dus een meeluisteraar leert niets en kan later niets afspelen." },
          { title: "Een gestolen laptop", body: "Met de app-vergrendeling aan zijn gevoelige velden op schijf versleuteld en komt de sleutel alleen vrij met je pincode of biometrie." },
          { title: "Een apparaat dat je niet meer vertrouwt", body: "Verwijderen roteert de groepssleutel en verpakt hem opnieuw voor de rest, waarmee het wordt afgesneden van alles daarna." },
          { title: "Een kwaadaardig afschriftbestand", body: "De XML-parser weigert alle externe entiteiten, dus een geprepareerd CAMT-bestand kan je bestandssysteem niet lezen en het netwerk niet op." },
          { title: "Gegevens die naar ons weglekken", body: "Structureel onmogelijk: er is geen telemetrie en geen backend om die te ontvangen." },
        ],
      },
      {
        heading: "Waar het niet tegen beschermt",
        tone: "warn",
        list: [
          { title: "Malware die al als jou draait", body: "Software die met jouw rechten op jouw machine draait, kan lezen wat jij kunt lezen. Geen enkele versleuteling op applicatieniveau overleeft dat." },
          { title: "Een zwakke wachtwoordzin", body: "De versleuteling op schijf leidt zich af van wat jij kiest. Een te raden wachtwoordzin is een te raden sleutel." },
          { title: "Alles tegelijk kwijtraken", body: "Geen apparaten en geen back-ups betekent geen herstel. Niemand heeft een kopie — precies dezelfde eigenschap die het privé houdt." },
          { title: "Wat je bank of mailprovider al weet", body: "Beatrax kan niet veranderen wat zij al hebben; het voorkomt alleen dat er nog een partij bij komt." },
        ],
      },
      {
        heading: "Hoe het eerlijk gehouden wordt",
        list: [
          { title: "Statische analyse op het strengste niveau", body: "De hele codebase wordt bij elke wijziging op de strengste stand geanalyseerd die het gereedschap kent." },
          { title: "Architectuurregels worden getest", body: "Regels zoals modulegrenzen en het register van versleutelde velden worden door tests afgedwongen, zodat een terugval de CI laat falen in plaats van mee te gaan met een release." },
          { title: "De specificatie is openbaar", body: "Het dreigingsmodel en de beveiligingseisen staan in de spec-repository, niet in reclameteksten." },
        ],
      },
      {
        heading: "Iets melden",
        body: [
          "Heb je een kwetsbaarheid gevonden, meld die dan privé via de security-advisory-route van GitHub op de productrepository in plaats van een openbaar issue te openen. Het beveiligingsbeleid in de organisatiebestanden beschrijft de reactietermijnen.",
        ],
      },
    ],
    cta: {
      label: "Privé melden",
      href: "https://github.com/beatrax-app/beatrax/security/advisories/new",
      secondaryLabel: "Hoe sync werkt",
      secondaryHref: "/nl/sync",
    },
  },

  // ── Community ───────────────────────────────────────────────────
  community: {
    eyebrow: "Community",
    title: "Het deel dat alleen beter wordt met mensen.",
    lead: "Beatrax wordt geleverd met een community-corpus: een gedeelde, door mensen samengestelde verzameling patronen die cryptische afschriftomschrijvingen omzet in namen die je herkent. Het is het enige deel van het product dat beter wordt omdat iemand bijdroeg, niet omdat iemand een release uitbracht.",
    sections: [
      {
        heading: "Het probleem dat het oplost",
        body: [
          "Een bankafschrift zegt niet \"Albert Heijn\". Het zegt eerder iets met een kassanummer, een plaatsnaam, een terminal-identificatie en een afkorting, aan elkaar geplakt. Vermenigvuldig dat met elke winkel, nutsbedrijf, belastingdienst en abonnement waar je mee te maken hebt, en een verse administratie is een muur van ruis.",
          "Beatrax leert al van wat jij corrigeert — label een tegenpartij één keer en elke transactie op dat IBAN volgt. Het corpus is de voorsprong: gedeelde kennis, zodat de eerste import al weet wat de meeste van die omschrijvingen betekenen.",
        ],
      },
      {
        heading: "Wat erin zit",
        cards: [
          { title: "Winkels en bedrijven", body: "Afschriftomschrijvingen gekoppeld aan een herkenbare naam en een verstandige standaardcategorie — supermarkten, vervoer, nutsbedrijven, streaming, de alledaagse namen." },
          { title: "Overheidsinstanties", body: "Belastingdiensten, gemeenten en uitvoeringsorganisaties, precies de omschrijvingen die mensen het vaakst helemaal niet kunnen plaatsen." },
          { title: "Bankkosten", body: "De kosten- en tariefregels waar banken hun eigen ondoorzichtige namen aan geven, herkend zodat ze in de juiste categorie belanden." },
          { title: "Hulpbronnen", body: "Waar je terechtkunt bij geldzorgen, per land bijgehouden in plaats van aannemen dat iedereen op dezelfde plek zit." },
        ],
      },
      {
        heading: "Hoe het bij jou komt",
        list: [
          { title: "Het zit in de app", body: "Het corpus wordt meegeleverd. Er is geen opzoekdienst, geen thuisbelroutine, en er verlaat geen verzoek je computer om een transactie te classificeren — het matchen gebeurt lokaal tegen gegevens die je al hebt." },
          { title: "Jouw eigen correcties winnen altijd", body: "Het corpus vult een globale laag. Wat jij zelf instelt staat daarboven, dus een gedeeld patroon kan nooit een naam overschrijven die jij gekozen hebt." },
          { title: "Patronen, geen persoonsgegevens", body: "Een regel is een openbaar stukje omschrijving en een openbare bedrijfsnaam. Niemands transacties zitten erin — er valt zelfs per ongeluk niets persoonlijks bij te dragen." },
        ],
        tone: "accent",
      },
      {
        heading: "Hoe je bijdraagt",
        body: [
          "Komt Beatrax een winkel tegen die het niet kan benoemen, dan biedt het transactiedetail aan een koppeling voor te stellen. Vul je die in, dan opent er een vooringevulde pull request in je browser tegen de productrepository — jij bekijkt hem, jij dient hem in, en er gaat niets weg tot je dat doet.",
          "Je kunt de corpusbestanden ook rechtstreeks bewerken. Het is gewone YAML, één bestand per land, en een regel is één regel.",
        ],
        list: [
          { title: "Vanuit de app", body: "Stel een koppeling voor bij elke onbekende tegenpartij; Beatrax stelt de wijziging samen en opent het concept voor je." },
          { title: "Vanuit de repository", body: "Bewerk resources/corpus/merchants/<land>.yaml en open een pull request. Patroon, naam, en eventueel een categorie." },
          { title: "Een land dat er nog niet bij staat", body: "Voeg het bestand toe. Een nieuw landcorpus vraagt geen codewijziging — de loader pikt het op aan de bestandsnaam." },
        ],
      },
      {
        heading: "Hoe de dekking er nu voor staat",
        body: [
          "Hieronder de huidige stand, uit de repository gelezen toen deze pagina gebouwd werd. Landen met een laag aantal zijn niet stuk — daar is simpelweg het minste werk verzet, en dat maakt ze de plekken waar je het snelst zichtbaar verschil maakt.",
        ],
      },
    ],
    cta: {
      label: "Bekijk het corpus",
      href: "https://github.com/beatrax-app/beatrax/tree/main/resources/corpus",
      secondaryLabel: "Welke banken werken",
      secondaryHref: "/nl/formats",
    },
  },
};
