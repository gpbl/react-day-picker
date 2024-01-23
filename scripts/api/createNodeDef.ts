import { Node } from 'ts-morph';
import path from 'node:path';
import { NodeDef } from './types.ts';

export function createNodeDef(node: Node) {
  const filePath = path.relative('../', node.getSourceFile().getFilePath());
  const startLine = node.getStartLineNumber();
  const endLine = node.getEndLineNumber();
  const text = node.getText();

  const nodeDef: NodeDef = {
    startLine,
    endLine,
    text,
    filePath
  };
  return nodeDef;
}
