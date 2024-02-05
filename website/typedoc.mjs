import process from "node:process";
import path from "node:path";

export const typedocBranch = process.env.TYPEDOC_BRANCH || "next";

console.log("[typedoc] Using branch:", typedocBranch);

/** @type {import("typedoc").TypeDocOptions} */
const options = {
  name: "API Reference",
  tsconfig:
    typedocBranch === "next" ? "../tsconfig-esm.json" : "../tsconfig-v8.json",
  entryPoints:
    typedocBranch === "next"
      ? ["../src/index.ts"]
      : [path.resolve("./node_modules/react-day-picker-v8/src/index.ts")],
  out: `./src/pages/docs/api/${typedocBranch}`,

  includeVersion: true,

  gitRevision: typedocBranch,

  basePath: "../",

  categoryOrder: [
    "Component",
    "Formatters",
    "Labels",
    "*",
    "Deprecated Exports",
  ],

  readme: "none",
  plugin: ["typedoc-plugin-markdown", "./typedoc-theme/dist/index.js"],
  theme: "typedoc-theme",

  entryFileName: "index.mdx",

  expandObjects: false,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  parametersFormat: "table",
  namedAnchors: true,
  preserveAnchorCasing: false,
  propertiesFormat: "list",

  publicPath: `/docs/api/${typedocBranch}`,
  enumMembersFormat: "table",
  typeDeclarationFormat: "table",
  indexFormat: "table",
  textContentMappings: {
    "title.memberPage": "{name}",
  },
};

export default options;
