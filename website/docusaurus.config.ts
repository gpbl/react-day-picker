import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import pkg from "react-day-picker/package.json";

const config: Config = {
  title: "React DayPicker",
  tagline:
    "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications.",
  favicon: "img/favicon.ico",
  url: "https://daypicker.dev",
  baseUrl: "/",
  organizationName: "gpbl",
  projectName: "react-day-picker",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/gpbl/react-day-picker/tree/main/website",
          remarkPlugins: [
            require("@docusaurus/remark-plugin-npm2yarn"),
            [require("remark-github"), { repository: "gpbl/react-day-picker" }],
          ],
          lastVersion: "current",
          versions: {
            "8.10.1": {
              label: "8.10.1",
              badge: true,
              path: "/v8",
            },
            current: {
              label: `${pkg.version}`,
              path: "/",
              badge: false,
            },
          },
        },
        blog: false,
        theme: {
          customCss: ["../src/style.css", "./src/css/site.css"],
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  // Modern font
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig-docs.json",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/guides/accessibility",
            from: ["/docs/accessibility"],
          },
          {
            to: "/guides/translation",
            from: ["/docs/translation", "/localization/translating-daypicker"],
          },
          {
            to: "/localization/changing-locale",
            from: ["/docs/localization"],
          },
          {
            to: "/localization/setting-time-zone",
            from: ["/docs/time-zone"],
          },
          {
            to: "/localization/persian",
            from: ["/calendars/persian"],
          },
          {
            to: "/localization/buddhist",
            from: ["/calendars/buddhist"],
          },
          {
            to: "/localization/ethiopic",
            from: ["/calendars/ethiopic"],
          },
          {
            to: "/localization/hebrew",
            from: ["/calendars/hebrew"],
          },
          {
            to: "/docs/appearance",
            from: ["/docs/customization", "/customization"],
          },
          {
            to: "/selections/selection-modes",
            from: ["/docs/selection-modes"],
          },
        ],
      },
    ],
  ],

  scripts: [
    {
      src: "/q/p/script.js",
      defer: true,
      "data-domain": "daypicker.dev",
      "data-api": "/q/a/event",
    },
  ],

  future: {
    v4: {
      useCssCascadeLayers: true,
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  themeConfig: {
    image: "img/social-card.png",
    metadata: [
      {
        name: "og:description",
        content:
          "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications.",
      },
      {
        name: "description",
        content:
          "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications.",
      },
      {
        name: "keywords",
        content:
          "date picker, react component, calendar component, react datepicker, daypicker, react day picker, date-fns date picker, typescript date picker",
      },
    ],
    navbar: {
      title: "React DayPicker",
      logo: {
        alt: "DayPicker Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              href: "https://react-day-picker-v7.netlify.app",
              label: "7.4.10",
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentation",
        },
        {
          href: "/playground",
          label: "Playground",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "api",
          position: "left",
          label: "API Reference",
        },

        {
          href: "https://github.com/gpbl/react-day-picker/discussions",
          label: "Support",
          position: "right",
        },
        {
          href: "https://github.com/gpbl/react-day-picker",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: undefined,
    prism: {
      additionalLanguages: ["bash", "diff", "json", "css"],
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
    algolia: {
      appId: "N44150BS2A",
      apiKey: "263c558c76fc0b83a5def5fb818391d7",
      indexName: "react-day-picker-js",
      contextualSearch: true,
      searchPagePath: "search",
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
  },
  future: {
    v4: true,
    experimental_faster: true,
  } satisfies Preset.ThemeConfig,
};

export default config;
