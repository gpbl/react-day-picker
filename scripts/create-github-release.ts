import process from "node:process";
import { pathToFileURL } from "node:url";

export interface GitHubRelease {
  html_url: string;
}

export interface CreateReleaseContext {
  repository: string;
  token: string;
  commitSha: string;
  packageVersion: string;
}

interface ReleaseLookupRequest {
  owner: string;
  repo: string;
  tag: string;
  token: string;
}

interface ReleaseCreateRequest extends ReleaseLookupRequest {
  commitSha: string;
  prerelease: boolean;
}

async function fetchReleaseByTag(
  request: ReleaseLookupRequest,
): Promise<GitHubRelease> {
  const { owner, repo, tag, token } = request;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
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

  return response.json() as Promise<GitHubRelease>;
}

async function createRelease(
  request: ReleaseCreateRequest,
): Promise<GitHubRelease> {
  const { owner, repo, tag, token, commitSha, prerelease } = request;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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

  return response.json() as Promise<GitHubRelease>;
}

export async function createGitHubRelease(
  context: CreateReleaseContext,
): Promise<{
  created: boolean;
  release: GitHubRelease;
  tag: string;
}> {
  const [owner, repo] = context.repository.split("/");
  if (!owner || !repo) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${context.repository}`);
  }

  const tag = `v${context.packageVersion}`;
  const prerelease = context.packageVersion.includes("-next");

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
    prerelease,
  });

  return { created: true, release: createdRelease, tag };
}

export async function main(): Promise<void> {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;
  const commitSha = process.env.GITHUB_SHA;
  const packageVersion = process.env.PACKAGE_VERSION;

  if (!repository) {
    throw new Error("Missing required environment variable: GITHUB_REPOSITORY");
  }
  if (!token) {
    throw new Error("Missing required environment variable: GITHUB_TOKEN");
  }
  if (!commitSha) {
    throw new Error("Missing required environment variable: GITHUB_SHA");
  }
  if (!packageVersion) {
    throw new Error("Missing required environment variable: PACKAGE_VERSION");
  }

  const result = await createGitHubRelease({
    repository,
    token,
    commitSha,
    packageVersion,
  });

  if (result.created) {
    console.log(
      `Created GitHub release ${result.tag} at ${result.release.html_url}.`,
    );
  } else {
    console.log(
      `GitHub release ${result.tag} already exists at ${result.release.html_url}.`,
    );
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
