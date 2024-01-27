import { FunctionDeclaration } from 'ts-morph';

import { createJsDocDef, type JSDocDef } from './createJsDocDef.ts';
import { createNodeDef, type NodeDef } from './createNodeDef.ts';

export interface FunctionDef extends NodeDef, JSDocDef {}

export async function createFunctionDef(
  functionDeclaration: FunctionDeclaration
) {
  const nodeDef = await createNodeDef(functionDeclaration);
  const jsDocDef = await createJsDocDef(functionDeclaration);

  const typeAliasDef: FunctionDef = {
    ...jsDocDef,
    ...nodeDef
  };

  return typeAliasDef;
}
