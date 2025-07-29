// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ▼▼▼ ESTA ES LA LÍNEA CRÍTICA ▼▼▼
  base: '/01-iush-simu-RV/', 
})