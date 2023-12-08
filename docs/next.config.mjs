// eslint-disable-next-line import/default
import nextra from 'nextra';
import currentGitBranchName from 'current-git-branch';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  webpack: (config) => {
    config.module.rules.push({
      test: /react-day-picker/,
      enforce: 'pre',
      use: ['source-map-loader']
    });
    return config;
  }
});

export default withNextra({
  productionBrowserSourceMaps: true,
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true
  },
  images: {
    unoptimized: true
  },
  env: {
    GIT_BRANCH: currentGitBranchName()
  }
});
