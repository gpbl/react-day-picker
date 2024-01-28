import {
  DeclarationReflection,
  ParameterReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  SignatureReflection
} from 'typedoc';

export function formatContents(contents: string) {
  return (
    contents
      .replace(/[\r\n]{3,}/g, '\n\n')
      .replace(/!spaces/g, '')
      .replace(/^\s+|\s+$/g, '') + '\n'
  );
}

export function escapeChars(str: string) {
  return str
    .replace(/</g, '\\<')
    .replace(/>/g, '\\>')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/{/g, '\\{');
}

export function memberSymbol(
  reflection: DeclarationReflection | ParameterReflection | SignatureReflection
) {
  const isStatic = reflection.flags && reflection.flags.isStatic;

  if (reflection.kind === ReflectionKind.CallSignature) {
    return '▸';
  }
  if (reflection.kind === ReflectionKind.TypeAlias) {
    return 'Ƭ';
  }
  if (reflection.kind === ReflectionKind.Property && isStatic) {
    return '▪';
  }
  return '•';
}

export function spaces(length: number) {
  return `!spaces${[...Array(length)].map(() => ' ').join('')}`;
}

export function stripComments(str: string) {
  return str
    .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
    .replace(/\n/g, '')
    .replace(/^\s+|\s+$|(\s)+/g, '$1');
}

export function stripLineBreaks(str: string) {
  return str
    ? str
        .replace(/\n/g, ' ')
        .replace(/\r/g, ' ')
        .replace(/\t/g, ' ')
        .replace(/[\s]{2,}/g, ' ')
        .trim()
    : '';
}

export function camelToTitleCase(text: string) {
  return (
    text.substring(0, 1).toUpperCase() +
    text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`)
  );
}

export function getDisplayName(refl: Reflection): string {
  let version = '';
  if (
    (refl instanceof DeclarationReflection ||
      refl instanceof ProjectReflection) &&
    refl.packageVersion
  ) {
    version = ` - v${refl.packageVersion}`;
  }
  return `${refl.name}${version}`;
}
