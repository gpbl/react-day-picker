import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['./src', './examples'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@site/(.*)': '<rootDir>/$1'
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./src/test/setup.ts']
};

export default config;
