import { execFileSync } from "node:child_process";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { createGitHubRelease } from "./create-github-release";
import {
  getUnpublishedPackages,
  publishPackages,
  readPackageInfo,
} from "./publish-packages";
import { shouldPublishRelease } from "./should-publish-release";

const repoRoot = new URL("../", import.meta.url);
const mainPackageDir = "packages/react-day-picker";

const validationCommands = [
  ["typecheck"],
  ["lint", "ci", ".", "--reporter=github"],
  ["test"],
  ["test:tz"],
  ["build"],
  ["check:versions"],
  ["pack:dry-run"],
  ["test:build"],
] as const;

export async function releaseCi(): Promise<{
  shouldPublish: boolean;
  publishedPackages: boolean;
  releaseCreated: boolean;
}> {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;
  if (!repository) {
    throw new Error("Missing required environment variable: GITHUB_REPOSITORY");
  }
  if (!token) {
    throw new Error("Missing required environment variable: GITHUB_TOKEN");
  }

  const commitSha = String(
    execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }),
  ).trim();
  const packageInfo = readPackageInfo(mainPackageDir);

  const publishAllowed = await shouldPublishRelease({
    repository,
    token,
    commitSha,
    expectedHeadBranch:
      process.env.EXPECTED_PR_BRANCH || "changesets-release/main",
    expectedAuthor: process.env.EXPECTED_PR_AUTHOR || "github-actions[bot]",
    expectedBaseBranch: process.env.EXPECTED_BASE_BRANCH || "main",
  });

  if (!publishAllowed) {
    console.log(
      "This commit did not come from the merged Changesets release PR. Skipping release automation.",
    );
    return {
      shouldPublish: false,
      publishedPackages: false,
      releaseCreated: false,
    };
  }

  const unpublishedPackages = getUnpublishedPackages();
  let publishedPackages = false;

  if (unpublishedPackages.length > 0) {
    for (const commandArgs of validationCommands) {
      execFileSync("pnpm", [...commandArgs], {
        cwd: repoRoot,
        stdio: "inherit",
      });
    }

    const npmTag = packageInfo.version.includes("-next") ? "next" : "latest";
    console.log(`Publishing ${packageInfo.version} with dist-tag ${npmTag}.`);
    publishPackages(npmTag);
    publishedPackages = true;
  } else {
    console.log("All publishable package versions are already on npm.");
  }

  const releaseResult = await createGitHubRelease({
    repository,
    token,
    commitSha,
    packageVersion: packageInfo.version,
  });

  return {
    shouldPublish: true,
    publishedPackages,
    releaseCreated: releaseResult.created,
  };
}

export async function main(): Promise<void> {
  const result = await releaseCi();
  if (!result.shouldPublish) {
    return;
  }

  if (result.publishedPackages) {
    console.log("Published package versions to npm.");
  }

  if (result.releaseCreated) {
    console.log("Created the repo GitHub Release.");
  } else {
    console.log("The repo GitHub Release already exists.");
  }
}

const scriptPath = process.argv[1];
if (scriptPath && import.meta.url === pathToFileURL(scriptPath).href) {
  main().catch((error: unknown) => {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  });
}
