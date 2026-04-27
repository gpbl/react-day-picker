import { execFileSync } from "node:child_process";

const packageDirs = [
  "packages/react-day-picker",
  "packages/react",
  "packages/buddhist",
  "packages/ethiopic",
  "packages/hebrew",
  "packages/hijri",
  "packages/persian",
] as const;

for (const packageDir of packageDirs) {
  execFileSync("npm", ["pack", "--dry-run"], {
    cwd: new URL(`../${packageDir}`, import.meta.url),
    stdio: "inherit",
  });
}
