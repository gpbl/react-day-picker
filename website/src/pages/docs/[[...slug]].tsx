import React from "react";

import { getMDXComponent } from "mdx-bundler/client";

import { DocPage } from "@/components/DocsPage";
import { components } from "@/components/mdx-components";
import { getAllFrontmatter, getMdxBySlug } from "@/lib/mdx";
import type { Frontmatter } from "@/types/frontmatter";
import { GetStaticPaths, GetStaticPathsResult } from "next";
import { DocSectionName, Navigation } from "@/types/docs";

interface PageProps {
  frontmatter: Frontmatter;
  navigation: Navigation;
  code: string;
}

export default function Page({ code }: PageProps) {
  // const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const Component = getMDXComponent(code);

  return (
    <>
      {/* 
      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix Primitives`}
        description={frontmatter.metaDescription}
        image="primitives.png"
      /> */}

      <Component components={components} />

      {/* <QuickNav key={frontmatter.slug} /> */}
    </>
  );
}

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
  const { code, frontmatter } = await getMdxBySlug(slug);
  const foundFrontmatter = allFrontmatters.find(
    (frontmatter) => frontmatter.slug === slug.join("/"),
  );
  if (!foundFrontmatter) {
    console.error("No frontmatter found for", slug);
  }
  const navigation = getDocNavigationForSlug(slug);
  const staticProps: PageProps = {
    navigation,
    frontmatter: foundFrontmatter || frontmatter,
    code,
  };
  return {
    props: staticProps,
  };
};

Page.getLayout = function getLayout(page: React.ReactNode, props: PageProps) {
  return (
    <DocPage navigation={props.navigation} frontmatter={props.frontmatter}>
      {page}
    </DocPage>
  );
};

function getDocNavigationForSlug(slug: string[]): Navigation {
  const allFrontmatters = getAllFrontmatter();

  if (slug && slug[0] === "api") {
    return [];
  } else {
    const frontmatters = allFrontmatters.filter(
      (frontmatter) => !frontmatter.slug.startsWith("api"),
    );
    const navigation = frontmatters.reduce((acc, frontmatter) => {
      const section = (frontmatter.section as DocSectionName) ?? "";
      let sectionIndex = acc.findIndex((a) => a.label === section);
      if (sectionIndex === -1) {
        acc.push({ label: section, frontmatters: [] });
        sectionIndex = acc.length - 1;
      }
      acc[sectionIndex].frontmatters.push(frontmatter);
      return acc;
    }, [] as Navigation);

    const sectionSorting: DocSectionName[] = [
      "Introduction",
      "Getting Started",
      "Customization",
      "Selecting Days",
      "Internationalization",
      "Advanced Guides",
      "Development",
    ];

    // sort navigation by the section sorting array
    navigation.sort((a, b) => {
      const aIndex = sectionSorting.indexOf(a.label);
      const bIndex = sectionSorting.indexOf(b.label);
      if (aIndex === -1 && bIndex === -1) return a.label.localeCompare(b.label);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    // sort frontmatters within each section based on frontmatter's sort property
    navigation.forEach((section) => {
      section.frontmatters.sort((a, b) => {
        return (a.sort ? Number(a.sort) : 0) - (b.sort ? Number(b.sort) : 0);
      });
    });

    return navigation;
  }
}
