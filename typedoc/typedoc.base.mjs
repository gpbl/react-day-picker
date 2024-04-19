// @ts-check
/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<
 *     import("typedoc-plugin-markdown").MarkdownThemeRenderContext["options"]
 *   >}
 */
const options = {
  name: "react-day-picker",
  includeVersion: true,

  basePath: "../",

  readme: "none",
  plugin: [
    "typedoc-plugin-markdown",
    "typedoc-plugin-frontmatter",
    "./plugin/index.mjs",
  ],

  excludePrivate: true,
  sort: ["alphabetical"],

  entryFileName: "index.mdx",
  useMDXFileExt: true,

  expandObjects: true, 
  indexPageTitle: "Index",
  hideBreadcrumbs: true,
  hidePageHeader: true,
  namedAnchors: false,
  preserveAnchorCasing: false,

  parametersFormat: "table",
  propertiesFormat: "table",
  enumMembersFormat: "table",
  typeDeclarationFormat: "table",
  indexFormat: "table",
};

export default options;
