import { bundleMDX } from 'mdx-bundler';
import rehypePrettyCode from 'rehype-pretty-code';
import { jsdocLinksToMarkdown } from './utils/jsdocLinksToMarkdown.ts';
import { prettyCodeOptions } from './createJsDocDef.ts';

export async function toJsxCode(mdx: string) {
  const jsxCode = await bundleMDX({
    source: jsdocLinksToMarkdown(mdx),
    esbuildOptions: (options) => {
      options.target = 'es2020';
      return options;
    },
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, prettyCodeOptions]
      ];
      return options;
    }
  });
  return jsxCode.code;
}
