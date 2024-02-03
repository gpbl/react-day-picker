/**
 * A set of helpers that parses TypeDoc models to be consumed by theme
 * resources.
 *
 * @module
 */

import {
  DeclarationReflection,
  ParameterReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection
} from 'typedoc';
import { backTicks, strikeThrough } from '../support/elements.js';
import { escapeChars } from '../support/utils.js';

export function getDeclarationType(declaration: DeclarationReflection) {
  if (declaration.signatures) {
    return declaration.signatures[0].type;
  }
  if (declaration.getSignature) {
    return declaration.getSignature.type;
  }
  if (declaration.setSignature) {
    return declaration.setSignature.type;
  }
  return declaration.type;
}

export function getProjectDisplayName(
  project: ProjectReflection,
  includeVersion: boolean
): string {
  const version =
    includeVersion && project.packageVersion
      ? ` v${project.packageVersion}`
      : '';
  return `${project.name}${version ? version : ''}`;
}

export function hasIndex(
  reflection: DeclarationReflection | ProjectReflection
) {
  return reflection.groups?.some((group) => group.allChildrenHaveOwnDocument());
}

export function isAbsoluteIndex(
  reflection: DeclarationReflection | ProjectReflection
) {
  return reflection.groups?.every((group) =>
    group.allChildrenHaveOwnDocument()
  );
}

export function isGroupKind(
  reflection: DeclarationReflection | SignatureReflection
) {
  const groupKinds = [
    ReflectionKind.Class,
    ReflectionKind.Interface,
    ReflectionKind.Enum,
    ReflectionKind.Function,
    ReflectionKind.Variable,
    ReflectionKind.TypeAlias
  ];
  return groupKinds.includes(reflection.kind);
}

export function getModifier(reflection: DeclarationReflection) {
  if (reflection.flags.isAbstract) {
    return 'abstract';
  }
  if (reflection.flags.isPrivate) {
    return 'private';
  }
  if (reflection.flags.isReadonly) {
    return 'readonly';
  }
  if (reflection.flags.isStatic) {
    return 'static';
  }
  if (reflection.flags.isProtected) {
    return 'protected';
  }
  if (reflection.flags.isPublic) {
    return 'public';
  }
  if (reflection.getSignature) {
    return 'get';
  }
  if (reflection.setSignature) {
    return 'set';
  }
  return null;
}

export const KEYWORD_MAP = {
  [ReflectionKind.Class]: 'class',
  [ReflectionKind.Interface]: 'interface',
  [ReflectionKind.Enum]: 'enum',
  [ReflectionKind.TypeAlias]: 'type',
  [ReflectionKind.Function]: 'function'
};

export function getMemberTitle(reflection: DeclarationReflection) {
  const md: string[] = [];

  const name: string[] = [];

  if (
    reflection?.kind === ReflectionKind.Class &&
    reflection?.flags?.includes('Abstract')
  ) {
    name.push(backTicks('abstract') + ' ');
  }

  name.push(
    `${
      reflection.name.startsWith('[') && reflection.signatures?.length
        ? backTicks(reflection.name)
        : escapeChars(reflection.name)
    }`
  );

  if (reflection.signatures?.length) {
    name.push('()');
  }

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    name.push(`${`\\<${typeParameters}\\>`}`);
  }

  if (reflection.flags.isOptional) {
    name.push('?');
  }

  if (reflection.isDeprecated && reflection.isDeprecated()) {
    md.push(strikeThrough(name.join('')));
  } else {
    md.push(name.join(''));
  }

  return md.join(': ');
}

export function flattenDeclarations(
  props: DeclarationReflection[],
  includeSignatures = false
) {
  const flattenDeclarations = (current: DeclarationReflection) => {
    return (current.type as any)?.declaration?.children?.reduce(
      (acc: DeclarationReflection[], child: DeclarationReflection) => {
        const childObj = {
          ...child,
          name: `${current.name}.${child.name}`
        } as DeclarationReflection;
        return parseDeclarations(childObj, acc);
      },
      []
    );
  };

  const parseDeclarations = (
    current: DeclarationReflection,
    acc: DeclarationReflection[]
  ) => {
    const shouldFlatten = (current.type as any)?.declaration?.children;
    const isAccessor = current.kind === ReflectionKind.Accessor;

    if (includeSignatures) {
      if (isAccessor) {
        const accessors: any[] = [];
        if (current.getSignature) {
          accessors.push({
            ...current,
            name: `get ${current.name}`,
            type: current.getSignature.type,
            comment: current.getSignature?.comment
          });
        }
        if (current.setSignature) {
          accessors.push({
            ...current,
            name: `set ${current.name}`,
            type: current.setSignature.type,
            comment: current.setSignature?.comment
          });
        }
        return [...acc, ...accessors];
      }

      if (current.signatures?.length) {
        const signatures = current.signatures.map((signature) => {
          return {
            ...current,
            name: signature.name,
            type: signature.type,
            comment: signature.comment
          };
        });
        return [...acc, ...signatures];
      }
    }

    return shouldFlatten
      ? [...acc, current, ...flattenDeclarations(current)]
      : [...acc, current];
  };

  return props.reduce(
    (acc: DeclarationReflection[], current: DeclarationReflection) =>
      parseDeclarations(current, acc),
    []
  );
}

export function getSignatureParameters(
  parameters: ParameterReflection[],
  format = false
) {
  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional
  );
  return (
    '(' +
    parameters
      .map((param, i) => {
        const paramsmd: string[] = [];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramItem = `${backTicks(param.name)}${
          param.flags.isOptional ||
          (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
            ? '?'
            : ''
        }`;
        paramsmd.push(
          `${format && parameters.length > 2 ? `\n   ` : ''}${paramItem}`
        );
        return paramsmd.join('');
      })
      .join(`, `) +
    ')'
  );
}

export function getIndexFileName(
  reflection: ProjectReflection | DeclarationReflection,
  isPackages = false
) {
  if (isPackages) {
    return 'packages.md';
  }
  const isModules = reflection.children?.every((child) =>
    child.kindOf(ReflectionKind.Module)
  );
  return isModules ? 'modules.md' : 'globals.md';
}
