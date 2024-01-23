import { type Project } from 'ts-morph';

/** Get an exported member from the ts-morph project. */
export function getExportedDeclarations(
  project: Project,
  declarationName: string
) {
  const sourceFiles = project.getSourceFiles();

  for (const sourceFile of sourceFiles) {
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const exportedDeclaration = exportedDeclarations.get(declarationName);
    if (exportedDeclaration) {
      return exportedDeclaration;
    }
  }
}
