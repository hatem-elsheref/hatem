import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages - change 'hatem-codes-showcase' to your repository name
  base: process.env.NODE_ENV === "production" ? "/hatem/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    // Only use componentTagger in development mode
    ...(mode === "development" ? [componentTagger()] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
