import { buildReleaseBody } from "./release-notes";

const githubApiVersion = "2022-11-28";
const transientGitHubRequestAttempts = 3;

function isTransientFetchError(error: unknown): boolean {
  return (
    error instanceof Error &&
    /fetch failed|network|timed out/i.test(error.message)
  );
}

async function waitForRetry(attempt: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, attempt * 500);
  });
}

function formatGitHubErrorMessage(
  action: string,
  tag: string,
  status: number,
  body: string,
): string {
  const permissionHint =
    status === 403
      ? " GitHub denied creating the release or tag. Check whether repository rulesets or tag protections allow GitHub Actions to create v* tags/releases."
      : "";
  const details = body.trim();
  if (!details) {
    return `Could not ${action} GitHub Release ${tag} (HTTP ${status}).${permissionHint}`;
  }

  return `Could not ${action} GitHub Release ${tag} (HTTP ${status}): ${details}${permissionHint}`;
}

async function fetchGitHub(
  input: string,
  init: RequestInit,
): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= transientGitHubRequestAttempts; attempt++) {
    try {
      return await fetch(input, init);
    } catch (error) {
      lastError = error;
      if (
        !isTransientFetchError(error) ||
        attempt === transientGitHubRequestAttempts
      ) {
        break;
      }
      await waitForRetry(attempt);
    }
  }

  if (lastError instanceof Error) {
    throw new Error(lastError.message);
  }
  throw lastError;
}

/**
 * Reads the GitHub Release for the version tag if it already exists.
 */
async function fetchReleaseByTag(request: {
  owner: string;
  repo: string;
  tag: string;
  token: string;
}): Promise<{
  html_url: string;
}> {
  const { owner, repo, tag, token } = request;
  const response = await fetchGitHub(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        // Pin the REST API version so release automation does not drift with
        // GitHub's default behavior over time.
        "X-GitHub-Api-Version": githubApiVersion,
      },
    },
  );
  const responseBody =
    response.ok || response.status === 404 ? "" : await response.text();

  if (response.status === 404) {
    throw Object.assign(new Error(`GitHub Release ${tag} was not found.`), {
      status: 404,
    });
  }

  if (!response.ok) {
    throw new Error(
      formatGitHubErrorMessage("read", tag, response.status, responseBody),
    );
  }

  return response.json() as Promise<{
    html_url: string;
  }>;
}

/**
 * Creates the repo-level GitHub Release after npm publish succeeds.
 */
async function createRelease(request: {
  owner: string;
  repo: string;
  tag: string;
  token: string;
  commitSha: string;
  prerelease: boolean;
  body: string;
}): Promise<{
  html_url: string;
}> {
  const { owner, repo, tag, token, commitSha, prerelease, body } = request;
  const response = await fetchGitHub(
    `https://api.github.com/repos/${owner}/${repo}/releases`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        // Pin the REST API version so release automation does not drift with
        // GitHub's default behavior over time.
        "X-GitHub-Api-Version": githubApiVersion,
      },
      body: JSON.stringify({
        tag_name: tag,
        target_commitish: commitSha,
        name: tag,
        body,
        draft: false,
        prerelease,
      }),
    },
  );
  const responseBody = response.ok ? "" : await response.text();

  if (!response.ok) {
    throw new Error(
      formatGitHubErrorMessage("create", tag, response.status, responseBody),
    );
  }

  return response.json() as Promise<{
    html_url: string;
  }>;
}

/**
 * Ensures the repo has a single GitHub Release for the published version.
 *
 * The helper is intentionally idempotent so reruns can recover from a partial
 * publish where npm succeeded but GitHub Release creation did not.
 */
export async function createGitHubRelease(context: {
  repository: string;
  token: string;
  commitSha: string;
  packageVersion: string;
}): Promise<{
  created: boolean;
  release: {
    html_url: string;
  };
  tag: string;
}> {
  const [owner, repo] = context.repository.split("/");
  if (!owner || !repo) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${context.repository}`);
  }

  const tag = `v${context.packageVersion}`;
  const isPrereleaseVersion = context.packageVersion.includes("-next");

  try {
    const existingRelease = await fetchReleaseByTag({
      owner,
      repo,
      tag,
      token: context.token,
    });
    return { created: false, release: existingRelease, tag };
  } catch (error) {
    if (
      !(error instanceof Error && "status" in error && error.status === 404)
    ) {
      throw error;
    }
  }

  const createdRelease = await createRelease({
    owner,
    repo,
    tag,
    token: context.token,
    commitSha: context.commitSha,
    prerelease: isPrereleaseVersion,
    body: buildReleaseBody(context.packageVersion),
  });

  return { created: true, release: createdRelease, tag };
}
