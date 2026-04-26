type ReleaseCiModule = typeof import("./release-ci");

type ReleaseCiExecCall = {
  args: string[];
  command: string;
  options?: unknown;
};

let releaseCi: ReleaseCiModule["releaseCi"];
let execFileSyncMock: jest.Mock;
let createGitHubReleaseMock: jest.Mock;
let getUnpublishedPackagesMock: jest.Mock;
let publishPackagesMock: jest.Mock;
let readPackageInfoMock: jest.Mock;
let shouldPublishReleaseMock: jest.Mock;
let releaseCiExecCalls: ReleaseCiExecCall[];
let originalEnv: NodeJS.ProcessEnv;

jest.mock("node:child_process", () => ({
  execFileSync: jest.fn(),
}));

jest.mock("./create-github-release", () => ({
  createGitHubRelease: jest.fn(),
}));

jest.mock("./publish-packages", () => ({
  getUnpublishedPackages: jest.fn(),
  publishPackages: jest.fn(),
  readPackageInfo: jest.fn(),
}));

jest.mock("./should-publish-release", () => ({
  shouldPublishRelease: jest.fn(),
}));

beforeAll(async function loadModule() {
  execFileSyncMock = (await import("node:child_process"))
    .execFileSync as unknown as jest.Mock;
  createGitHubReleaseMock = (await import("./create-github-release"))
    .createGitHubRelease as unknown as jest.Mock;
  getUnpublishedPackagesMock = (await import("./publish-packages"))
    .getUnpublishedPackages as unknown as jest.Mock;
  publishPackagesMock = (await import("./publish-packages"))
    .publishPackages as unknown as jest.Mock;
  readPackageInfoMock = (await import("./publish-packages"))
    .readPackageInfo as unknown as jest.Mock;
  shouldPublishReleaseMock = (await import("./should-publish-release"))
    .shouldPublishRelease as unknown as jest.Mock;
  ({ releaseCi } = await import("./release-ci"));
});

beforeEach(function setupReleaseCiTestState() {
  releaseCiExecCalls = [];
  originalEnv = { ...process.env };
  process.env = {
    ...process.env,
    GITHUB_REPOSITORY: "gpbl/react-day-picker",
    GITHUB_TOKEN: "test-token",
  };
  delete process.env.RELEASE_COMMIT_SHA;

  jest.resetAllMocks();

  execFileSyncMock.mockImplementation(
    function mockExecFile(command, args, options) {
      releaseCiExecCalls.push({
        command: String(command),
        args: Array.isArray(args) ? [...args] : [],
        options,
      });
      if (command === "git" && Array.isArray(args) && args[0] === "rev-parse") {
        return "abc123\n";
      }
      return "";
    },
  );

  readPackageInfoMock.mockImplementation(function mockReadPackage(_packageDir) {
    return {
      name: "react-day-picker",
      version: "10.0.0-next.3",
    };
  });

  getUnpublishedPackagesMock.mockImplementation(function mockGetUnpublished() {
    return [
      {
        packageDir: "packages/react-day-picker",
        packageInfo: {
          name: "react-day-picker",
          version: "10.0.0-next.3",
        },
      },
    ];
  });

  publishPackagesMock.mockImplementation(function mockPublish() {});

  shouldPublishReleaseMock.mockImplementation(
    async function mockShouldPublish() {
      return true;
    },
  );

  createGitHubReleaseMock.mockImplementation(
    async function mockCreateRelease() {
      return {
        created: true,
        release: {
          html_url:
            "https://github.com/gpbl/react-day-picker/releases/tag/v10.0.0-next.3",
        },
        tag: "v10.0.0-next.3",
      };
    },
  );
});

afterEach(function restoreEnv() {
  process.env = originalEnv;
});

describe("releaseCi", function describeReleaseCi() {
  test("it skips when the checked-out commit is not the merged release PR", async function testSkipNonReleaseCommit() {
    shouldPublishReleaseMock.mockResolvedValue(false);

    await expect(releaseCi()).resolves.toEqual({
      shouldPublish: false,
      publishedPackages: false,
      releaseCreated: false,
    });

    expect(getUnpublishedPackagesMock).not.toHaveBeenCalled();
    expect(publishPackagesMock).not.toHaveBeenCalled();
    expect(createGitHubReleaseMock).not.toHaveBeenCalled();
  });

  test("it validates, publishes, and creates the repo release when versions are unpublished", async function testPublishPath() {
    await expect(releaseCi()).resolves.toEqual({
      shouldPublish: true,
      publishedPackages: true,
      releaseCreated: true,
    });

    expect(shouldPublishReleaseMock).toHaveBeenCalledWith({
      repository: "gpbl/react-day-picker",
      token: "test-token",
      commitSha: "abc123",
      expectedHeadBranch: "changeset-release/main",
      expectedBaseBranch: "main",
    });
    expect(
      releaseCiExecCalls.map((call) => [call.command, ...call.args]),
    ).toEqual([
      ["git", "rev-parse", "HEAD"],
      ["pnpm", "typecheck"],
      ["pnpm", "lint", "ci", ".", "--reporter=github"],
      ["pnpm", "test"],
      ["pnpm", "test:tz"],
      ["pnpm", "build"],
      ["pnpm", "check:versions"],
      ["pnpm", "pack:dry-run"],
      ["pnpm", "test:build"],
    ]);
    expect(getUnpublishedPackagesMock).toHaveBeenCalledWith();
    expect(publishPackagesMock).toHaveBeenCalledWith("next");
    expect(createGitHubReleaseMock).toHaveBeenCalledWith({
      repository: "gpbl/react-day-picker",
      token: "test-token",
      commitSha: "abc123",
      packageVersion: "10.0.0-next.3",
    });
  });

  test("it prefers RELEASE_COMMIT_SHA for recovery runs", async function testUsesReleaseCommitEnv() {
    process.env.RELEASE_COMMIT_SHA = "release-commit-sha";

    await expect(releaseCi()).resolves.toEqual({
      shouldPublish: true,
      publishedPackages: true,
      releaseCreated: true,
    });

    expect(
      releaseCiExecCalls.map((call) => [call.command, ...call.args]),
    ).toEqual([
      ["pnpm", "typecheck"],
      ["pnpm", "lint", "ci", ".", "--reporter=github"],
      ["pnpm", "test"],
      ["pnpm", "test:tz"],
      ["pnpm", "build"],
      ["pnpm", "check:versions"],
      ["pnpm", "pack:dry-run"],
      ["pnpm", "test:build"],
    ]);
    expect(shouldPublishReleaseMock).toHaveBeenCalledWith({
      repository: "gpbl/react-day-picker",
      token: "test-token",
      commitSha: "release-commit-sha",
      expectedHeadBranch: "changeset-release/main",
      expectedBaseBranch: "main",
    });
  });

  test("it still creates the repo release when packages are already published", async function testCreateReleaseWithoutPublishing() {
    getUnpublishedPackagesMock.mockReturnValue([]);

    await expect(releaseCi()).resolves.toEqual({
      shouldPublish: true,
      publishedPackages: false,
      releaseCreated: true,
    });

    expect(
      releaseCiExecCalls.map((call) => [call.command, ...call.args]),
    ).toEqual([["git", "rev-parse", "HEAD"]]);
    expect(publishPackagesMock).not.toHaveBeenCalled();
    expect(createGitHubReleaseMock).toHaveBeenCalledTimes(1);
  });
});
