const typedoc = {
  // Typedoc settings
  entryPoints: [`../packages/react-day-picker/src/main.ts`],
  tsconfig: `../packages/react-day-picker/tsconfig.json`,
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
