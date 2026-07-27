import type { Coverage } from "../lib/types";

// Committed snapshot of the community corpus shipped in the product repo,
// generated from resources/corpus/. Used when GitHub is unreachable at build
// time; otherwise the live listing from the org replaces the country set so a
// newly contributed corpus appears here without anyone editing this file.
//
// `merchants` and `government` are pattern counts, not a quality score — a
// country with a small number is an invitation to contribute, not a warning.

export const seedCoverage: Coverage[] = [
  { code: "at", name: "Austria", nameNl: "Oostenrijk", merchants: 21, government: 3, bankFees: 0 },
  { code: "be", name: "Belgium", nameNl: "België", merchants: 27, government: 2, bankFees: 0 },
  { code: "bg", name: "Bulgaria", nameNl: "Bulgarije", merchants: 11, government: 1, bankFees: 0 },
  { code: "ca", name: "Canada", nameNl: "Canada", merchants: 34, government: 2, bankFees: 0 },
  { code: "cy", name: "Cyprus", nameNl: "Cyprus", merchants: 9, government: 0, bankFees: 0 },
  { code: "cz", name: "Czechia", nameNl: "Tsjechië", merchants: 14, government: 2, bankFees: 0 },
  { code: "de", name: "Germany", nameNl: "Duitsland", merchants: 33, government: 4, bankFees: 4 },
  { code: "dk", name: "Denmark", nameNl: "Denemarken", merchants: 12, government: 2, bankFees: 0 },
  { code: "ee", name: "Estonia", nameNl: "Estland", merchants: 10, government: 2, bankFees: 0 },
  { code: "es", name: "Spain", nameNl: "Spanje", merchants: 27, government: 3, bankFees: 0 },
  { code: "eu", name: "Europe-wide", nameNl: "Europa-breed", merchants: 36, government: 0, bankFees: 0 },
  { code: "fi", name: "Finland", nameNl: "Finland", merchants: 13, government: 2, bankFees: 0 },
  { code: "fr", name: "France", nameNl: "Frankrijk", merchants: 32, government: 6, bankFees: 4 },
  { code: "gb", name: "United Kingdom", nameNl: "Verenigd Koninkrijk", merchants: 48, government: 7, bankFees: 0 },
  { code: "gr", name: "Greece", nameNl: "Griekenland", merchants: 10, government: 2, bankFees: 0 },
  { code: "hr", name: "Croatia", nameNl: "Kroatië", merchants: 12, government: 2, bankFees: 0 },
  { code: "hu", name: "Hungary", nameNl: "Hongarije", merchants: 14, government: 1, bankFees: 0 },
  { code: "ie", name: "Ireland", nameNl: "Ierland", merchants: 15, government: 4, bankFees: 0 },
  { code: "it", name: "Italy", nameNl: "Italië", merchants: 26, government: 3, bankFees: 0 },
  { code: "lt", name: "Lithuania", nameNl: "Litouwen", merchants: 10, government: 2, bankFees: 0 },
  { code: "lu", name: "Luxembourg", nameNl: "Luxemburg", merchants: 6, government: 2, bankFees: 0 },
  { code: "lv", name: "Latvia", nameNl: "Letland", merchants: 9, government: 1, bankFees: 0 },
  { code: "mt", name: "Malta", nameNl: "Malta", merchants: 8, government: 2, bankFees: 0 },
  { code: "nl", name: "Netherlands", nameNl: "Nederland", merchants: 33, government: 8, bankFees: 2 },
  { code: "pl", name: "Poland", nameNl: "Polen", merchants: 15, government: 2, bankFees: 0 },
  { code: "pt", name: "Portugal", nameNl: "Portugal", merchants: 12, government: 1, bankFees: 0 },
  { code: "ro", name: "Romania", nameNl: "Roemenië", merchants: 13, government: 2, bankFees: 0 },
  { code: "se", name: "Sweden", nameNl: "Zweden", merchants: 13, government: 3, bankFees: 0 },
  { code: "si", name: "Slovenia", nameNl: "Slovenië", merchants: 11, government: 3, bankFees: 0 },
  { code: "sk", name: "Slovakia", nameNl: "Slowakije", merchants: 12, government: 2, bankFees: 0 },
  { code: "ua", name: "Ukraine", nameNl: "Oekraïne", merchants: 18, government: 2, bankFees: 0 },
  { code: "us", name: "United States", nameNl: "Verenigde Staten", merchants: 45, government: 3, bankFees: 0 },
];
