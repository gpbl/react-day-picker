import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["./src", "./examples"],
  moduleNameMapper: {
    "@/test/(.*)": ["<rootDir>/test/$1"],
    "react-day-picker": ["<rootDir>/src/index.ts"],
    "react-day-picker/(.*)": ["<rootDir>/src/$1.js"],
    "^(\\.\\.?\\/.+)\\.jsx?$": "$1" // see https://github.com/kulshekhar/ts-jest/issues/1057
  },
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text", "clover"],
  setupFilesAfterEnv: ["./test/setup.ts"],
  fakeTimers: { enableGlobally: true },
  /**
   * Configuration for transforming source files before testing Uses @swc/jest
   * to quickly transform JavaScript/TypeScript files
   */
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    ]
  }
};

export default config;
