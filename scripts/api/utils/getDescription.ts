import type { JSDocableNode } from 'ts-morph';

export function getDescription(node: JSDocableNode) {
  return node
    .getJsDocs()
    .map((jsDoc) => {
      return jsDoc.getCommentText();
    })
    .join('\n');
}
