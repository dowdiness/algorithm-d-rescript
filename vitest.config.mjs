import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    deps: {
      optimizer: {
        ssr: {
          inline: true,
        }
      }
    },
  },
});
