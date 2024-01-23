import { InterfaceDeclaration } from 'ts-morph';
import { createPropsDefs } from './createPropsDefs.ts';
import { InterfaceDef } from './types.ts';
import { createNodeDef } from './createNodeDef.ts';
import { createJsDocDef } from './createJsDocDef.ts';

export async function createInterfaceDef(
  interfaceDeclaration: InterfaceDeclaration
) {
  const name = interfaceDeclaration.getName();

  const nodeDef = createNodeDef(interfaceDeclaration);
  const jsDocDef = await createJsDocDef(interfaceDeclaration);

  const props = await createPropsDefs(interfaceDeclaration);

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
    props
  };

  return interfaceDef;
}
