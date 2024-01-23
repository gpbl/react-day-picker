import { JSDocDeprecatedTag, PropertySignature } from 'ts-morph';

export function getDeprecated(property: PropertySignature) {
  const jsDocTags = property.getJsDocs().flatMap((jsDoc) => jsDoc.getTags());
  const deprecatedTags = jsDocTags.filter(
    (tag) => tag.getTagName() === 'deprecated'
  ) as JSDocDeprecatedTag[] | undefined;
  const deprecatedText = deprecatedTags?.[0]?.getCommentText();
  return deprecatedText;
}
