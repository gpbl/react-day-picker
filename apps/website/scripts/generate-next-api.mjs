import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import typedocPlugin from "docusaurus-plugin-typedoc";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(scriptDir, "..");
const repoRoot = path.resolve(siteDir, "../..");
const nextDocsDir = path.join(siteDir, "versioned_docs/version-next");
const nextApiDir = path.join(nextDocsDir, "api");
const nextVersionPath = "/next";
const dayPickerUrl = "https://daypicker.dev";
const nextSidebarsPath = path.join(
  siteDir,
  "versioned_sidebars/version-next-sidebars.json",
);

const packages = [
  {
    name: "@daypicker/react",
    slug: "react",
    description:
      "Core DayPicker exports: the React component, props, custom component contracts, hooks, utilities, formatters, labels, and shared types.",
    entryPoint: "packages/react/src/index.ts",
    tsconfig: "packages/react/tsconfig.json",
  },
  {
    name: "@daypicker/buddhist",
    slug: "buddhist",
    description:
      "Buddhist calendar exports, including the Thai calendar DayPicker component, locale constants, and date-library helpers.",
    entryPoint: "packages/buddhist/src/index.tsx",
    tsconfig: "packages/buddhist/tsconfig.json",
  },
  {
    name: "@daypicker/ethiopic",
    slug: "ethiopic",
    description:
      "Ethiopic calendar exports, including the Ethiopic DayPicker component, locale constants, and date-library helpers.",
    entryPoint: "packages/ethiopic/src/index.tsx",
    tsconfig: "packages/ethiopic/tsconfig.json",
  },
  {
    name: "@daypicker/hebrew",
    slug: "hebrew",
    description:
      "Hebrew calendar exports, including the Hebrew DayPicker component, locale constants, and date-library helpers.",
    entryPoint: "packages/hebrew/src/index.tsx",
    tsconfig: "packages/hebrew/tsconfig.json",
  },
  {
    name: "@daypicker/hijri",
    slug: "hijri",
    description:
      "Hijri calendar exports, including the Umm al-Qura DayPicker component, locale constants, and date-library helpers.",
    entryPoint: "packages/hijri/src/index.tsx",
    tsconfig: "packages/hijri/tsconfig.json",
  },
  {
    name: "@daypicker/persian",
    slug: "persian",
    description:
      "Persian calendar exports, including the Jalali DayPicker component, locale constants, and date-library helpers.",
    entryPoint: "packages/persian/src/index.tsx",
    tsconfig: "packages/persian/tsconfig.json",
  },
];

const typedocOptions = {
  includeVersion: true,
  basePath: repoRoot,
  categorizeByGroup: true,
  groupOrder: [
    "DayPicker",
    "Props",
    "Classes",
    "Components",
    "Formatters",
    "Labels",
    "Utilities",
    "Hooks",
    "Contexts",
    "*",
  ],
  readme: "none",
  suppressCommentWarningsInDeclarationFiles: true,
  excludePrivate: true,
  excludeExternals: true,
  excludeProtected: true,
  sort: ["alphabetical"],
  entryFileName: "index.md",
  expandObjects: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  preserveAnchorCasing: false,
  typeDeclarationFormat: "table",
  parametersFormat: "table",
  expandParameters: false,
  propertiesFormat: "list",
  propertyMembersFormat: "list",
  enumMembersFormat: "table",
  indexFormat: "table",
  tableColumnSettings: {
    hideDefaults: false,
    hideInherited: false,
    hideModifiers: false,
    hideOverrides: false,
    hideSources: true,
    hideValues: false,
    leftAlignHeaders: false,
  },
};

const rootApiOutputNames = [
  "classes",
  "enumerations",
  "functions",
  "interfaces",
  "type-aliases",
  "variables",
  "typedoc-sidebar.cjs",
  "index.md",
];

const context = {
  siteDir,
  siteConfig: {
    presets: [
      [
        "classic",
        {
          docs: {
            path: "./versioned_docs/version-next",
          },
        },
      ],
    ],
  },
};

function writeApiIndex() {
  const packageRows = packages
    .map(
      ({ name, slug, description }) =>
        `| [${name}](${slug}/index.md) | ${description} |`,
    )
    .join("\n");

  fs.writeFileSync(
    path.join(nextApiDir, "index.md"),
    `# API Reference

Use this reference to inspect the exported APIs for DayPicker and its calendar packages. Start with [@daypicker/react](react/index.md) for the core component API, then use the calendar package pages when you import a calendar-specific DayPicker.

## Packages

| Package | Use it for |
| --- | --- |
${packageRows}

## Common Tasks

- Configure the calendar with [DayPicker](react/functions/DayPicker.md) and [DayPickerProps](react/type-aliases/DayPickerProps.md).
- Customize rendered elements with [Components](react/index.md#components) and [CustomComponents](react/type-aliases/CustomComponents.md).
- Translate labels and formatted text with [Labels](react/type-aliases/Labels.md) and [Formatters](react/type-aliases/Formatters.md).
- Use a calendar package when you need its calendar-specific DayPicker, locales, or date-library helpers.

## Components

Component contracts live in [@daypicker/react](react/index.md#components). Use the [Components](react/index.md#components) group to inspect the default renderers and [CustomComponents](react/type-aliases/CustomComponents.md) to see which components can be replaced with the \`components\` prop.
`,
  );
}

function readPackageSidebar(slug) {
  const require = createRequire(import.meta.url);
  const sidebarPath = path.join(nextApiDir, slug, "typedoc-sidebar.cjs");
  return require(sidebarPath);
}

function getMarkdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(entryPath);
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      return [entryPath];
    }
    return [];
  });
}

function localizeNextApiUrls(content) {
  return content.replaceAll(
    `${dayPickerUrl}/api/`,
    `${dayPickerUrl}${nextVersionPath}/api/`,
  );
}

function postprocessGeneratedMarkdown(outputDir) {
  for (const filePath of getMarkdownFiles(outputDir)) {
    const content = fs.readFileSync(filePath, "utf8");
    const nextContent = localizeNextApiUrls(content);
    fs.writeFileSync(filePath, nextContent);
  }

  const indexPath = path.join(outputDir, "index.md");
  const indexContent = fs.readFileSync(indexPath, "utf8");
  fs.writeFileSync(
    indexPath,
    indexContent.replace(/^# (@daypicker\/\S+)(.*)$/m, "# `$1`$2"),
  );
}

function updateNextSidebar() {
  const sidebars = JSON.parse(fs.readFileSync(nextSidebarsPath, "utf8"));

  sidebars.api = [
    "api/index",
    ...packages.map(({ name, slug }) => ({
      type: "category",
      label: name,
      link: {
        type: "doc",
        id: `api/${slug}/index`,
      },
      items: readPackageSidebar(slug),
    })),
  ];

  fs.writeFileSync(nextSidebarsPath, `${JSON.stringify(sidebars, null, 2)}\n`);
}

fs.mkdirSync(nextApiDir, { recursive: true });
for (const outputName of rootApiOutputNames) {
  fs.rmSync(path.join(nextApiDir, outputName), {
    recursive: true,
    force: true,
  });
}
for (const pkg of packages) {
  fs.rmSync(path.join(nextApiDir, pkg.slug), { recursive: true, force: true });
}

process.chdir(repoRoot);

for (const pkg of packages) {
  const outDir = path.join(nextApiDir, pkg.slug);
  await typedocPlugin(context, {
    ...typedocOptions,
    name: pkg.name,
    entryPoints: [pkg.entryPoint],
    tsconfig: pkg.tsconfig,
    out: outDir,
  });
  postprocessGeneratedMarkdown(outDir);
}

writeApiIndex();
updateNextSidebar();
