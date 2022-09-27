import path from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
