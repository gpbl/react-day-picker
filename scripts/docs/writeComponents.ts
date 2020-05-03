import { resolve } from 'path';
import { compile } from 'handlebars';

import { ProjectReflection, DeclarationReflection } from 'typedoc';
import { findReflectionsByCategory } from './helpers/reflections';
import { CategoryTitle } from './helpers/types';
import { makeDir } from './helpers/makeDir';
import { writeFile } from './helpers/writeFile';
import { readFile } from './helpers/readFile';
import { logger } from './helpers/logger';
import { parseTypeReflection } from './helpers/reflections';

const tplPath = resolve(__dirname, 'templates', 'pages', 'component.tpl');
const template = compile(readFile(tplPath), { noEscape: true });

/**
 * Write components files (functions with "@category components")
 */
export function writeComponents(
  project: ProjectReflection,
  outputPath: string
) {
  makeDir(outputPath);

  const reflections = findReflectionsByCategory(
    project,
    CategoryTitle.Components
  );

  reflections.forEach((reflection: DeclarationReflection) => {
    const signature = reflection.signatures?.[0];

    // @ts-ignore
    const type: { id: number } = signature?.parameters?.[0].type;
    const propReflectionId = type.id;

    const props = project.children?.find(
      (reflection) => reflection.id === propReflectionId
    );

    const parsePropsForTemplate = (prop: any) => ({
      name: prop.name,
      shortText: prop.comment?.shortText,
      text: prop.comment?.text,
      defaultValue: prop.defaultValue,
      type: parseTypeReflection(prop.type)
    });
    const templateData = {
      ...reflection,
      shortText: signature?.comment?.shortText,
      text: signature?.comment?.text,
      props: props?.children?.map(parsePropsForTemplate)
    };

    const componentPath = `${outputPath}/${reflection.name}.mdx`;
    writeFile(componentPath, template(templateData));

    logger.info(componentPath);
  });
}
