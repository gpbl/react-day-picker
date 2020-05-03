import { resolve } from 'path';
import { compile } from 'handlebars';

import { ProjectReflection, ReflectionKind } from 'typedoc';
import { findReflection } from './helpers/reflections';
import { makeDir } from './helpers/makeDir';
import { writeFile } from './helpers/writeFile';
import { readFile } from './helpers/readFile';

const tplPath = resolve(__dirname, 'templates', 'pages', 'interfaces.tpl');
const template = compile(readFile(tplPath), { noEscape: true });

/**
 * Write components files (functions with "@category components")
 */
export function writeInterfaces(
  project: ProjectReflection,
  outputPath: string
) {
  makeDir(outputPath);
  const interfaces = findReflection(project, ReflectionKind.Interface);
  const componentPath = `${outputPath}/interface.mdx`;

  writeFile(componentPath, template({ interfaces }));
  console.log(componentPath);
}
