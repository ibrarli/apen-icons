import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Tell Vite the website files are in this directory
  root: path.resolve(__dirname), 
  plugins: [react()],
  resolve: {
    alias: {
      // Points to your library source
      '@': path.resolve(__dirname, '../src'),
    },
  },
  build: {
    // Ensure the output goes to website/dist
    outDir: '../website/dist',
    emptyOutDir: true,
  },
});