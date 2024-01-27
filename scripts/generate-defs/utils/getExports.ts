import { Project } from 'ts-morph';
import { DayPickerExports } from '../types.ts';

export function getExports(project: Project) {
  const sourceFiles = project.getSourceFiles();
  const allExportedDeclarations: Record<string, any> = {};
  for (const sourceFile of sourceFiles) {
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    for (const [name, declarations] of exportedDeclarations.entries()) {
      allExportedDeclarations[name] = declarations[0];
    }
  }

  return allExportedDeclarations;
}
