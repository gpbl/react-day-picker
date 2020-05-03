import { resolve } from 'path';
import { compile } from 'handlebars';

import * as TD from 'typedoc';
import { findReflection } from './helpers/reflections';
import { CategoryTitle } from './helpers/types';
import { makeDir } from './helpers/makeDir';
import { writeFile } from './helpers/writeFile';
import { readFile } from './helpers/readFile';

const tplPath = resolve(__dirname, 'templates', 'pages', 'component.tpl');
const template = compile(readFile(tplPath), { noEscape: true });

/**
 * Write components files (functions with "@category components")
 */
export function writeComponents(
  project: TD.ProjectReflection,
  outputPath: string
) {
  makeDir(outputPath);

  const components = findReflection(
    project,
    TD.ReflectionKind.Function,
    CategoryTitle.Components
  );

  components.forEach((c: any) => {
    const component = c.signatures[0];
    const propReflectionId = component.parameters[0].type.id;
    const propReflection = project.children?.find(
      (child) => child.id === propReflectionId
    );
    let props = propReflection?.children;

    props = props?.map((prop: any) => {
      let page;
      if (prop.type.id) {
        const typeExtended = project.children?.find(
          (child) => child.id === prop.type.id
        );
        page = typeExtended?.kindString?.split(' ')[0].toLowerCase();
      }
      return {
        ...prop,
        type: { ...prop.type, page }
      };
    });

    const templateData = {
      ...component,
      props
    };
    const componentPath = `${outputPath}/${component.name}.mdx`;
    writeFile(componentPath, template(templateData));
    console.log(componentPath);
  });
}
