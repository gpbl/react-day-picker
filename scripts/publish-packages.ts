import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import process from "node:process";
import { pathToFileURL } from "node:url";

const repoRoot = new URL("../", import.meta.url);
const distTagVerificationAttempts = 12;
const distTagVerificationDelayMs = 5_000;

export const publishablePackageDirs = [
  "packages/react-day-picker",
  "packages/react",
  "packages/buddhist",
  "packages/ethiopic",
  "packages/hebrew",
  "packages/hijri",
  "packages/persian",
] as const;

export function readPackageInfo(packageDir: string): {
  name: string;
  version: string;
} {
  const packageJsonPath = new URL(`${packageDir}/package.json`, repoRoot);
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
    name: string;
    version: string;
  };
  return {
    name: packageJson.name,
    version: packageJson.version,
  };
}

function isPackageVersionMissingError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  const npmError = error as Error & {
    status?: number;
    stderr?: unknown;
    stdout?: unknown;
  };
  const output = [error.message, npmError.stderr, npmError.stdout]
    .filter(Boolean)
    .map(String)
    .join("\n");

  return (
    npmError.status === 1 &&
    (output.includes("E404") ||
      output.includes("404 Not Found") ||
      output.includes("No matching version found"))
  );
}

function isPackageVersionPublished(packageInfo: {
  name: string;
  version: string;
}): boolean {
  try {
    execFileSync(
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

function readPackageVersionFromDistTag(
  packageInfo: {
    name: string;
    version: string;
  },
  tag: string,
): string | undefined {
  try {
    return String(
      execFileSync("npm", ["view", `${packageInfo.name}@${tag}`, "version"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      }),
    ).trim();
  } catch (error) {
    if (isPackageVersionMissingError(error)) {
      return undefined;
    }
    throw error;
  }
}

async function waitForDistTagVerificationRetry(): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, distTagVerificationDelayMs);
  });
}

async function readPackageVersionFromDistTagWithRetry(
  packageInfo: {
    name: string;
    version: string;
  },
  tag: string,
): Promise<string | undefined> {
  let taggedVersion: string | undefined;

  for (let attempt = 1; attempt <= distTagVerificationAttempts; attempt++) {
    taggedVersion = readPackageVersionFromDistTag(packageInfo, tag);
    if (taggedVersion === packageInfo.version) {
      return taggedVersion;
    }

    if (attempt < distTagVerificationAttempts) {
      await waitForDistTagVerificationRetry();
    }
  }

  return taggedVersion;
}

export function getUnpublishedPackages(): Array<{
  packageDir: string;
  packageInfo: {
    name: string;
    version: string;
  };
}> {
  return publishablePackageDirs.flatMap((packageDir) => {
    const packageInfo = readPackageInfo(packageDir);
    return isPackageVersionPublished(packageInfo)
      ? []
      : [{ packageDir, packageInfo }];
  });
}

export async function verifyPackageDistTags(tag: string): Promise<void> {
  if (!tag) {
    throw new Error("Usage: verifyPackageDistTags <npm-tag>");
  }

  for (const packageDir of publishablePackageDirs) {
    const packageInfo = readPackageInfo(packageDir);
    const taggedVersion = await readPackageVersionFromDistTagWithRetry(
      packageInfo,
      tag,
    );
    if (taggedVersion === packageInfo.version) {
      continue;
    }

    const actualVersion = taggedVersion ?? "no published version";
    throw new Error(
      `Expected npm dist-tag ${tag} for ${packageInfo.name} to point to ${packageInfo.version}, got ${actualVersion}. Trusted publishing only authenticates npm publish, so repair the tag manually with: npm dist-tag add ${packageInfo.name}@${packageInfo.version} ${tag}`,
    );
  }
}

export function publishPackages(tag: string): void {
  if (!tag) {
    throw new Error("Usage: publish-packages <npm-tag>");
  }

  for (const packageDir of publishablePackageDirs) {
    const packageInfo = readPackageInfo(packageDir);
    if (isPackageVersionPublished(packageInfo)) {
      console.log(
        `Skipping ${packageInfo.name}@${packageInfo.version}; already published.`,
      );
      continue;
    }

    const publishArgs = ["publish", "--provenance", "--tag", tag];
    if (packageInfo.name.startsWith("@")) {
      publishArgs.push("--access", "public");
    }

    execFileSync("npm", publishArgs, {
      cwd: new URL(`../${packageDir}`, import.meta.url),
      stdio: "inherit",
    });
  }
}

function main(): void {
  publishPackages(process.argv[2] || "");
}

const scriptPath = process.argv[1];
if (scriptPath && import.meta.url === pathToFileURL(scriptPath).href) {
  try {
    main();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}
