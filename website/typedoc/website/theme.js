const RendererEvent = require("typedoc/dist/lib/output/events").RendererEvent;
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
    renderer.addComponent("frontmatter", new FrontMatterComponent(renderer));
    this.listenTo(
      renderer,
      RendererEvent.END,
      renderer => this.writeSummary(renderer),
      1024
    );
    this.indexName = "index"; // Override the default README.md
  }
  writeSummary(renderer) {
    console.log(this.indexName);
    // console.log(this.getNavigation(renderer.project).children[1]);
  }
}

exports.default = WebsiteTheme;
