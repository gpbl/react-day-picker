// @ts-check
import typedocBase from "./typedoc.base.mjs"

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const options = {
  ...typedocBase,
  name: "API Reference",
  tsconfig: "../next/tsconfig-esm.json",
  entryPoints: ["../next/src/index.ts"],
  out: `../docs/api/next`,
  publicPath: `/api/next`,
}

export default options
