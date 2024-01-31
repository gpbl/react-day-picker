import {
  ContainerReflection,
  DeclarationReflection,
  Reflection,
  Renderer
} from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown/dist/plugin/events.js';
import { MarkdownTheme } from 'typedoc-plugin-markdown/dist/theme/index.js';

import { memberTemplate } from './resources/templates/member.js';

import { signatureMemberIdentifier } from 'typedoc-plugin-markdown/dist/theme/resources/partials/member.signature.identifier.js';
import { declarationMemberIdentifier } from 'typedoc-plugin-markdown/dist/theme/resources/partials/member.declaration.identifier.js';
import { reflectionTemplate } from './resources/templates/reflection.js';

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
}
