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
  categorizeByGroup: true,
  groupOrder: [
    "Props",
    "Classes",
    "Components",
    "Hooks",
    "Contexts",
    "Utilities",
    "Formatters",
    "Labels",
    "*"
  ],
  readme: "none",

  excludePrivate: true,
  excludeProtected: true,
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
