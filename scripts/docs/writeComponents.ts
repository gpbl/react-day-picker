import { ProjectReflection } from 'typedoc';
import { findReflections } from './helpers/findReflections';
import { CategoryTitle } from './helpers/CategoryTitle';
import { writeFunctions } from './helpers/writeFunctions';

/**
 * Write components files (functions with "@category components")
 */
export function writeComponents(project: ProjectReflection, output: string) {
  writeFunctions(CategoryTitle.Components, project, output);
}
