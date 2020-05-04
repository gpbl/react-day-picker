import { resolve } from 'path';
import { compile } from 'handlebars';

import { ProjectReflection, ReflectionKind } from 'typedoc';
import { findReflection } from './helpers/reflections';
import { makeDir } from './helpers/makeDir';
import { writeFile } from './helpers/writeFile';
import { readFile } from './helpers/readFile';

const tplPath = resolve(__dirname, 'templates', 'pages', 'type-aliases.tpl');
const template = compile(readFile(tplPath), { noEscape: true });

/**
 * Write components files (functions with "@category components")
 */
export function writeTypeAliases(
  project: ProjectReflection,
  outputPath: string
) {
  makeDir(outputPath);
  const aliases = findReflection(project, ReflectionKind.TypeAlias);

  const componentPath = `${outputPath}/type.mdx`;

  writeFile(componentPath, template({ aliases }));
  console.log(componentPath);
}
