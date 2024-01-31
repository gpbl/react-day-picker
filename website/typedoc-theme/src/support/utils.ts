/**
 * A set of pure utils to be consumed accross the plugin.
 *
 * @module
 */

export function escapeChars(str: string) {
  return str
    .replace(/>/g, '\\>')
    .replace(/</g, '\\<')
    .replace(/{/g, '\\{')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/\*/g, '\\*');
}

/**
 * Escapes non html tag angle brackets inside comment blocks.
 * Ignores strings inside code blocks
 */
export function escapeAngleBrackets(str: string) {
  const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
  return str.replace(re, (tags) => {
    const htmlRe =
      /<(?!\/?(div|span|p|a|br|img|ul|li|strike|em|strong|b)(>|\s))[^<]+?>/g;
    const shouldEscape = tags.match(htmlRe);
    return shouldEscape ? tags.replace(/>/g, '>` ').replace(/</g, '`<') : tags;
  });
}

export function trimLastLine(content: string) {
  const lines = content.split('\n');
  return lines
    .map((line, index) => (index === lines.length - 1 ? line.trim() : line))
    .join('\n');
}

export function unEscapeChars(str: string) {
  return str
    .replace(/\\</g, '<')
    .replace(/\\>/g, '>')
    .replace(/\\_/g, '_')
    .replace(/\\{/g, '{')
    .replace(/`/g, '')
    .replace(/\*\*/g, '')
    .replace(/\\\|/g, '|')
    .replace(/\\\]/g, ']')
    .replace(/\\\[/g, '[')
    .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
}

export function stripComments(str: string) {
  return str
    .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
    .replace(/\n/g, '')
    .replace(/^\s+|\s+$|(\s)+/g, '$1');
}

export function formatTableDescriptionCol(str: string) {
  return str.replace(/\|/g, '\\|');
}

export function formatTableNameCol(str: string) {
  return str.includes('|') ? str.replace(/\|/g, '\\|') : `\`${str}\``;
}

export function stripLineBreaks(str: string, includeHTML = true) {
  return str
    .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, includeHTML ? '<br />' : ' ')
    .replace(/\`\`\`ts/g, '`')
    .replace(/\`\`\`/g, '`')
    .replace(/\n/g, ' ');
}

export function camelToTitleCase(text: string) {
  return (
    text.substring(0, 1).toUpperCase() +
    text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`)
  );
}

export function slugify(str: string) {
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatContents(contents: string) {
  return (
    contents.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n'
  );
}
