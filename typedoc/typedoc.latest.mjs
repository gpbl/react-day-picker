// @ts-check
import typedocBase from "./typedoc.base.mjs"

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const options = {
  ...typedocBase,
  name: "API Reference",
  tsconfig: "../tsconfig-esm.json",
  entryPoints: ["../src/index.ts"],
  out: `../docs/api/latest`,
  publicPath: `/api/latest`,
}

export default options
