import process from "node:process";
import { pathToFileURL } from "node:url";

export interface AssociatedPullRequest {
  user: { login?: string } | null;
  base: { ref?: string } | null;
  head: { ref?: string } | null;
  merged_at: string | null;
}

export interface ShouldPublishContext {
  repository: string;
  token: string;
  commitSha: string;
  expectedHeadBranch: string;
  expectedAuthor: string;
  expectedBaseBranch: string;
}

interface AssociatedPullRequestRequest {
  owner: string;
  repo: string;
  commitSha: string;
  token: string;
}

async function fetchAssociatedPullRequests(
  request: AssociatedPullRequestRequest,
): Promise<AssociatedPullRequest[]> {
  const { owner, repo, commitSha, token } = request;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits/${encodeURIComponent(commitSha)}/pulls`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Could not read pull requests associated with commit ${commitSha} (HTTP ${response.status}).`,
    );
  }

  return response.json() as Promise<AssociatedPullRequest[]>;
}

export async function shouldPublishRelease(
  context: ShouldPublishContext,
): Promise<boolean> {
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
      pullRequest.user?.login === context.expectedAuthor &&
      pullRequest.base?.ref === context.expectedBaseBranch &&
      Boolean(pullRequest.merged_at)
    );
  });
}

export async function main(): Promise<void> {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;
  const commitSha = process.env.GITHUB_SHA;

  if (!repository) {
    throw new Error("Missing required environment variable: GITHUB_REPOSITORY");
  }
  if (!token) {
    throw new Error("Missing required environment variable: GITHUB_TOKEN");
  }
  if (!commitSha) {
    throw new Error("Missing required environment variable: GITHUB_SHA");
  }

  const shouldPublish = await shouldPublishRelease({
    repository,
    token,
    commitSha,
    expectedHeadBranch:
      process.env.EXPECTED_PR_BRANCH || "changesets-release/main",
    expectedAuthor: process.env.EXPECTED_PR_AUTHOR || "github-actions[bot]",
    expectedBaseBranch: process.env.EXPECTED_BASE_BRANCH || "main",
  });

  console.log(shouldPublish ? "true" : "false");
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
