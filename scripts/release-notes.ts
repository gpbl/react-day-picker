import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { publishablePackageDirs } from "./publish-packages";

const repoRoot = new URL("../", import.meta.url);

type PackageFileName = "CHANGELOG.md" | "package.json";

type ReadPackageFile = (
  packageDir: string,
  fileName: PackageFileName,
) => string | null;

function extractChangelogVersionSection(
  changelog: string,
  packageVersion: string,
): string | null {
  const lines = changelog.split(/\r?\n/);
  const normalizedVersion = packageVersion.replace(/^v/, "");
  const versionHeadings = new Set([
    `## ${normalizedVersion}`,
    `## v${normalizedVersion}`,
  ]);
  const startIndex = lines.findIndex((line) =>
    versionHeadings.has(line.trim()),
  );

  if (startIndex === -1) {
    return null;
  }

  let endIndex = lines.length;
  for (let lineIndex = startIndex + 1; lineIndex < lines.length; lineIndex++) {
    if (lines[lineIndex]?.startsWith("## ")) {
      endIndex = lineIndex;
      break;
    }
  }

  return lines
    .slice(startIndex + 1, endIndex)
    .join("\n")
    .trim();
}

function extractMeaningfulReleaseNotes(section: string): string[] {
  const lines = section.split(/\r?\n/);
  const noteBlocks: string[] = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    if (!line?.startsWith("- ")) {
      continue;
    }

    const block = [line];
    while (lineIndex + 1 < lines.length) {
      const nextLine = lines[lineIndex + 1];
      if (
        nextLine?.startsWith("- ") ||
        nextLine?.startsWith("## ") ||
        nextLine?.startsWith("### ") ||
        (nextLine?.trim() !== "" &&
          !nextLine.startsWith(" ") &&
          !nextLine.startsWith("\t"))
      ) {
        break;
      }
      block.push(nextLine ?? "");
      lineIndex += 1;
    }

    if (block[0].startsWith("- Updated dependencies")) {
      continue;
    }

    while (block.length > 0 && block[block.length - 1]?.trim() === "") {
      block.pop();
    }

    noteBlocks.push(block.join("\n"));
  }

  return noteBlocks;
}

function buildReleaseBodyFromSource(
  packageVersion: string,
  readPackageFile: ReadPackageFile,
): string {
  const packageSections = publishablePackageDirs.flatMap((packageDir) => {
    const packageJson = readPackageFile(packageDir, "package.json");
    if (!packageJson) {
      return [];
    }

    const packageInfo = JSON.parse(packageJson) as {
      name: string;
      version: string;
    };
    if (packageInfo.version !== packageVersion) {
      return [];
    }

    const changelog = readPackageFile(packageDir, "CHANGELOG.md");
    if (!changelog) {
      return [];
    }

    const versionSection = extractChangelogVersionSection(
      changelog,
      packageVersion,
    );

    if (!versionSection) {
      return [];
    }

    const noteBlocks = extractMeaningfulReleaseNotes(versionSection);
    if (noteBlocks.length === 0) {
      return [];
    }

    return [
      {
        packageName: packageInfo.name,
        noteBlocks,
      },
    ];
  });

  if (packageSections.length === 0) {
    return `Published package updates for ${packageVersion}.`;
  }

  return [
    "## What's Changed",
    "",
    ...packageSections.flatMap(({ packageName, noteBlocks }, index) => [
      `### ${packageName}`,
      "",
      ...noteBlocks.flatMap((block, blockIndex) =>
        blockIndex === noteBlocks.length - 1 ? [block] : [block, ""],
      ),
      ...(index === packageSections.length - 1 ? [] : [""]),
    ]),
  ].join("\n");
}

/**
 * Builds repo-level release notes from the current worktree's package
 * changelog entries for the published version.
 */
export function buildReleaseBody(packageVersion: string): string {
  return buildReleaseBodyFromSource(packageVersion, (packageDir, fileName) =>
    readFileSync(new URL(`${packageDir}/${fileName}`, repoRoot), "utf8"),
  );
}

/**
 * Builds repo-level release notes from a historical git ref without changing
 * the working tree, which is useful for previewing older releases locally.
 */
export function buildReleaseBodyFromRef(
  packageVersion: string,
  ref: string,
): string {
  return buildReleaseBodyFromSource(packageVersion, (packageDir, fileName) => {
    const packagePath = `${packageDir}/${fileName}`;

    try {
      return String(
        execFileSync("git", ["show", `${ref}:${packagePath}`], {
          cwd: repoRoot,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
        }),
      );
    } catch (error) {
      if (
        error instanceof Error &&
        /exists on disk, but not in|does not exist in/i.test(error.message)
      ) {
        return null;
      }
      throw error;
    }
  });
}
