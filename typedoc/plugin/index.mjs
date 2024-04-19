// @ts-check

import { ReflectionKind } from "typedoc";
import { MarkdownHooks } from "typedoc-plugin-markdown";

import fs from "node:fs";

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

    const section =
      event.page.model.comment?.getTag("@description")?.content[0]?.text;
    const description =
      event.page.model.comment?.getTag("@category")?.content[0]?.text ||
      ReflectionKind[event.page.model.kind];
    const deprecated = event.page.model.isDeprecated() || undefined;
    event.page.frontmatter = {
      pagination: false,
      section,
      title,
      description,
      deprecated,
    };
    return "";
  });
  app.renderer.postRenderAsyncJobs.push(
    /** @param {import("typedoc-plugin-markdown").MarkdownRendererEvent} event */
    async (event) => {
      // The navigation JSON structure is available on the output.
      const navigation = event.navigation;
      // This can be parsed to something else or written straight to a file:
      fs.writeFileSync("navigation.json", JSON.stringify(navigation));
    }
  );
}
