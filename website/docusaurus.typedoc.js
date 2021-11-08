const pkgPath = '../packages/react-day-picker';
const typedoc = {
  // Typedoc settings
  entryPoints: [`${pkgPath}/src/main.ts`],
  tsconfig: `${pkgPath}/tsconfig.json`,
  allReflectionsHaveOwnDocument: true,
  readme: 'none',
  watch: process.env.TYPEDOC_WATCH,
  out: './api',

  // Markdown plugin settings
  hideBreadcrumbs: true,
  hideInPageTOC: true,
  indexTitle: 'API Reference'
};

module.exports = typedoc;
