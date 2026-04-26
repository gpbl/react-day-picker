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
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        // Pin the REST API version so release automation does not drift with
        // GitHub's default behavior over time.
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (response.status === 404) {
    throw Object.assign(new Error(`GitHub Release ${tag} was not found.`), {
      status: 404,
    });
  }

  if (!response.ok) {
    throw new Error(
      `Could not read GitHub Release ${tag} (HTTP ${response.status}).`,
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
}): Promise<{
  html_url: string;
}> {
  const { owner, repo, tag, token, commitSha, prerelease } = request;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        // Pin the REST API version so release automation does not drift with
        // GitHub's default behavior over time.
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        tag_name: tag,
        target_commitish: commitSha,
        name: tag,
        draft: false,
        prerelease,
        generate_release_notes: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Could not create GitHub Release ${tag} (HTTP ${response.status}).`,
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
  });

  return { created: true, release: createdRelease, tag };
}
