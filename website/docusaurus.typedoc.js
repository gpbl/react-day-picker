/* eslint-env node */
const typedoc = {
  // Typedoc settings
  entryPoints: [`../src/index.ts`],
  tsconfig: `../tsconfig.build.json`,
  allReflectionsHaveOwnDocument: true,
  entryDocument: 'reference',
  watch: process.env.TYPEDOC_WATCH,
  out: './api',

  // Markdown plugin settings
  hideBreadcrumbs: true,
  hideInPageTOC: true,
  indexTitle: 'Exports',
  publicPath: '/api/'
};

module.exports = typedoc;
