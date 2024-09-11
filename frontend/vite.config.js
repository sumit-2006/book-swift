import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize dependencies that you want to exclude from the bundle
      external: ['react-router-dom'], // Add other external modules if necessary
    },
  },
})
