import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import process from "node:process";
import { pathToFileURL } from "node:url";

const repoRoot = new URL("../", import.meta.url);

export const packageDirs = [
  "packages/react-day-picker",
  "packages/buddhist",
  "packages/ethiopic",
  "packages/hebrew",
  "packages/hijri",
  "packages/persian",
];

/**
 * @typedef {object} PackageInfo
 * @property {string} name - Package name from package.json.
 * @property {string} version - Package version from package.json.
 */

/**
 * Reads the package name and version for a workspace package.
 *
 * @param {string} packageDir - Package directory relative to the repo root.
 * @param {typeof readFileSync} [readFile=readFileSync] - File reader. Default
 *   is `readFileSync`
 * @returns {PackageInfo} Package metadata needed for npm publication.
 */
export function readPackageInfo(packageDir, readFile = readFileSync) {
  const packageJsonPath = new URL(`${packageDir}/package.json`, repoRoot);
  const packageJson = JSON.parse(readFile(packageJsonPath, "utf8"));
  return {
    name: packageJson.name,
    version: packageJson.version,
  };
}

/**
 * Returns whether an npm view failure means the exact package version is
 * absent.
 *
 * @param {unknown} error - Error thrown by npm view.
 * @returns {boolean} True for npm not-found errors.
 */
export function isPackageVersionMissingError(error) {
  if (!(error instanceof Error)) {
    return false;
  }

  const { status, stderr, stdout } = /**
   * @type {Error & {
   *   status?: number;
   *   stderr?: unknown;
   *   stdout?: unknown;
   * }}
   */ (error);
  const output = [error.message, stderr, stdout]
    .filter(Boolean)
    .map(String)
    .join("\n");

  return (
    status === 1 &&
    (output.includes("E404") ||
      output.includes("404 Not Found") ||
      output.includes("No matching version found"))
  );
}

/**
 * Checks whether a package version already exists in the npm registry.
 *
 * @param {PackageInfo} packageInfo - Package name and version to check.
 * @param {typeof execFileSync} [execFile=execFileSync] - Command runner.
 *   Default is `execFileSync`
 * @returns {boolean} True when npm already has the package version.
 */
export function isPackageVersionPublished(
  packageInfo,
  execFile = execFileSync,
) {
  try {
    execFile(
      "npm",
      ["view", `${packageInfo.name}@${packageInfo.version}`, "version"],
      {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    return true;
  } catch (error) {
    if (isPackageVersionMissingError(error)) {
      return false;
    }
    throw error;
  }
}

/**
 * Publishes a package directory to npm.
 *
 * @param {string} packageDir - Package directory relative to the repo root.
 * @param {PackageInfo} packageInfo - Package name and version being published.
 * @param {string} tag - Npm dist-tag to publish under.
 * @param {typeof execFileSync} [execFile=execFileSync] - Command runner.
 *   Default is `execFileSync`
 * @returns {void}
 */
export function publishPackage(
  packageDir,
  packageInfo,
  tag,
  execFile = execFileSync,
) {
  const publishArgs = ["publish", "--provenance", "--tag", tag];
  if (packageInfo.name.startsWith("@")) {
    publishArgs.push("--access", "public");
  }

  execFile("npm", publishArgs, {
    cwd: new URL(`../${packageDir}`, import.meta.url),
    stdio: "inherit",
  });
}

/**
 * Publishes all missing package versions and skips versions already on npm.
 *
 * @param {string} tag - Npm dist-tag to publish under.
 * @param {object} [options] - Test hooks and package list override.
 * @param {string[]} [options.packages=packageDirs] - Package directories.
 *   Default is `packageDirs`
 * @param {typeof execFileSync} [options.execFile=execFileSync] - Command
 *   runner. Default is `execFileSync`
 * @param {typeof readPackageInfo} [options.readPackage=readPackageInfo] -
 *   Package metadata reader. Default is `readPackageInfo`
 * @returns {void}
 */
export function publishPackages(tag, options = {}) {
  if (!tag) {
    throw new Error("Usage: node ./scripts/publish-packages.mjs <npm-tag>");
  }

  const {
    packages = packageDirs,
    execFile = execFileSync,
    readPackage = readPackageInfo,
  } = options;

  for (const packageDir of packages) {
    const packageInfo = readPackage(packageDir);
    if (isPackageVersionPublished(packageInfo, execFile)) {
      console.log(
        `Skipping ${packageInfo.name}@${packageInfo.version}; already published.`,
      );
      continue;
    }

    publishPackage(packageDir, packageInfo, tag, execFile);
  }
}

/**
 * Returns whether this module is being executed directly by Node.js.
 *
 * @returns {boolean} True when the file is the active CLI entrypoint.
 */
export function isEntrypoint() {
  const scriptPath = process.argv[1];
  if (!scriptPath) {
    return false;
  }
  return import.meta.url === pathToFileURL(scriptPath).href;
}

if (isEntrypoint()) {
  try {
    publishPackages(process.argv[2]);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}
