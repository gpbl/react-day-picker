if (process.env.TZ) {
  console.log(`Running tests in ${process.env.TZ} timezone`);
}

import type { Config } from "@jest/types";

const sharedConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  transform: {
    "^.+\\.[mc]?[jt]sx?$": [
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
        "react-day-picker/locale/(.*)\\.js": ["<rootDir>/src/locale/$1.ts"],
        "react-day-picker/locale/(.*)": ["<rootDir>/src/locale/$1"],
        "react-day-picker/locale": ["<rootDir>/src/locale.ts"],
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
        "@daypicker/buddhist": ["<rootDir>/packages/buddhist/src/index.tsx"],
        "@daypicker/ethiopic": ["<rootDir>/packages/ethiopic/src/index.tsx"],
        "@daypicker/hebrew": ["<rootDir>/packages/hebrew/src/index.tsx"],
        "@daypicker/hijri": ["<rootDir>/packages/hijri/src/index.tsx"],
        "@daypicker/persian": ["<rootDir>/packages/persian/src/index.tsx"],
        "react-day-picker/locale/(.*)\\.js": ["<rootDir>/src/locale/$1.ts"],
        "react-day-picker/locale/(.*)": ["<rootDir>/src/locale/$1"],
        "react-day-picker/locale": ["<rootDir>/src/locale.ts"],
        "react-day-picker": ["<rootDir>/src/index.ts"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
    {
      ...sharedConfig,
      displayName: "packages",
      roots: ["<rootDir>/packages"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "@daypicker/buddhist": ["<rootDir>/packages/buddhist/src/index.tsx"],
        "@daypicker/ethiopic": ["<rootDir>/packages/ethiopic/src/index.tsx"],
        "@daypicker/hebrew": ["<rootDir>/packages/hebrew/src/index.tsx"],
        "@daypicker/hijri": ["<rootDir>/packages/hijri/src/index.tsx"],
        "@daypicker/persian": ["<rootDir>/packages/persian/src/index.tsx"],
        "react-day-picker/locale/(.*)\\.js": ["<rootDir>/src/locale/$1.ts"],
        "react-day-picker/locale/(.*)": ["<rootDir>/src/locale/$1"],
        "react-day-picker/locale": ["<rootDir>/src/locale.ts"],
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
        "react-day-picker/locale/(.*)\\.js": ["<rootDir>/src/locale/$1.ts"],
        "react-day-picker/locale/(.*)": ["<rootDir>/src/locale/$1"],
        "react-day-picker/locale": ["<rootDir>/src/locale.ts"],
        "react-day-picker": ["<rootDir>/src/index.ts"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
    {
      ...sharedConfig,
      displayName: "scripts",
      testEnvironment: "node",
      setupFilesAfterEnv: [],
      roots: ["<rootDir>/scripts"],
      moduleNameMapper: {
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
        "@daypicker/buddhist": [
          "<rootDir>/packages/buddhist/dist/cjs/index.js",
        ],
        "@daypicker/ethiopic": [
          "<rootDir>/packages/ethiopic/dist/cjs/index.js",
        ],
        "@daypicker/hebrew": ["<rootDir>/packages/hebrew/dist/cjs/index.js"],
        "@daypicker/hijri": ["<rootDir>/packages/hijri/dist/cjs/index.js"],
        "@daypicker/persian": ["<rootDir>/packages/persian/dist/cjs/index.js"],
        "react-day-picker/locale/(.*)\\.js": [
          "<rootDir>/dist/cjs/locale/$1.js",
        ],
        "react-day-picker/locale/(.*)": ["<rootDir>/dist/cjs/locale/$1"],
        "react-day-picker/locale": ["<rootDir>/dist/cjs/locale.js"],
        "react-day-picker": ["<rootDir>/dist/cjs/index.js"],
        "../src": ["<rootDir>/dist/cjs"], // allow using same @/test/elements in both env
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1", // see https://github.com/kulshekhar/ts-jest/issues/1057
      },
    },
  ],
};

export default config;
