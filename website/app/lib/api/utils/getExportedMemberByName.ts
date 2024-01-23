import { project } from '../project';

export function getExportedMemberByName(name: string) {
  const sourceFiles = project.getSourceFiles();

  for (const sourceFile of sourceFiles) {
    const exportedDeclarations = sourceFile.getExportedDeclarations();
    const exportedDeclaration = exportedDeclarations.get(name);
    if (exportedDeclaration) {
      return exportedDeclaration;
    }
  }
}
