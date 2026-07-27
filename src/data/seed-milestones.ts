import type { Milestone } from "../lib/types";

// Committed snapshot of beatrax-app/spec 00-overview/roadmap.md. Used only when
// GitHub is unreachable at build time; when it is reachable the live file
// replaces this entirely, so the site follows the spec rather than a copy.
//
// The three buckets are the spec's own: what has shipped in a tag, what has
// landed on the development line but is not yet released, and what is left
// before v2.0 can ship. Generated — edit the spec, not this file.

type RawMilestone = Omit<Milestone, "done" | "total" | "pct">;

export const seedMilestonesRaw: RawMilestone[] = [
  {
    id: "shipped",
    title: "Shipped",
    status: "done",
    blurb: "Everything released in a tag. v1.3.0 \"Local & in sync\" is the newest of seven, shipped 14 June 2026.",
    deliverables: [
      { title: "The v1.0 line — the ledger and the chains", status: "done", group: true },
      { title: "v1.1 — runtime and packaging", status: "done", group: true },
      { title: "v1.2 — the first insight layer", status: "done", group: true },
      { title: "v1.3.0 \"Local & in sync\" — shipped 2026-06-14", status: "done", group: true },
      { title: "Base-currency FX conversion — pluggable, offline-capable rate sources", status: "done" },
      { title: "Savings goals with forecast-driven projected finish dates", status: "done" },
      { title: "Savings pots / envelopes over a real account balance", status: "done" },
      { title: "Responsive, installable PWA with an offline app shell", status: "done" },
      { title: "PIN / biometric app-lock, and the at-rest key-unlock gate sync later consumes", status: "done" },
      { title: "Bills / cash-flow calendar with a running projected balance", status: "done" },
      { title: "Tax-deductible tagging and per-year CSV/PDF export", status: "done" },
      { title: "Full-text search over all retained history (FTS5 trigram) + ⌘K palette", status: "done" },
      { title: "Unusual-charge / anomaly alerts", status: "done" },
    ],
  },
  {
    id: "unreleased",
    title: "Landed, not yet released",
    status: "partial",
    blurb: "Merged and covered by tests on the development line, but not in a tag. This is what a v2.0 release note will mostly consist of.",
    deliverables: [
      { title: "The sync stack", status: "partial", group: true },
      { title: "Op-log / CRDT merge-layer spike validated against the live schema", status: "partial" },
      { title: "Change capture + CRDT merge engine: signed append-only op-log, HLC ordering, SQLite as a deterministic materialised view", status: "partial" },
      { title: "Device identity + pairing: Ed25519 / X25519, QR and word-code, safety numbers", status: "partial" },
      { title: "Encrypted transport: Noise XX/IK, mDNS LAN-direct, zero-knowledge relay fallback", status: "partial" },
      { title: "At-rest encryption per device, device revocation, group-key rotation and re-wrap", status: "partial" },
      { title: "Sync status and health surfaces", status: "partial" },
      { title: "Budgeting parity — the \"observe → operate\" cluster", status: "partial", group: true },
      { title: "Split transactions across multiple categories (the hard prerequisite for honest envelopes)", status: "partial" },
      { title: "Envelope (zero-based) budgeting: ready-to-assign pool, monthly grid, move-money, rollover, templates", status: "partial" },
      { title: "Account reconciliation with cleared status", status: "partial" },
      { title: "General-purpose rules engine (multi-condition, multi-action, re-applicable)", status: "partial" },
      { title: "Migration importers for YNAB4, nYNAB, and Actual Budget", status: "partial" },
      { title: "Notifications, open banking, reports, and the comment policy", status: "partial", group: true },
      { title: "Notifications and reminders: four proactive triggers plus a persistent, deduplicated inbox with cross-device-synced read state", status: "partial" },
      { title: "Optional open-banking import connector: Enable Banking aggregator, bring-your-own-key, AIS-only, off by default", status: "partial" },
      { title: "Custom report builder and saved reports (/reports), up to three pinned to the dashboard", status: "partial" },
      { title: "Code-comment policy enforced by an architecture test, after a manual sweep of roughly 1 435 backend PHP files", status: "partial" },
      { title: "The single Public definition of \"your current position\", composed from other modules' Public seams", status: "partial" },
    ],
  },
  {
    id: "remaining",
    title: "Remaining before v2.0",
    status: "todo",
    blurb: "The whole outstanding list. Everything else is done.",
    deliverables: [
      { title: "Mobile client as a fully synced peer", status: "todo", group: true },
      { title: "App-store publishing and distribution", status: "todo", group: true },
      { title: "Release-readiness carry-over", status: "todo", group: true },
    ],
  },
  {
    id: "backlog",
    title: "Post-v2.0 backlog",
    status: "todo",
    blurb: "Listed so it is visible, not so it is scheduled. Explicitly not v2.0 scope.",
    deliverables: [
      { title: "Public API and scripting interface", status: "todo" },
      { title: "SMTP-based password reset", status: "todo" },
      { title: "A real shared-household surface", status: "todo" },
      { title: "PostgreSQL", status: "todo" },
    ],
  },
];
