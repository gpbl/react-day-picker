/** @type {import("next").NextConfig} NextConfig */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  distDir: "build",
  cleanDistDir: true,
  output: "export",
};

export default nextConfig;
