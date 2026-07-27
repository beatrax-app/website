// Static, structural site data — the parts that are the same in every
// locale (URLs, screenshot filenames, repo names). Anything a reader sees
// as prose lives in src/i18n instead, so a locale can never fall out of
// step with the structure.

export const site = {
  name: "beatrax",
  org: "beatrax-app",
  githubOrg: "https://github.com/beatrax-app",
  repo: "https://github.com/beatrax-app/beatrax",
  specRepo: "https://github.com/beatrax-app/spec",
  websiteRepo: "https://github.com/beatrax-app/website",
  releases: "https://github.com/beatrax-app/beatrax/releases/latest",
  license: "Hippocratic License 3.0",
  licenseUrl: "https://firstdonoharm.dev",
  by: { name: "NightWorks.io", url: "https://nightworks.io" },
};

// Sibling projects from the same workshop. Listed in the footer so the three
// find each other; each is an independent product with its own org and site.
export const siblings = [
  { key: "happklaar", label: "Happklaar", url: "https://happklaar.nl" },
  { key: "lemonfiber", label: "Lemonfiber", url: "https://lemonfiber.app" },
];

// Feature cards. `shot` names a file in public/shots; `group` maps onto the
// three columns the features section renders. Copy is keyed by `key` in the
// locale dictionaries so the same card reads correctly in both languages.
export interface Feature {
  key: string;
  group: "see" | "operate" | "trust";
  shot: string;
  wide?: boolean;
}

export const features: Feature[] = [
  { key: "dashboard", group: "see", shot: "dashboard", wide: true },
  { key: "transactions", group: "see", shot: "transactions" },
  { key: "counterparties", group: "see", shot: "counterparties" },
  { key: "chains", group: "see", shot: "chains" },
  { key: "calendar", group: "see", shot: "calendar" },
  { key: "reports", group: "see", shot: "reports" },

  { key: "budgets", group: "operate", shot: "budgets", wide: true },
  { key: "forecast", group: "operate", shot: "forecast" },
  { key: "goals", group: "operate", shot: "goals" },
  { key: "pots", group: "operate", shot: "pots" },
  { key: "recurring", group: "operate", shot: "recurring" },
  { key: "reconcile", group: "operate", shot: "reconcile" },
  { key: "tax", group: "operate", shot: "tax" },

  { key: "drift", group: "trust", shot: "drift", wide: true },
  { key: "anomaly", group: "trust", shot: "anomaly" },
  { key: "triage", group: "trust", shot: "triage" },
  { key: "uncategorized", group: "trust", shot: "uncategorized" },
  { key: "notifications", group: "trust", shot: "notifications" },
  { key: "sync", group: "trust", shot: "sync" },
  { key: "appLock", group: "trust", shot: "app-lock" },
  { key: "devConsole", group: "trust", shot: "dev-console" },
];

// The recordings that carry a multi-step interaction better than a still.
export interface Motion {
  key: string;
  gif: string;
}

export const motions: Motion[] = [
  { key: "forecast", gif: "forecast" },
  { key: "categorize", gif: "categorize" },
  { key: "currency", gif: "currency" },
  { key: "palette", gif: "palette" },
];

// The nine setup-wizard steps, in registry order.
export const wizardSteps = [
  "1-welcome",
  "2-bank",
  "3-paypal",
  "4-card",
  "5-email",
  "6-review",
  "7-budgets",
  "8-tax",
  "9-done",
];

// The formats beatrax ingests, shown as a strip. `note` keys into the
// locale dictionaries.
export const formats = [
  { key: "camt", label: "CAMT.053" },
  { key: "mt940", label: "MT940" },
  { key: "csv", label: "CSV" },
  { key: "icsPdf", label: "ICS PDF" },
  { key: "paypal", label: "PayPal CSV" },
  { key: "email", label: "Email receipts" },
  { key: "openBanking", label: "Open banking" },
];

export const platforms = [
  { key: "macos", label: "macOS", ext: ".dmg" },
  { key: "windows", label: "Windows", ext: ".exe" },
  { key: "linux", label: "Linux", ext: ".AppImage / .deb" },
];
