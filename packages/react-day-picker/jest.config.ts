import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^test/(.*)': ['<rootDir>/test/$1'],
    '^components(.*)': ['<rootDir>/src/components$1'],
    '^contexts(.*)': ['<rootDir>/src/contexts$1'],
    '^hooks(.*)': ['<rootDir>/src/hooks$1'],
    '^types(.*)': ['<rootDir>/src/types$1']
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts']
};

export default config;
