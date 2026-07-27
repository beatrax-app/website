// English copy. Every user-facing string on the site lives here or in nl.ts —
// no prose in the page templates, so the two locales cannot drift apart
// structurally. Claims here must be true of the shipped product; when in
// doubt, check the product repo rather than softening the wording.

export const en = {
  meta: {
    lang: "en",
    tagline: "See every account in one calm picture",
    description:
      "beatrax is a local-first personal finance dashboard. It reads the statements your bank already exports, resolves what really paid for what, and shows your whole month in one place. Nothing leaves your machine.",
  },

  nav: {
    features: "Features",
    how: "How it works",
    audience: "Who it's for",
    formats: "Banks & formats",
    licence: "Open source",
    community: "Community",
    privacy: "Privacy",
    roadmap: "Roadmap",
    download: "Download",
    skip: "Skip to content",
    theme: "Switch theme",
    language: "Language",
    menu: "Menu",
  },

  hero: {
    eyebrow: "Local-first · open source with ethical-use clauses",
    titleLead: "Every account.",
    titleAccent: "One calm picture.",
    body: "beatrax pulls your bank, credit card, PayPal and app-store subscriptions into a single view of the month — then resolves the chains between them, so you can see what actually paid for what.",
    ctaPrimary: "Download for desktop",
    ctaSecondary: "See how it works",
    proof: "No telemetry · no cloud account · no sync server you don't own",
    shotAlt:
      "The beatrax dashboard showing drift alerts, unusual charges, money in and out for the month, and savings-goal progress.",
  },

  promises: {
    eyebrow: "Three promises",
    title: "What you actually get.",
    items: [
      {
        title: "It stays on your machine",
        body: "The database, the OAuth tokens, the cached receipts — all on your disk. No telemetry, no cloud sync, no account to create. When devices do sync, they sync directly to each other, end-to-end encrypted, through a relay that only ever holds ciphertext.",
      },
      {
        title: "It reads what your bank already gives you",
        body: "CAMT.053, MT940 and CSV from European banks, ICS credit-card PDFs, PayPal exports. No screen-scraping, no shared credentials. An optional open-banking connector exists, off by default, with your own API key.",
      },
      {
        title: "It resolves the chains",
        body: "A PayPal charge funded by your bank. A card purchase settled weeks later in one bulk SEPA debit. beatrax links both ends, so a transaction stops being a mystery line and starts being an answer.",
      },
    ],
  },

  problem: {
    eyebrow: "The problem it kills",
    title: "Your money is spread across six statements that never agree.",
    body: "The bank shows a €225 card settlement. The card statement shows fifteen purchases. PayPal shows an order the bank calls a transfer. Every month you rebuild the same picture by hand, and every month you give up somewhere near the middle.",
    lead: "beatrax does the reconciliation once, then keeps doing it.",
    points: [
      "Chains a card purchase to the bulk settlement that paid for it.",
      "Names the counterparty behind an IBAN you have never seen.",
      "Flags a subscription whose price moved while you weren't looking.",
    ],
  },

  features: {
    eyebrow: "What's inside",
    title: "The whole month, not just the balance.",
    lead: "Every surface below is real — these are screenshots of the app running against a demo dataset, not mockups.",
    groups: [
      { key: "see", label: "See" },
      { key: "operate", label: "Operate" },
      { key: "trust", label: "Trust" },
    ],
  },

  how: {
    eyebrow: "How it works",
    title: "Four steps, then it keeps up on its own.",
    steps: [
      {
        title: "Drop in a statement",
        body: "The setup wizard walks you through your bank, your credit card, PayPal and — if you want it — your email receipts. Every step is skippable and repeatable later.",
      },
      {
        title: "beatrax reads and dedupes",
        body: "It parses the format, fingerprints every row so re-importing the same file changes nothing, and resolves the counterparty behind each IBAN.",
      },
      {
        title: "You confirm the edge cases",
        body: "Unknown counterparties land in a keyboard-driven triage queue. Uncategorised rows land in an inbox. One keystroke each, and the rules ripple out to future imports.",
      },
      {
        title: "It keeps watch",
        body: "Recurring charges are detected, drift is flagged, unusual charges surface, and the forecast projects your balance 30 to 365 days out.",
      },
    ],
  },

  privacy: {
    eyebrow: "Privacy",
    title: "There is no server to trust.",
    body: "beatrax has no backend. There is no account, no telemetry, no crash reporter phoning home, and no hosted copy of your ledger. The SQLite database lives in your application-support directory and is yours to back up, move or delete.",
    points: [
      {
        title: "Sync is peer-to-peer",
        body: "Devices pair by QR code or a spoken word-code and verify each other by safety number. They talk directly over your LAN when both are awake, and fall back to a relay that only ever stores ciphertext it cannot read.",
      },
      {
        title: "Encrypted at rest",
        body: "Each device encrypts its own copy with a key derived from your passphrase and released only by the app-lock. Removing a device rotates the group key and re-wraps it to the devices you kept.",
      },
      {
        title: "Open-banking stays optional",
        body: "The connector is off by default and needs your own aggregator key. When on, your machine talks to the aggregator directly — no beatrax server sits in the middle, because there isn't one.",
      },
    ],
  },

  status: {
    eyebrow: "Where it is",
    title: "Shipped, and still moving.",
    shipped: "Shipped",
    inProgress: "In v2.0",
    remaining: "Still to come",
    liveNote: "Read from the GitHub org at build time — nobody updates this page by hand.",
    snapshotNote: "Showing the last known snapshot.",
  },

  banks: {
    verifiedTitle: "Verified",
    verifiedBody: "Shapes beatrax recognises explicitly, with an adapter or header profile and tests behind them. Detected automatically when you upload.",
    expectedTitle: "Expected to work",
    expectedBody: "These institutions publish CAMT.053 or MT940 to account holders, which beatrax parses generically. They have not been individually tested — so if one of them fails on a conforming file, that is a bug worth reporting, not an unsupported bank.",
    colBank: "Institution",
    colCountry: "Country",
    colFormats: "Formats",
    note: "Availability sometimes differs between personal and business products. Corrections from anyone who has actually tried it are welcome — that is the only way an entry moves from expected to verified.",
    source: "The full list lives in the specification →",
  },

  community: {
    statCountries: "countries with a corpus",
    statMerchants: "merchant patterns",
    statGovernment: "government patterns",
    colCountry: "Country",
    colMerchants: "Merchants",
    colGovernment: "Government",
    colBankFees: "Bank fees",
    tableNote: "Counts are pattern totals, not a quality score. A small number is an invitation to contribute, not a warning — and the country list is read from the repository when this page is built, so a corpus somebody adds appears here on the next rebuild.",
  },

  roadmap: {
    title: "Roadmap",
    lead: "Every release, and what is in it. Status is read from the spec repo and the org's releases when this page is built — when the code moves, the page moves.",
    overall: "Overall",
    milestones: "releases",
    deliverables: "deliverables",
    source: "Roadmap source",
    releasedOn: "Released",
    unreleased: "Not yet released",
    reposTitle: "The repositories",
    backHome: "Back to the front page",
  },

  download: {
    eyebrow: "Install",
    title: "Runs on your desktop.",
    body: "macOS, Windows and Linux. Every release publishes SHA-256 checksums and a signed manifest, so you can verify exactly what you downloaded.",
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
    note: "Every release publishes SHA-256 checksums and a signed manifest.",
    cta: "Release downloads",
  },

  coming: {
    badge: "Next release",
    eyebrow: "v2.0",
    title: "The biggest release yet is close.",
    body: "Everything below has already landed on the development line. What is left before v2.0 ships is the mobile client as a full sync peer, and getting it into the app stores.",
    items: [
      {
        title: "End-to-end encrypted device sync",
        body: "Your devices reconcile directly with each other — signed change log, CRDT merge, QR pairing with safety numbers, LAN-direct with a relay that only ever holds ciphertext. No account, no server.",
        headline: true,
      },
      { title: "Envelope budgeting", body: "Assign every euro, roll balances over, move money between envelopes." },
      { title: "Mobile apps", body: "iOS and Android, each holding their own encrypted copy." },
      { title: "Signed desktop installers", body: "Code-signed builds for macOS and Windows." },
      { title: "Open banking", body: "An optional connector, off by default, with your own key." },
      { title: "Rules engine", body: "Multi-condition rules that rename, categorise, tag and annotate on import." },
      { title: "Migration importers", body: "Bring your budget across from YNAB, nYNAB or Actual." },
      { title: "Report builder", body: "Compose, save and pin your own reports." },
    ],
    cta: "See the full roadmap",
  },

  cta: {
    title: "Read the source. Run it yourself.",
    body: "Every line of beatrax is public: read it, build it, modify it, fork it. The licence adds ethical-use clauses on top, which is the one thing that keeps it from being OSI-certified — the difference, and the reasoning, are written out in full.",
    repo: "Browse the code",
    spec: "Read the spec",
  },

  footer: {
    alsoFrom: "Also from NightWorks",
    happklaar: "Meal planning for busy households",
    lemonfiber: "Self-hosted media, without the sysadmin",
    license: "Hippocratic License 3.0",
    sourceAvailable: "Open source with ethical-use clauses — not OSI-certified",
    community: "Community corpus",
    colophon: "Colophon",
    repos: "Repositories",
    product: "Product",
    org: "Organisation",
  },

  colophon: {
    eyebrow: "Colophon",
    title: "Built on other people's work.",
    lead: "beatrax is a small project standing on a large amount of open-source software. This page names it — the list is authored in the specification and rendered here, so credit cannot quietly drift out of date.",
    source: "Read it in the spec",
    readInSpec: "Read the colophon in the specification",
    unavailable: "The list could not be loaded at build time.",
  },

  notFound: {
    title: "That page isn't here.",
    body: "The link may be old, or the page may have moved.",
    cta: "Back to the front page",
  },
};
