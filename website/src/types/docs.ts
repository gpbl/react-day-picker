import { Frontmatter } from "./frontmatter";

export type NavigationSection = {
  label: DocSectionName;
  frontmatters: Frontmatter[];
};

export type Navigation = Array<NavigationSection>;

export type DocSectionName =
  | "Introduction"
  | "Getting Started"
  | "Customization"
  | "Selecting Days"
  | "Internationalization"
  | "Advanced Guides"
  | "Development";
