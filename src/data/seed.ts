import type { Repo } from "../lib/types";

// The org's repositories, in the order the site presents them. Live metrics
// (description, language, stars, open issues) are overlaid at build time; this
// file supplies the curated order and the human role label, which the API does
// not carry. Roadmap milestones live in seed-milestones.ts.

export const seedRepos: Repo[] = [
  {
    name: "beatrax",
    description:
      "The application — Laravel 13, Livewire, NativePHP desktop and mobile, SQLite.",
    language: "PHP",
    url: "https://github.com/beatrax-app/beatrax",
    stars: 0,
    openIssues: 0,
    role: "product",
    primary: true,
  },
  {
    name: "spec",
    description: "The canonical specification — requirements, decisions and contracts.",
    language: "Markdown",
    url: "https://github.com/beatrax-app/spec",
    stars: 0,
    openIssues: 0,
    role: "spec",
  },
  {
    name: "website",
    description: "This site. Static, and rebuilt from the org.",
    language: "Astro",
    url: "https://github.com/beatrax-app/website",
    stars: 0,
    openIssues: 0,
    role: "site",
  },
  {
    name: ".github",
    description: "Org-wide community health files and the profile page.",
    language: "Markdown",
    url: "https://github.com/beatrax-app/.github",
    stars: 0,
    openIssues: 0,
    role: "org",
  },
];
