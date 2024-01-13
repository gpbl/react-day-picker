import path from 'node:path';

import { readFile } from './fs.server';
import { bundleMDX } from './mdx.server';

export type Frontmatter = {
  section?: string;
  title?: string;
  description?: string;
  sort?: string;
};

const DOCS_PATH = path.join(process.cwd(), '../docs');

/** Get the frontmatter and code for a single page */
export async function getDocPage(slug: string) {
  const filePath = path.join(DOCS_PATH, `${slug}.md`);

  const [source] = await Promise.all([readFile(filePath, 'utf-8')]);

  const sourceNoFirstHeading = source.replace(/^# .*$/m, '');
  const page = await bundleMDX<Frontmatter>({
    source: sourceNoFirstHeading,
    cwd: process.cwd()
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
