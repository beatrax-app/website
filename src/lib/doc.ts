// The shape every content page is written in.
//
// Twelve pages across two locales is twenty-four documents; hand-building each
// as its own template would guarantee they drift apart in styling and in
// structure. Instead each page is data in the locale dictionaries and renders
// through one component, so a Dutch page cannot end up laid out differently
// from its English twin, and a new section type is added once.

export interface DocList {
  title?: string;
  body: string;
}

export interface DocTable {
  head: string[];
  rows: string[][];
}

export interface DocSection {
  heading?: string;
  // Paragraphs. Kept as an array rather than one blob so the renderer controls
  // spacing instead of the copy carrying markup.
  body?: string[];
  list?: DocList[];
  // Renders as a definition-style grid rather than bullets — used where each
  // item has a real title worth setting apart.
  cards?: DocList[];
  table?: DocTable;
  note?: string;
  tone?: "default" | "warn" | "accent";
}

export interface Doc {
  eyebrow: string;
  title: string;
  lead: string;
  sections: DocSection[];
  // Optional closing call to action.
  cta?: { label: string; href: string; secondaryLabel?: string; secondaryHref?: string };
}
