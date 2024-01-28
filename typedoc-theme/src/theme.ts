import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { Renderer, ContainerReflection, PageEvent, UrlMapping } from 'typedoc';
import { reflectionTemplate, registerPartials } from './render-utils';

export class MyTypedocTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
    registerPartials();
  }

  getReflectionTemplate() {
    return (pageEvent: PageEvent<ContainerReflection>) => {
      return reflectionTemplate(pageEvent, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        data: { theme: this }
      });
    };
  }

  getUrls(reflection: ContainerReflection): UrlMapping[] {
    const projectReflection = reflection.project;
    const urls = super.getUrls(projectReflection);
    urls.forEach((url) => {
      url.url = url.url.replace(/\.md$/, '.mdx');
    });
    return urls;
  }
}
