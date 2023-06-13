import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: { port: 4040 },
  build: { target: 'esnext' },
  publicDir: 'public',
})
