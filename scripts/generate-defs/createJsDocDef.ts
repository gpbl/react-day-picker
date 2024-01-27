import rehypePrettyCode from 'rehype-pretty-code';

import { JSDocableNode } from 'ts-morph';

import { getDeprecated } from './utils/getDeprecated.ts';
import { parseJsDocs } from './utils/parseJsDocs.ts';
import { getSeeTags } from './utils/getSeeTags.ts';
import { toJsxCode } from './toJsxCode.ts';

export interface JSDocDef {
  shortComment: string;
  shortCommentJsx: string;
  comment: string;
  commentJsx: string;
  deprecated: string | false;
  see: (string | undefined)[] | undefined;
}

export const prettyCodeOptions: Parameters<typeof rehypePrettyCode>[0] = {
  keepBackground: true,
  theme: {
    dark: 'github-dark',
    light: 'light-plus'
  }
};

export async function createJsDocDef(jsDocableNode: JSDocableNode) {
  const jsDocs = jsDocableNode.getJsDocs();

  const shortComment = jsDocs[0]?.getCommentText()?.split('\n')?.[0] ?? '';
  const shortCommentJsx = await toJsxCode(shortComment);
  const comment = parseJsDocs(jsDocs);
  const commentJsx = await toJsxCode(comment);

  const see = getSeeTags(jsDocableNode).map((tag) => {
    // is there a bug in ts-morph to get the full URLs?
    return tag.getCommentText()?.replace('://', 'https://');
  });
  const deprecated = getDeprecated(jsDocableNode) ?? false;

  const jsdocDef: JSDocDef = {
    deprecated,
    comment,
    commentJsx,
    shortComment,
    shortCommentJsx,
    see
  };

  return jsdocDef;
}
