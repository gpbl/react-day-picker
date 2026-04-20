import { execFileSync } from "node:child_process";

const tag = process.argv[2];

if (!tag) {
  throw new Error("Usage: node ./scripts/publish-packages.mjs <npm-tag>");
}

const packageDirs = [
  ".",
  "packages/buddhist",
  "packages/ethiopic",
  "packages/hebrew",
  "packages/hijri",
  "packages/persian",
];

for (const packageDir of packageDirs) {
  execFileSync("npm", ["publish", "--provenance", "--tag", tag], {
    cwd: new URL(`../${packageDir}`, import.meta.url),
    stdio: "inherit",
  });
}
