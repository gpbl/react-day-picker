// @ts-check
import typedocBase from "./typedoc.base.mjs";

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const options = {
  ...typedocBase,
  name: "API Reference",
  tsconfig: "./tsconfig-v8.json",
  entryPoints: ["./node_modules/react-day-picker-v8/src/index.ts"],
  out: `../docs/api/main`,
  publicPath: `/api/main`,
};

export default options;
