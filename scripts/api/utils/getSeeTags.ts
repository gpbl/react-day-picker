import { JSDocSeeTag, JSDocableNode } from 'ts-morph';

export function getSeeTags(property: JSDocableNode) {
  const jsDocTags = property.getJsDocs().flatMap((jsDoc) => jsDoc.getTags());
  return jsDocTags.filter((tag) => tag.getTagName() === 'see') as JSDocSeeTag[];
}
