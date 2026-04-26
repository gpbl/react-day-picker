type CreateGitHubReleaseScriptModule = typeof import("./create-github-release");

let createGitHubRelease: CreateGitHubReleaseScriptModule["createGitHubRelease"];
let releaseContext: ReturnType<typeof createReleaseContext>;
let createReleaseFetchMock: jest.MockedFunction<typeof fetch>;
const originalCreateReleaseFetch = global.fetch;

beforeAll(async function loadModule() {
  ({ createGitHubRelease } = await import("./create-github-release"));
});

beforeEach(function setupTestState() {
  releaseContext = createReleaseContext();
  createReleaseFetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
  global.fetch = createReleaseFetchMock;
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

  test("it creates the release when the tag does not exist yet", async function testCreateReleaseOn404() {
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

    expect(createReleaseFetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.github.com/repos/gpbl/react-day-picker/releases",
      expect.objectContaining({
        method: "POST",
      }),
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
