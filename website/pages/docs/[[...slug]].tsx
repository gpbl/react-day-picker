import React, { useMemo } from "react";

import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";

import { components } from "@/components/mdx-components";
import {
  type Doc,
  getDocs,
  getDocsNavigation,
  type Navigation,
} from "@/lib/docs";
import { getMdxBySlug } from "@/lib/mdx";
import type { Toc } from "@stefanprobst/rehype-extract-toc";

export interface DocStaticProps {
  /** The current doc with its frontmatter */
  doc: Doc;
  /** The table of contents for the current page */
  toc: Toc | null;
  /** The side navigation for the current page, grouped by section. */
  sideNav: Record<string, Doc[]>;
  /** The compiled MDX code */
  code: string;
}

export default function Docs(props: DocStaticProps) {
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
  const slug = (context.params?.slug as string[]) ?? [""];
  const { code, toc } = await getMdxBySlug(slug);

  const doc = Object.values(allDocs).find(
    (doc) => doc.slug.join("/") === slug.join("/"),
  )!;

  const navigation = getDocsNavigation();

  const sideNavKey: keyof Navigation =
    doc.slug[0] !== "api"
      ? "guides"
      : doc.slug[1] === "next"
        ? "apiNext"
        : "apiMain";

  const props: DocStaticProps = {
    sideNav: navigation[sideNavKey] ?? [],
    doc,
    toc,
    code,
  };
  return { props };
}) satisfies GetStaticProps<DocStaticProps>;
