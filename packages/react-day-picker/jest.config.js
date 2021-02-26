export default {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'node'],
  coverageReporters: ['lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['./jest.setup.ts']
};
