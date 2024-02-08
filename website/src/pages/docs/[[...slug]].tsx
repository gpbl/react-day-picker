import React from "react";

import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticPathsResult } from "next";

import { DocPage } from "@/components/DocPage";
import { components } from "@/components/mdx-components";
import { getAllFrontmatter, getMdxBySlug } from "@/lib/mdx";
import { Navigation } from "@/types/docs";
import type { Frontmatter } from "@/types/frontmatter";
import type { Toc } from "@stefanprobst/rehype-extract-toc";

import { getDocNavigationForSlug } from "./getDocNavigationForSlug";

export interface PageProps {
  toc: Toc | null;
  frontmatter: Frontmatter;
  navigation: Navigation;
  code: string;
}

export default function Page({ code }: PageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}

Page.getLayout = (page: React.ReactNode, props: PageProps) => (
  <DocPage
    navigation={props.navigation}
    frontmatter={props.frontmatter}
    toc={props.toc ?? []}
  >
    {page}
  </DocPage>
);

export const getStaticPaths: GetStaticPaths = () => {
  const allFrontmatters = getAllFrontmatter();

  const staticPaths: GetStaticPathsResult = {
    paths: allFrontmatters.map((frontmatter) => {
      const slugs = frontmatter.slug.split("/");
      const lastSlug = slugs[slugs.length - 1];
      if (lastSlug === "README" || lastSlug === "index") {
        slugs.pop();
        slugs.push("");
      }
      return {
        params: {
          slug: slugs,
        },
      };
    }),
    fallback: false,
  };
  return staticPaths;
};

export const getStaticProps = async (context: { params: any }) => {
  const allFrontmatters = getAllFrontmatter();
  const slug = context.params.slug ?? ["README"];
  const { code, toc, frontmatter: mdxFrontmatter } = await getMdxBySlug(slug);
  const frontmatter =
    allFrontmatters.find(
      (frontmatter) => frontmatter.slug === slug.join("/"),
    ) ?? mdxFrontmatter;

  if (!frontmatter) {
    if (process.env.NODE_ENV === "development") {
      console.warn("No frontmatter found in for " + slug);
    }
  }

  const navigation = getDocNavigationForSlug(slug);
  const props: PageProps = { toc, navigation, frontmatter, code };
  return { props };
};
