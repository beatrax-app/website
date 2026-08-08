// Dutch FAQ. The English questions and answers are canonical and live in the
// spec (90-appendix/faq.md); this file is the translation, keyed by the English
// question so a reworded English question surfaces as a missing translation
// (which falls back to English) rather than a silently mismatched pair.

export const faqHeadingsNl: Record<string, string> = {
  "The basics": "De basis",
  "Getting your transactions in": "Je transacties erin krijgen",
  "Sync and multiple devices": "Sync en meerdere apparaten",
  "Safety and the awkward questions": "Veiligheid en de lastige vragen",
};

export const faqNl: Record<string, { q: string; a: string }> = {
  "What does beatrax cost?": { q: "Wat kost Beatrax?", a: "Niets. Geen betaalde variant, geen proefperiode, geen licentiesleutel en geen upsell. Er valt ook geen dienst te draaien, en dus niets te factureren." },
  "Do I need an account?": { q: "Heb ik een account nodig?", a: "Nee. Geen aanmelding, geen inlog op een server en geen wachtwoord om te herstellen, want er is geen server die iets bewaart. Je installeert het programma en het werkt." },
  "Does it work offline?": { q: "Werkt het offline?", a: "Ja, volledig. Alle kernfuncties — import, categoriseren, budgetten, prognose, rapporten, zoeken — werken zonder netwerk. Alleen de optionele koppelingen reiken buiten je computer." },
  "Which platforms does it run on?": { q: "Op welke platforms draait het?", a: "macOS, Windows en Linux als desktopprogramma. De interface is ook als webapp op je telefoon te installeren, en volwaardige mobiele clients zijn in ontwikkeling voor v2.0." },
  "Is my data sent anywhere?": { q: "Worden mijn gegevens ergens heen gestuurd?", a: "Nee. Geen telemetrie, geen analytics, geen crashrapportage en geen gehoste kopie van je administratie. De database is een SQLite-bestand in je eigen application-support-map." },
  "Does beatrax connect to my bank?": { q: "Koppelt Beatrax met mijn bank?", a: "Standaard niet. Je exporteert een afschrift bij je bank en zet het bestand erin. Er is een optionele open-banking-koppeling, standaard uit, die je eigen API-sleutel bij de aggregator vraagt — maar bestandsimport is bewust de hoofdweg." },
  "Do you need my banking password?": { q: "Hebben jullie mijn bankwachtwoord nodig?", a: "Nooit. Beatrax doet geen screen-scraping en logt nooit namens jou in. Het leest bestanden die je bank je toch al geeft." },
  "Which file formats does it read?": { q: "Welke bestandsformaten leest het?", a: "CAMT.053, MT940 en CSV van banken, pdf-afschriften van ICS-creditcards, PayPal-transactie-exports, en e-mailbonnen uit Gmail of Microsoft als je een mailbox koppelt." },
  "Will it work with my bank?": { q: "Werkt het met mijn bank?", a: "Exporteert je bank CAMT.053 of MT940 — en dat doen de meeste Europese banken — dan ja. Bij een aantal banken wordt daarnaast de CSV-vorm automatisch herkend. De pagina over banken en formaten laat zien wat geverifieerd is en wat naar verwachting werkt." },
  "What happens if I import the same file twice?": { q: "Wat gebeurt er als ik hetzelfde bestand twee keer importeer?", a: "Niets. Elke regel krijgt een vingerafdruk, dus een afschrift dat je al geïmporteerd hebt verandert niets en levert geen dubbele regels op." },
  "Can I import my budget from another app?": { q: "Kan ik mijn budget uit een andere app overnemen?", a: "Ja, uit YNAB, nYNAB en Actual Budget. Categorieën, budgethistorie, transacties, splitsingen en verwerkt-status komen mee, en wat niet te koppelen is wordt gemeld in plaats van stilletjes weggelaten." },
  "How does sync work without a server?": { q: "Hoe werkt sync zonder server?", a: "Je apparaten praten rechtstreeks met elkaar. Elk apparaat heeft een volledige versleutelde kopie en ze stemmen af via een ondertekend logboek van wijzigingen. Staan ze op hetzelfde netwerk, dan gaat het direct; slaapt er één, dan wachten de wijzigingen in een relay die alleen versleutelde gegevens bewaart die hij niet kan lezen." },
  "Can you read my data when it syncs?": { q: "Kunnen jullie mijn gegevens lezen als ze synchroniseren?", a: "Nee. Sync is end-to-end versleuteld tussen apparaten die je zelf gekoppeld en geverifieerd hebt. De relay bewaart versleutelde tekst zonder sleutel, en er is geen Beatrax-account of server die je administratie ooit ziet." },
  "Can two people share a ledger?": { q: "Kunnen twee mensen één administratie delen?", a: "Twee apparaten van dezelfde persoon synchroniseren vandaag al. Een echte gedeelde huishoudomgeving, met aparte gebruikers en rechten, is bewust een toekomstige mijlpaal en geen huidige functie." },
  "What if I lose a device?": { q: "Wat als ik een apparaat kwijtraak?", a: "Verwijder het uit je apparatenlijst. Daarmee wordt de gedeelde sleutel geroteerd en opnieuw verpakt voor de apparaten die je houdt, zodat het verwijderde apparaat niets meer kan lezen van wat er daarna verstuurd is." },
  "What happens if I lose everything?": { q: "Wat als ik alles kwijtraak?", a: "Dan is de data weg, en niemand kan hem terughalen — precies dezelfde eigenschap die betekent dat niemand hem aan een ander kan geven. Beatrax kan een versleutelde back-up maken en herinnert je daaraan; waar je die bewaart bepaal jij." },
  "Is beatrax open source?": { q: "Is Beatrax open source?", a: "De broncode is openbaar, te bouwen en aan te passen. De licentie voegt ethische gebruiksvoorwaarden toe, en dat is het enige dat certificering door het Open Source Initiative in de weg staat. Allebei waar, en de licentiepagina legt de afweging uit in plaats van de mooiste helft te kiezen." },
  "Can I use it for my business?": { q: "Mag ik het zakelijk gebruiken?", a: "Ja, met inachtneming van de ethische clausules in de licentie. Houd er rekening mee dat het een persoonlijk kasboek is en geen boekhoudpakket — geen dubbel boekhouden, geen btw-aangifte, geen facturatie." },
  "What happens if the project stops?": { q: "Wat als het project stopt?", a: "De versie op je schijf blijft werken, de data is een gewoon SQLite-bestand dat je met elk programma kunt lezen, en de broncode is openbaar en te forken. Er is geen server om uit te zetten en geen abonnement om op te zeggen." },
  "Who is behind it?": { q: "Wie zit erachter?", a: "Het wordt gemaakt door NightWorks.io, en het is een klein project, geen gefinancierd bedrijf. Dat is de eerlijke ruil tegenover de betaalde alternatieven: geen abonnement, maar ook geen helpdesk." },
};
