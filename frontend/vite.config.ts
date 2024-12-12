import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia esto al puerto que desees
    proxy: {
      '/api': 'http://localhost:5000', // Proxy para tu backend
    }
  }
})