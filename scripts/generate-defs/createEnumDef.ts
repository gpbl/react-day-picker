import { EnumDeclaration } from 'ts-morph';
import { NodeDef, createNodeDef } from './createNodeDef.ts';
import { JSDocDef, createJsDocDef } from './createJsDocDef.ts';

export interface EnumDef extends NodeDef, JSDocDef {}

export async function createEnumDef(enumDeclaration: EnumDeclaration) {
  const nodeDef = await createNodeDef(enumDeclaration);
  const jsDocDef = await createJsDocDef(enumDeclaration);
  const enumDef: EnumDef = {
    ...jsDocDef,
    ...nodeDef
  };
  return enumDef;
}
