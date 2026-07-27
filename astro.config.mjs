// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The public URL the site is served from. `.app` is HSTS-preloaded, so the
// host must serve HTTPS — GitHub Pages and Cloudflare Pages both do.
export default defineConfig({
  site: "https://beatrax.app",
  base: "/",
  trailingSlash: "ignore",
  build: {
    // Emit foo/index.html so routes work identically on any static host.
    format: "directory",
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      // Every page exists in both languages, so each entry names its
      // counterpart. Without that a crawler treats the two as competing pages
      // rather than as one page in two languages.
      i18n: {
        defaultLocale: "en",
        locales: { en: "en-GB", nl: "nl-NL" },
      },
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
