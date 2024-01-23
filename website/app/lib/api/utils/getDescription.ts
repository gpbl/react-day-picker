import { PropertySignature } from 'ts-morph';

export function getDescription(property: PropertySignature) {
  return property
    .getJsDocs()
    .map((jsDoc) => {
      return jsDoc.getCommentText();
    })
    .join('\n');
}
