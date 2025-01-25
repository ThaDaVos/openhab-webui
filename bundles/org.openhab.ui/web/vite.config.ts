import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import plugins from './.vite'

// https://vite.dev/config/
export default defineConfig((config) => {
  return {
    plugins: plugins(config),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $: fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    build: {
      outDir: fileURLToPath(new URL('./www', import.meta.url)),
      emptyOutDir: true,
    },
  }
})
