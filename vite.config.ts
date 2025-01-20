import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/purchase-list/"
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts'
  },
});
