// Import required modules from Deno's standard library
import * as fs from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";

const owner = "USERNAME"; // Replace with your username
const repo = "REPO"; // Replace with your repo name
const apiURL = `https://api.github.com/repos/gpbl/react-day-picker/releases`;

async function generateChangelog() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const releases = await response.json();
    let changelogContent = "# Changelog\n\n";

    for (const release of releases) {
      const tagName = release.tag_name;
      const publishDate = new Date(release.published_at)
        .toISOString()
        .split("T")[0];
      const body = release.body?.replace(/\r\n/g, "\n") ?? ""; // Normalize newlines for markdown

      changelogContent += `## ${tagName} (${publishDate})\n${body}\n\n`;
    }

    // Make sure the directory exists before trying to write the file
    await fs.ensureDir("./output");
    // Write the content to CHANGELOG.md in the output folder
    await Deno.writeTextFile(join("output", "CHANGELOG.md"), changelogContent);
    console.log("CHANGELOG.md has been generated.");
  } catch (error) {
    console.error("Error fetching releases:", error);
  }
}

generateChangelog();
