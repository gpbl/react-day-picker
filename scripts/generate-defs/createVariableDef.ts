import { VariableDeclaration } from 'ts-morph';

import { createNodeDef, type NodeDef } from './createNodeDef.ts';
import { JSDocDef } from './createJsDocDef.ts';

export interface VariableDef extends NodeDef, JSDocDef {}

export async function createVariableDef(
  variableDeclaration: VariableDeclaration
) {
  const nodeDef = createNodeDef(variableDeclaration);

  const variableDef: VariableDef = {
    ...nodeDef,
    comment: '',
    commentJsx: '',
    shortComment: '',
    shortCommentJsx: '',
    deprecated: '',
    see: undefined
  };

  return variableDef;
}
