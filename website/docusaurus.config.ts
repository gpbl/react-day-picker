import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import path from "path";
import { themes as prismThemes } from "prism-react-renderer";
import pkg from "react-day-picker/package.json";

const config: Config = {
  title: "React DayPicker",
  tagline:
    "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications.",
  favicon: "img/favicon.ico",
  url: "https://react-day-picker.js.org",
  baseUrl: "/",
  organizationName: "gpbl",
  projectName: "react-day-picker",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"]
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
            [require("remark-github"), { repository: "gpbl/react-day-picker" }]
          ],
          lastVersion: "8.10.1",
          versions: {
            "8.10.1": {
              label: "8.10.1",
              badge: false
            },
            current: {
              label: `${pkg.version}`,
              path: "next"
            }
          }
        },
        blog: false,
        theme: {
          customCss: [
            "./src/css/custom.css",
            "./src/css/docusaurus-reset.css",
            "../src/style.css"
          ]
        }
      } satisfies Preset.Options
    ]
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig-docs.json"
      }
    ]
  ],

  themeConfig: {
    announcementBar: {
      id: "9-beta", // Any unique string
      content:
        '📆 Preview: try the <a href="/next">beta version of DayPicker v9</a>.',
      backgroundColor: "rebeccapurple",
      textColor: "white"
    },
    image: "img/social-card.png",
    metadata: [
      {
        name: "og:description",
        content:
          "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications."
      },
      {
        name: "description",
        content:
          "Date picker component for React. Add date pickers, calendars, and date inputs to your web applications."
      },
      {
        name: "keywords",
        content:
          "date picker, react component, calendar component, react datepicker, daypicker, react day picker, date-fns date picker, typescript date picker"
      }
    ],
    navbar: {
      title: "React DayPicker",
      logo: {
        alt: "DayPicker Logo",
        src: "img/logo.png"
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
              label: "7.4.10"
            }
          ]
        },
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentation"
        },
        {
          type: "docSidebar",
          sidebarId: "api",
          position: "left",
          label: "API Reference"
        },
        // {
        //   href: "/playground",
        //   label: "Playground",
        //   position: "left"
        // },

        {
          href: "https://github.com/gpbl/react-day-picker/discussions",
          label: "Support",
          position: "right"
        },
        {
          href: "https://github.com/gpbl/react-day-picker",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: undefined,
    prism: {
      additionalLanguages: ["bash", "diff"],
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula
    },
    algolia: {
      appId: "N44150BS2A",
      apiKey: "42c559dd71da40a168be6f6d81d2bbbc",
      indexName: "react-day-picker-js",
      contextualSearch: true,
      searchPagePath: "search"
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true
    }
  } satisfies Preset.ThemeConfig
};

export default config;
