// @ts-check
import typedocBase from "./typedoc.base.mjs";
import packageJson from "../package.json" assert { type: "json" };

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const options = {
  ...typedocBase,
  name: `${packageJson.name} ${packageJson.version}`,
  tsconfig: "../tsconfig-esm.json",
  entryPoints: ["../src/index.ts"],
  out: `../docs/api/latest`,
  publicPath: `/api/latest`,
  propertiesFormat: "list",
};

export default options;
