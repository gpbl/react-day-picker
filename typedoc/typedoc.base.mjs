// @ts-check
/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<
 *     import("typedoc-plugin-markdown").MarkdownThemeRenderContext["options"]
 *   >}
 */
const options = {
  name: "API Reference",
  includeVersion: true,

  basePath: "../",

  readme: "none",
  plugin: [
    "typedoc-plugin-markdown",
    "typedoc-plugin-frontmatter",
    // "./plugin/index.mjs",
  ],

  excludePrivate: true,
  sort: ["alphabetical"],

  entryFileName: "index.mdx",
  useMDXFileExt: true,

  // expandObjects: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  parametersFormat: "table",
  namedAnchors: false,
  preserveAnchorCasing: false,
  propertiesFormat: "table",
  enumMembersFormat: "table",
  typeDeclarationFormat: "table",
  indexFormat: "table",

  // @ts-expect-error Types are wrong
  frontmatterGlobals: {},
}

export default options
