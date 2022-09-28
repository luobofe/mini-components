import path from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [Unocss(), preact()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
