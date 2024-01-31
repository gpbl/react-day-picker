import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

export function getPageCategory(page: MarkdownPageEvent) {
  return page.model.project.categories?.find((c) =>
    c.children.find((m) => m.name === page.model.name)
  )?.title;
}
