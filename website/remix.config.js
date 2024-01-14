/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: ['@radix-ui/themes', 'rehype-shijij'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'build/index.js'
};
