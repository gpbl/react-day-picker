// @ts-check
import typedocBase from "./typedoc.base.mjs";
import packageJson from "../next/package.json" assert { type: "json" };

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const options = {
  ...typedocBase,
  name: `${packageJson.name} ${packageJson.version}`,
  tsconfig: "../next/tsconfig-esm.json",
  entryPoints: ["../next/src/index.ts"],
  out: `../docs/api/next`,
  publicPath: `/api/next`,
};

export default options;
