// Per-surface copy for the feature grid, the motion strip and the wizard
// walkthrough. Kept apart from en.ts / nl.ts because it is a long, flat
// lookup rather than page structure — but it obeys the same rule: both
// locales define the same keys, and the type enforces it.

import type { Locale } from "./index";

interface Card {
  title: string;
  body: string;
}

type CardSet = Record<string, Card>;

const featuresEn: CardSet = {
  dashboard: {
    title: "This month at a glance",
    body: "In, out and net for the period, with the alerts that need you first and the savings goals you're actually moving toward.",
  },
  transactions: {
    title: "Every transaction, filterable",
    body: "Search across all retained history, filter by date, account, amount or category, and recategorise inline. Flip to original currency to see what a charge really cost.",
  },
  counterparties: {
    title: "Who you actually pay",
    body: "Every merchant, bank, person and self-account that has moved money, with twelve-month totals, monthly averages and a sparkline of recent activity.",
  },
  chains: {
    title: "Funding chains, resolved",
    body: "PayPal funded by your bank, a card purchase settled weeks later in a bulk SEPA debit — Beatrax links both ends and shows the fan-out.",
  },
  calendar: {
    title: "Bills on a calendar",
    body: "Upcoming fixed payments laid out by day, each with a running projected balance so you can see a tight week before it arrives.",
  },
  reports: {
    title: "Ask your own questions",
    body: "Compose a report from metric, grouping, period, currency mode and filters. Save the ones you keep asking; pin the three you want on the dashboard.",
  },
  budgets: {
    title: "Envelope budgeting",
    body: "Assign every euro to a category, carry balances month to month, move money between envelopes, and decide up front what happens when one overspends.",
  },
  forecast: {
    title: "Where the balance is heading",
    body: "A 30- to 365-day projection across every account, with what-if scenarios you can lay over the baseline to see a dip before it happens.",
  },
  goals: {
    title: "Savings goals",
    body: "Set a target and a date; Beatrax derives the finish date from your actual cash flow rather than wishful arithmetic.",
  },
  pots: {
    title: "Pots inside one balance",
    body: "Carve a real account into named virtual pots that always reconcile back — allocated plus unallocated equals the real balance, always.",
  },
  recurring: {
    title: "Subscriptions, detected",
    body: "Recurring charges found in your history, with the monthly total computed across currencies and every occurrence listed.",
  },
  reconcile: {
    title: "Reconcile to the statement",
    body: "Mark rows cleared, enter the statement balance, and watch the difference converge — or get told exactly how far off it is.",
  },
  tax: {
    title: "Tax-deductible tagging",
    body: "Tag what's deductible against your country's deduction categories, then export a clean per-year CSV or PDF for your records.",
  },
  drift: {
    title: "Price drift alerts",
    body: "When an approved subscription's latest charge moves outside your threshold, it lands here with prior and current amounts and the annualised impact.",
  },
  anomaly: {
    title: "Unusual charges",
    body: "Charges that deviate from your own baseline — large versus typical, a first-time merchant, a suspected duplicate — surfaced and dismissible.",
  },
  triage: {
    title: "Triage unknown counterparties",
    body: "A transaction from an IBAN Beatrax has never seen lands here with its recent activity. Name it once and every transaction sharing that IBAN is labelled.",
  },
  uncategorized: {
    title: "A categorisation inbox",
    body: "Anything that arrived without a category, in a keyboard-driven queue. Number keys assign, arrows move, Enter saves — and the rules ripple forward.",
  },
  notifications: {
    title: "A notification inbox",
    body: "Payment reminders, shortfall warnings and over-budget nudges land in a deduplicated inbox with read state synced across your devices.",
  },
  sync: {
    title: "Your devices, not a server",
    body: "Pair by QR or word-code, verify by safety number, sync directly over the LAN. The relay fallback only ever holds ciphertext.",
  },
  appLock: {
    title: "App-lock and biometrics",
    body: "A PIN or your OS biometric, separate from account login, that re-locks on idle — and is what releases the at-rest encryption key.",
  },
  devConsole: {
    title: "A console when you need it",
    body: "Ingestion state, queue health, read-only SQL, logs, doctor checks and sync health — visible only when you turn developer mode on.",
  },
};

const featuresNl: CardSet = {
  dashboard: {
    title: "Deze maand in één oogopslag",
    body: "Inkomsten, uitgaven en saldo van de periode, met de meldingen die je eerst nodig hebt en de spaardoelen waar je echt naartoe werkt.",
  },
  transactions: {
    title: "Elke transactie, filterbaar",
    body: "Zoek door je hele bewaarde historie, filter op datum, rekening, bedrag of categorie, en hercategoriseer ter plekke. Wissel naar de oorspronkelijke valuta om te zien wat iets écht kostte.",
  },
  counterparties: {
    title: "Wie je werkelijk betaalt",
    body: "Elke winkel, bank, persoon en eigen rekening waar geld heen of vandaan ging, met twaalfmaandstotalen, maandgemiddelden en een grafiekje van recente activiteit.",
  },
  chains: {
    title: "Betaalketens, ontrafeld",
    body: "PayPal gefinancierd door je bank, een creditcardaankoop die weken later in een bulkincasso wordt afgerekend — Beatrax verbindt beide kanten en toont de vertakking.",
  },
  calendar: {
    title: "Vaste lasten op een kalender",
    body: "Aankomende vaste betalingen per dag, elk met een doorlopend geprojecteerd saldo, zodat je een krappe week ziet aankomen.",
  },
  reports: {
    title: "Stel je eigen vragen",
    body: "Stel een rapport samen uit maatstaf, groepering, periode, valutamodus en filters. Bewaar wat je vaker vraagt; zet de drie belangrijkste op je dashboard.",
  },
  budgets: {
    title: "Envelop-budgettering",
    body: "Wijs elke euro toe aan een categorie, neem saldi mee naar de volgende maand, verschuif geld tussen enveloppen, en bepaal vooraf wat er gebeurt bij overschrijding.",
  },
  forecast: {
    title: "Waar je saldo heen gaat",
    body: "Een projectie van 30 tot 365 dagen over al je rekeningen, met wat-als-scenario's die je over de basislijn legt om een dip te zien vóór hij er is.",
  },
  goals: {
    title: "Spaardoelen",
    body: "Stel een bedrag en een datum in; Beatrax leidt de einddatum af uit je werkelijke kasstroom in plaats van uit hoopvol rekenwerk.",
  },
  pots: {
    title: "Potjes binnen één saldo",
    body: "Verdeel een echte rekening in benoemde virtuele potjes die altijd kloppen — toegewezen plus niet-toegewezen is altijd precies het echte saldo.",
  },
  recurring: {
    title: "Abonnementen, herkend",
    body: "Terugkerende afschrijvingen die uit je historie zijn gehaald, met het maandtotaal over valuta's heen berekend en elke afschrijving op een rij.",
  },
  reconcile: {
    title: "Afstemmen op het afschrift",
    body: "Markeer regels als verwerkt, vul het saldo van je afschrift in, en zie het verschil naar nul lopen — of hoor precies hoe ver het ernaast zit.",
  },
  tax: {
    title: "Fiscaal aftrekbaar labelen",
    body: "Label wat aftrekbaar is tegen de aftrekposten van jouw land, en exporteer daarna een nette CSV of pdf per jaar voor je administratie.",
  },
  drift: {
    title: "Prijsdrift-meldingen",
    body: "Zodra de laatste afschrijving van een goedgekeurd abonnement buiten je marge valt, komt hij hier terecht — met oud en nieuw bedrag en het effect op jaarbasis.",
  },
  anomaly: {
    title: "Ongebruikelijke afschrijvingen",
    body: "Afschrijvingen die afwijken van je eigen patroon — groot ten opzichte van normaal, een winkel waar je nooit eerder kocht, een vermoedelijke dubbele — zichtbaar en af te handelen.",
  },
  triage: {
    title: "Onbekende tegenpartijen triëren",
    body: "Een transactie van een IBAN dat Beatrax nog nooit zag komt hier binnen met de recente activiteit. Geef het één keer een naam en elke transactie op dat IBAN krijgt het label.",
  },
  uncategorized: {
    title: "Een categorisatie-inbox",
    body: "Alles wat zonder categorie binnenkwam, in een wachtrij die je met het toetsenbord afhandelt. Cijfertoetsen wijzen toe, pijltjes navigeren, Enter bewaart — en de regels werken door.",
  },
  notifications: {
    title: "Een meldingen-inbox",
    body: "Betaalherinneringen, waarschuwingen voor tekorten en signalen bij budgetoverschrijding komen in een ontdubbelde inbox, met leesstatus die meesynchroniseert.",
  },
  sync: {
    title: "Jouw apparaten, geen server",
    body: "Koppel via QR of woordcode, verifieer met een veiligheidsnummer, synchroniseer rechtstreeks over je eigen netwerk. De relay krijgt alleen versleutelde tekst te zien.",
  },
  appLock: {
    title: "App-vergrendeling en biometrie",
    body: "Een pincode of je biometrie, los van het inloggen, die na inactiviteit opnieuw vergrendelt — en die de sleutel voor versleuteling op schijf vrijgeeft.",
  },
  devConsole: {
    title: "Een console als je hem nodig hebt",
    body: "Import-status, wachtrijen, alleen-lezen SQL, logs, doctor-controles en sync-status — alleen zichtbaar als je ontwikkelaarsmodus aanzet.",
  },
};

const motionsEn: CardSet = {
  forecast: {
    title: "Stretch the horizon",
    body: "Thirty days to a full year, rescaling as you go.",
  },
  categorize: {
    title: "Clear the inbox",
    body: "Assign categories down the list; the rules carry forward.",
  },
  currency: {
    title: "See the real price",
    body: "An app-store charge settles in EUR but was billed in USD.",
  },
  palette: {
    title: "Jump anywhere",
    body: "⌘K searches views, commands, counterparties and transactions.",
  },
};

const motionsNl: CardSet = {
  forecast: {
    title: "Rek de horizon op",
    body: "Van dertig dagen tot een heel jaar, met de schaal die meebeweegt.",
  },
  categorize: {
    title: "Werk de inbox weg",
    body: "Wijs categorieën toe door de lijst heen; de regels werken door.",
  },
  currency: {
    title: "Zie de echte prijs",
    body: "Een app-store-aankoop wordt in euro's afgeschreven maar in dollars gefactureerd.",
  },
  palette: {
    title: "Spring overal heen",
    body: "⌘K zoekt door schermen, commando's, tegenpartijen en transacties.",
  },
};

const FEATURES: Record<Locale, CardSet> = { en: featuresEn, nl: featuresNl };
const MOTIONS: Record<Locale, CardSet> = { en: motionsEn, nl: motionsNl };

export function featureCards(locale: Locale): CardSet {
  return FEATURES[locale];
}

export function motionCards(locale: Locale): CardSet {
  return MOTIONS[locale];
}
