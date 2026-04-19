type PublishValidationModule = typeof import("./validate-release-publish.mjs");
type ReleaseFetcher = NonNullable<
  Parameters<PublishValidationModule["validateReleasePublishSource"]>[1]
>;

let validateReleasePublishSource: PublishValidationModule["validateReleasePublishSource"];
let context: ReturnType<typeof createContext>;
let releaseFetcher: jest.MockedFunction<ReleaseFetcher>;

beforeAll(async function loadModule() {
  ({ validateReleasePublishSource } = await import(
    "./validate-release-publish.mjs"
  ));
});

beforeEach(function setupTestState() {
  context = createContext();
  releaseFetcher = jest.fn(
    async function fetchPublishedRelease(_request, _fetchImpl) {
      return createRelease();
    },
  );
});

function createContext(
  overrides: Partial<{
    eventName: string;
    packageVersion: string;
    releaseTag: string;
    releaseIsPrerelease: boolean;
    requestedReleaseTag: string;
    repository: string;
    token: string;
  }> = {},
) {
  return {
    eventName: "workflow_dispatch",
    packageVersion: "10.0.0-next.0",
    releaseTag: "",
    releaseIsPrerelease: false,
    requestedReleaseTag: "v10.0.0-next.0",
    repository: "gpbl/react-day-picker",
    token: "test-token",
    ...overrides,
  };
}

function createRelease(
  overrides: Partial<{
    tag_name: string;
    draft: boolean;
    prerelease: boolean;
    published_at: string | null;
  }> = {},
) {
  return {
    tag_name: "v10.0.0-next.0",
    draft: false,
    prerelease: true,
    published_at: "2026-04-19T10:00:00.000Z",
    ...overrides,
  };
}

describe("validateReleasePublishSource", function describeValidateReleasePublishSource() {
  describe("when the event is a published GitHub Release", function describeReleaseEvent() {
    beforeEach(function setupReleaseEvent() {
      context.eventName = "release";
      context.releaseTag = "v10.0.0-next.0";
      context.releaseIsPrerelease = true;
    });

    test("it accepts a matching release tag", async function testMatchingReleaseEvent() {
      await expect(
        validateReleasePublishSource(context, releaseFetcher),
      ).resolves.toBeUndefined();
    });

    describe("when the release tag does not match package.json", function describeMismatchedReleaseTag() {
      beforeEach(function setupMismatchedReleaseTag() {
        context.releaseTag = "v10.0.0-next.1";
      });

      test("it rejects the publish", async function testMismatchedReleaseEvent() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "Release tag v10.0.0-next.1 does not match package.json version 10.0.0-next.0 (expected v10.0.0-next.0).",
        );
      });
    });

    describe("when a next version release is not marked as prerelease", function describeNonPrereleaseNextRelease() {
      beforeEach(function setupNonPrereleaseNextRelease() {
        context.releaseIsPrerelease = false;
      });

      test("it rejects the publish", async function testNonPrereleaseNextRelease() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "GitHub Release v10.0.0-next.0 must be marked as a prerelease before publishing 10.0.0-next.0.",
        );
      });
    });
  });

  describe("when the event is a manual publish", function describeManualPublish() {
    test("it accepts a published GitHub Release", async function testPublishedManualRelease() {
      await expect(
        validateReleasePublishSource(context, releaseFetcher),
      ).resolves.toBeUndefined();
    });

    test("it looks up the published release tag in GitHub", async function testPublishedManualReleaseLookup() {
      await validateReleasePublishSource(context, releaseFetcher);

      expect(releaseFetcher).toHaveBeenCalledWith({
        owner: "gpbl",
        repo: "react-day-picker",
        tag: "v10.0.0-next.0",
        token: "test-token",
      });
    });

    describe("when release_tag is missing", function describeMissingManualReleaseTag() {
      beforeEach(function setupMissingManualReleaseTag() {
        context.requestedReleaseTag = "";
      });

      test("it rejects the publish", async function testMissingManualReleaseTag() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "Manual publish requires release_tag=v10.0.0-next.0.",
        );
      });
    });

    describe("when release_tag does not match package.json", function describeMismatchedManualReleaseTag() {
      beforeEach(function setupMismatchedManualReleaseTag() {
        context.requestedReleaseTag = "v10.0.0-next.1";
      });

      test("it rejects the publish", async function testMismatchedManualReleaseTag() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "Manual publish requires release_tag=v10.0.0-next.0, got v10.0.0-next.1.",
        );
      });
    });

    describe("when the GitHub Release is still a draft", function describeDraftRelease() {
      beforeEach(function setupDraftRelease() {
        releaseFetcher.mockResolvedValue(createRelease({ draft: true }));
      });

      test("it rejects the publish", async function testDraftRelease() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "GitHub Release v10.0.0-next.0 must already be published before manual publish.",
        );
      });
    });

    describe("when a next version GitHub Release is not marked as prerelease", function describeNonPrereleaseManualRelease() {
      beforeEach(function setupNonPrereleaseManualRelease() {
        releaseFetcher.mockResolvedValue(createRelease({ prerelease: false }));
      });

      test("it rejects the publish", async function testNonPrereleaseManualRelease() {
        await expect(
          validateReleasePublishSource(context, releaseFetcher),
        ).rejects.toThrow(
          "GitHub Release v10.0.0-next.0 must be marked as a prerelease before publishing 10.0.0-next.0.",
        );
      });
    });
  });
});
