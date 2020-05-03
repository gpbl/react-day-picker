import { registerHelper, registerPartial } from 'handlebars';
import { resolve } from 'path';
import { readFile } from '../helpers/readFile';

const partials = ['prop', 'syntax', 'enum'];
const helpers = {
  toLowerCase: (str: string | undefined) => str?.toLowerCase(),
  replaceInternalLinks: (str: string | undefined) =>
    str?.replace(/\[\[(\w*)\]\]/gi, (_, p1) => `[${p1}](#${p1.toLowerCase()})`)
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
