import type { Config } from "@jest/types";

const sharedConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  fakeTimers: { enableGlobally: true },
  transform: {
    "^.+\\.tsx?$": [
      "@swc/jest",
      { jsc: { transform: { react: { runtime: "automatic" } } } }
    ],
    "^.+\\.css$": "jest-transform-css"
  }
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
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1" // see https://github.com/kulshekhar/ts-jest/issues/1057
      }
    },
    {
      ...sharedConfig,
      displayName: "examples",
      roots: ["<rootDir>/examples"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "react-day-picker/jalali": ["<rootDir>/src/jalali.tsx"],
        "react-day-picker": ["<rootDir>/src/index.ts"],
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1" // see https://github.com/kulshekhar/ts-jest/issues/1057
      }
    },
    {
      ...sharedConfig,
      displayName: "examples/built",
      roots: ["<rootDir>/examples"],
      moduleNameMapper: {
        "@/test/(.*)": ["<rootDir>/test/$1"],
        "react-day-picker/jalali": ["<rootDir>/dist/cjs/jalali.js"],
        "react-day-picker": ["<rootDir>/dist/cjs/index.js"],
        "../src": ["<rootDir>/dist/cjs"], // allow using same @/test/elements in both env
        "^(\\.\\.?\\/.+)\\.jsx?$": "$1" // see https://github.com/kulshekhar/ts-jest/issues/1057
      }
    }
  ]
};

export default config;
