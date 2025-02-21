import { defineConfig } from 'vite'
import rescript from '@jihchi/vite-plugin-rescript';

export default defineConfig({
  plugins: [rescript()],
  build: {
    lib: {
      entry: 'src/Index.res',
      name: 'AlgorithmD',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  test: {
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'node'
  }
})
