process.env.TZ = process.env.TEST_TZ ?? "UTC";

console.log(`Running tests in ${process.env.TZ} timezone`);

import type { Config } from "@jest/types";

const sharedConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  fakeTimers: { enableGlobally: true },
  transform: {
    "^.+\\.tsx?$": [
      "@swc/jest",
      { jsc: { transform: { react: { runtime: "automatic" } } } },
    ],
    "^.+\\.css$": "jest-transform-css",
  },
};

const config: Config.InitialOptions = {
  coverageReporters: ["lcov", "text", "clover"],
  projects: [
    {
      ...sharedConfig,
      displayName: "src",
      roots: ["<rootDir>/src"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
    {
      ...sharedConfig,
      displayName: "examples",
      roots: ["<rootDir>/examples"],
      testPathIgnorePatterns: ["<rootDir>/examples/timezone/"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "react-day-picker/buddhist": ["<rootDir>/src/buddhist/index.tsx"],
        "react-day-picker/hebrew": ["<rootDir>/src/hebrew/index.tsx"],
        "react-day-picker/ethiopic": ["<rootDir>/src/ethiopic/index.tsx"],
        "react-day-picker/persian": ["<rootDir>/src/persian.tsx"],
        "react-day-picker": ["<rootDir>/src/index.ts"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
    {
      ...sharedConfig,
      setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
      displayName: "examples/timezone",
      roots: ["<rootDir>/examples/timezone"],
      fakeTimers: { enableGlobally: false }, // disable fake timers for timezone tests because they interfere with Intl API
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "react-day-picker": ["<rootDir>/src/index.ts"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
    {
      ...sharedConfig,
      displayName: "examples/built",
      roots: ["<rootDir>/examples"],
      testPathIgnorePatterns: ["<rootDir>/examples/timezone/"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "react-day-picker/buddhist": ["<rootDir>/dist/cjs/buddhist/index.js"],
        "react-day-picker/hebrew": ["<rootDir>/dist/cjs/hebrew/index.js"],
        "react-day-picker/ethiopic": ["<rootDir>/dist/cjs/ethiopic/index.js"],
        "react-day-picker/persian": ["<rootDir>/dist/cjs/persian.js"],
        "react-day-picker": ["<rootDir>/dist/cjs/index.js"],
        "../src": ["<rootDir>/dist/cjs"], // allow using same @/test/elements in both env
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
  ],
};

export default config;
