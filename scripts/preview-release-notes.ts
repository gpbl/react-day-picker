import process from "node:process";
import { pathToFileURL } from "node:url";
import { buildReleaseBody, buildReleaseBodyFromRef } from "./release-notes";

function previewReleaseNotes(): void {
  const packageVersion = process.argv[2];
  const ref = process.argv[3];

  if (!packageVersion) {
    throw new Error("Usage: preview-release-notes <package-version> [git-ref]");
  }

  const body = ref
    ? buildReleaseBodyFromRef(packageVersion, ref)
    : buildReleaseBody(packageVersion);

  process.stdout.write(`${body}\n`);
}

const scriptPath = process.argv[1];
if (scriptPath && import.meta.url === pathToFileURL(scriptPath).href) {
  try {
    previewReleaseNotes();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}
