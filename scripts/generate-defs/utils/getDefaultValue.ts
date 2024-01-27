import { JSDocUnknownTag, PropertySignature } from 'ts-morph';

export function getDefaultValue(property: PropertySignature) {
  const jsDocTags = property.getJsDocs().flatMap((jsDoc) => jsDoc.getTags());
  const defaultTag = jsDocTags.filter(
    (tag) => tag.getTagName() === 'defaultValue'
  ) as JSDocUnknownTag[] | undefined;
  const defaultValueText = defaultTag?.[0]?.getCommentText();
  return defaultValueText;
}
