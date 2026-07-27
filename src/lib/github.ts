// The motor. Everything dynamic on the site is assembled here at BUILD TIME,
// from the GitHub org and the roadmap the maintainers already keep current in
// the spec repo. Nothing here runs in the browser — the output is baked into
// static HTML.
//
// Design rule: no single failure may break the build. Every fetch is wrapped,
// times out fast, and falls back to the committed seed. Nobody has to touch
// this site; when a release ships or the roadmap moves, CI rebuilds and the
// numbers follow.

import type {
  Milestone,
  Deliverable,
  DeliverableStatus,
  Issue,
  Release,
  ReleaseAsset,
  Repo,
  SiteData,
  Coverage,
} from "./types";
import { seedRepos } from "../data/seed";
import { seedMilestonesRaw } from "../data/seed-milestones";
import { seedCoverage } from "../data/coverage";

const ORG = "beatrax-app";
const API = "https://api.github.com";
const RAW = "https://raw.githubusercontent.com";
const TIMEOUT_MS = 8000;

// The roadmap the spec repo owns. Its status table is what this page renders.
const ROADMAP_FILE = `${RAW}/${ORG}/spec/main/00-overview/roadmap.md`;

// The colophon is authored in the spec, not here, so the credits cannot drift
// from the dependency list the specification actually documents.
const COLOPHON_FILE = `${RAW}/${ORG}/spec/main/90-appendix/colophon.md`;

// Bank coverage is a reference list that changes as people report what worked,
// so it lives in the spec and is rendered here rather than duplicated.
const BANKS_FILE = `${RAW}/${ORG}/spec/main/90-appendix/bank-coverage.md`;

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "beatrax-website-build",
  };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function getJSON<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: headers(),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function getText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function rollup(deliverables: Deliverable[]): {
  done: number;
  total: number;
  pct: number;
  status: DeliverableStatus;
} {
  // Group headings are section titles from the spec, not work items, so they
  // are excluded from every count — including them would inflate progress.
  const items = deliverables.filter((d) => !d.group);
  const total = items.length || 1;
  const doneUnits = items.reduce(
    (n, d) => n + (d.status === "done" ? 1 : d.status === "partial" ? 0.5 : 0),
    0,
  );
  const done = items.filter((d) => d.status === "done").length;
  const pct = Math.round((doneUnits / total) * 100);
  const status: DeliverableStatus =
    pct >= 100 ? "done" : doneUnits === 0 ? "todo" : "partial";
  return { done, total: items.length, pct, status };
}

// ── Markdown parsing ──────────────────────────────────────────────

function cleanCell(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// The spec's roadmap is organised by state, not by version: one `##` section
// each for what has shipped, what has landed but is unreleased, and what is
// left. Rows under those headings are the work items, and `###` headings are
// the spec's own grouping. Parsing that shape means the site renders whatever
// the spec says without a second status vocabulary to keep in sync.
const BUCKETS: { id: string; match: RegExp; status: DeliverableStatus }[] = [
  { id: "shipped", match: /^##\s+Shipped/i, status: "done" },
  { id: "unreleased", match: /^##\s+Landed but unreleased/i, status: "partial" },
  { id: "remaining", match: /^##\s+Remaining before/i, status: "todo" },
  { id: "backlog", match: /^##\s+Post-v[\d.]+\s+backlog/i, status: "todo" },
];

const PARSE_STOP = /^##\s+Open questions/i;

const TABLE_HEADERS = ["delivered", "landed", "item", "outstanding", "feature", "notes"];

function parseRoadmap(md: string): Map<string, Deliverable[]> {
  const lines = md.split("\n");
  const marks: { id: string; at: number; status: DeliverableStatus }[] = [];
  for (const b of BUCKETS) {
    const at = lines.findIndex((l) => b.match.test(l));
    if (at !== -1) marks.push({ id: b.id, at, status: b.status });
  }
  const stopAt = lines.findIndex((l) => PARSE_STOP.test(l));
  marks.sort((a, b) => a.at - b.at);

  const out = new Map<string, Deliverable[]>();
  marks.forEach((m, i) => {
    const next = marks[i + 1]?.at ?? (stopAt === -1 ? lines.length : stopAt);
    const end = stopAt !== -1 && stopAt > m.at && stopAt < next ? stopAt : next;
    const items: Deliverable[] = [];

    for (const raw of lines.slice(m.at, end)) {
      const line = raw.trim();

      if (line.startsWith("### ")) {
        const title = cleanCell(line.slice(4)).replace(/^\d+\s*—\s*/, "");
        if (title) items.push({ title, status: m.status, group: true });
        continue;
      }

      if (!line.startsWith("|") || (line.match(/\|/g) ?? []).length < 3) continue;
      const cells = line
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      if (cells.length === 0) continue;
      if (/^[-:\s]+$/.test(cells[0])) continue;
      if (TABLE_HEADERS.includes(cells[0].toLowerCase())) continue;

      const title = cleanCell(cells[0]);
      if (title.length > 3) items.push({ title, status: m.status });
    }

    if (items.length) out.set(m.id, items);
  });

  return out;
}

// A colophon section: one `##` heading and the table rows beneath it.
export interface ColophonGroup {
  heading: string;
  entries: { name: string; body: string }[];
}

// Parses the spec's colophon into groups. Only `##` sections carrying a table
// are taken, which drops the prose intro and the Related footer without
// needing to name them.
export function parseColophon(md: string): ColophonGroup[] {
  const out: ColophonGroup[] = [];
  let current: ColophonGroup | null = null;

  for (const raw of md.split("\n")) {
    const line = raw.trim();

    if (line.startsWith("## ")) {
      if (current && current.entries.length) out.push(current);
      current = { heading: cleanCell(line.slice(3)), entries: [] };
      continue;
    }
    if (!current) continue;
    if (!line.startsWith("|") || (line.match(/\|/g) ?? []).length < 3) continue;

    const cells = line
      .slice(1, -1)
      .split("|")
      .map((c) => c.trim());
    if (cells.length < 2) continue;
    if (/^[-:\s]+$/.test(cells[0])) continue;
    if (/^project$/i.test(cells[0])) continue;

    const name = cleanCell(cells[0]);
    const body = cleanCell(cells[1]);
    if (name && body) current.entries.push({ name, body });
  }
  if (current && current.entries.length) out.push(current);
  return out;
}

export async function getColophon(): Promise<ColophonGroup[]> {
  const md = await getText(COLOPHON_FILE);
  return md ? parseColophon(md) : [];
}

export interface VerifiedBank {
  name: string;
  country: string;
  formats: string;
}

export interface BankCoverage {
  verified: VerifiedBank[];
  // Country name → the institutions listed under it. The spec writes these as
  // a `###` heading followed by a middot-separated paragraph, which keeps the
  // source readable as prose while still being parseable.
  expected: { region: string; banks: string[] }[];
}

export function parseBankCoverage(md: string): BankCoverage {
  const lines = md.split("\n");
  const verified: VerifiedBank[] = [];
  const expected: { region: string; banks: string[] }[] = [];

  const vStart = lines.findIndex((l) => /^##\s+Verified/i.test(l));
  const eStart = lines.findIndex((l) => /^##\s+Expected/i.test(l));
  const eEnd = lines.findIndex((l, i) => i > eStart && /^##\s+The United Kingdom/i.test(l));

  if (vStart !== -1) {
    for (const raw of lines.slice(vStart, eStart === -1 ? lines.length : eStart)) {
      const line = raw.trim();
      if (!line.startsWith("|") || (line.match(/\|/g) ?? []).length < 4) continue;
      const cells = line.slice(1, -1).split("|").map((c) => cleanCell(c));
      if (cells.length < 3) continue;
      if (/^[-:\s]*$/.test(cells[0])) continue;
      if (/^institution$/i.test(cells[0])) continue;
      verified.push({ name: cells[0], country: cells[1], formats: cells[2] });
    }
  }

  if (eStart !== -1) {
    let region: string | null = null;
    let buffer: string[] = [];
    const flush = () => {
      if (region && buffer.length) {
        expected.push({
          region,
          banks: buffer
            .join(" ")
            .split("·")
            .map((b) => cleanCell(b))
            .filter(Boolean),
        });
      }
      buffer = [];
    };
    for (const raw of lines.slice(eStart, eEnd === -1 ? lines.length : eEnd)) {
      const line = raw.trim();
      if (line.startsWith("### ")) {
        flush();
        region = cleanCell(line.slice(4));
        continue;
      }
      if (!region || !line || line.startsWith("#") || line.startsWith("|")) continue;
      buffer.push(line);
    }
    flush();
  }

  return { verified, expected };
}

export async function getBankCoverage(): Promise<BankCoverage | null> {
  const md = await getText(BANKS_FILE);
  return md ? parseBankCoverage(md) : null;
}

// ── GitHub API ────────────────────────────────────────────────────

interface ApiRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  pushed_at: string;
  archived: boolean;
}

async function fetchRepos(): Promise<{ repos: Repo[]; stars: number } | null> {
  const api = await getJSON<ApiRepo[]>(
    `${API}/orgs/${ORG}/repos?per_page=100&type=public&sort=pushed`,
  );
  if (!api) return null;
  const byName = new Map(api.map((r) => [r.name, r]));
  const stars = api.reduce((n, r) => n + (r.stargazers_count || 0), 0);

  // Keep the seed's curated order and roles; overlay live metrics.
  const repos = seedRepos.map((seed) => {
    const live = byName.get(seed.name);
    if (!live) return seed;
    return {
      ...seed,
      description: live.description || seed.description,
      language: live.language || seed.language,
      url: live.html_url,
      stars: live.stargazers_count,
      openIssues: live.open_issues_count,
      pushedAt: live.pushed_at,
    } satisfies Repo;
  });
  return { repos, stars };
}

interface ApiAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface ApiRelease {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  body: string | null;
  assets: ApiAsset[];
}

// Which platform an asset belongs to is inferred from its filename rather than
// listed here, so the site follows whatever the release workflow actually
// produced instead of carrying a parallel list that can drift.
function platformFor(name: string): ReleaseAsset["platform"] {
  const n = name.toLowerCase();
  if (n.endsWith(".dmg") || n.includes("darwin") || n.includes("mac")) return "macos";
  if (n.endsWith(".exe") || n.endsWith(".msi") || n.includes("win")) return "windows";
  if (n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm")) return "linux";
  if (n.includes("sha256") || n.includes("checksum") || n.endsWith(".sig")) return "checksums";
  return undefined;
}

function toRelease(r: ApiRelease): Release {
  return {
    repo: "beatrax",
    tag: r.tag_name,
    name: r.name || r.tag_name,
    url: r.html_url,
    publishedAt: r.published_at,
    body: r.body ?? undefined,
    assets: (r.assets ?? []).map((a) => ({
      name: a.name,
      url: a.browser_download_url,
      size: a.size,
      platform: platformFor(a.name),
    })),
  };
}

async function fetchReleases(): Promise<Release[]> {
  const api = await getJSON<ApiRelease[]>(`${API}/repos/${ORG}/beatrax/releases?per_page=20`);
  if (!api) return [];
  return api
    .filter((r) => !r.prerelease && r.published_at)
    .map(toRelease)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

interface ApiIssue {
  title: string;
  html_url: string;
  number: number;
  created_at: string;
  repository_url: string;
  labels: { name: string }[];
  pull_request?: unknown;
}

// Anything labelled for newcomers, across every repo in the org — so the
// contribute page lists real open work rather than a hand-kept list.
async function fetchGoodFirstIssues(): Promise<Issue[]> {
  const q = encodeURIComponent(`org:${ORG} label:"good first issue" state:open is:issue`);
  const data = await getJSON<{ items: ApiIssue[] }>(
    `${API}/search/issues?q=${q}&per_page=12&sort=created`,
  );
  if (!data?.items) return [];
  return data.items
    .filter((i) => !i.pull_request)
    .map((i) => ({
      title: i.title,
      url: i.html_url,
      number: i.number,
      repo: i.repository_url.split("/").pop() || "",
      labels: i.labels.map((l) => l.name),
      createdAt: i.created_at,
    }));
}

interface ApiContent {
  name: string;
  type: string;
}

// The set of countries with a community corpus is read from the product repo's
// directory listing rather than hardcoded here, so a corpus contributed by
// someone else shows up on the site without this repo being touched. Only the
// country SET is live — the per-country pattern counts need the file bodies,
// which is more requests than a build should spend, so those stay on the seed.
async function fetchCoverage(): Promise<Coverage[]> {
  const listing = await getJSON<ApiContent[]>(
    `${API}/repos/${ORG}/beatrax/contents/resources/corpus/merchants`,
  );
  if (!listing) return seedCoverage;

  const codes = listing
    .filter((f) => f.type === "file" && f.name.endsWith(".yaml"))
    .map((f) => f.name.replace(/\.yaml$/, ""));
  if (codes.length === 0) return seedCoverage;

  const bySeed = new Map(seedCoverage.map((c) => [c.code, c]));
  return codes
    .map(
      (code) =>
        bySeed.get(code) ?? {
          code,
          name: code.toUpperCase(),
          nameNl: code.toUpperCase(),
          merchants: 0,
          government: 0,
          bankFees: 0,
        },
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Live spec content wins when the file parses into known buckets; the committed
// snapshot stands in per-bucket otherwise, so a spec heading being renamed
// degrades to a stale section rather than an empty page.
function buildMilestones(roadmapMd: string | null): Milestone[] {
  const parsed = roadmapMd ? parseRoadmap(roadmapMd) : new Map<string, Deliverable[]>();
  return seedMilestonesRaw.map((seed) => {
    const live = parsed.get(seed.id);
    const deliverables = live && live.length ? live : seed.deliverables;
    const r = rollup(deliverables);
    return {
      ...seed,
      deliverables,
      done: r.done,
      total: r.total,
      pct: r.pct,
      status: r.status,
    };
  });
}

// ── Public entry point ────────────────────────────────────────────

let cached: SiteData | null = null;

export async function getSiteData(): Promise<SiteData> {
  if (cached) return cached;

  const [repoResult, roadmapMd] = await Promise.all([fetchRepos(), getText(ROADMAP_FILE)]);

  const live = repoResult !== null;
  const repos = repoResult?.repos ?? seedRepos;
  const stars = repoResult?.stars ?? 0;
  const [releases, goodFirstIssues, coverage] = live
    ? await Promise.all([fetchReleases(), fetchGoodFirstIssues(), fetchCoverage()])
    : [[] as Release[], [] as Issue[], seedCoverage];

  const milestones = buildMilestones(roadmapMd);

  const totalDeliverables = milestones.reduce((n, m) => n + m.total, 0);
  const doneDeliverables = milestones.reduce((n, m) => n + m.done, 0);
  const doneUnits = milestones.reduce(
    (n, m) =>
      n +
      m.deliverables.reduce(
        (k, d) => k + (d.status === "done" ? 1 : d.status === "partial" ? 0.5 : 0),
        0,
      ),
    0,
  );

  cached = {
    generatedAt: new Date().toISOString(),
    live,
    stars,
    repos,
    milestones,
    releases,
    latestRelease: releases[0],
    goodFirstIssues,
    coverage,
    progress: {
      doneMilestones: milestones.filter((m) => m.status === "done").length,
      totalMilestones: milestones.length,
      doneDeliverables,
      totalDeliverables,
      pct: Math.round((doneUnits / (totalDeliverables || 1)) * 100),
    },
  };
  return cached;
}
