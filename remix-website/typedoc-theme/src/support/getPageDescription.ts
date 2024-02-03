import { DeclarationReflection } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

export function getPageDescription(
  page: MarkdownPageEvent<DeclarationReflection>
) {
  return (
    page.model.signatures?.[0].comment?.summary || page.model.comment?.summary
  );
}
