import { useMemo } from "react";

import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";

import { components } from "@/components/mdx-components";

import {
  getDocs,
  getDocsNavigation,
  type Doc,
  type DocsNavigation,
} from "@/lib/docs";
import { getMdxBySlug } from "@/lib/mdx";
import type { Toc } from "@stefanprobst/rehype-extract-toc";

export interface DocsStaticProps {
  /** The current doc with its frontmatter */
  doc: Doc;
  /** The table of contents for the current page */
  toc: Toc | null;
  /** The navigation for the current page, grouped by section. */
  navigation: Record<string, Doc[]>;
  /** The compiled MDX code */
  code: string;
}

export default function Docs(props: DocsStaticProps) {
  const Component = useMemo(() => getMDXComponent(props.code), [props.code]);
  return <Component components={components} />;
}

export const getStaticPaths = (async () => {
  const docs = getDocs();
  return {
    paths: docs.map((doc) => {
      return { params: { slug: doc.slug } };
    }),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const allDocs = getDocs();
  const navigation = getDocsNavigation(allDocs);

  const slug = (context.params?.slug as string[]) ?? [""];
  const { code, toc } = await getMdxBySlug(slug);

  const doc = Object.values(allDocs).find(
    (doc) => doc.slug.join("/") === slug.join("/"),
  )!;

  const sideNavKey: keyof DocsNavigation =
    doc.slug[0] !== "api"
      ? "guides"
      : doc.slug[1] === "next"
        ? "apiNext"
        : "apiMain";

  const props: DocsStaticProps = {
    navigation: navigation[sideNavKey] ?? [],
    doc,
    toc,
    code,
  };
  return { props };
}) satisfies GetStaticProps<DocsStaticProps>;
