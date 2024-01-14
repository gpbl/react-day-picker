import path from 'node:path';

import { readFile } from './fs.server';
import { bundleMDX } from './mdx.server';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

export type Frontmatter = {
  section?: string;
  title?: string;
  description?: string;
  sort?: string;
};

const DOCS_PATH = path.join(process.cwd(), './docs');

/** Get the frontmatter and code for a single page */
export async function getDoc(slug: string) {
  const filePath = path.join(DOCS_PATH, `${slug}.mdx`);

  const [source] = await Promise.all([readFile(filePath, 'utf-8')]);

  const page = await bundleMDX<Frontmatter>({
    source: source,
    cwd: process.cwd(),
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? [])
        // () => remarkMdxCodeMeta()
        // myRemarkPlugin
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrettyCode
      ];

      return options;
    }
  });

  return page;
}

// /**
//  * Get all frontmatter for all docs
//  */
// export async function getDocs() {
//   const filePath = path.join(process.cwd(), 'app');

//   const paths = await readdir(filePath, {
//     withFileTypes: true
//   });

//   const docs = await Promise.all(
//     paths.map(async (docPath) => {
//       const fPath = path.join(filePath, docPath.name);
//       const [file] = await Promise.all([readFile(fPath)]);
//       const frontMatterResult = parseFrontMatter(file.toString());
//       const frontmatter = frontMatterResult.attributes as Frontmatter;

//       return {
//         slug: docPath.name.replace(/\.md/, ''),
//         frontmatter: {
//           ...frontmatter
//         }
//       };
//     })
//   );
//   return docs;
// }
