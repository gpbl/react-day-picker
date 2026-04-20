import { execFileSync } from "node:child_process";

const packageDirs = [
  ".",
  "packages/buddhist",
  "packages/ethiopic",
  "packages/hebrew",
  "packages/hijri",
  "packages/persian",
];

for (const packageDir of packageDirs) {
  execFileSync("npm", ["pack", "--dry-run"], {
    cwd: new URL(`../${packageDir}`, import.meta.url),
    stdio: "inherit",
  });
}
