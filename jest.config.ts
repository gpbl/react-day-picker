import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^react-day-picker$":
      process.env.TEST_ENV === "build"
        ? "<rootDir>/dist/cjs/index.js"
        : "<rootDir>/src/index.ts",
    "^@/test/(.*)$": "<rootDir>/test/$1",
    "^react-day-picker/style.module.css$": "react-day-picker/style.css",
  },
  roots: ["./src", "./website/examples"],
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text", "clover"],
  setupFilesAfterEnv: ["./test/setup.ts"],
  fakeTimers: {
    enableGlobally: true,
  },
};

export default config;
