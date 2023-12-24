// @ts-check
/* eslint-env node */
// eslint-disable-next-line import/default
import nextra from 'nextra';

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
  transpilePackages: ['react-day-picker']
};

export default withNextra(nextConfig);
