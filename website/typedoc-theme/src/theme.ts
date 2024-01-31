import {
  ContainerReflection,
  DeclarationReflection,
  Reflection,
  ReflectionKind,
  RenderTemplate,
  Renderer
} from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown/dist/plugin/events.js';
import { MarkdownTheme } from 'typedoc-plugin-markdown/dist/theme/index.js';

import { memberTemplate } from './resources/templates/member.js';

import { signatureMemberIdentifier } from 'typedoc-plugin-markdown/dist/theme/resources/partials/member.signature.identifier.js';
import { declarationMemberIdentifier } from 'typedoc-plugin-markdown/dist/theme/resources/partials/member.declaration.identifier.js';
import { reflectionTemplate } from './resources/templates/reflection.js';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { commentParts } from './resources/partials/comment.parts.js';

export class MarkdownCustomTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }

  memberTemplate = (pageEvent: MarkdownPageEvent<DeclarationReflection>) => {
    return memberTemplate(this.getRenderContext(pageEvent), pageEvent);
  };

  reflectionTemplate = (
    pageEvent: MarkdownPageEvent<DeclarationReflection>
  ) => {
    return reflectionTemplate(this.getRenderContext(pageEvent), pageEvent);
  };

  getRenderContext(pageEvent: MarkdownPageEvent<Reflection> | null) {
    const context = super.getRenderContext(pageEvent);

    context.signatureMemberIdentifier = function (signature, opts) {
      return `<SignatureMemberIdentifier>${signatureMemberIdentifier(context, signature, opts).replace(/^> /gm, '')}</SignatureMemberIdentifier>`;
    };

    context.declarationMemberIdentifier = function (reflection) {
      return `<SignatureMemberIdentifier>${declarationMemberIdentifier(context, reflection).replace(/^> /gm, '')}</SignatureMemberIdentifier>`;
    };

    return context;
  }

  getUrls(reflection: ContainerReflection) {
    const projectReflection = reflection.project;
    const urls = super.getUrls(projectReflection);
    urls.forEach((url) => {
      url.url = url.url.replace(/\.md$/, '.mdx');
    });
    return urls;
  }

  render(
    page: MarkdownPageEvent<Reflection>,
    template: RenderTemplate<MarkdownPageEvent<Reflection>>
  ) {
    if (!template.name) {
      const nav = page.model.project.categories?.map((c) => {
        return {
          [c.title]: c.children.map((m) => {
            let summary = '';

            if (m.signatures?.[0].comment?.summary) {
              summary = commentParts(
                this.getRenderContext(page),
                m.signatures?.[0].comment?.summary
              );
            } else if (m.comment?.summary) {
              summary = commentParts(
                this.getRenderContext(page),
                m.comment?.summary
              );
            }
            return {
              name: m.name,
              kind: ReflectionKind[m.kind],
              url: m.url,
              deprecated: m.isDeprecated(),
              summary
            };
          })
        };
      });
      const jsonData = JSON.stringify(nav, null, 2);
      const dest = resolve(process.cwd(), './data', 'api-exports.json');
      writeFileSync(dest, jsonData);
      this.application.logger.info(`Written in ${dest}`);
    }
    return super.render(page, template);
  }
}
