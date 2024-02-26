import fs from "node:fs";
import path from "node:path";

import { glob } from "glob";
import matter from "gray-matter";

export type DocsNavigation = {
  /** The navigation for the main docs. */
  guides: Record<DocSectionName, Doc[]>;
  /** The navigation for the API docs (main branch). */
  apiMain: Record<APISectionName, Doc[]>;
  /** The navigation for the API docs (next branch). */
  apiNext: Record<APISectionName, Doc[]>;
};

export type Frontmatter = {
  title?: string;
  description?: string;
  sort?: string;
  navigationLabel?: string;
  section?: string;
};

export type DocSectionName =
  | "Introduction"
  | "Getting Started"
  | "Advanced Guides"
  | "About DayPicker";

export type APISectionName = "Functions" | "Interfaces";

export type Doc = {
  slug: string[];
  title: string;
  navigationLabel?: string;
  description: string;
  section: string;
  sort: number;
  path: string;
};

const DOCS_PATH = path.join(process.cwd(), "../docs");
const DOCS_SORTBY = [
  "Introduction",
  "Getting Started",
  "Advanced Guides",
  "About DayPicker",
];

/**
 * Parses the start of a document to detect section title or description when in
 * the form;
 *
 *     _section_
 *
 *     # Title
 *
 *     > Description
 */
export const autoFrontmatterRegExp =
  /(^---\n([\s\S\n]*?)---$\n\n)?(^_(.*)_$\n\n)?(^#{1} (.*)$\n\n)?(^>(.*)$)?/m;

export function getDocs(): Doc[] {
  const filenames = glob.sync(`${DOCS_PATH}/**/*.{md,mdx}`);
  const docs = filenames.map((filename) => {
    const slug = filename
      .replace(DOCS_PATH, "")
      .replace(/\.mdx?$/, "")
      .replace("index", "")
      .split(path.sep)
      .filter((part) => part);

    const content = fs.readFileSync(filename, "utf8");

    const frontmatterMatch = content.match(autoFrontmatterRegExp);

    const section = frontmatterMatch ? frontmatterMatch[4]?.trim() : null;
    const firstHeading = frontmatterMatch ? frontmatterMatch[6]?.trim() : null;
    const description = frontmatterMatch ? frontmatterMatch[8]?.trim() : null;

    const { data } = matter(content) as { data: Frontmatter };

    const title = data.title ?? firstHeading ?? slug[slug.length - 1];

    const doc: Doc = {
      sort: data.sort ? parseInt(data.sort) : 100,
      section: data.section ?? section ?? slug[0],
      description: data.description ?? description ?? "",
      title,
      navigationLabel: data.navigationLabel ?? "",
      slug,
      path: `docs/${slug.join("/")}`.replace(/\/$/, ""),
    };
    return doc;
  });

  return docs;
}

export function getDocBySlug(slug: string[]): Doc | null {
  const allDocs = getDocs();
  return allDocs.find((doc) => doc.slug.join("/") === slug.join("/")) ?? null;
}

export function getDocsNavigation(docsArray: Doc[]): DocsNavigation {
  const grouped = docsArray.reduce(
    (groups, doc) => {
      const key = doc.section;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(doc);
      return groups;
    },
    {} as Record<string, Doc[]>,
  );
  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => a.sort - b.sort);
  });

  const docs: Record<string, Doc[]> = {};
  const apiNext: Record<string, Doc[]> = {};
  const apiMain: Record<string, Doc[]> = {};

  Object.keys(grouped).forEach((section) => {
    grouped[section].forEach((doc) => {
      if (doc.slug.join("/").startsWith("api/next")) {
        if (!apiNext[section]) {
          apiNext[section] = [];
        }
        apiNext[section].push(doc);
      } else if (doc.slug.join("/").startsWith("api/main")) {
        if (!apiMain[section]) {
          apiMain[section] = [];
        }
        apiMain[section].push(doc);
      } else {
        if (!docs[section]) {
          docs[section] = [];
        }
        docs[section].push(doc);
      }
    });
  });

  const sortedDocs: Record<string, Doc[]> = {};

  DOCS_SORTBY.forEach((section) => {
    if (docs[section]) {
      sortedDocs[section] = docs[section];
    }
  });
  return { guides: sortedDocs, apiNext, apiMain: apiMain };
}
