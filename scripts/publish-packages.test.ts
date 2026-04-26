type PublishPackagesScriptModule = typeof import("./publish-packages");

type ExecCall = {
  args: string[];
  command: string;
  options?: unknown;
};

const packageInfoByDir: Record<string, { name: string; version: string }> = {
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

let getUnpublishedPackages: PublishPackagesScriptModule["getUnpublishedPackages"];
let publishPackages: PublishPackagesScriptModule["publishPackages"];
let publishPackagesExecFileSyncMock: jest.Mock;
let publishPackagesReadFileSyncMock: jest.Mock;
let consoleLogSpy: jest.SpiedFunction<typeof console.log>;
let execCalls: ExecCall[];

jest.mock("node:child_process", () => ({
  execFileSync: jest.fn(),
}));

jest.mock("node:fs", () => ({
  readFileSync: jest.fn(),
}));

beforeAll(async function loadModule() {
  publishPackagesExecFileSyncMock = (await import("node:child_process"))
    .execFileSync as unknown as jest.Mock;
  publishPackagesReadFileSyncMock = (await import("node:fs"))
    .readFileSync as unknown as jest.Mock;
  ({ getUnpublishedPackages, publishPackages } = await import(
    "./publish-packages"
  ));
});

beforeEach(function setupPublishPackagesTestState() {
  execCalls = [];
  jest.resetAllMocks();
  consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  publishPackagesReadFileSyncMock.mockImplementation(function mockReadFile(
    file: unknown,
  ) {
    const path = String(file);
    const packageDir = Object.keys(packageInfoByDir).find((candidate) =>
      path.includes(`/${candidate}/package.json`),
    );

    if (!packageDir) {
      throw new Error(`Unknown test package.json path: ${path}`);
    }

    return JSON.stringify(packageInfoByDir[packageDir]);
  });
});

afterEach(function restoreConsoleSpy() {
  consoleLogSpy.mockRestore();
});

function createNpmError(
  message: string,
  overrides: Partial<{ status: number; stderr: string; stdout: string }> = {},
) {
  return Object.assign(new Error(message), {
    status: 1,
    stderr: message,
    stdout: "",
    ...overrides,
  });
}

describe("publishPackages", function describePublishPackages() {
  test("it returns only workspace packages that still need publishing", function testGetUnpublishedPackages() {
    publishPackagesExecFileSyncMock.mockImplementation(
      function mockExecFile(command, args, options) {
        execCalls.push({
          command: String(command),
          args: Array.isArray(args) ? [...args] : [],
          options,
        });

        if (command !== "npm" || !Array.isArray(args) || args[0] !== "view") {
          return "";
        }

        if (args[1] === "@daypicker/buddhist@10.0.0-next.1") {
          throw createNpmError("npm ERR! code E404\nnpm ERR! 404 Not Found");
        }

        return "10.0.0-next.1\n";
      },
    );

    expect(getUnpublishedPackages()).toEqual([
      {
        packageDir: "packages/buddhist",
        packageInfo: {
          name: "@daypicker/buddhist",
          version: "10.0.0-next.1",
        },
      },
    ]);
  });

  test("it skips versions already published on npm and publishes missing scoped packages publicly", function testSkipPublishedVersion() {
    publishPackagesExecFileSyncMock.mockImplementation(
      function mockExecFile(command, args, options) {
        execCalls.push({
          command: String(command),
          args: Array.isArray(args) ? [...args] : [],
          options,
        });

        if (command !== "npm" || !Array.isArray(args)) {
          return "";
        }

        if (args[0] === "view") {
          if (args[1] === "@daypicker/buddhist@10.0.0-next.1") {
            throw createNpmError("npm ERR! code E404");
          }
          return "10.0.0-next.1\n";
        }

        return "";
      },
    );

    publishPackages("next");

    expect(execCalls.map((call) => call.args)).toEqual([
      ["view", "react-day-picker@10.0.0-next.1", "version"],
      ["view", "@daypicker/buddhist@10.0.0-next.1", "version"],
      ["publish", "--provenance", "--tag", "next", "--access", "public"],
      ["view", "@daypicker/ethiopic@10.0.0-next.1", "version"],
      ["view", "@daypicker/hebrew@10.0.0-next.1", "version"],
      ["view", "@daypicker/hijri@10.0.0-next.1", "version"],
      ["view", "@daypicker/persian@10.0.0-next.1", "version"],
    ]);
    const publishOptions = execCalls[2]?.options as
      | { cwd?: URL; stdio?: string }
      | undefined;
    expect(publishOptions?.stdio).toBe("inherit");
    expect(publishOptions?.cwd?.href).toContain("packages/buddhist");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Skipping react-day-picker@10.0.0-next.1; already published.",
    );
  });

  test("it rethrows npm view failures that are not missing versions", function testRethrowUnexpectedViewFailure() {
    publishPackagesExecFileSyncMock.mockImplementation(
      function mockExecFile(command, args, options) {
        execCalls.push({
          command: String(command),
          args: Array.isArray(args) ? [...args] : [],
          options,
        });

        if (command === "npm" && Array.isArray(args) && args[0] === "view") {
          throw createNpmError("npm ERR! network timeout");
        }

        return "";
      },
    );

    expect(() => publishPackages("next")).toThrow("npm ERR! network timeout");
    expect(publishPackagesExecFileSyncMock).toHaveBeenCalledTimes(1);
  });

  test("it requires an npm tag", function testMissingTag() {
    expect(() => publishPackages("")).toThrow(
      "Usage: publish-packages <npm-tag>",
    );
  });
});
