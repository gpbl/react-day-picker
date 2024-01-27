import path from 'node:path';

import { type Node } from 'ts-morph';
import { toJsxCode } from './toJsxCode.ts';

export interface NodeDef {
  name: string;
  endLine: number;
  sourceFile: string;
  startLine: number;
  text: string;
  kind: string;
  slug: string;
  typeDef: string;
  typeDefJsx: string;
}

export async function createNodeDef(node: Node) {
  const sourceFile = path.relative(
    '../src',
    node.getSourceFile().getFilePath()
  );
  const startLine = node.getStartLineNumber();
  const endLine = node.getEndLineNumber();
  const text = node.getText();
  const kind = node.getKindName();
  const name = node.getSymbol()?.getName() || 'node';
  const slug = name.toLowerCase();

  const typeDef = node
    .getType()
    .getText()
    .replace(/import\(.*\)\./, '');
  
  

  const typeDefJsx = await toJsxCode('`' + typeDef + '`');

  const nodeDef: NodeDef = {
    name,
    slug,
    startLine,
    endLine,
    text,
    kind,
    sourceFile,
    typeDef,
    typeDefJsx
  };
  return nodeDef;
}
