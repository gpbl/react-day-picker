import { DocsNavProps } from './DocsNav';

export const docsRoutes: DocsNavProps['routes'] = [
  {
    pages: [{ title: 'Introduction', slug: '' }]
  },
  {
    label: 'Getting Started',
    pages: [
      { title: 'License', slug: 'docs/license' },
      { title: 'Installation', slug: 'docs/installation' },
      { title: 'Community', slug: 'docs/community' },

      { title: 'Funding', slug: 'docs/funding' }
    ]
  },
  {
    label: 'Customization',
    pages: [
      { title: 'Months Navigation', slug: 'docs/navigation' },
      { title: 'Calendar Options', slug: 'docs/calendar-options' },
      { title: 'Styling', slug: 'docs/styling' }
    ]
  },
  {
    label: 'Selecting Days',
    pages: [
      { title: 'Selection Modes', slug: 'docs/selection-modes' },
      { title: 'Custom Selections', slug: 'docs/custom-selections' }
    ]
  },
  {
    label: 'Internationalization',
    pages: [
      { title: 'Localization', slug: 'docs/localization' },
      { title: 'Labels', slug: 'docs/labels' },
      { title: 'Formatters', slug: 'docs/formatters' },
      { title: 'Date formats', slug: 'docs/date-formats' }
    ]
  },
  {
    label: 'Advanced Guides',
    pages: [
      { title: 'Custom Components', slug: 'docs/custom-components' },
      { title: 'Custom Modifiers', slug: 'docs/modifiers' }
    ]
  },
  {
    label: 'Development',
    pages: [
      { title: 'Contributing', slug: 'docs/contributing' },
      { title: 'DayPicker Architecture', slug: 'docs/architecture' },
      { title: 'Aknowledgements', slug: 'docs/aknowledgements' }
    ]
  }
];
