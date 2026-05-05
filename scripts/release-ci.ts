import { execFileSync } from "node:child_process";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { createGitHubRelease } from "./create-github-release";
import {
  getUnpublishedPackages,
  publishPackages,
  readPackageInfo,
  verifyPackageDistTags,
} from "./publish-packages";
import { shouldPublishRelease } from "./should-publish-release";

const repoRoot = new URL("../", import.meta.url);
const mainPackageDir = "packages/react-day-picker";
const expectedReleasePrBranch = "changeset-release/main";
const expectedReleaseBaseBranch = "main";

// Keep the release workflow's validations in one ordered list so the publish
// path runs the same checks locally and in GitHub Actions.
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

/**
 * Runs the repo's release automation after Changesets marks a merge as
 * publishable.
 *
 * The flow is:
 *
 * 1. Verify that the current commit came from the merged release PR
 * 2. Publish any package versions that are still missing on npm
 * 3. Ensure the repo-level GitHub Release exists for that version
 */
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

  const commitSha =
    process.env.RELEASE_COMMIT_SHA ??
    String(
      execFileSync("git", ["rev-parse", "HEAD"], {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      }),
    ).trim();
  const packageInfo = readPackageInfo(mainPackageDir);

  const isReleaseCommit = await shouldPublishRelease({
    repository,
    token,
    commitSha,
    expectedHeadBranch: expectedReleasePrBranch,
    expectedBaseBranch: expectedReleaseBaseBranch,
  });

  if (!isReleaseCommit) {
    console.log(
      "This commit did not come from the merged Changesets release PR. Skipping release automation.",
    );
    return {
      shouldPublish: false,
      publishedPackages: false,
      releaseCreated: false,
    };
  }

  const unpublishedPackageVersions = getUnpublishedPackages();
  const npmTag = packageInfo.version.includes("-next") ? "next" : "latest";
  let publishedPackages = false;

  if (unpublishedPackageVersions.length > 0) {
    for (const commandArgs of validationCommands) {
      execFileSync("pnpm", [...commandArgs], {
        cwd: repoRoot,
        stdio: "inherit",
      });
    }

    console.log(`Publishing ${packageInfo.version} with dist-tag ${npmTag}.`);
    publishPackages(npmTag);
    verifyPackageDistTags(npmTag);
    publishedPackages = true;
  } else {
    console.log("All publishable package versions are already on npm.");
    // Recovery may backfill an older GitHub Release after latest/next has
    // legitimately moved to a newer published version.
  }

  // Recovery runs are idempotent, but GitHub may reject backfilling a missing
  // release for an older target commit with GITHUB_TOKEN even when the normal
  // publish path on the current release commit works.
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

/** CLI entrypoint used by the release workflow and manual recovery runs. */
async function main(): Promise<void> {
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
