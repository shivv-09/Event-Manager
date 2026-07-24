import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Event-Manager/',
  plugins: [react(), tailwindcss()],
  base: '/Event-Manager/',
  server: {
    proxy: {
      // Proxy /mockapi to the mockapi.io clone to avoid CORS in development
      '/mockapi': {
        target: 'https://mockapi.io/clone/6a60576ab1933e9d25fd1439',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/mockapi/, ''),
      },
    },
  },
})
