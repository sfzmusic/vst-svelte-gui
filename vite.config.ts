import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: './electron/dist', // So Electron can load it
  },
  server: {
    port: 5173,
  }
});