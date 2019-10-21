module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'node'],
  coverageReporters: ['lcov', 'text', 'clover'],
};
