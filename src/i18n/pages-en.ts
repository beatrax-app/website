import type { Doc } from "../lib/doc";

// English content pages. Every claim here must be true of the shipped product
// — check the product repo rather than softening the wording. Where something
// is not yet released, say so in the sentence rather than implying it ships.

export const pagesEn: Record<string, Doc> = {
  // ── Who it's for ────────────────────────────────────────────────
  audience: {
    eyebrow: "Who it's for",
    title: "Built for money that lives in more than one place.",
    lead: "beatrax is for one person, or a two-person household, whose spending is spread across several banks, cards and payment processors — and who has given up reconciling it by hand.",
    sections: [
      {
        heading: "You'll recognise yourself if",
        cards: [
          {
            title: "You bank in more than one place",
            body: "A current account somewhere, a savings account somewhere else, a credit card from a third party, and PayPal in the middle of it. No single app shows you the whole picture, because no single institution has it.",
          },
          {
            title: "Your card statement and your bank never line up",
            body: "The bank shows one settlement. The card shows fifteen purchases. You have tried to match them by hand at least once, and you did not finish.",
          },
          {
            title: "You're self-employed, or partly",
            body: "Some spending is deductible and some isn't, and working out which at the end of the year means going through a shoebox of statements. Tagging as you go would have been easier.",
          },
          {
            title: "You'd rather your finances weren't in someone's cloud",
            body: "Not because you have something to hide, but because a full transaction history is about as personal as data gets, and an account you don't control is an account that can change its terms.",
          },
          {
            title: "You share money with one other person",
            body: "Two people, several accounts, and a recurring argument about where it went. Sync means you both see the same picture on your own devices.",
          },
          {
            title: "You've outgrown a spreadsheet",
            body: "The spreadsheet worked until it needed maintaining. beatrax does the parts you were doing by hand — matching, categorising, spotting the subscription that went up.",
          },
        ],
      },
      {
        heading: "It assumes a little of you",
        body: [
          "beatrax is a desktop application you install, not a service you sign up for. That's the trade that keeps your data on your machine, and it means a few things are your job.",
        ],
        list: [
          {
            title: "You can install software",
            body: "Download, install, open. No terminal required, but you are the administrator of your own data.",
          },
          {
            title: "You can export a statement",
            body: "Log in to your bank, pick a date range, download the file. beatrax reads the formats European banks already offer; the setup wizard shows you where to click for each one.",
          },
          {
            title: "You keep your own backups",
            body: "There is no server holding a copy for you. beatrax can produce an encrypted backup, but where it lives is your decision.",
          },
        ],
      },
      {
        heading: "It's probably not for you if",
        tone: "warn",
        list: [
          {
            title: "You bank in one place and like their app",
            body: "If a single institution already shows you everything you care about, beatrax is solving a problem you don't have.",
          },
          {
            title: "You want someone else to hold your data",
            body: "There is no hosted version, no web login, and no account recovery — because there is no account. If losing a laptop means losing your history, that is a real cost, and only you can weigh it.",
          },
          {
            title: "You need multi-user accounting",
            body: "beatrax is a personal ledger, not bookkeeping software. It has no double-entry accounting, no VAT return, no invoicing and no accountant seat.",
          },
          {
            title: "You bank outside Europe",
            body: "Import is built around CAMT.053, MT940 and the CSV shapes European banks export. Generic CSV import exists, but the further you are from that world, the more mapping you'll do yourself.",
          },
        ],
      },
    ],
    cta: {
      label: "See what it does",
      href: "/#features",
      secondaryLabel: "Which banks work",
      secondaryHref: "/formats",
    },
  },

  // ── Open source, honestly ───────────────────────────────────────
  licence: {
    eyebrow: "Licence",
    title: "Open source, honestly.",
    lead: "Every line of beatrax is public, readable, buildable and modifiable. It is also licensed in a way the Open Source Initiative does not certify — and pretending otherwise would be the kind of thing this page exists to avoid.",
    sections: [
      {
        heading: "What you can actually do",
        tone: "accent",
        body: [
          "The practical freedoms most people mean by open source, you have:",
        ],
        list: [
          { title: "Read all of it", body: "The full source, the specification behind it, and the reasoning for every architectural decision." },
          { title: "Build and run it yourself", body: "Clone, install the toolchain, build the desktop bundle. No licence key, no activation, no phone-home." },
          { title: "Modify it", body: "Fork it, patch it, run your own build indefinitely." },
          { title: "Leave with your data", body: "It's a SQLite file on your disk. Export it, read it with any SQLite tool, take it elsewhere." },
        ],
      },
      {
        heading: "Where it diverges",
        body: [
          "beatrax is licensed under the Hippocratic License 3.0. It grants those freedoms and then adds ethical-use conditions on top — restrictions on using the software to cause specific kinds of harm.",
          "The Open Source Definition does not allow a licence to restrict a field of endeavour, so any licence with such clauses cannot be OSI-approved, no matter how uncontroversial the restriction. That makes beatrax source-available rather than open source in the OSI sense. Both statements are true at once, and this page would rather say both than pick the flattering one.",
        ],
      },
      {
        heading: "Why not MIT or GPL",
        body: [
          "Because the licence is the only lever a small project has to say what it will not be part of, and giving that up costs nothing today but everything later.",
          "The reasoning is written out in full in the product repository, alongside the parts of that argument that are genuinely contested. It is a trade, not a free win: the cost is real, and it is mostly borne in conversations exactly like this one.",
        ],
        note: "The full rationale lives in NOTICE.md in the product repository.",
      },
      {
        heading: "What this means in practice",
        table: {
          head: ["Question", "Answer"],
          rows: [
            ["Can I read the source?", "Yes, all of it."],
            ["Can I run it without paying?", "Yes. There is no paid tier and no licence key."],
            ["Can I modify it for my own use?", "Yes."],
            ["Can I fork and redistribute?", "Yes, under the same licence."],
            ["Can I use it commercially?", "Yes, subject to the ethical-use clauses."],
            ["Is it OSI-approved open source?", "No — and the licence text explains exactly why."],
            ["Will it ever become MIT or GPL?", "No plan to. That decision would be recorded publicly if it changed."],
          ],
        },
      },
      {
        heading: "The name",
        body: [
          "The licence covers the code. The beatrax name and mark are not part of that grant — fork the software freely, but ship your fork under your own name so nobody is misled about what they're installing.",
        ],
      },
      {
        heading: "What happens to what you contribute",
        body: [
          "Contributions are accepted under the same licence as the project. There is no copyright assignment and no contributor licence agreement to sign — you keep ownership of your work, and it is licensed to everyone on the same terms as the rest.",
        ],
      },
    ],
    cta: {
      label: "Read the licence",
      href: "https://github.com/beatrax-app/beatrax/blob/main/LICENSE",
      secondaryLabel: "Read the reasoning",
      secondaryHref: "https://github.com/beatrax-app/beatrax/blob/main/NOTICE.md",
    },
  },

  // ── Privacy ─────────────────────────────────────────────────────
  privacy: {
    eyebrow: "Privacy",
    title: "There is no server to trust.",
    lead: "Most privacy pages describe how carefully a company handles your data. This one describes an architecture in which the company never receives it.",
    sections: [
      {
        heading: "What beatrax collects",
        tone: "accent",
        body: [
          "Nothing. There is no analytics, no crash reporter, no update ping carrying a device identifier, no error aggregation service, and no account.",
          "This isn't a policy that could be revised in a future version — there is no backend for the data to be sent to. The application has no server component at all.",
        ],
      },
      {
        heading: "Where your data actually lives",
        list: [
          { title: "The ledger", body: "A SQLite database in your operating system's application-support directory. One file. Yours to copy, move, back up or delete." },
          { title: "OAuth tokens", body: "If you connect a mailbox for receipt scanning, the tokens are stored on disk with restrictive file permissions — never transmitted anywhere but the provider they belong to." },
          { title: "Cached receipts", body: "Email receipts beatrax has matched are cached locally so it doesn't refetch them." },
          { title: "Nothing else", body: "No shadow copy, no telemetry queue waiting to flush, no cloud backup you didn't ask for." },
        ],
      },
      {
        heading: "When devices sync, what moves",
        body: [
          "Sync is peer-to-peer. Your devices talk to each other; nothing accumulates in the middle.",
        ],
        list: [
          { title: "Pairing is deliberate", body: "A new device joins by scanning a QR code or typing a word-code, and both ends confirm a matching safety number before anything flows." },
          { title: "Directly over your own network", body: "When two paired devices are awake on the same network they find each other and sync directly. Nothing leaves your house." },
          { title: "The relay only sees ciphertext", body: "When one device is offline, changes wait in a store-and-forward relay. The relay holds encrypted bytes it has no key for, and forgets them once delivered." },
          { title: "Encrypted at rest too", body: "Each device encrypts its own copy with a key derived from your passphrase, released only when you unlock the app." },
          { title: "Removing a device revokes it", body: "Removing a device rotates the shared key and re-wraps it to the devices you kept, so the removed one cannot read anything sent afterwards." },
        ],
      },
      {
        heading: "The parts that do touch the network",
        body: [
          "Being honest about this matters more than claiming a clean sweep. Three features reach outside your machine, all of them optional and all of them under your control:",
        ],
        table: {
          head: ["Feature", "What it contacts", "Default"],
          rows: [
            ["Email receipt scanning", "Your mail provider (Gmail or Microsoft), directly, read-only", "Off until you connect it"],
            ["Open-banking import", "An aggregator, with your own API key, from your machine", "Off"],
            ["Exchange rates", "A public rate source, or a bundled offline set", "Bundled rates work fully offline"],
          ],
        },
        note: "Each is off or offline-capable by default, and none of them route through a beatrax-operated service, because none exists.",
      },
      {
        heading: "What this costs you",
        tone: "warn",
        body: [
          "Local-first is a trade, not a free win. There is no password reset, because there is no account. If you lose every device and every backup, the data is gone — nobody can restore it for you, which is the same property that means nobody can hand it to anyone else either.",
          "beatrax can produce an encrypted backup and reminds you to. Where you keep it is your decision.",
        ],
      },
    ],
    cta: {
      label: "How sync works",
      href: "/sync",
      secondaryLabel: "Read the licence",
      secondaryHref: "/licence",
    },
  },

  // ── Formats & banks ─────────────────────────────────────────────
  formats: {
    eyebrow: "Compatibility",
    title: "Which banks and formats work.",
    lead: "beatrax reads the statement formats European banks already export, so it isn't tied to any one institution and doesn't need your banking password.",
    sections: [
      {
        heading: "Formats it reads",
        table: {
          head: ["Format", "What it is", "Typical source"],
          rows: [
            ["CAMT.053", "The ISO 20022 XML bank statement. The richest option — most structured detail, most reliable counterparty data.", "Most European banks, often labelled SEPA or ISO 20022"],
            ["MT940", "The older SWIFT statement format. Widely offered, slightly less structured than CAMT.", "Most European banks"],
            ["CSV", "Per-bank comma-separated exports. beatrax detects the shape for the banks it knows.", "Nearly every bank"],
            ["ICS PDF", "Monthly credit-card statements as PDF, parsed directly.", "International Card Services"],
            ["PayPal CSV", "The per-transaction details export, not the balance report.", "PayPal"],
          ],
        },
        note: "CAMT.053 is worth choosing where your bank offers it — the extra structure means better counterparty resolution and fewer rows landing in triage.",
      },
      { slot: true },
      {
        heading: "What it doesn't do",
        tone: "warn",
        list: [
          { title: "No screen-scraping", body: "beatrax never asks for your online banking password and never logs in as you." },
          { title: "No unsupported-bank guarantee", body: "If your bank exports only a bespoke CSV nobody has mapped, you'll do some column-mapping yourself." },
          { title: "Open banking is optional", body: "There is a connector for automatic fetching, but it is off by default and needs your own aggregator API key. File import is the primary path, deliberately." },
        ],
      },
      {
        heading: "Coming from another app",
        body: [
          "If you already keep a budget elsewhere, beatrax can import it rather than making you start over. YNAB, nYNAB and Actual Budget exports bring across categories, budget history, transactions, splits and cleared status.",
        ],
      },
    ],
    cta: {
      label: "Migrating from another app",
      href: "/migrate",
      secondaryLabel: "Download beatrax",
      secondaryHref: "/download",
    },
  },

  // ── Download ────────────────────────────────────────────────────
  download: {
    eyebrow: "Install",
    title: "Download beatrax.",
    lead: "A desktop application for macOS, Windows and Linux. Signed installers, published with checksums so you can verify what you downloaded.",
    sections: [
      {
        heading: "Pick your platform",
        cards: [
          { title: "macOS", body: "Apple Silicon .dmg. Drag to Applications and open. Intel Macs build from source — the repository documents the steps." },
          { title: "Windows", body: "An .exe installer. Runs from the Start menu once installed." },
          { title: "Linux", body: "An .AppImage for any distribution, or a .deb for Debian, Ubuntu and derivatives." },
        ],
        note: "Every platform ships from the same release, so the version numbers always match.",
      },
      {
        heading: "What you need",
        table: {
          head: ["", "Requirement"],
          rows: [
            ["Operating system", "macOS on Apple Silicon, Windows 10 or later, or a current Linux distribution"],
            ["Disk", "A few hundred megabytes, plus your ledger — which stays small; years of transactions are measured in megabytes"],
            ["Network", "Only for the optional features. beatrax works fully offline"],
            ["An account", "None. There is nothing to sign up for"],
          ],
        },
      },
      {
        heading: "Verifying your download",
        body: [
          "Every release publishes SHA-256 checksums and a signed manifest. Comparing the checksum of the file you downloaded against the published one confirms it arrived intact and unmodified.",
        ],
        note: "The verification runbook in the repository covers the deeper question of whether the manifest itself is authentic.",
      },
      {
        heading: "First run",
        body: [
          "beatrax opens on a setup wizard: your bank, your credit card, PayPal, and optionally your email receipts. Every step can be skipped and picked up later from Settings, so you can start with one statement and add the rest whenever.",
        ],
      },
    ],
    cta: {
      label: "Go to the releases page",
      href: "https://github.com/beatrax-app/beatrax/releases/latest",
      secondaryLabel: "Which banks work",
      secondaryHref: "/formats",
    },
  },

  // ── Migrate ─────────────────────────────────────────────────────
  migrate: {
    eyebrow: "Switching",
    title: "Bring your budget with you.",
    lead: "If you already keep a budget in YNAB, nYNAB or Actual Budget, beatrax imports it rather than making you start from an empty ledger.",
    sections: [
      {
        heading: "What comes across",
        table: {
          head: ["From", "What imports"],
          rows: [
            ["YNAB 4", "Register and budget CSV exports — categories, budget history, transactions, splits, payees, accounts and transfers."],
            ["nYNAB (the web version)", "The same CSV pair, with its own column shape recognised separately."],
            ["Actual Budget", "The exported budget file read directly, including cleared status, splits, schedules and goals where present."],
          ],
        },
      },
      {
        heading: "How the import behaves",
        list: [
          { title: "Nothing lands until you approve it", body: "The import stages everything first and shows a summary. You promote it into your ledger, or you don't." },
          { title: "Re-running changes nothing", body: "Import the same export twice and the second run is a no-op — every row is fingerprinted." },
          { title: "It tells you what it couldn't map", body: "Anything without a home in beatrax's model is listed as an unmapped-items summary rather than dropped silently." },
          { title: "Merging is three-way", body: "If you import into a ledger that already has data, conflicting records are reconciled rather than duplicated." },
        ],
      },
      {
        heading: "What doesn't come across",
        tone: "warn",
        body: [
          "Payees become counterparties and budget categories become envelopes, which is close but not identical — some structures have no equivalent because the models genuinely differ. The unmapped-items summary at the end of the run tells you exactly what fell into that gap, so nothing disappears quietly.",
        ],
      },
      {
        heading: "Coming from a bank app or a spreadsheet",
        body: [
          "There is no importer for those, because there is nothing standard to import. Start instead with a statement export — most banks will give you the last year or more in one file, and beatrax will reconstruct your history from it, detect the recurring charges, and resolve the counterparties as it goes.",
        ],
      },
    ],
    cta: {
      label: "Which formats work",
      href: "/formats",
      secondaryLabel: "Compare the alternatives",
      secondaryHref: "/compare",
    },
  },

  // ── Compare ─────────────────────────────────────────────────────
  compare: {
    eyebrow: "Alternatives",
    title: "How beatrax differs.",
    lead: "There are good tools in this category. The honest way to compare them is not feature counts but structure: where your data lives, how it pays for itself, and how transactions get in.",
    sections: [
      {
        heading: "The structural comparison",
        table: {
          head: ["", "Where data lives", "Business model", "How transactions arrive", "Source readable"],
          rows: [
            ["beatrax", "Your machine only", "Free, no paid tier", "Statement files you export; optional open banking with your own key", "Yes"],
            ["Dyme", "The provider's cloud", "Paid subscription", "Bank link via PSD2", "No"],
            ["YNAB", "The provider's cloud", "Paid subscription", "Bank sync, or file import", "No"],
            ["Actual Budget", "Your server, or their hosted option", "Free self-hosted; paid hosting available", "File import; bank sync via add-ons", "Yes"],
            ["Firefly III", "Your own server", "Free, self-hosted", "File import; bank sync via add-ons", "Yes"],
            ["Your bank's own app", "The bank's cloud", "Included with the account", "Native — it is your bank", "No"],
          ],
        },
        note: "This summarises each product's publicly described model, not a feature-by-feature audit, and deliberately quotes no prices — those change. If something here is wrong or out of date, please open an issue and it will be corrected.",
      },
      {
        heading: "What the paid apps charge for, and what beatrax does instead",
        tone: "accent",
        body: [
          "Dyme, YNAB and their peers charge a monthly or yearly subscription. Almost everything that subscription buys, beatrax does too — for nothing, because there is no service to run and therefore nothing to bill for.",
        ],
        table: {
          head: ["What you'd pay for", "beatrax"],
          rows: [
            ["All your accounts in one overview", "Yes — bank, credit card, PayPal and app-store subscriptions in one ledger"],
            ["Automatic categorisation that learns", "Yes — merchant memory plus a rules engine you can author yourself"],
            ["Subscription detection", "Yes — recurring charges detected from your own history"],
            ["Alerts when a subscription's price rises", "Yes — drift alerts with the annualised impact"],
            ["Unusual-charge detection", "Yes — flagged against your own baseline, not a generic threshold"],
            ["Envelope / zero-based budgeting", "Yes — assign every euro, carry balances, move money between envelopes"],
            ["Cash-flow forecasting", "Yes — 30 to 365 days, with what-if scenarios"],
            ["Savings goals and pots", "Yes"],
            ["Multi-device sync", "Yes — peer-to-peer and end-to-end encrypted, no account"],
            ["Reports and exports", "Yes — a report builder, CSV and PDF export, per-year tax export"],
            ["Search across all history", "Yes"],
            ["Mobile", "Partly — installable on a phone today; a fully synced mobile peer is still in progress"],
          ],
        },
        note: "No free tier, no trial, no upsell — this is the whole product.",
      },
      {
        heading: "What you genuinely give up",
        tone: "warn",
        body: [
          "It would be easy to stop at the table above. These are the things the paid services do better, and they are not small:",
        ],
        list: [
          {
            title: "Transactions do not arrive by themselves",
            body: "Dyme and YNAB link to your bank and update on their own. With beatrax you export a statement and drop it in — a few minutes a month. There is an open-banking connector, but it is off by default and needs your own aggregator key.",
          },
          {
            title: "No support desk",
            body: "There is nobody on a chat widget. You get a public issue tracker, a Discord, and whatever the community answers.",
          },
          {
            title: "You are the backup",
            body: "No provider is keeping a copy safe for you. Lose every device and every backup and it is gone — nobody can restore it.",
          },
          {
            title: "Mobile is not finished",
            body: "The interface works on a phone and installs as an app, but the mobile client is not yet a full sync peer. If a polished phone app is the main way you want to use this, wait.",
          },
          {
            title: "Fewer eyes, fewer years",
            body: "A subscription funds a team, a roadmap and a support rota. beatrax is a small project. It is younger, it has been tested by fewer people, and its future depends on interest rather than revenue.",
          },
          {
            title: "No shared household accounts or advice features",
            body: "No multi-user permissions, no coaching, no in-app product recommendations — some of which people genuinely value in the paid apps.",
          },
        ],
      },
      {
        heading: "Against the self-hosted open tools",
        body: [
          "Actual Budget and Firefly III share beatrax's instinct that your ledger should be yours. The difference is what running it costs you.",
          "Both are, in their full form, server software: something to host, update, back up and secure. beatrax is a desktop application — it installs like any other program and syncs peer-to-peer between your own devices, so there is no server in the picture at all, not even one you own.",
        ],
        list: [
          { title: "No server to run", body: "No container, no reverse proxy, no certificate renewal, no database to maintain." },
          { title: "European bank formats read natively", body: "CAMT.053, MT940 and ICS credit-card PDFs are first-class inputs, not add-ons." },
          { title: "Funding chains", body: "Linking a card purchase to the bulk settlement that paid for it is the problem beatrax was built around; the others generally treat those as unrelated rows." },
          { title: "But Actual is OSI open source", body: "If OSI-approved licensing is a hard requirement for you, Actual meets it and beatrax does not. That is a real difference and it is stated plainly." },
        ],
      },
      {
        heading: "Against your bank's own app",
        body: [
          "Your bank's app is genuinely the best tool for looking at that bank. It is real-time, it is free, and it needs no setup.",
          "It simply cannot see the other accounts. If your money only lives in one place, use it. beatrax exists for the case where the picture is split across a current account, a credit card from a different company, PayPal in between, and app-store subscriptions that settle somewhere you have to go looking for.",
        ],
      },
    ],
    cta: {
      label: "Import from YNAB or Actual",
      href: "/migrate",
      secondaryLabel: "Who it's for",
      secondaryHref: "/audience",
    },
  },

  // ── How sync works ──────────────────────────────────────────────
  sync: {
    eyebrow: "Architecture",
    title: "How sync works without a server.",
    lead: "beatrax syncs between your own devices, end-to-end encrypted, with no account and no service in the middle that can read anything. This is roughly how.",
    sections: [
      {
        heading: "The problem with a normal sync",
        body: [
          "The usual way to sync an app is to put the data in a server and have every device talk to it. That server becomes the source of truth, which means it can read everything, and it means somebody has to run and pay for it forever.",
          "beatrax takes the other route: every device holds a full copy, and they reconcile with each other directly.",
        ],
      },
      {
        heading: "Every change is an entry in a log",
        body: [
          "Rather than syncing the database, beatrax syncs the history of changes to it. Each edit becomes an entry in an append-only log, signed by the device that made it and stamped with a hybrid logical clock so entries from different devices can be ordered consistently even when their wall clocks disagree.",
          "The database is then a materialised view of that merged log — replay the log and you get the same database, deterministically. Two devices that have seen the same entries always arrive at the same state.",
        ],
      },
      {
        heading: "Conflicts resolve by rule, not by luck",
        body: [
          "When two devices edit the same thing while apart, the merge is decided per field by a documented rule rather than whichever synced last. Sets merge as sets; deletions win over concurrent edits where that is the safe answer; imported rows deduplicate on the same fingerprint the import pipeline already uses, so the same statement imported on two devices does not become two ledgers.",
        ],
      },
      {
        heading: "Devices prove who they are",
        list: [
          { title: "Each device generates its own identity", body: "A signing key and a key-agreement key, created on the device on first run. The private halves never leave it." },
          { title: "Pairing is deliberate and verified", body: "A new device joins by QR code or a typed word-code carrying a one-time secret, and both screens show a safety number that must match before anything syncs." },
          { title: "Sessions are mutually authenticated", body: "Paired devices establish a forward-secret encrypted session, so a recorded session cannot be decrypted later even if a key is compromised afterwards." },
        ],
      },
      {
        heading: "Direct when possible, relayed when not",
        body: [
          "Two devices awake on the same network discover each other and sync directly — nothing leaves your home. When one is asleep, changes wait in a store-and-forward relay.",
          "The relay is deliberately incapable of being interesting: it holds ciphertext it has no key for, cannot tell what changed, and forgets it once delivered. It is a mailbox, not a database.",
        ],
        tone: "accent",
      },
      {
        heading: "Encrypted where it rests, too",
        body: [
          "Sensitive fields are encrypted on disk with a key derived from your passphrase and released only when you unlock the app. Removing a device rotates the shared group key and re-wraps it to the devices you kept — so a device you have removed cannot read anything sent after you removed it.",
        ],
      },
      {
        heading: "Where this is up to",
        tone: "warn",
        body: [
          "The merge engine, device pairing, encrypted transport, relay and at-rest encryption have all landed on the development line. Wiring the mobile client as a fully synced peer is the piece still in progress. The roadmap tracks it honestly.",
        ],
      },
    ],
    cta: {
      label: "See the roadmap",
      href: "/roadmap",
      secondaryLabel: "Read the privacy page",
      secondaryHref: "/privacy",
    },
  },

  // ── Security ────────────────────────────────────────────────────
  security: {
    eyebrow: "Security",
    title: "What is protected, and from what.",
    lead: "A finance application deserves a stated threat model rather than reassuring adjectives. Here is what beatrax defends against, and what it does not.",
    sections: [
      {
        heading: "What it defends against",
        cards: [
          { title: "A compromised or hostile relay", body: "The sync relay only ever holds ciphertext it has no key for. Operating one grants no read access." },
          { title: "Someone on your network", body: "Device-to-device sessions are mutually authenticated and forward-secret, so a passive listener learns nothing and cannot replay later." },
          { title: "A stolen laptop", body: "With the app-lock on, sensitive fields are encrypted at rest and the key is only released by your PIN or biometric." },
          { title: "A device you no longer trust", body: "Removing it rotates the group key and re-wraps to the rest, cutting it off from everything sent afterwards." },
          { title: "A malicious statement file", body: "The XML parser refuses all external entities, so a crafted CAMT file cannot read your filesystem or reach the network." },
          { title: "Data leaking to us", body: "Structurally impossible: there is no telemetry and no backend to receive it." },
        ],
      },
      {
        heading: "What it does not defend against",
        tone: "warn",
        list: [
          { title: "Malware already running as you", body: "Software running with your privileges on your own machine can read what you can read. No application-level encryption survives that." },
          { title: "A weak passphrase", body: "At-rest encryption derives from what you choose. A guessable passphrase is a guessable key." },
          { title: "Losing everything at once", body: "No devices and no backups means no recovery. Nobody holds a copy — that is the same property that keeps it private." },
          { title: "What your bank or mail provider knows", body: "beatrax cannot change what they already hold; it only avoids adding another party." },
        ],
      },
      {
        heading: "How it is kept honest",
        list: [
          { title: "Static analysis at the strictest level", body: "The whole codebase is analysed at the maximum strictness the tooling offers, on every change." },
          { title: "Architectural invariants are tested", body: "Rules like module boundaries and the encryption field registry are enforced by tests, so a regression fails CI rather than shipping." },
          { title: "The specification is public", body: "The threat model and the security requirements live in the spec repository, not in marketing copy." },
        ],
      },
      {
        heading: "Reporting something",
        body: [
          "If you have found a vulnerability, please report it privately through GitHub's security advisory flow on the product repository rather than opening a public issue. The security policy in the organisation's community files sets out the response timeline.",
        ],
      },
    ],
    cta: {
      label: "Report privately",
      href: "https://github.com/beatrax-app/beatrax/security/advisories/new",
      secondaryLabel: "How sync works",
      secondaryHref: "/sync",
    },
  },

  // ── Community ───────────────────────────────────────────────────
  community: {
    eyebrow: "Community",
    title: "The bit that only gets better with people.",
    lead: "beatrax ships with a community corpus: a shared, human-curated set of patterns that turn cryptic statement descriptors into names you recognise. It is the one part of the product that improves because someone contributed, not because someone shipped a release.",
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "A bank statement does not say \"Albert Heijn\". It says something closer to a till number, a city, a payment-terminal identifier and an abbreviation, jammed together. Multiply that by every shop, utility, tax office and subscription you deal with, and a fresh ledger is a wall of noise.",
          "beatrax already learns from what you correct — label a counterparty once and every transaction sharing that IBAN follows. The corpus is the head start: a shared body of knowledge so the first import already knows what most of those descriptors mean.",
        ],
      },
      {
        heading: "What's in it",
        cards: [
          { title: "Merchants", body: "Statement descriptors mapped to a friendly name and a sensible default category — supermarkets, transport, utilities, streaming, the everyday names." },
          { title: "Government bodies", body: "Tax offices, municipalities and agencies, which are the descriptors people most often cannot decode at all." },
          { title: "Bank fees", body: "The fee and charge lines banks give their own opaque names, recognised so they land in the right category." },
          { title: "Support resources", body: "Where to turn for help with money trouble, kept per country rather than assuming everyone is in the same place." },
        ],
      },
      {
        heading: "How it reaches you",
        list: [
          { title: "It ships with the app", body: "The corpus is bundled. There is no lookup service, no phone-home, and no request leaves your machine to classify a transaction — matching happens locally against data you already have." },
          { title: "Your own corrections always win", body: "The corpus seeds a global tier. Anything you set yourself sits above it, so a shared pattern can never overwrite a name you chose." },
          { title: "Patterns, not personal data", body: "An entry is a public descriptor fragment and a public business name. Nobody's transactions are in it — there is nothing personal to contribute even by accident." },
        ],
        tone: "accent",
      },
      {
        heading: "How to contribute",
        body: [
          "When beatrax meets a merchant it cannot name, the transaction detail offers to suggest a mapping. Filling that in opens a pre-filled pull request in your browser against the product repository — you review it, you submit it, and nothing is sent anywhere until you do.",
          "You can also edit the corpus files directly. They are plain YAML, one file per country, and an entry is a single line.",
        ],
        list: [
          { title: "From inside the app", body: "Suggest a mapping on any unrecognised counterparty; beatrax composes the change and opens the draft for you." },
          { title: "From the repository", body: "Edit resources/corpus/merchants/<country>.yaml and open a pull request. Pattern, name, and optionally a category." },
          { title: "A country that isn't listed", body: "Add the file. A new country corpus needs no code change — the loader picks it up from the filename." },
        ],
      },
      {
        heading: "Where the coverage is today",
        body: [
          "Below is the current state, read from the repository when this page was built. Countries with a small count are not broken — they are simply where the least work has been done, which makes them the easiest places to make a visible difference.",
        ],
      },
    ],
    cta: {
      label: "Browse the corpus",
      href: "https://github.com/beatrax-app/beatrax/tree/main/resources/corpus",
      secondaryLabel: "Which banks work",
      secondaryHref: "/formats",
    },
  },
};
