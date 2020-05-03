import * as TD from 'typedoc';
import { CategoryTitle } from './types';
import { ReflectionGroup, ReflectionCategory } from 'typedoc/dist/lib/models';

/**
 * Find the reflections belonging to a category.
 */
export function findReflectionsByCategory(
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

export function findReflection(
  project: TD.ProjectReflection,
  kind: TD.ReflectionKind
) {
  const ids = (<unknown>(
    project.groups?.find((group: ReflectionGroup) => group.kind === kind)
      ?.children
  )) as number[];

  const reflections = <TD.DeclarationReflection[]>(
    ids?.map((id: number) =>
      project!.children!.find(
        (reflection: TD.Reflection) => reflection.id === id
      )
    )
  );
  return reflections!;
}

const mdnUrl =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/';
const dateFnsUrl = 'https://date-fns.org/docs/';

function getLink(reflection: any) {
  const { id, name } = reflection;
  let link;
  if (id) {
    link = `./types#${name.toLowerCase()}`;
  } else if (
    name === 'Date' ||
    name === 'string' ||
    name === 'boolean' ||
    name === 'number'
  ) {
    link = `${mdnUrl}${name}`;
  } else if (name.indexOf('dateFns') > -1) {
    link = `${dateFnsUrl}${name.replace('dateFns.', '')}`;
  }
  return link;
}

/**
 * Parse a type reflections for the syntax template.
 */
export function parseTypeReflection(
  reflection: any
): { name: string; link: string | undefined } {
  const { type, name, elementType } = reflection;
  switch (type) {
    case 'intrinsic':
    case 'reference':
      return { name, link: getLink(reflection) };
    case 'array': {
      const arrayType = parseTypeReflection(elementType);
      return {
        name: `Array&lt;${arrayType.name}&gt;`,
        link: arrayType.link
      };
    }
    default:
      return { name, link: undefined };
  }
}
