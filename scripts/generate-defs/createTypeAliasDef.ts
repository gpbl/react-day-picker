import { TypeAliasDeclaration } from 'ts-morph';

import { createJsDocDef, type JSDocDef } from './createJsDocDef.ts';
import { createNodeDef, type NodeDef } from './createNodeDef.ts';

export interface TypeAliasDef extends NodeDef, JSDocDef {
  // typeParameters: string[];
}

export async function createTypeAliasDef(
  typeDeclaration: TypeAliasDeclaration
) {
  const nodeDef = await createNodeDef(typeDeclaration);
  const jsDocDef = await createJsDocDef(typeDeclaration);
  // const typeNodeDef = await createTypedNodeDef(typeDeclaration);
  // const typeParameters = typeDeclaration
  // .getTypeParameters()
  // .map((param) => param.getText()); // Type Parameters

  const typeAliasDef: TypeAliasDef = {
    ...jsDocDef,
    ...nodeDef
    // ...typeNodeDef,
    // typeParameters
  };

  return typeAliasDef;
}
