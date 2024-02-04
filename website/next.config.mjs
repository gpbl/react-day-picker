import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { bundledLanguages, getHighlighter } from "shiki";

/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import createMDX from "@next/mdx";

/** @type {NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  keepBackground: false,
  theme: "github-light",
  // getHighlighter: async (options) => {
  //   const highlighter = await getHighlighter({
  //     ...options,
  //     paths: {
  //       themes: "https://cdn.jsdelivr.net/npm/shiki@latest/themes",
  //       wasm: "https://cdn.jsdelivr.net/npm/shiki@latest/dist",
  //       languages: "https://cdn.jsdelivr.net/npm/shiki@latest/languages",
  //     },
  //     langs: bundledLanguages,
  //   });
  //   return highlighter;
  // },
};

/** @type {import('@next/mdx').Options} */
const mdxOptions = {
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
  rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
};

const withMDX = createMDX({
  options: mdxOptions,
});

export default withMDX(nextConfig);
