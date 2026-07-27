// Shapes for everything the site derives from the GitHub org — "the motor".
// Kept deliberately small: only the fields a page actually renders.

export type DeliverableStatus = "done" | "partial" | "todo";

export interface Deliverable {
  title: string;
  status: DeliverableStatus;
  note?: string;
  // True for the spec's own ### sub-headings, which group the rows beneath
  // them rather than being work items in their own right.
  group?: boolean;
}

export interface Milestone {
  id: string; // "shipped" | "unreleased" | "remaining" | "backlog"
  title: string;
  status: DeliverableStatus;
  blurb: string;
  shippedAt?: string;
  deliverables: Deliverable[];
  done: number;
  total: number;
  pct: number; // 0..100
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
  openIssues: number;
  latestRelease?: string;
  pushedAt?: string;
  role: string; // human label: "product", "spec", "site"
  primary?: boolean;
}

export interface ReleaseAsset {
  name: string;
  url: string;
  size: number;
  // Which platform the filename implies. Derived, not declared — the release
  // workflow names assets, and this site should follow whatever it produced
  // rather than carry its own list that can fall out of date.
  platform?: "macos" | "windows" | "linux" | "checksums";
}

export interface Release {
  repo: string;
  tag: string;
  name: string;
  url: string;
  publishedAt: string;
  body?: string;
  assets: ReleaseAsset[];
}

export interface Issue {
  title: string;
  url: string;
  repo: string;
  number: number;
  labels: string[];
  createdAt: string;
}

// One row of community-corpus coverage. Counts are pattern totals from the
// product repo's resources/corpus tree.
export interface Coverage {
  code: string;
  name: string;
  nameNl: string;
  merchants: number;
  government: number;
  bankFees: number;
}

export interface SiteData {
  generatedAt: string;
  live: boolean; // true when GitHub was reachable at build time
  stars: number; // org total
  repos: Repo[];
  milestones: Milestone[];
  releases: Release[];
  latestRelease?: Release;
  goodFirstIssues: Issue[];
  coverage: Coverage[];
  progress: {
    doneMilestones: number;
    totalMilestones: number;
    doneDeliverables: number;
    totalDeliverables: number;
    pct: number;
  };
}
