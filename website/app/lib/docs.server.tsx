import fs from 'node:fs';
import path from 'node:path';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkGitContributors from 'remark-git-contributors';

import { readFile } from '@/lib/fs.server';
import { bundleMDX } from '@/lib/mdx.server';

export type Frontmatter = {
  section?: string;
  title?: string;
  description?: string;
  sort?: string;
};

const MDX_PATH = path.join(process.cwd(), './app/pages');

/** Get the frontmatter and code for a single page */
export async function getDoc(slug: string, subPath = '') {
  let filePath = path.resolve(MDX_PATH, subPath, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    filePath = path.resolve(MDX_PATH, subPath, `${slug}.md`);
  }

  const [source] = await Promise.all([readFile(filePath, 'utf-8')]);

  const prettyCodeOptions: Parameters<typeof rehypePrettyCode>[0] = {
    keepBackground: false,
    theme: {
      dark: 'github-dark',
      light: 'light-plus'
    }
  };

  const page = await bundleMDX<Frontmatter>({
    source: source,
    cwd: process.cwd(),
    mdxOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkGitContributors
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, prettyCodeOptions],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'before' }]
      ];

      return options;
    }
  });

  return page;
}
