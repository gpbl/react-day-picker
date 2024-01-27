import type { InterfaceDef } from 'scripts';

export function isInterfaceDef(json: object): json is InterfaceDef {
  return 'kind' in json && json['kind'] === 'InterfaceDeclaration';
}
