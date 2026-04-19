import process from "node:process";
import { pathToFileURL } from "node:url";

/**
 * @typedef {object} PublishValidationContext
 * @property {string} eventName
 * @property {string} packageVersion
 * @property {string} [releaseTag]
 * @property {boolean} [releaseIsPrerelease]
 * @property {string} [requestedReleaseTag]
 * @property {string} [repository]
 * @property {string} [token]
 */

/**
 * @typedef {object} GitHubRelease
 * @property {string} tag_name
 * @property {boolean} draft
 * @property {boolean} prerelease
 * @property {string | null} published_at
 */

/**
 * Creates a consistent validation error.
 *
 * @param {string} message - Human-readable validation failure message.
 * @returns {Error} A regular error that can be surfaced in tests or the CLI.
 */
export function createValidationError(message) {
  return new Error(message);
}

/**
 * Throws a validation error when a required environment variable is missing.
 *
 * @param {NodeJS.ProcessEnv} env - Environment variables to read from.
 * @param {string} name - Required environment variable name.
 * @returns {string} The environment variable value.
 */
export function requireEnv(env, name) {
  const value = env[name];
  if (!value) {
    throw createValidationError(
      `Missing required environment variable: ${name}`,
    );
  }
  return value;
}

/**
 * Reads the publish validation context from environment variables.
 *
 * @param {NodeJS.ProcessEnv} [env=process.env] - Environment variables provided
 *   by the runner. Default is `process.env`
 * @returns {PublishValidationContext} Normalized publish validation context.
 */
export function readPublishContext(env = process.env) {
  return {
    eventName: requireEnv(env, "EVENT_NAME"),
    packageVersion: requireEnv(env, "PACKAGE_VERSION"),
    releaseTag: env.RELEASE_TAG ?? "",
    releaseIsPrerelease: env.RELEASE_IS_PRERELEASE === "true",
    requestedReleaseTag: env.REQUESTED_RELEASE_TAG ?? "",
    repository: env.GITHUB_REPOSITORY ?? "",
    token: env.GITHUB_TOKEN ?? "",
  };
}

/**
 * Fetches GitHub Release metadata for a tag.
 *
 * @param {{ owner: string; repo: string; tag: string; token: string }} request
 *   - Release lookup request.
 *
 * @param {typeof fetch} [fetchImpl=fetch] - Fetch implementation used for the
 *   API request. Default is `fetch`
 * @returns {Promise<GitHubRelease>} The matching GitHub Release payload.
 */
export async function fetchReleaseByTag(request, fetchImpl = fetch) {
  const { owner, repo, tag, token } = request;
  const response = await fetchImpl(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!response.ok) {
    throw createValidationError(
      `GitHub Release ${tag} was not found or is not accessible (HTTP ${response.status}).`,
    );
  }

  return response.json();
}

/**
 * Validates that the current publish attempt is tied to an allowed release
 * source.
 *
 * @param {PublishValidationContext} context - Publish validation inputs.
 * @param {typeof fetchReleaseByTag} [releaseFetcher=fetchReleaseByTag] -
 *   Release lookup helper. Default is `fetchReleaseByTag`
 * @returns {Promise<void>} Resolves when the publish source is valid.
 */
export async function validateReleasePublishSource(
  context,
  releaseFetcher = fetchReleaseByTag,
) {
  const expectedTag = `v${context.packageVersion}`;
  const isNextVersion = context.packageVersion.includes("-next");

  if (context.eventName === "release") {
    if (context.releaseTag !== expectedTag) {
      throw createValidationError(
        `Release tag ${context.releaseTag} does not match package.json version ${context.packageVersion} (expected ${expectedTag}).`,
      );
    }

    if (isNextVersion && !context.releaseIsPrerelease) {
      throw createValidationError(
        `GitHub Release ${context.releaseTag} must be marked as a prerelease before publishing ${context.packageVersion}.`,
      );
    }

    return;
  }

  if (context.eventName !== "workflow_dispatch") {
    throw createValidationError(
      `Unsupported publish event: ${context.eventName}`,
    );
  }

  if (!context.requestedReleaseTag) {
    throw createValidationError(
      `Manual publish requires release_tag=${expectedTag}.`,
    );
  }

  if (context.requestedReleaseTag !== expectedTag) {
    throw createValidationError(
      `Manual publish requires release_tag=${expectedTag}, got ${context.requestedReleaseTag}.`,
    );
  }

  const repository = context.repository ?? "";
  const token = context.token ?? "";
  const [owner, repo] = repository.split("/");

  if (!owner || !repo) {
    throw createValidationError(
      `Invalid GITHUB_REPOSITORY value: ${repository}`,
    );
  }

  if (!token) {
    throw createValidationError(
      "Missing required environment variable: GITHUB_TOKEN",
    );
  }

  const release = await releaseFetcher({
    owner,
    repo,
    tag: context.requestedReleaseTag,
    token,
  });

  if (release.tag_name !== context.requestedReleaseTag) {
    throw createValidationError(
      `GitHub Release tag mismatch: expected ${context.requestedReleaseTag}, got ${release.tag_name}.`,
    );
  }

  if (release.draft || !release.published_at) {
    throw createValidationError(
      `GitHub Release ${context.requestedReleaseTag} must already be published before manual publish.`,
    );
  }

  if (isNextVersion && !release.prerelease) {
    throw createValidationError(
      `GitHub Release ${context.requestedReleaseTag} must be marked as a prerelease before publishing ${context.packageVersion}.`,
    );
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

/**
 * Runs the publish source validation as a CLI program.
 *
 * @returns {Promise<void>} Resolves when validation succeeds.
 */
export async function main() {
  const context = readPublishContext();
  await validateReleasePublishSource(context);
}

if (isEntrypoint()) {
  main().catch(function handleError(error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  });
}
