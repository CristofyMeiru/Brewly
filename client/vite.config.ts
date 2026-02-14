// vite.config.ts
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      indexToken: "page",
      routeFilePrefix: "@",
      routeToken: /layout$/i,
    }),
    react(),
  ],
});
