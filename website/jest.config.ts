import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['./test-integration'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>'
    }),
    '\\.css$': 'identity-obj-proxy',
    '@generated/(.*)': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./test/setup.ts']
};

export default config;
