import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
      allowedHosts: ['2d2a-45-251-234-179.ngrok-free.app'], 
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  plugins: [react()],
})
