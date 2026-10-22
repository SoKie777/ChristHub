import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./": the build is served from the root of the Android WebView
// (https://appassets.androidplatform.net/) but stays relocatable.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
