import path from 'node:path';

import { type Node } from 'ts-morph';

export interface NodeDef {
  name: string;
  endLine: number;
  sourceFile: string;
  startLine: number;
  text: string;
  kind: string;
  slug: string;
  typeDef: string;
}

export function createNodeDef(node: Node) {
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

  const nodeDef: NodeDef = {
    name,
    slug,
    startLine,
    endLine,
    text,
    kind,
    sourceFile,
    typeDef
  };
  return nodeDef;
}
