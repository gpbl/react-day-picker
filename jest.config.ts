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
    '\\.css$': 'identity-obj-proxy',
    '^react-day-picker$':
      process.env.TEST_ENV === 'build'
        ? '<rootDir>/dist/index.cjs'
        : '<rootDir>/src/index.ts',
    '^@/test/(.*)$': '<rootDir>/test/$1'
  },
  roots: ['./src', './website/app/examples'],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts'],
  fakeTimers: {
    enableGlobally: true
  }
};

export default config;
