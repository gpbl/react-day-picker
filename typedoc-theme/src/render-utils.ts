import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';

const TEMPLATE_PATH = path.join(__dirname, 'resources', 'templates');

export const reflectionTemplate = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_PATH, 'reflection.hbs')).toString()
);

export function registerPartials() {
  const partialsFolder = path.join(__dirname, 'resources', 'partials');
  const partialFiles = fs.readdirSync(partialsFolder);
  partialFiles.forEach((partialFile) => {
    const partialName = path.basename(partialFile, '.hbs');
    const partialContent = fs
      .readFileSync(partialsFolder + '/' + partialFile)
      .toString();
    Handlebars.registerPartial(partialName, partialContent);
  });
}
