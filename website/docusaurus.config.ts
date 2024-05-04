import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "React DayPicker",
  tagline:
    "Customizable date picker component for React. Add date pickers, calendars, and date inputs to your web applications.",
  favicon: "img/favicon.ico",
  url: "https://react-day-picker.js.org",
  baseUrl: "/",
  organizationName: "gpbl", // Usually your GitHub org/user name.
  projectName: "react-day-picker", // Usually your repo name.

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
          editUrl: "https://github.com/gpbl/react-day-picker/tree/main",
          remarkPlugins: [
            require("@docusaurus/remark-plugin-npm2yarn"),
            [require("remark-github"), { repository: "gpbl/react-day-picker" }]
          ]
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

  themeConfig: {
    image: "img/social-card.jpg",
    // announcementBar: {
    // id: "announcement-v9", // Increment on change
    // content: ``,
    // },
    navbar: {
      title: "📅 React DayPicker",
      // logo: {
      //   alt: "DayPicker Logo",
      //   src: "img/logo.svg",
      //   srcDark: "img/logo_dark.svg"
      // },
      items: [
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
        //   dropdownActiveClassDisabled: true
        // },
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
        {
          href: "https://github.com/gpbl/react-day-picker",
          label: "GitHub",
          position: "left"
        }
        // {
        //   type: "search",
        //   position: "right"
        // }
      ]
    },
    footer: undefined,
    prism: {
      additionalLanguages: ["bash"],
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
