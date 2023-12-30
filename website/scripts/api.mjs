// x@ts-check

/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFileSync } from 'fs';
import data from '../generated/api-parsed.json' assert { type: 'json' };
import { ProjectParser } from 'typedoc-json-parser';
const project = new ProjectParser({ data });

// type API = typeof api;
// type Class = API['classes'][0];
// type Enum = API['enums'][0];
// type Function = API['functions'][0];
// type Interface = API['interfaces'][0];
// type InterfaceProperty = Interface['properties'][0];
// type TypeAliases = API['typeAliases'][0];
// type Variable = API['variables'][0];

// type Reflection =
//   | 'enums'
//   | 'classes'
//   | 'functions'
//   | 'interfaces'
//   | 'typeAliases'
//   | 'variables';

// function lookupByName(reflection: string, name: string) {
//   return api[reflection].find((item) => item.name === name);
// }

function getType(property) {
  let type = property.type;

  if (type.name === 'Date') {
    type = `[\`Date\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)`;
  } else if (type.packageName === 'react-day-picker') {
    type = `[\`${type.name}\`](#${type.name.toLowerCase()})`;
  } else {
    type = `\`${type.name}\``;
  }

  return type;
}

function createProperties(search) {
  const props = project.search(search)[0];

  const header = `

### ${search}

${props.comment.description}
  
| Name | Type | Description |\n|------|------|-------------|\n`;

  const rows = props?.properties
    .sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      return 0;
    })
    .map((property) => {
      const { name, comment } = property;
      return `| **${name}** | ${getType(property)} |  ${
        comment.description ? comment.description.split('\n')[0] : ''
      }\n`;
    })
    .join('');
  return header + rows;
}

function create() {
  return `

${createProperties('PropsBase')}

## PropsSingle

${createProperties('PropsSingle')}

## PropsMulti

${createProperties('PropsSingle')}

## PropsRange

${createProperties('PropsSingle')}
`;
}

writeFileSync('./generated/props.mdx', create());
