// @ts-check
/* eslint-env node */
// eslint-disable-next-line import/default
import nextra from 'nextra';
import currentGitBranchName from 'current-git-branch';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

/** @type {import('next').NextConfig}*/
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    // @ts-expect-error wrong typings?
    GIT_BRANCH: currentGitBranchName()
  }
};

export default withNextra(nextConfig);
