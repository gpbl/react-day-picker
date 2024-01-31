import { DeclarationReflection, ReflectionKind } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownThemeRenderContext
} from 'typedoc-plugin-markdown';

import { getPageCategory } from '../../support/getPageCategory.js';
import { getPageDescription } from '../../support/getPageDescription.js';

export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>
) {
  const md: string[] = [];

  md.push(
    `<SectionTitle>${ReflectionKind[page.model.kind]} (${getPageCategory(page)})</SectionTitle>`
  );

  if (!context.options.getValue('hidePageTitle')) {
    md.push(`# ${context.pageTitle(page)}`);
  }

  const description = getPageDescription(page);
  if (description) {
    md.push(`<Description>
${context.commentParts(description)}
</Description>`);
  }

  md.push('---');

  md.push(context.member(page.model, 1));

  return md.join('\n\n');
}
