type PublishPackagesModule = typeof import("./publish-packages.mjs");

type ExecCall = {
  args: string[];
  command: string;
  options?: unknown;
};

type ExecFile = (command: string, args: string[], options?: unknown) => string;

let isPackageVersionMissingError: PublishPackagesModule["isPackageVersionMissingError"];
let publishPackages: PublishPackagesModule["publishPackages"];
let consoleLogSpy: jest.SpiedFunction<typeof console.log>;

beforeAll(async function loadModule() {
  ({ isPackageVersionMissingError, publishPackages } = await import(
    "./publish-packages.mjs"
  ));
});

beforeEach(function setupConsoleSpy() {
  consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
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

function createPackageReader() {
  const packageInfoByDir: Record<string, { name: string; version: string }> = {
    "packages/react-day-picker": {
      name: "react-day-picker",
      version: "10.0.0-next.1",
    },
    "packages/buddhist": {
      name: "@daypicker/buddhist",
      version: "10.0.0-next.1",
    },
  };

  return jest.fn(function readPackage(packageDir: string) {
    const packageInfo = packageInfoByDir[packageDir];
    if (!packageInfo) {
      throw new Error(`Unknown test package: ${packageDir}`);
    }
    return packageInfo;
  });
}

describe("isPackageVersionMissingError", function describeIsPackageVersionMissingError() {
  test("it detects npm not-found responses", function testNotFoundResponse() {
    expect(
      isPackageVersionMissingError(
        createNpmError("npm ERR! code E404\nnpm ERR! 404 Not Found"),
      ),
    ).toBe(true);
  });

  test("it rejects unrelated npm failures", function testUnrelatedFailure() {
    expect(
      isPackageVersionMissingError(
        createNpmError("npm ERR! network timeout", { status: 1 }),
      ),
    ).toBe(false);
  });
});

describe("publishPackages", function describePublishPackages() {
  test("it skips versions already published on npm", function testSkipPublishedVersion() {
    const execCalls: ExecCall[] = [];
    const execFile = jest.fn(function execFile(
      command: string,
      args: string[],
      options?: unknown,
    ) {
      execCalls.push({ command, args, options });

      if (args[0] === "view") {
        if (args[1] === "react-day-picker@10.0.0-next.1") {
          return "10.0.0-next.1\n";
        }
        throw createNpmError("npm ERR! code E404");
      }

      return "";
    }) as jest.MockedFunction<ExecFile>;

    publishPackages("next", {
      execFile,
      packages: ["packages/react-day-picker", "packages/buddhist"],
      readPackage: createPackageReader(),
    });

    expect(execCalls.map((call) => call.args)).toEqual([
      ["view", "react-day-picker@10.0.0-next.1", "version"],
      ["view", "@daypicker/buddhist@10.0.0-next.1", "version"],
      ["publish", "--provenance", "--tag", "next", "--access", "public"],
    ]);
    const publishOptions = execCalls[2]?.options as
      | { cwd?: URL; stdio?: string }
      | undefined;
    expect(publishOptions?.stdio).toBe("inherit");
    expect(publishOptions?.cwd?.href).toContain("packages/buddhist");
  });

  test("it rethrows npm view failures that are not missing versions", function testRethrowUnexpectedViewFailure() {
    const execFile = jest.fn(function execFile(
      _command: string,
      args: string[],
    ) {
      if (args[0] === "view") {
        throw createNpmError("npm ERR! network timeout");
      }

      return "";
    }) as jest.MockedFunction<ExecFile>;

    expect(() =>
      publishPackages("next", {
        execFile,
        packages: ["packages/react-day-picker"],
        readPackage: createPackageReader(),
      }),
    ).toThrow("npm ERR! network timeout");

    expect(execFile).toHaveBeenCalledTimes(1);
  });

  test("it requires an npm tag", function testMissingTag() {
    expect(() => publishPackages("")).toThrow(
      "Usage: node ./scripts/publish-packages.mjs <npm-tag>",
    );
  });
});
