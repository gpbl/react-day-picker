// eslint-disable-next-line import/default
import nextra from 'nextra';
import currentGitBranchName from 'current-git-branch';
import path from 'path';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  webpack: (config, { dev, isServer }) => {
    // Only run this loader in development mode and on the client-side
    if (dev && !isServer) {
      config.module.rules.push({
        test: /\.js$/, // Adjust the regex to match the files you want to target
        use: ['source-map-loader'],
        enforce: 'pre',
        // Specify the directories or node modules here
        include: [path.resolve(__dirname, 'node_modules/react-day-picker')]
      });
    }

    return config;
  }
});

export default withNextra({
  productionBrowserSourceMaps: true,
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    GIT_BRANCH: currentGitBranchName()
  }
});
