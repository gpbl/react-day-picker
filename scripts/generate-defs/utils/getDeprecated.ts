import { JSDocDeprecatedTag, JSDocableNode } from 'ts-morph';

export function getDeprecated(node: JSDocableNode) {
  const jsDocTags = node.getJsDocs().flatMap((jsDoc) => jsDoc.getTags());
  const deprecatedTags = jsDocTags.filter(
    (tag) => tag.getTagName() === 'deprecated'
  ) as JSDocDeprecatedTag[] | undefined;
  const deprecatedText = deprecatedTags?.[0]?.getCommentText();
  return deprecatedText;
}
