/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<import("typedoc-plugin-markdown").PluginOptions> &
 *   Partial<import("docusaurus-plugin-typedoc").PluginOptions> &
 *   Partial<
 *     import("typedoc-plugin-frontmatter/dist/options/models").PluginOptions
 *   >}
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

  // plugin: ["typedoc-plugin-markdown", "typedoc-plugin-frontmatter"]
};

export default options;
