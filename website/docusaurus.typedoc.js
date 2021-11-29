const pkgPath = '../packages/react-day-picker';
const typedoc = {
  // Typedoc settings
  entryPoints: [`${pkgPath}/src/main.ts`],
  tsconfig: `${pkgPath}/tsconfig.json`,
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
