type CreateGitHubReleaseScriptModule = typeof import("./create-github-release");

const releasePackageInfoByDir: Record<
  string,
  { name: string; version: string }
> = {
  "packages/react-day-picker": {
    name: "react-day-picker",
    version: "10.0.0-next.1",
  },
  "packages/buddhist": {
    name: "@daypicker/buddhist",
    version: "10.0.0-next.1",
  },
  "packages/ethiopic": {
    name: "@daypicker/ethiopic",
    version: "10.0.0-next.1",
  },
  "packages/hebrew": {
    name: "@daypicker/hebrew",
    version: "10.0.0-next.1",
  },
  "packages/hijri": {
    name: "@daypicker/hijri",
    version: "10.0.0-next.1",
  },
  "packages/persian": {
    name: "@daypicker/persian",
    version: "10.0.0-next.1",
  },
};

let createGitHubRelease: CreateGitHubReleaseScriptModule["createGitHubRelease"];
let releaseContext: ReturnType<typeof createReleaseContext>;
let createReleaseFetchMock: jest.MockedFunction<typeof fetch>;
let dependencyOnlyPackages: Set<string>;
let readFileSyncMock: jest.Mock;
const originalCreateReleaseFetch = global.fetch;

jest.mock("node:fs", () => ({
  readFileSync: jest.fn(),
}));

beforeAll(async function loadModule() {
  readFileSyncMock = (await import("node:fs"))
    .readFileSync as unknown as jest.Mock;
  ({ createGitHubRelease } = await import("./create-github-release"));
});

beforeEach(function setupTestState() {
  releaseContext = createReleaseContext();
  createReleaseFetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
  dependencyOnlyPackages = new Set(
    Object.keys(releasePackageInfoByDir).filter(
      (packageDir) => packageDir !== "packages/react-day-picker",
    ),
  );
  global.fetch = createReleaseFetchMock;

  readFileSyncMock.mockImplementation(function mockReadFile(file: unknown) {
    const path = String(file);
    const packageDir = Object.keys(releasePackageInfoByDir).find((candidate) =>
      path.includes(`/${candidate}/`),
    );

    if (!packageDir) {
      throw new Error(`Unknown test path: ${path}`);
    }

    if (path.endsWith("/package.json")) {
      return JSON.stringify(releasePackageInfoByDir[packageDir]);
    }

    if (path.endsWith("/CHANGELOG.md")) {
      const packageInfo = releasePackageInfoByDir[packageDir];
      return dependencyOnlyPackages.has(packageDir)
        ? createDependencyOnlyChangelog(packageInfo.version)
        : createMeaningfulChangelog(packageInfo.version);
    }

    throw new Error(`Unhandled test path: ${path}`);
  });
});

afterEach(function restoreFetch() {
  global.fetch = originalCreateReleaseFetch;
});

function createReleaseContext(
  overrides: Partial<{
    repository: string;
    token: string;
    commitSha: string;
    packageVersion: string;
  }> = {},
) {
  return {
    repository: "gpbl/react-day-picker",
    token: "test-token",
    commitSha: "abc123",
    packageVersion: "10.0.0-next.1",
    ...overrides,
  };
}

function createReleasePayload(
  overrides: Partial<{
    html_url: string;
  }> = {},
) {
  return {
    html_url:
      "https://github.com/gpbl/react-day-picker/releases/tag/v10.0.0-next.1",
    ...overrides,
  };
}

function createMeaningfulChangelog(packageVersion: string) {
  return `# react-day-picker

## ${packageVersion}

### Patch Changes

- [#2959](https://github.com/gpbl/react-day-picker/pull/2959) [\`a77f89c\`](https://github.com/gpbl/react-day-picker/commit/a77f89c) Thanks [@gpbl](https://github.com/gpbl)! - docs: clarify the public \`useCalendar\` API documentation.
`;
}

function createDependencyOnlyChangelog(packageVersion: string) {
  return `# package

## ${packageVersion}

### Patch Changes

- Updated dependencies [a77f89c]
  - react-day-picker@${packageVersion}
`;
}

function createGitHubFetchResponse(
  overrides: Partial<{
    json: () => Promise<unknown>;
    ok: boolean;
    status: number;
    text: () => Promise<string>;
  }> = {},
) {
  return {
    ok: true,
    status: 200,
    json: async () => createReleasePayload(),
    text: async () => "",
    ...overrides,
  } as Response;
}

describe("createGitHubRelease", function describeCreateGitHubRelease() {
  test("it reuses an existing release for the repo version", async function testExistingRelease() {
    createReleaseFetchMock.mockResolvedValueOnce(createGitHubFetchResponse());

    await expect(createGitHubRelease(releaseContext)).resolves.toEqual({
      created: false,
      release: createReleasePayload(),
      tag: "v10.0.0-next.1",
    });

    expect(createReleaseFetchMock).toHaveBeenCalledTimes(1);
  });

  test("it creates the release from package changelog entries when the tag does not exist yet", async function testCreateReleaseOn404() {
    createReleaseFetchMock
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 404,
        }),
      )
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          json: async () => createReleasePayload(),
        }),
      );

    await expect(createGitHubRelease(releaseContext)).resolves.toEqual({
      created: true,
      release: createReleasePayload(),
      tag: "v10.0.0-next.1",
    });

    const createRequest = createReleaseFetchMock.mock.calls[1]?.[1];
    const createBody =
      createRequest &&
      typeof createRequest === "object" &&
      "body" in createRequest &&
      typeof createRequest.body === "string"
        ? JSON.parse(createRequest.body)
        : undefined;

    expect(createBody).toMatchObject({
      name: "v10.0.0-next.1",
      prerelease: true,
      tag_name: "v10.0.0-next.1",
      target_commitish: "abc123",
    });
    expect(createBody?.generate_release_notes).toBeUndefined();
    expect(createBody?.body).toContain("## What's Changed");
    expect(createBody?.body).toContain("### react-day-picker");
    expect(createBody?.body).toContain(
      "docs: clarify the public `useCalendar` API documentation. [#2959](https://github.com/gpbl/react-day-picker/pull/2959) by [@gpbl](https://github.com/gpbl)",
    );
    expect(createBody?.body).not.toContain("Thanks [@gpbl]");
    expect(createBody?.body).not.toContain("[`a77f89c`]");
    expect(createBody?.body).not.toContain("Updated dependencies");
    expect(createBody?.body).not.toContain("@daypicker/buddhist");
  });

  test("it falls back to a generic release body when changelog entries only contain dependency updates", async function testDependencyOnlyFallback() {
    dependencyOnlyPackages = new Set(Object.keys(releasePackageInfoByDir));
    createReleaseFetchMock
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 404,
        }),
      )
      .mockResolvedValueOnce(createGitHubFetchResponse());

    await createGitHubRelease(releaseContext);

    const createRequest = createReleaseFetchMock.mock.calls[1]?.[1];
    const createBody =
      createRequest &&
      typeof createRequest === "object" &&
      "body" in createRequest &&
      typeof createRequest.body === "string"
        ? JSON.parse(createRequest.body)
        : undefined;

    expect(createBody?.body).toBe(
      "Published package updates for 10.0.0-next.1.",
    );
  });

  test("it creates stable releases without the prerelease flag", async function testStableReleaseFlag() {
    releaseContext.packageVersion = "10.0.0";
    createReleaseFetchMock
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 404,
        }),
      )
      .mockResolvedValueOnce(createGitHubFetchResponse());

    await createGitHubRelease(releaseContext);

    const createRequest = createReleaseFetchMock.mock.calls[1]?.[1];
    const createBody =
      createRequest &&
      typeof createRequest === "object" &&
      "body" in createRequest &&
      typeof createRequest.body === "string"
        ? JSON.parse(createRequest.body)
        : undefined;

    expect(createBody).toMatchObject({
      name: "v10.0.0",
      prerelease: false,
      tag_name: "v10.0.0",
      target_commitish: "abc123",
    });
  });

  test("it rejects invalid repository values", async function testInvalidRepository() {
    releaseContext.repository = "react-day-picker";

    await expect(createGitHubRelease(releaseContext)).rejects.toThrow(
      "Invalid GITHUB_REPOSITORY value: react-day-picker",
    );
    expect(createReleaseFetchMock).not.toHaveBeenCalled();
  });

  test("it rethrows unexpected lookup failures", async function testUnexpectedLookupFailure() {
    createReleaseFetchMock.mockResolvedValueOnce(
      createGitHubFetchResponse({
        ok: false,
        status: 500,
      }),
    );

    await expect(createGitHubRelease(releaseContext)).rejects.toThrow(
      "Could not read GitHub Release v10.0.0-next.1 (HTTP 500).",
    );
  });

  test("it retries transient fetch failures before creating the release", async function testRetryTransientCreateReleaseFailure() {
    createReleaseFetchMock
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 404,
        }),
      )
      .mockRejectedValueOnce(new Error("fetch failed"))
      .mockResolvedValueOnce(createGitHubFetchResponse());

    await expect(createGitHubRelease(releaseContext)).resolves.toEqual({
      created: true,
      release: createReleasePayload(),
      tag: "v10.0.0-next.1",
    });

    expect(createReleaseFetchMock).toHaveBeenCalledTimes(3);
  });

  test("it explains 403 release creation failures", async function testReleaseCreation403() {
    createReleaseFetchMock
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 404,
        }),
      )
      .mockResolvedValueOnce(
        createGitHubFetchResponse({
          ok: false,
          status: 403,
        }),
      );

    await expect(createGitHubRelease(releaseContext)).rejects.toThrow(
      "Could not create GitHub Release v10.0.0-next.1 (HTTP 403). GitHub denied creating the release or tag. Check whether repository rulesets or tag protections allow GitHub Actions to create v* tags/releases.",
    );
  });
});
