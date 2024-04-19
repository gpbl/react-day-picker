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
  toc?: boolean;
  pagination?: boolean;
  navigationLabel?: string;
  section?: string;
  deprecated?: boolean;
};

export type DocSectionName =
  | "Introduction"
  | "Using DayPicker"
  | "Advanced Guides"
  | "About DayPicker";

export type APISectionName = "Functions" | "Interfaces";

export type Doc = {
  slug: string[];
  title: string;
  navigationLabel: string;
  description: string;
  section: string;
  toc: boolean;
  pagination: boolean;
  sort: number;
  path: string;
  deprecated: boolean;
};

const DOCS_PATH = path.join(process.cwd(), "../docs");
const DOCS_SORTBY = [
  "Introduction",
  "Using DayPicker",
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
  /(^---\n([\s\S\n]*?)---$\n\n)?(^_(.*)_$\n\n)?(^#{1} (.*)$\n\n)?/m;

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

    const { data: frontmatter } = matter(content) as { data: Frontmatter };

    const title = frontmatter.title ?? firstHeading ?? slug[slug.length - 1];

    const doc: Doc = {
      toc: frontmatter.toc ?? true,
      pagination: frontmatter.pagination ?? true,
      sort: frontmatter.sort ? parseInt(frontmatter.sort) : 100,
      section: frontmatter.section ?? section ?? slug[0],
      description: frontmatter.description ?? "",
      title,
      navigationLabel: frontmatter.navigationLabel ?? "",
      slug,
      path: `${slug.join("/")}`.replace(/\/$/, ""),
      deprecated: frontmatter.deprecated ?? false,
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
    grouped[key].sort((a, b) => {
      if (a.sort === b.sort) {
        return a.title.localeCompare(b.title);
      }
      return a.sort - b.sort;
    });
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
      } else if (doc.slug.join("/").startsWith("api/latest")) {
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
