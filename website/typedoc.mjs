// @ts-check
/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<import("typedoc-plugin-markdown").PluginOptions>}
 */
const options = {
  name: "API",
  includeVersion: true,

  basePath: "../",
  entryPoints: ["../src/index.ts"],
  tsconfig: "../tsconfig-docs.json",

  readme: "none",

  excludePrivate: true,
  sort: ["alphabetical"],

  entryFileName: "index.mdx",

  expandObjects: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  preserveAnchorCasing: false,

  parametersFormat: "table",
  propertiesFormat: "list",
  enumMembersFormat: "table",
  typeDeclarationFormat: "table",
  indexFormat: "table"

  // watch: import("node:process").env.TYPEDOC_WATCH,

  // frontmatterGlobals: {
  //   pagination_next: null,
  //   pagination_prev: null
  // }
};

export default options;
