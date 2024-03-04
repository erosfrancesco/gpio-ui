import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: [
      { find: 'interfaces', replacement: fileURLToPath(new URL('./src/interfaces', import.meta.url)) },
    ],
  },
})
