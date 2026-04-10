import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import cors from "cors";
//const app = express();
export default defineConfig({
  // Core plugins
  plugins: [react()],

  // Static asset handling
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.webp", "**/*.gif"], // Explicitly include all image types

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, './ssl/coelate.com.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, './ssl/coelate.com.crt')),
  //   },
  // },

  // Build optimization
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            // Split heavy libraries
            if (id.includes("react-icons") || id.includes("lucide")) {
              return "icons"; // All icons in one bundle
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor"; // React core
            }
            if (id.includes("gsap")) {
              return "animations"; // GSAP separate chunk
            }
            return "libs"; // Other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Allow larger chunks (default: 500KB)
    minify: "terser", // Advanced minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        // pure_funcs: ['console.info'], // Optional: keep only specific logs
      },
    },
  },

  // Dependency pre-bundling
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom", // Add other frequently used deps
    ],
    // exclude: ['gsap'], // Let GSAP be dynamically chunked
  },
});
