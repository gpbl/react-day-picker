import { Config } from '@jest/types';
import path from 'node:path';

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
  roots: ['./src', './examples'],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts'],
  fakeTimers: {
    enableGlobally: true
  }
};

export default config;
