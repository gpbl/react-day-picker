type ShouldPublishScriptModule = typeof import("./should-publish-release");

let shouldPublishRelease: ShouldPublishScriptModule["shouldPublishRelease"];
let publishContext: ReturnType<typeof createShouldPublishContext>;
let shouldPublishFetchMock: jest.MockedFunction<typeof fetch>;
const originalShouldPublishFetch = global.fetch;

beforeAll(async function loadModule() {
  ({ shouldPublishRelease } = await import("./should-publish-release"));
});

beforeEach(function setupTestState() {
  publishContext = createShouldPublishContext();
  shouldPublishFetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;
  global.fetch = shouldPublishFetchMock;
});

afterEach(function restoreFetch() {
  global.fetch = originalShouldPublishFetch;
});

function createShouldPublishContext(
  overrides: Partial<{
    repository: string;
    token: string;
    commitSha: string;
    expectedHeadBranch: string;
    expectedBaseBranch: string;
  }> = {},
) {
  return {
    repository: "gpbl/react-day-picker",
    token: "test-token",
    commitSha: "abc123",
    expectedHeadBranch: "changeset-release/main",
    expectedBaseBranch: "main",
    ...overrides,
  };
}

function createPullRequest(
  overrides: Partial<{
    user: { login?: string } | null;
    base: { ref?: string } | null;
    head: { ref?: string } | null;
    merged_at: string | null;
  }> = {},
) {
  return {
    user: { login: "github-actions[bot]" },
    base: { ref: "main" },
    head: { ref: "changeset-release/main" },
    merged_at: "2026-04-24T10:00:00.000Z",
    ...overrides,
  };
}

function createShouldPublishFetchResponse(
  pullRequests: Array<ReturnType<typeof createPullRequest>>,
  overrides: Partial<{
    ok: boolean;
    status: number;
  }> = {},
) {
  return {
    ok: true,
    status: 200,
    json: async () => pullRequests,
    ...overrides,
  } as Response;
}

describe("shouldPublishRelease", function describeShouldPublishRelease() {
  test("it returns true for the expected merged release PR", async function testReleasePullRequest() {
    shouldPublishFetchMock.mockResolvedValueOnce(
      createShouldPublishFetchResponse([createPullRequest()]),
    );

    await expect(shouldPublishRelease(publishContext)).resolves.toBe(true);
  });

  test("it looks up pull requests for the pushed commit", async function testLookupRequest() {
    shouldPublishFetchMock.mockResolvedValueOnce(
      createShouldPublishFetchResponse([createPullRequest()]),
    );

    await shouldPublishRelease(publishContext);

    expect(shouldPublishFetchMock).toHaveBeenCalledWith(
      "https://api.github.com/repos/gpbl/react-day-picker/commits/abc123/pulls",
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer test-token",
        }),
      }),
    );
  });

  test("it returns false when no associated pull request matches", async function testNoMatch() {
    shouldPublishFetchMock.mockResolvedValueOnce(
      createShouldPublishFetchResponse([
        createPullRequest({ head: { ref: "docs/tweak-homepage-copy" } }),
      ]),
    );

    await expect(shouldPublishRelease(publishContext)).resolves.toBe(false);
  });

  test("it ignores the pull request author when the release branch matches", async function testIgnoreAuthor() {
    shouldPublishFetchMock.mockResolvedValueOnce(
      createShouldPublishFetchResponse([
        createPullRequest({ user: { login: "someone-else" } }),
      ]),
    );

    await expect(shouldPublishRelease(publishContext)).resolves.toBe(true);
  });

  test("it rejects invalid repository values", async function testInvalidRepository() {
    publishContext.repository = "react-day-picker";

    await expect(shouldPublishRelease(publishContext)).rejects.toThrow(
      "Invalid GITHUB_REPOSITORY value: react-day-picker",
    );
    expect(shouldPublishFetchMock).not.toHaveBeenCalled();
  });

  test("it rejects unmerged release pull requests", async function testUnmergedPullRequest() {
    shouldPublishFetchMock.mockResolvedValueOnce(
      createShouldPublishFetchResponse([
        createPullRequest({ merged_at: null }),
      ]),
    );

    await expect(shouldPublishRelease(publishContext)).resolves.toBe(false);
  });
});
