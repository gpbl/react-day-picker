import type { JSDoc } from 'ts-morph';

export function parseJsDocs(jsDocs: JSDoc[]) {
  return jsDocs
    .map((jsDoc) => {
      return jsDoc.getCommentText()?.trim();
    })
    .join('\n');
}
