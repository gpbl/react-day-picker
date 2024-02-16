// @ts-check

import { ReflectionKind } from "typedoc";
import { MarkdownHooks } from "typedoc-plugin-markdown";

/** @typedef {import("typedoc-plugin-markdown").MarkdownApplication} MarkdownApplication */
/** @typedef {import("typedoc-plugin-markdown").MarkdownRendererEvent} MarkdownRendererEvent */

/** @param {MarkdownApplication} app */
export function load(app) {
  // Add a hook to insert markdown at the top of the page.
  app.renderer.markdownHooks.on(MarkdownHooks.PAGE_BEGIN, (event) => {
    if (!event.page) {
      return "";
    }
    const title = event.page.model.name;
    const description =
      event.page.model.comment?.getTag("@description")?.content[0]?.text;

    const section =
      event.page.model.comment?.getTag("@group")?.content[0]?.text ||
      ReflectionKind[event.page.model.kind];

    const deprecated = event.page.model.isDeprecated() || undefined;

    event.page.frontmatter = {
      section,
      title,
      description,
      deprecated,
    };

    return "";
  });
}
