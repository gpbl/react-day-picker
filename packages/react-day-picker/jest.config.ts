export default {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^test$': '<rootDir>/src/test',
    '^types$': '<rootDir>/src/types',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks(.*)': '<rootDir>/src/hooks$1',
    '^contexts(.*)': '<rootDir>/src/contexts$1'
  },
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./src/test/setup.ts']
};
