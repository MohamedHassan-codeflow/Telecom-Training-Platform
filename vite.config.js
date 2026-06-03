import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite keeps the project fast during development and creates an optimized production build.
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});
