import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  moduleNameMapper: {
    'react-day-picker': '<rootDir>/src',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  roots: ['./src', './docs/examples-tests'],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts']
};

export default config;
