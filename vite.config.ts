import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  // base path cho GitHub Pages
  base: '/agent-lab-typescript/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },

  server: {
    port: 5173
  },

  preview: {
    port: 4173
  }
})
