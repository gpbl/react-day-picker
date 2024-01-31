import { DeclarationReflection, ReflectionKind } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownThemeRenderContext
} from 'typedoc-plugin-markdown';

import { getPageCategory } from '../../support/getPageCategory.js';
import { getPageDescription } from '../../support/getPageDescription.js';

/** @category Templates */
export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  md.push(
    `<SectionTitle>${ReflectionKind[page.model.kind]} (${getPageCategory(page)})</SectionTitle>`
  );

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

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

  md.push(context.reflectionMember(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}
