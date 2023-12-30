import path from 'node:path';

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
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react-day-picker$': path.resolve(__dirname, './src/index.ts')
  },
  roots: ['./src', './examples/src'],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts'],
  fakeTimers: {
    enableGlobally: true
  }
};

export default config;
