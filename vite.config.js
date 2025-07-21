import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000, // You can change the port if needed
  },

  base: '/s107/' // Set the base path to match the repository name
})