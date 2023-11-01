import api from '../../generated/api.json';

type Reflection =
  | 'enums'
  | 'classes'
  | 'functions'
  | 'interfaces'
  | 'typeAliases'
  | 'variables';

function lookupByName(reflection: Reflection, name: string) {
  return api[reflection].find((item) => item.name === name);
}

export interface PropsTableProps {
  reflectionName: string;
}

export function PropsTable() {
  const PropsBase = lookupByName('interfaces', 'PropsBase');
  return (
    <table>
      <thead>
        {
          // @ts-expect-error - I don't know how to type this
          PropsBase.properties.map((property) => {
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
          })
        }
      </thead>
    </table>
  );
}
