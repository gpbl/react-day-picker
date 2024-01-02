// @ts-check

import path from 'node:path';

import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false
  },
  pageExtensions: ['mdx', 'md', 'ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      include: /examples/,
      resolve: {
        alias: {
          'react-day-picker': path.resolve('./node_modules/react-day-picker')
        }
      }
    });
    return config;
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypePrettyCode]
    // providerImportSource: "@mdx-js/react",// If you use `MDXProvider`, uncomment the following line.
  }
});

export default withMDX(nextConfig);
