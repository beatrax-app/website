// @ts-check
import { defineConfig } from "astro/config";

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
});
