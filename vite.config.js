/** @type {import('vite').UserConfig} */
import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  server: {
    open: "main.html",
  },
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        home: './src/index.html',
        survey: './src/survey.html',
        perfil: './src/perfil.html',
        article: './src/article.html',

        // ...
        // List all files you want in your build
      }
    }
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
  base : "https://coderagnarok07.github.io/BZ-2easy/"
});