import * as TD from 'typedoc';
import { CategoryTitle } from './CategoryTitle';
import { ReflectionGroup, ReflectionCategory } from 'typedoc/dist/lib/models';

/**
 * Find the reflections belonging to a category.
 */
export function findReflections(
  project: TD.ProjectReflection,
  title: CategoryTitle
): TD.DeclarationReflection[] {
  const functionsGroup = project.groups!.find(
    (group: ReflectionGroup) => group.kind === TD.ReflectionKind.Function
  );
  const ids = <[number]>(
    (<unknown>(
      functionsGroup!.categories!.find(
        (cat: ReflectionCategory) => cat.title.toLowerCase() === title
      )?.children
    ))
  );

  const reflections = <TD.DeclarationReflection[]>(
    ids.map((reflectionId: number) =>
      project!.children!.find(
        (reflection: TD.Reflection) => reflection.id === reflectionId
      )
    )
  );
  return reflections!;
}
