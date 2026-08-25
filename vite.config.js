import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Repositório é um "user/organization page" (buenodev.github.io),
// então o site é servido a partir da raiz do domínio.
export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
