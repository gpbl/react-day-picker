const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const ora = require('ora');

const sourceFile = path.resolve('../src/components/DayPicker.js');
const destFile = path.resolve('./src/components/PropDetails/prop_types.json');

const linesRE = /(@[a-z]*) ?(.*)$/gm;

const spinner = ora('Reading prop types for DayPicker...').start();

const parseProps = obj => {
  let props = {};
  Object.entries(obj.props).forEach(([name, details]) => {
    const categories = {};

    let matches;
    while ((matches = linesRE.exec(details.description))) {
      const category = matches[1];
      const description = matches[2] || true;
      categories[category] = description;
    }
    const description = details.description.replace(/@.*/gim, '');
    props[name] = {
      ...details,
      description,
      categories,
    };
  });
  return props;
};

fs.readFile(sourceFile, (err, data) => {
  if (err) {
    throw err;
  }
  const source = data.toString();
  const docs = reactDocs.parse(source);
  const props = parseProps(docs);
  const json = JSON.stringify(props, null, 2);

  spinner.text = 'Writing prop types...';

  fs.writeFile(destFile, json, function(err) {
    if (err) {
      return console.error(err);
    }
    spinner.succeed(`Prop file saved to ${destFile}`);
  });
});
