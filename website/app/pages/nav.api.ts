import type { DocsNavProps } from "@/components/DocsNav";

import apiExports from "@/data/api-exports.json";

const apiPages = apiExports.map((category) => {
  const categoryKey = Object.keys(category)[0] as keyof typeof category;
  return {
    label: categoryKey,
    pages:
      category[categoryKey]?.map((item) => ({
        title: item.name,
        slug: `api/` + item.url.replace(/\.mdx?$/, ""),
        deprecated: item.deprecated,
        // icon and preview are not available in the original data
      })) ?? [],
  };
});

export function apiNav(): DocsNavProps["routes"] {
  return [
    {
      pages: [{ title: "Index", slug: "api/index" }],
    },
    ...apiPages,
  ];
}
