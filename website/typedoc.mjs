/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<import("typedoc-plugin-markdown").PluginOptions> &
 *   Partial<import("docusaurus-plugin-typedoc").PluginOptions> &
 *   Partial<
 *     import("typedoc-plugin-frontmatter/dist/options/models").PluginOptions
 *   >}
 */
const options = {
  // eslint-disable-next-line no-undef
  watch: process.env.TYPEDOC_WATCH === "trueee",
  name: "API",
  includeVersion: true,
  basePath: "../",
  entryPoints: ["../src/index.ts"],
  tsconfig: "../tsconfig-docs.json",
  categorizeByGroup: true,
  groupOrder: [
    "DayPicker",
    "Props",
    "Classes",
    "Components",
    "Formatters",
    "Labels",
    "Utilities",
    "Hooks",
    "Contexts",
    "*"
  ],
  readme: "none",

  suppressCommentWarningsInDeclarationFiles: true,

  excludePrivate: true,
  excludeExternals: true,
  excludeProtected: true,
  sort: ["alphabetical"],

  entryFileName: "index.mdx",

  expandObjects: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  preserveAnchorCasing: false,

  typeDeclarationFormat: "table",
  parametersFormat: "table",
  expandParameters: false,
  propertiesFormat: "list",
  propertyMembersFormat: "list",
  enumMembersFormat: "table",
  indexFormat: "table",
  tableColumnSettings: {
    hideDefaults: false,
    hideInherited: false,
    hideModifiers: false,
    hideOverrides: false,
    hideSources: true,
    hideValues: false,
    leftAlignHeaders: false
  },
  plugin: ["typedoc-plugin-markdown", "typedoc-plugin-frontmatter"]
};

export default options;
