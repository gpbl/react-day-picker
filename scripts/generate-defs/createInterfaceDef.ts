import { InterfaceDeclaration } from 'ts-morph';
import { type NodeDef, createNodeDef } from './createNodeDef.ts';
import { type JSDocDef, createJsDocDef } from './createJsDocDef.ts';
import { type PropertyDef, createPropertyDef } from './createPropertyDef.ts';

export interface InterfaceDef extends NodeDef, JSDocDef {
  extend: string[];
  inherit: string[];
  properties: PropertyDef[];
}

export async function createInterfaceDef(
  interfaceDeclaration: InterfaceDeclaration
) {
  const name = interfaceDeclaration.getName();

  const nodeDef = createNodeDef(interfaceDeclaration);
  const jsDocDef = await createJsDocDef(interfaceDeclaration);

  const properties = await Promise.all(
    interfaceDeclaration.getProperties().map(createPropertyDef)
  );

  const extend = interfaceDeclaration.getExtends().map((extend) => {
    return extend.getText();
  });
  const inherit = interfaceDeclaration.getHeritageClauses().map((clause) => {
    return clause.getText();
  });

  const interfaceDef: InterfaceDef = {
    ...jsDocDef,
    ...nodeDef,
    name,
    inherit,
    extend,
    properties
  };

  return interfaceDef;
}
