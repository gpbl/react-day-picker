import { ProjectReflection } from 'typedoc';

import { findReflections } from './helpers/findReflections';
import { CategoryTitle } from './helpers/CategoryTitle';
import { writeFunctions } from './helpers/writeFunctions';

/**
 * Write hooks files (functions with "@category hooks")
 */
export function writeHooks(project: ProjectReflection, output: string) {
  const components = findReflections(project, CategoryTitle.Hooks);
  writeFunctions(CategoryTitle.Hooks, components, output);
}
