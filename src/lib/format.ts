import type { DeliverableStatus } from "./types";
import type { Locale } from "../i18n";

const GLYPHS: Record<DeliverableStatus, string> = {
  done: "●",
  partial: "◐",
  todo: "○",
};

const LABELS: Record<Locale, Record<DeliverableStatus, string>> = {
  en: { done: "Shipped", partial: "In progress", todo: "Planned" },
  nl: { done: "Uitgebracht", partial: "Onderweg", todo: "Gepland" },
};

export function statusGlyph(status: DeliverableStatus): string {
  return GLYPHS[status];
}

export function statusLabel(status: DeliverableStatus, locale: Locale = "en"): string {
  return LABELS[locale][status];
}

// Dates on this page are release dates, so day precision is enough and the
// month is spelled out to avoid the DD/MM vs MM/DD ambiguity between locales.
export function releaseDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}
