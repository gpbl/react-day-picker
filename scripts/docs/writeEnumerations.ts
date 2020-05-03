import { resolve } from 'path';
import { compile } from 'handlebars';

import { ProjectReflection, ReflectionKind } from 'typedoc';
import { findReflection } from './helpers/reflections';
import { makeDir } from './helpers/makeDir';
import { logger } from './helpers/logger';
import { writeFile } from './helpers/writeFile';
import { readFile } from './helpers/readFile';

const tplPath = resolve(__dirname, 'templates', 'pages', 'enumerations.tpl');
const template = compile(readFile(tplPath), { noEscape: true });

/**
 * Write components files (functions with "@category components")
 */
export function writeEnumerations(
  project: ProjectReflection,
  outputPath: string
) {
  makeDir(outputPath);
  logger.info('Writing enumerations...');
  const enumerations = findReflection(project, ReflectionKind.Interface);
  logger.info('%s enumerations found.');
  const componentPath = `${outputPath}/enumerations.mdx`;
  writeFile(componentPath, template({ enumerations }));
}
