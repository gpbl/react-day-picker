import { getAllFrontmatter } from "@/lib/mdx";
import { DocSectionName, Navigation } from "@/types/docs";

export function getDocNavigationForSlug(slug: string[]): Navigation {
  const allFrontmatters = getAllFrontmatter();

  if (slug && slug[0] === "api") {
    const apiFrontmatters = allFrontmatters.filter((frontmatter) =>
      frontmatter.slug.startsWith("api"),
    );
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
