import * as Path from 'path';
import * as Handlebars from 'handlebars';

import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { CategoryTitle } from './CategoryTitle';
import { makeDir } from './makeDir';
import { readFile } from './readFile';
import { writeFile } from './writeFile';
import { logger } from './logger';
import mdx, { sync } from '@mdx-js/mdx';
import { findReflections } from './findReflections';

export function writeFunctions(
  category: CategoryTitle,
  project: ProjectReflection,
  out: string
) {
  makeDir(out);
  const reflections = findReflections(project, CategoryTitle.Components);

  reflections.forEach((reflection: DeclarationReflection) => {
    const reflectionPath = `${out}/${reflection.name}.json`;

    writeFile(reflectionPath, JSON.stringify(reflection, null, 2));

    logger.info(reflectionPath);

    const tplPath = Path.resolve(__dirname, '../templates', `${category}.tpl`);
    const template = Handlebars.compile(readFile(tplPath), { noEscape: true });

    const signature = reflection.signatures?.[0];

    // @ts-ignore
    const propReflectionId = signature?.parameters?.[0].type?.id;

    console.log(propReflectionId);
    const props = project.children?.find(
      (reflection) => reflection.id === propReflectionId
    );
    console.log('PROPS', props?.children);

    const templateData = {
      reflection: JSON.stringify(reflection, null, 2),
      shortText: signature?.comment?.shortText,
      text: signature?.comment?.text,
      name: reflection.name,
      props: props?.children?.map((prop) => ({
        name: prop.name,
        shortText: prop.comment?.shortText,
        text: prop.comment?.text,
        defaultValue: prop.defaultValue,
        // @ts-ignore
        type: prop.type.name
      }))
    };

    // return;
    // console.log(jsx1);
    // console.log(/<MDXLayout [^>]+>(.*?)<\/MDXLayout>/g.exec(jsx1));
    // const shortTextComponent = createMDXComponent('ShortText', shortText || '');
    // writeFile(`${path}/ShortText.js`, shortTextComponent);

    // const text = reflection.signatures?.[0].comment?.text;
    // const textComponent = createMDXComponent('Text', text || '');
    // writeFile(`${path}/Text.js`, textComponent);

    const componentPath = `${out}/${reflection.name}.mdx`;
    writeFile(componentPath, template(templateData));

    logger.info(componentPath);
  });
}
