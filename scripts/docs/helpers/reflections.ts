import * as TD from 'typedoc';
import { CategoryTitle } from './types';
import { ReflectionGroup, ReflectionCategory } from 'typedoc/dist/lib/models';

export function findReflection(
  project: TD.ProjectReflection,
  kind: TD.ReflectionKind,
  categoryTitle?: CategoryTitle
) {
  console.log(
    'Finding reflections with kind "%s" and category "%s"',
    kind,
    categoryTitle
  );
  const group = <any>(
    project.groups?.find((group: ReflectionGroup) => group.kind === kind)
  );

  let ids = [];

  if (!categoryTitle) {
    ids = group.children;
  } else {
    const category = group.categories.find(
      (cat: any) => cat.title.toLowerCase() === categoryTitle
    );
    ids = category.children;
  }

  const reflections = <TD.DeclarationReflection[]>ids?.map((id: number) => {
    const reflection = project!.children!.find(
      (reflection: TD.Reflection) => reflection.id === id
    );
    const children = reflection?.children?.map((child: any) => {
      let { type } = child;
      if (type?.id) {
        const typeExtended = project.children?.find(
          (child) => child.id === type.id
        );
        const page = typeExtended?.kindString?.split(' ')[0].toLowerCase();
        const childWithType = {
          ...child,
          type: { ...type, page }
        };
        return childWithType;
      }
      return child;
    });

    return { ...reflection, children };
  });
  return reflections;
}

const mdnUrl =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/';
const dateFnsUrl = 'https://date-fns.org/docs/';

function getLink(reflection: any) {
  const { id, name } = reflection;
  let link = '';
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
