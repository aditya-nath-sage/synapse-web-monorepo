import { vitestConfig } from 'vite-config'
import { mergeConfig } from 'vitest/config'

export default mergeConfig(vitestConfig, {
  envDir: './src/config',
  test: {
    include: ['src/tests/**/*.test.[jt]s?(x)'],
    setupFiles: ['src/tests/setupTests.ts'],
    environment: 'jsdom', // introduced due to random "ReferenceError: window is not defined" during tests
  },
})
