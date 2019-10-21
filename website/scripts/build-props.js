const fs = require('fs');
const path = require('path');
const { withDefaultConfig } = require('react-docgen-typescript');

const sourceFile = path.resolve(__dirname, '../../package/src/DayPicker.tsx');
const destFile = path.resolve(
  __dirname,
  '../src/components/PropDetails/prop_types.json'
);

console.log('Reading props from... %s', sourceFile);
const linesRE = /(@[a-z]*) ?(.*)$/gm;

const parseProps = obj => {
  let props = {};
  if (!obj.props) {
    console.log('Props not found');
    console.log(obj);
    process.exit(1);
  }
  Object.entries(obj.props).forEach(([name, details]) => {
    const categories = {};
    let matches;
    while ((matches = linesRE.exec(details.description))) {
      const category = matches[1];
      const description = matches[2] || true;
      categories[category] = description;
    }
    delete details.parent;
    const description = details.description.replace(/@.*/gim, '');
    props[name] = {
      ...details,
      description,
      categories,
    };
  });
  return props;
};

const docs = withDefaultConfig().parse(sourceFile);
const props = parseProps(docs[0]);

const json = JSON.stringify(props, null, 2);

console.log('Writing props to %s', destFile);

fs.writeFile(destFile, json, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Done.');
});
