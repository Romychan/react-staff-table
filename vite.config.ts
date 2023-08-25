/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@modules': '/src/modules',
      '@ui': '/src/ui',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
      '@contexts': '/src/contexts',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@router': '/src/router',
      '@tests': '/src/tests',
      '@interfaces': '/src/interfaces',
    },
  },
});
