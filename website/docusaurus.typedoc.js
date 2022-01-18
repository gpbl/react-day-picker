/* eslint-env node */
const typedoc = {
  // Typedoc settings
  entryPoints: [`../packages/react-day-picker/src/index.ts`],
  tsconfig: `../packages/react-day-picker/tsconfig.build.json`,
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
