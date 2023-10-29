import api from '../../generated/api.json';

type API = typeof api;
type Class = API['classes'][0];
type Enum = API['enums'][0];
type Function = API['functions'][0];
type Interface = API['interfaces'][0];
type InterfaceProperty = Interface['properties'][0];
type TypeAliases = API['typeAliases'][0];
type Variable = API['variables'][0];

type Reflection =
  | 'enums'
  | 'classes'
  | 'functions'
  | 'interfaces'
  | 'typeAliases'
  | 'variables';

const api2: API = {
  typeDocJsonParserVersion: '',
  id: 0,
  name: '',
  version: '',
  readme: '',
  changelog: null,
  classes: [],
  enums: [],
  functions: [],
  interfaces: [],
  namespaces: [],
  typeAliases: [],
  variables: []
};

function lookupByName(reflection: Reflection, name: string) {
  return api[reflection].find((item) => item.name === name);
}

export interface PropsTableProps {
  reflectionName: string;
}

export function PropsTable(props: PropsTableProps) {
  const PropsBase = lookupByName('interfaces', 'PropsBase') as Interface;
  console.log(PropsBase);
  return (
    <table>
      <thead>
        {PropsBase.properties.map((property) => {
          return (
            <tr>
              <td>
                <code>{property.name}</code>
              </td>
              <td>
                <code>{property.type.name || property.type.type}</code>
              </td>
              <td>{property.comment.description}</td>
            </tr>
          );
        })}
      </thead>
    </table>
  );
}
