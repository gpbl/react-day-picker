import fs from "node:fs";
import path from "node:path";

import { glob } from "glob";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import type { Frontmatter } from "@/types/frontmatter";

export const DOCS_PATH = path.join(process.cwd(), "../docs");

export function getAllFrontmatter() {
  const paths = glob.sync(`${DOCS_PATH}/**/*.mdx`);
  const allFrontmatter = paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), "utf8");
    const { data } = matter(source);
    const slug = filePath.replace(`${DOCS_PATH}/`, "").replace(".mdx", "");

    const titleMatch = source.match(/# (.*)\n/m);
    const descriptionMatch = source.match(/# .*\n\n([\w].*)[^\n]/m);

    const frontMatter: Frontmatter = {
      ...data,
      description: data.description ?? descriptionMatch?.[1] ?? "",
      section: data.section ?? "",
      slug: data.slug ?? slug,
      sort: data.sort ?? 0,
      title: data.title ?? titleMatch?.[1] ?? slug ?? "Index",
    };
    return frontMatter;
  });
  return allFrontmatter;
}

/** Since the title added by DocsPage, we won't have it here. */
function replaceFirstH1FollowedByHr(content: string) {
  return content.replace(/#\s+(.*)\s+\n/, "").replace(/---\n\n/, "");
}

export async function getMdxBySlug(slugs: string[] | undefined) {
  const slug = slugs?.join("/") ?? "README";

  let source = "";

  try {
    source = fs.readFileSync(path.join(DOCS_PATH, `${slug}.mdx`), "utf8");
  } catch (error) {
    // empty
  }

  try {
    source = fs.readFileSync(path.join(DOCS_PATH, `${slug}/index.mdx`), "utf8");
  } catch (error) {
    // empty
  }

  try {
    source = fs.readFileSync(
      path.join(DOCS_PATH, `${slug}/README.mdx`),
      "utf8",
    );
  } catch (error) {
    // empty
  }

  if (!source) {
    throw new Error(`No MDX file found for slug "${slug}"`);
  }
  const { frontmatter, code } = await bundleMDX({
    source: replaceFirstH1FollowedByHr(source),
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins || []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        rehypeSlug,
        [rehypeToc, { cssClasses: { toc: "DocToc" } }],
        [
          rehypePrettyCode,
          {
            keepBackground: false,
            theme: {
              dark: "github-dark-dimmed",
              light: "github-light",
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
}
