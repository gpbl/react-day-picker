import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  roots: ["./src"],
  moduleNameMapper: {
    "@/test/(.*)": ["<rootDir>/test/$1"]
  },
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text", "clover"],
  setupFilesAfterEnv: ["./test/setup.ts"]
};

export default config;
