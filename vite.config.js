import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Static asset handling
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.webp", "**/*.gif"],

  // Build optimization (SAFE version)
  build: {
    chunkSizeWarningLimit: 1500,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },

  // Dependency pre-bundling
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
    ],
  },
});