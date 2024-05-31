import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  roots: ["./src"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        "ts-jest": {
          tsconfig: "./tsconfig.test.json"
        }
      }
    ]
  },
  moduleNameMapper: {
    "@/test": ["<rootDir>/test"],
    "\\.css$": "identity-obj-proxy",
    "react-day-picker/style.module.css": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text", "clover"],
  setupFilesAfterEnv: ["./test/setup.ts", "./test-v8/setup.ts"]
};

export default config;
