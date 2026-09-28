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
    outDir: resolve(__dirname, "docs/dist"),
    emptyOutDir: true,
  },
});
