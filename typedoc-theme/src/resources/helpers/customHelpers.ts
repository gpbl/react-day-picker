import * as Handlebars from 'handlebars';
import { PageEvent, ParameterReflection, ReflectionKind } from 'typedoc';
import { escapeChars, getDisplayName } from '../../utils';

export default function () {
  Handlebars.registerHelper('SectionTitle', function (this: PageEvent<any>) {
    const title: string[] = [''];
    if (this.model?.kind && this.url !== this.project.url) {
      title.push(
        `<SectionTitle>${ReflectionKind.singularString(
          this.model.kind
        )}</SectionTitle>`
      );
    }
    return title.join('');
  });
  Handlebars.registerHelper('Description', function (this: PageEvent<any>) {
    const title: string[] = [''];
    if (this.model?.kind && this.url !== this.project.url) {
      title.push(`${ReflectionKind.singularString(this.model.kind)}`);
    }
    return title.join('');
  });
  Handlebars.registerHelper(
    'Heading',
    function (this: PageEvent<any>, shouldEscape = true) {
      const title: string[] = [''];
      if (this.url === this.project.url) {
        title.push(getDisplayName(this.model));
      } else {
        title.push(
          shouldEscape ? escapeChars(this.model.name) : this.model.name
        );
        if (this.model.typeParameters) {
          const typeParameters = this.model.typeParameters
            .map((typeParameter: ParameterReflection) => typeParameter.name)
            .join(', ');
          title.push(
            `${shouldEscape ? '\\<' : '<'}${typeParameters}${
              shouldEscape ? '\\>' : '>'
            }`
          );
        }
      }
      return title.join('');
    }
  );
}
