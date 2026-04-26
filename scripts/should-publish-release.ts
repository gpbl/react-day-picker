/**
 * Reads the pull requests GitHub associates with the given commit SHA.
 */
async function fetchAssociatedPullRequests(request: {
  owner: string;
  repo: string;
  commitSha: string;
  token: string;
}): Promise<
  Array<{
    user: { login?: string } | null;
    base: { ref?: string } | null;
    head: { ref?: string } | null;
    merged_at: string | null;
  }>
> {
  const { owner, repo, commitSha, token } = request;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits/${encodeURIComponent(commitSha)}/pulls`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        // Pin the REST API version so the publish gate keeps the same GitHub
        // semantics even if the default API version changes later.
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Could not read pull requests associated with commit ${commitSha} (HTTP ${response.status}).`,
    );
  }

  return response.json() as Promise<
    Array<{
      user: { login?: string } | null;
      base: { ref?: string } | null;
      head: { ref?: string } | null;
      merged_at: string | null;
    }>
  >;
}

/**
 * Returns true only when the commit belongs to the merged Changesets release
 * PR for this repo.
 *
 * This protects the publish step from running on arbitrary pushes to `main`.
 */
export async function shouldPublishRelease(context: {
  repository: string;
  token: string;
  commitSha: string;
  expectedHeadBranch: string;
  expectedBaseBranch: string;
}): Promise<boolean> {
  const [owner, repo] = context.repository.split("/");
  if (!owner || !repo) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${context.repository}`);
  }

  const pullRequests = await fetchAssociatedPullRequests({
    owner,
    repo,
    commitSha: context.commitSha,
    token: context.token,
  });

  return pullRequests.some((pullRequest) => {
    return (
      pullRequest.head?.ref === context.expectedHeadBranch &&
      pullRequest.base?.ref === context.expectedBaseBranch &&
      Boolean(pullRequest.merged_at)
    );
  });
}
