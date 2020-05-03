import { registerHelper, registerPartial } from 'handlebars';
import { resolve } from 'path';
import { readFile } from '../helpers/readFile';

type LinkType = {
  type: string;
  id: number;
  name: string;
  elementType: { type: string; name: string };
};

const mdnUrl =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/';
const dateFnsUrl = 'https://date-fns.org/docs/';
function getLink(reflection: any) {
  const { name, page } = reflection;
  let link;
  if (page) {
    link = `./${page}#${name.toLowerCase()}`;
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

const partials = [
  'prop',
  'syntax',
  'enum',
  'interface',
  'type',
  'alias',
  'declaration'
];
const helpers = {
  noBreak: (str: string | undefined) => str?.replace(/\n/g, ''),
  toLowerCase: (str: string | undefined) => str?.toLowerCase(),

  replaceLinks: function (str: string | undefined) {
    if (!str) return str;

    if (str.match(/\[\[/)) {
      // Links in the form of [[]] are local # anchors
      return str.replace(
        /\[\[(\w*)\]\]/gi,
        (_, p1) => `[${p1}](#${p1.toLowerCase()})`
      );
    }

    return str;
  },

  linkType: function (reflection: LinkType | undefined): string {
    if (!reflection) return '';
    const { type, name } = reflection;
    switch (type) {
      case 'intrinsic':
      case 'reference':
        return `[\`${name}\`](${getLink(reflection)})`;
      default:
        return name;
    }
  },

  ifEquals: function (arg1: any, arg2: any, options: any) {
    //@ts-ignore
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  },

  parseDeclaration: function (type: any): string {
    return 'declaration parsed';
  }
};

/**
 * Configure handlebars templates and helpers.
 */
export function configure() {
  Object.entries(helpers).map(([name, fun]) => registerHelper(name, fun));
  partials.forEach((name) =>
    registerPartial(
      name,
      readFile(resolve(__dirname, '../templates', 'partials', `${name}.tpl`))
    )
  );
}
