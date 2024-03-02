import fs from "node:fs";
import path from "node:path";

import { bundleMDX } from "mdx-bundler";
import { getMDXExport } from "mdx-bundler/client";
import rehypePrettyCode from "rehype-pretty-code";

import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import remarkInclude from "./remark-include.mjs";

import { autoFrontmatterRegExp } from "@/lib/docs";
import rehypeToc from "@stefanprobst/rehype-extract-toc";
import rehypeTocExport from "@stefanprobst/rehype-extract-toc/mdx";

export const DOCS_PATH = path.join(process.cwd(), "../docs");

export async function getMdxBySlug(slug: string[] | undefined) {
  const slugStr = slug?.join("/") ?? "index";

  const paths = [`${slugStr}.mdx`, `${slugStr}/index.mdx`];
  let source;
  for (const p of paths) {
    try {
      source = fs.readFileSync(path.join(DOCS_PATH, p), "utf8");
      break;
    } catch (error) {
      /* empty */
    }
  }

  if (!source) {
    throw new Error(`No MDX file found for slug "${slugStr}"`);
  }

  // Remove content that is already in the frontmatter
  const sourceWithoutFrontmatter = source.replace(autoFrontmatterRegExp, "");
  const mdx = await bundleMDX({
    source: sourceWithoutFrontmatter,
    mdxOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins || []),
        remarkInclude,
        [remarkGithub, { repository: "gpbl/react-day-picker" }],
        remarkGfm,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        [rehypeSlug, { behavior: "append" }],
        [rehypeToc],
        [rehypeTocExport, { name: "toc" }],
        [
          rehypePrettyCode,
          {
            keepBackground: false,
            theme: {
              dark: "github-dark",
              light: "github-light",
            },
            filterMetaString: (string: string) =>
              string.replace(/example="[^"]*"/, ""),
          },
        ],
      ];
      return options;
    },
  });
  const mdxExports = getMDXExport(mdx.code);
  return {
    toc: mdxExports.toc ?? [],
    code: mdx.code,
  };
}
