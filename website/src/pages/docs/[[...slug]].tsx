import React from "react";

import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";

import { components } from "@/components/mdx-components";
import { Doc, getDocs, getDocsNavigation, Navigation } from "@/lib/docs";
import { getMdxBySlug } from "@/lib/mdx";
import type { Toc } from "@stefanprobst/rehype-extract-toc";

interface PageProps {
  doc: Doc;
  /** All the docs with their frontmatter */
  allDocs: Doc[];
  /** The table of contents for the current page */
  toc: Toc | null;
  navigation: Navigation;
  code: string;
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

  const props: PageProps = {
    navigation,
    allDocs,
    doc,
    toc,
    code,
  };
  return { props };
}) satisfies GetStaticProps<PageProps>;

export default function Page(props: PageProps) {
  const Component = React.useMemo(
    () => getMDXComponent(props.code),
    [props.code],
  );
  return <Component components={components} />;
}
