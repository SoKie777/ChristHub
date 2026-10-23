import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The GitHub Actions run number is also the release number (tag v0.1.N): the
// app compares it with the latest release to offer updates.
// On Netlify (web version), the version is the build day.
const run = process.env.GITHUB_RUN_NUMBER;
const web = process.env.NETLIFY ? new Date().toISOString().slice(0, 10).split("-").reverse().join("/") : undefined;
const version = run ? `0.1.${run}` : web ? `web-${web}` : "dev";

// base "./": the build is served from the root of the Android WebView
// (https://appassets.androidplatform.net/) but stays relocatable.
export default defineConfig({
  base: "./",
  plugins: [react()],
  define: { __APP_VERSION__: JSON.stringify(version) },
  // The whole book ships with the app (offline): a bundle above 500 kB is expected.
  build: { outDir: "dist", assetsInlineLimit: 0, chunkSizeWarningLimit: 1500 },
});
