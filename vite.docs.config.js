import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "docs"),
  publicDir: resolve(__dirname, "docs/public"),
  resolve: {
    alias: {
      "@dmc/ui-v4": resolve(__dirname, "src/index.js"),
    },
  },
  server: {
    port: 5174,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    /** не очищать dist — там же лежат index.js и dmc-v4.css после library build */
    emptyOutDir: false,
  },
  preview: {
    port: 5174,
  },
});
