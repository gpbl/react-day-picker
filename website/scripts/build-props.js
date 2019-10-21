const fs = require('fs');
const path = require('path');
const { withDefaultConfig } = require('react-docgen-typescript');

const sourceFile = path.resolve(__dirname, '../../package/src/DayPicker.tsx');
const destFile = path.resolve(
  __dirname,
  '../src/components/PropDetails/prop_types.json'
);

console.log('[INFO] Started build props script');
console.log(`[INFO] Reading props from %s...`, sourceFile);
const linesRE = /(@[a-z]*) ?(.*)$/gm;

const parseProps = obj => {
  let props = {};
  if (!obj) {
    return undefined;
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
if (!props) {
  console.log('[INFO] Props file couldn’t be created.');
  process.exit();
}
const json = JSON.stringify(props, null, 2);

console.log('[INFO] Writing props to %s', destFile);

fs.writeFile(destFile, json, function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Done.');
});
