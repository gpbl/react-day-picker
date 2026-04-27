import { cp, mkdir, readdir, writeFile } from "node:fs/promises";

const packageRoot = new URL("../", import.meta.url);
const reactDayPickerSrc = new URL("../react-day-picker/src/", packageRoot);
const localeSrc = new URL("locale/", reactDayPickerSrc);
const distRoot = new URL("dist/", packageRoot);
const esmLocaleDist = new URL("esm/locale/", distRoot);
const cjsLocaleDist = new URL("cjs/locale/", distRoot);

await Promise.all([
  mkdir(esmLocaleDist, { recursive: true }),
  mkdir(cjsLocaleDist, { recursive: true }),
]);

await Promise.all(
  [
    "style.css",
    "style.css.d.ts",
    "style.module.css",
    "style.module.css.d.ts",
  ].map((fileName) =>
    cp(new URL(fileName, reactDayPickerSrc), new URL(fileName, distRoot)),
  ),
);

const localeFiles = (await readdir(localeSrc, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
  .map((entry) => entry.name.slice(0, -".ts".length))
  .sort();

for (const localeName of localeFiles) {
  const specifier = `react-day-picker/locale/${localeName}`;
  await Promise.all([
    writeFile(
      new URL(`${localeName}.js`, esmLocaleDist),
      `export * from ${JSON.stringify(specifier)};\n`,
    ),
    writeFile(
      new URL(`${localeName}.d.ts`, esmLocaleDist),
      `export * from ${JSON.stringify(specifier)};\n`,
    ),
    writeFile(
      new URL(`${localeName}.js`, cjsLocaleDist),
      `"use strict";\nmodule.exports = require(${JSON.stringify(specifier)});\n`,
    ),
    writeFile(
      new URL(`${localeName}.d.ts`, cjsLocaleDist),
      `export * from ${JSON.stringify(specifier)};\n`,
    ),
  ]);
}
