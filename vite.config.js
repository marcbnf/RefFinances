import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // REMPLACEZ 'RefFinances' par le nom EXACT du repo GitHub
  base: '/RefFinances/', 
})