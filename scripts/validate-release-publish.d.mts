export interface PublishValidationContext {
  eventName: string;
  packageVersion: string;
  releaseTag?: string;
  releaseIsPrerelease?: boolean;
  requestedReleaseTag?: string;
  repository?: string;
  token?: string;
}

export interface GitHubRelease {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
}

export function createValidationError(message: string): Error;

export function requireEnv(env: NodeJS.ProcessEnv, name: string): string;

export function readPublishContext(
  env?: NodeJS.ProcessEnv,
): PublishValidationContext;

export function fetchReleaseByTag(
  request: {
    owner: string;
    repo: string;
    tag: string;
    token: string;
  },
  fetchImpl?: typeof fetch,
): Promise<GitHubRelease>;

export function validateReleasePublishSource(
  context: PublishValidationContext,
  releaseFetcher?: typeof fetchReleaseByTag,
): Promise<void>;

export function isEntrypoint(): boolean;

export function main(): Promise<void>;
