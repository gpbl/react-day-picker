import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./src/test/setup.ts']
};

export default config;
