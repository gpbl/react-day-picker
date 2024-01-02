export type Navigation = {
  title: string;
  href?: string;
  links?: Navigation[];
};

export const navigation: Navigation[] = [
  {
    title: 'Introduction',
    links: [
      {
        title: 'Getting started',
        href: '/'
      },
      {
        title: 'Learn By Examples',
        href: '/examples'
      }
    ]
  },
  {
    title: 'Examples',
    href: '/examples',
    links: [
      {
        title: 'Container Attributes',
        href: '/examples/container-attributes'
      }
    ]
  }
];
