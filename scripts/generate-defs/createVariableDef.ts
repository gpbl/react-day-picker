import { VariableDeclaration } from 'ts-morph';

import { createNodeDef, type NodeDef } from './createNodeDef.ts';

export type VariableDef = NodeDef;

export async function createVariableDef(
  variableDeclaration: VariableDeclaration
) {
  const nodeDef = await createNodeDef(variableDeclaration);

  const variableDef: VariableDef = {
    ...nodeDef
  };

  return variableDef;
}
