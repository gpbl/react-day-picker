import { readFileSync } from "node:fs";
import { publishablePackageDirs } from "./publish-packages";

const repoRoot = new URL("../", import.meta.url);

function extractChangelogVersionSection(
  changelog: string,
  packageVersion: string,
): string | null {
  const lines = changelog.split(/\r?\n/);
  const startIndex = lines.findIndex(
    (line) => line.trim() === `## ${packageVersion}`,
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

    // Reformat stock changelog-github bullets so the change summary leads.
    block[0] = block[0].replace(
      /^- (?:\[#\d+\]\([^)]+\)\s+)?(?:\[[`][^`]+[`]\]\([^)]+\)\s+)?(?:Thanks (?<users>.+?)!\s+)?-\s+(?<summary>.+)$/,
      (_, users: string | undefined, summary: string) => {
        const pullMatch = block[0].match(/\[#\d+\]\([^)]+\)/);
        const pull = pullMatch?.[0] ?? "";
        return `- ${summary}${pull ? ` ${pull}` : ""}${users ? ` by ${users}` : ""}`;
      },
    );

    noteBlocks.push(block.join("\n"));
  }

  return noteBlocks;
}

export function buildReleaseBody(packageVersion: string): string {
  const packageSections = publishablePackageDirs.flatMap((packageDir) => {
    const packageJson = readFileSync(
      new URL(`${packageDir}/package.json`, repoRoot),
      "utf8",
    );

    const packageInfo = JSON.parse(packageJson) as {
      name: string;
      version: string;
    };
    if (packageInfo.version !== packageVersion) {
      return [];
    }

    const changelog = readFileSync(
      new URL(`${packageDir}/CHANGELOG.md`, repoRoot),
      "utf8",
    );

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
