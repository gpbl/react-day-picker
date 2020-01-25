const MarkdownTheme = require("typedoc-plugin-markdown/dist/theme");
const {
  FrontMatterComponent
} = require("typedoc-plugin-markdown/dist/components/front-matter.component");

/**
 * A typedoc-markdown-plugin theme that works well with docusaurus2 in website.
 */
class WebsiteTheme extends MarkdownTheme.default {
  constructor(renderer, basePath) {
    super(renderer, basePath);
    this.indexName = "index"; // Override the default README.md
    renderer.addComponent("frontmatter", new FrontMatterComponent(renderer));
  }
}

exports.default = WebsiteTheme;
