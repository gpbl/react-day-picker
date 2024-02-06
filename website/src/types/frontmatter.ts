export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
  sort: string;

  navigationLabel?: string;

  publishedAt?: string;
  metaImage?: string;
  features?: string[];
  version?: string;
  versions?: string[];
  aria?: string;
  name?: string;
  publishedName?: string;
  section?: string;
  sourcePath?: string;
};
