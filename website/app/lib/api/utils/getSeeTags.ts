import { JSDocSeeTag, PropertySignature } from 'ts-morph';

export function getSeeTags(property: PropertySignature) {
  const jsDocTags = property.getJsDocs().flatMap((jsDoc) => jsDoc.getTags());
  return jsDocTags.filter((tag) => tag.getTagName() === 'see') as JSDocSeeTag[];
}
