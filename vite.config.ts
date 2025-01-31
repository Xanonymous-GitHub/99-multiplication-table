import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [createHtmlPlugin()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 50000,
    minify: true,
    cssMinify: true,
    sourcemap: false,
    // The assets dir name should be as same as the GitHub repository name,
    // since we are deploying the site to GitHub Pages.
    assetsDir: "99-multiplication-table",
  },
  esbuild: {
    legalComments: "none",
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    platform: "browser",
    include: "./src/**/*.{js,ts,jsx,tsx,css,json,text,base64,dataurl,file,binary}",
  },
});
