import type { DocsNavProps } from "@/components/DocsNav";

export const docsNav: DocsNavProps["routes"] = [
  {
    pages: [{ title: "Introduction", slug: "" }],
  },
  {
    label: "Getting Started",
    pages: [
      { title: "License", slug: "license" },
      { title: "Installation", slug: "installation" },
      { title: "Upgrading", slug: "upgrading" },
      { title: "Community", slug: "community" },
      { title: "Funding", slug: "funding" },
    ],
  },
  {
    label: "Customization",
    pages: [
      { title: "Months Navigation", slug: "navigation" },
      { title: "Calendar Options", slug: "calendar-options" },
      { title: "Styling", slug: "styling" },
    ],
  },
  {
    label: "Selecting Days",
    pages: [
      { title: "Selection Modes", slug: "selection-modes" },
      { title: "Custom Selections", slug: "custom-selections" },
    ],
  },
  {
    label: "Internationalization",
    pages: [
      { title: "Localization", slug: "localization" },
      { title: "Labels", slug: "labels" },
      { title: "Formatters", slug: "formatters" },
      { title: "Date formats", slug: "date-formats" },
    ],
  },
  {
    label: "Advanced Guides",
    pages: [
      { title: "Custom Components", slug: "custom-components" },
      { title: "Custom Modifiers", slug: "custom-modifiers" },
    ],
  },
  {
    label: "Development",
    pages: [
      { title: "Contributing", slug: "contributing" },
      { title: "DayPicker Architecture", slug: "architecture" },
      { title: "Credits", slug: "credits" },
    ],
  },
];

export const api: DocsNavProps["routes"] = [
  {
    pages: [{ title: "Index", slug: "api" }],
  },
  {
    label: "Props",
    pages: [
      {
        title: "DayPickerProps",
        slug: "api/daypickerprops",
      },
    ],
  },
];
