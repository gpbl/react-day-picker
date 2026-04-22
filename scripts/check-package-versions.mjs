import { readFileSync } from "node:fs";
import path from "node:path";

const repoRoot = new URL("../", import.meta.url);

const packagePaths = [
  "packages/react-day-picker/package.json",
  "packages/buddhist/package.json",
  "packages/ethiopic/package.json",
  "packages/hebrew/package.json",
  "packages/hijri/package.json",
  "packages/persian/package.json",
];

function readPackageJson(packagePath) {
  const filePath = new URL(packagePath, repoRoot);
  return JSON.parse(readFileSync(filePath, "utf8"));
}

const rootVersion = readPackageJson(
  "packages/react-day-picker/package.json",
).version;

for (const packagePath of packagePaths.slice(1)) {
  const packageJson = readPackageJson(packagePath);
  if (packageJson.version !== rootVersion) {
    throw new Error(
      `Expected ${path.dirname(packagePath)} version ${rootVersion}, got ${packageJson.version}.`,
    );
  }
  if (packageJson.peerDependencies?.["react-day-picker"] !== rootVersion) {
    throw new Error(
      `Expected ${path.dirname(packagePath)} peer dependency react-day-picker=${rootVersion}, got ${packageJson.peerDependencies?.["react-day-picker"]}.`,
    );
  }
}
