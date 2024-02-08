import fs from "node:fs";
import path from "node:path";

import { glob } from "glob";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { getMDXExport } from "mdx-bundler/client";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { PageProps } from "@/pages/docs/[[...slug]]";
import type { Frontmatter } from "@/types/frontmatter";
import rehypeToc from "@stefanprobst/rehype-extract-toc";
import rehypeTocExport from "@stefanprobst/rehype-extract-toc/mdx";

export const DOCS_PATH = path.join(process.cwd(), "../docs");

const frontMatterRegEx =
  /(^---\n([\s\S\n]*?)---$\n\n)?(^_(.*)_$\n\n)?(^#(.*)$\n\n)?(^>(.*)$)?/m;

function cleanAndCapitalize(input: string): string {
  const cleaned = input.replace(/[^a-zA-Z ]/g, " ");
  const capitalized = cleaned.replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
  return capitalized;
}
export function getAllFrontmatter() {
  const paths = glob.sync(`${DOCS_PATH}/**/*.mdx`);
  const allFrontmatter = paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), "utf8");
    const { data } = matter(source);

    const slugFromPath = filePath
      .replace(`${DOCS_PATH}/`, "")
      .replace(/.mdx?$/, "");

    const sectionFromPath =
      slugFromPath.split("/")[slugFromPath.split("/").length - 2];

    const match = source.match(frontMatterRegEx);
    const section =
      data.section ??
      match?.[4]?.trim() ??
      data.section ??
      cleanAndCapitalize(sectionFromPath);
    const title =
      data.title ?? match?.[6]?.trim() ?? data.title ?? slugFromPath ?? "Index";
    const description = data.description ?? match?.[8]?.trim() ?? "";

    const frontMatter: Frontmatter = {
      ...data,
      description,
      title,
      section,
      slug: data.slug ?? slugFromPath,
      sort: data.sort ?? 0,
    };
    return frontMatter;
  });
  return allFrontmatter;
}

export async function getMdxBySlug(
  slugs: string[] | undefined,
): Promise<Omit<PageProps, "navigation">> {
  const slug = slugs?.join("/") ?? "README";

  let source = "";

  try {
    source = fs.readFileSync(path.join(DOCS_PATH, `${slug}.mdx`), "utf8");
  } catch (error) {
    /* empty */
  }

  try {
    source = fs.readFileSync(path.join(DOCS_PATH, `${slug}/index.mdx`), "utf8");
  } catch (error) {
    /* empty */
  }

  try {
    source = fs.readFileSync(
      path.join(DOCS_PATH, `${slug}/README.mdx`),
      "utf8",
    );
  } catch (error) {
    /* empty */
  }

  if (!source) {
    throw new Error(`No MDX file found for slug "${slug}"`);
  }

  const { frontmatter, code } = await bundleMDX({
    source: source.replace(frontMatterRegEx, ""),
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins || []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        [rehypeSlug, { prefix: "" }],
        rehypeToc,
        [rehypeTocExport, { name: "toc" }],
        [
          rehypePrettyCode,
          {
            keepBackground: false,
            theme: {
              dark: "github-dark-dimmed",
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
  const { toc } = getMDXExport(code);
  return {
    toc: toc ?? [],
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
}
