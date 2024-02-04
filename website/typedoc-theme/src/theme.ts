import { ContainerReflection, Reflection } from "typedoc";
import { MarkdownPageEvent } from "typedoc-plugin-markdown/dist/plugin/events.js";
import { MarkdownRenderer } from "typedoc-plugin-markdown/dist/plugin/types.js";
import { MarkdownTheme } from "typedoc-plugin-markdown/dist/theme/index.js";

// import { commentParts } from "./resources/partials/comment.parts.js";

export class MarkdownCustomTheme extends MarkdownTheme {
  constructor(renderer: MarkdownRenderer) {
    super(renderer);
  }

  // memberTemplate = (pageEvent: MarkdownPageEvent<DeclarationReflection>) => {
  //   return memberTemplate(this.getRenderContext(pageEvent), pageEvent);
  // };

  // reflectionTemplate = (
  //   pageEvent: MarkdownPageEvent<DeclarationReflection>
  // ) => {
  //   return reflectionTemplate(this.getRenderContext(pageEvent), pageEvent);
  // };

  // getRenderContext(pageEvent: MarkdownPageEvent<Reflection> | null) {
  //   const context = super.getRenderContext(pageEvent);

  //   context.partials.signatureMemberIdentifier = function (signature, opts) {
  //     return `<SignatureMemberIdentifier>${signatureMemberIdentifier(context, signature, opts).replace(/^> /gm, "")}</SignatureMemberIdentifier>`;
  //   };

  //   context.partials.declarationMemberIdentifier = function (reflection) {
  //     return `<SignatureMemberIdentifier>${declarationMemberIdentifier(context, reflection).replace(/^> /gm, "")}</SignatureMemberIdentifier>`;
  //   };

  //   return context;
  // }

  getUrls(reflection: ContainerReflection) {
    const projectReflection = reflection.project;
    const urls = super.getUrls(projectReflection);
    urls.forEach((url) => {
      url.url = url.url.replace(/\.md$/, ".mdx");
    });
    return urls;
  }

  render(page: MarkdownPageEvent<Reflection>, template) {
    // try {
    //   if (!template.name) {
    //     let pages = page.model.project.categories;
    //     if (!pages) {
    //       pages = page.model.project.groups;
    //     }
    //     const nav = pages?.map((c) => {
    //       return {
    //         [c.title]: c.children.map((m) => {
    //           let summary = "";

    //           if (m.signatures?.[0].comment?.summary) {
    //             summary = commentParts(
    //               this.getRenderContext(page),
    //               m.signatures?.[0].comment?.summary,
    //             );
    //           } else if (m.comment?.summary) {
    //             summary = commentParts(
    //               this.getRenderContext(page),
    //               m.comment?.summary,
    //             );
    //           }
    //           return {
    //             name: m.name,
    //             kind: ReflectionKind[m.kind],
    //             url: m.url,
    //             deprecated: m.isDeprecated(),
    //             summary,
    //           };
    //         }),
    //       };
    //     });
    //     const jsonData = JSON.stringify(nav, null, 2);
    //     const path = resolve(
    //       process.cwd(),
    //       "./data",
    //       process.env.TYPEDOC_BRANCH || "next",
    //     );
    //     const dest = `${path}/api-exports.json`;
    //     writeFileSync(dest, jsonData);
    //     this.application.logger.info(`API exports generated in ${dest}`);
    //   }
    // } catch (e) {
    //   this.application.logger.error(`Error writing api-exports.json: ${e}`);
    // }
    return super.render(page, template);
  }
}
