import { readFileSync } from "node:fs";
import path from "node:path";

const repoRoot = new URL("../", import.meta.url);

const packagePaths = [
  "packages/react-day-picker/package.json",
  "packages/react/package.json",
  "packages/buddhist/package.json",
  "packages/ethiopic/package.json",
  "packages/hebrew/package.json",
  "packages/hijri/package.json",
  "packages/persian/package.json",
] as const;

function readPackageJson(packagePath: string): {
  version: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
} {
  const filePath = new URL(packagePath, repoRoot);
  return JSON.parse(readFileSync(filePath, "utf8")) as {
    version: string;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
  };
}

const rootVersion = readPackageJson(packagePaths[0]).version;
const reactPackageJson = readPackageJson(packagePaths[1]);

if (reactPackageJson.version !== rootVersion) {
  throw new Error(
    `Expected packages/react version ${rootVersion}, got ${reactPackageJson.version}.`,
  );
}

if (reactPackageJson.dependencies?.["react-day-picker"] !== rootVersion) {
  throw new Error(
    `Expected packages/react dependency react-day-picker=${rootVersion}, got ${reactPackageJson.dependencies?.["react-day-picker"]}.`,
  );
}

for (const packagePath of packagePaths.slice(2)) {
  const packageJson = readPackageJson(packagePath);
  if (packageJson.version !== rootVersion) {
    throw new Error(
      `Expected ${path.dirname(packagePath)} version ${rootVersion}, got ${packageJson.version}.`,
    );
  }

  if (packageJson.dependencies?.["@daypicker/react"] !== rootVersion) {
    throw new Error(
      `Expected ${path.dirname(packagePath)} dependency @daypicker/react=${rootVersion}, got ${packageJson.dependencies?.["@daypicker/react"]}.`,
    );
  }

  if (packageJson.peerDependencies?.["react-day-picker"]) {
    throw new Error(
      `Expected ${path.dirname(packagePath)} to depend on @daypicker/react instead of peering on react-day-picker.`,
    );
  }
}
