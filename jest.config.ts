import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  roots: ["./src", "./examples"],
  moduleNameMapper: {
    "@/test/(.*)": ["<rootDir>/test/$1"],
    "react-day-picker": ["<rootDir>/src/index.ts"],
    "react-day-picker/(.*)": ["<rootDir>/src/$1"]
  },
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text", "clover"],
  setupFilesAfterEnv: ["./test/setup.ts"],
  fakeTimers: { enableGlobally: true }
};

export default config;
