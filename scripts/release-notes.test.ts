type ReleaseNotesModule = typeof import("./release-notes");

const releaseNotesPackageInfoByDir: Record<
  string,
  { name: string; version: string }
> = {
  "packages/react-day-picker": {
    name: "react-day-picker",
    version: "10.0.0-next.4",
  },
  "packages/buddhist": {
    name: "@daypicker/buddhist",
    version: "10.0.0-next.4",
  },
  "packages/ethiopic": {
    name: "@daypicker/ethiopic",
    version: "10.0.0-next.4",
  },
  "packages/hebrew": {
    name: "@daypicker/hebrew",
    version: "10.0.0-next.4",
  },
  "packages/hijri": {
    name: "@daypicker/hijri",
    version: "10.0.0-next.4",
  },
  "packages/persian": {
    name: "@daypicker/persian",
    version: "10.0.0-next.4",
  },
};

let buildReleaseBody: ReleaseNotesModule["buildReleaseBody"];
let releaseNotesReadFileSyncMock: jest.Mock;

jest.mock("node:fs", () => ({
  readFileSync: jest.fn(),
}));

beforeAll(async function loadModule() {
  releaseNotesReadFileSyncMock = (await import("node:fs"))
    .readFileSync as unknown as jest.Mock;
  ({ buildReleaseBody } = await import("./release-notes"));
});

beforeEach(function setupReleaseNotesMocks() {
  jest.resetAllMocks();

  releaseNotesReadFileSyncMock.mockImplementation(function mockReadFile(
    file: unknown,
  ) {
    return readPackageFile(String(file), "10.0.0-next.4");
  });
});

function readPackageFile(path: string, packageVersion: string): string {
  const packageDir = Object.keys(releaseNotesPackageInfoByDir).find(
    (candidate) =>
      path.includes(`/${candidate}/`) || path.startsWith(`${candidate}/`),
  );

  if (!packageDir) {
    throw new Error(`Unknown test path: ${path}`);
  }

  if (path.endsWith("/package.json")) {
    return JSON.stringify({
      ...releaseNotesPackageInfoByDir[packageDir],
      version: packageVersion,
    });
  }

  if (path.endsWith("/CHANGELOG.md")) {
    if (packageDir === "packages/react-day-picker") {
      return `# react-day-picker

## ${packageVersion}

### Patch Changes

- [#2959](https://github.com/gpbl/react-day-picker/pull/2959) [\`a77f89c\`](https://github.com/gpbl/react-day-picker/commit/a77f89c) Thanks [@gpbl](https://github.com/gpbl)! - docs: clarify the public \`useCalendar\` API documentation.

DayPicker follows [Semantic Versioning](http://semver.org/).
`;
    }

    return `# package

## ${packageVersion}

### Patch Changes

- Updated dependencies [a77f89c]
  - react-day-picker@${packageVersion}
`;
  }

  throw new Error(`Unhandled test path: ${path}`);
}

describe("release notes", function describeReleaseNotes() {
  test("it builds release notes from the current worktree", function testCurrentWorktree() {
    const releaseBody = buildReleaseBody("10.0.0-next.4");

    expect(releaseBody).toContain("## What's Changed");
    expect(releaseBody).toContain("### react-day-picker");
    expect(releaseBody).toContain(
      "- docs: clarify the public `useCalendar` API documentation. [#2959](https://github.com/gpbl/react-day-picker/pull/2959) by [@gpbl](https://github.com/gpbl)",
    );
    expect(releaseBody).not.toContain("DayPicker follows");
    expect(releaseBody).not.toContain("Thanks [@gpbl]");
    expect(releaseBody).not.toContain("[`a77f89c`]");
    expect(releaseBody).not.toContain("Updated dependencies");
    expect(releaseBody).not.toContain("@daypicker/buddhist");
  });

  test("it falls back when no matching package changelog sections exist", function testFallbackBody() {
    expect(buildReleaseBody("10.0.0-next.999")).toBe(
      "Published package updates for 10.0.0-next.999.",
    );
  });
});
