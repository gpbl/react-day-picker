import { bundleMDX } from 'mdx-bundler';
import { getDeprecated } from './utils/getDeprecated.ts';
import { getDescription } from './utils/getDescription.ts';
import { getSeeTags } from './utils/getSeeTags.ts';
import { jsdocLinksToMarkdown } from './utils/jsdocLinksToMarkdown.ts';
import { JSDocableNode } from 'ts-morph';
import { JSDocDef } from './types.ts';

export async function createJsDocDef(jsDocableNode: JSDocableNode) {
  const description = getDescription(jsDocableNode);

  const descriptionJsx = (
    await bundleMDX({
      source: jsdocLinksToMarkdown(description)
    })
  ).code;

  const see = getSeeTags(jsDocableNode).map((tag) => {
    // is there a bug in ts-morph to get the full URLs?
    return tag.getCommentText()?.replace('://', 'https://');
  });
  const deprecated = getDeprecated(jsDocableNode) ?? false;

  const jsdocDef: JSDocDef = {
    deprecated,
    description,
    descriptionJsx,
    see
  };

  return jsdocDef;
}
