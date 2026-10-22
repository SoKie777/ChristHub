import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The GitHub Actions run number is also the release number (tag v0.1.N): the
// app compares it with the latest release to offer updates.
const run = process.env.GITHUB_RUN_NUMBER;

// base "./": the build is served from the root of the Android WebView
// (https://appassets.androidplatform.net/) but stays relocatable.
export default defineConfig({
  base: "./",
  plugins: [react()],
  define: { __APP_VERSION__: JSON.stringify(run ? `0.1.${run}` : "dev") },
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
