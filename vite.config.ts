import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, ManifestV3Export } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import topLevelAwait from "vite-plugin-top-level-await"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    react(),
    crx({ manifest: manifest as ManifestV3Export }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    target: 'es2022',
    minify: false,
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
    open: manifest.action.default_popup
  },
})
