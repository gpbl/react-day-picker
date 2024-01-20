import { DocsNavProps } from '../components/DocsNav';

export const apiRoutes: DocsNavProps['routes'] = [
  {
    pages: [
      {
        title: 'Index',
        slug: 'api'
      }
    ]
  },
  {
    label: 'DayPickerProps',
    pages: [
      {
        title: 'ClassName',
        slug: 'api/daypickerprops#classname'
      }
    ]
  },
  {
    label: 'Hooks',
    pages: [
      {
        title: 'useDayPicker',
        slug: 'api/hooks#useDayPicker'
      },
      {
        title: 'useCalendar',
        slug: 'api/hooks#useCalendar'
      }
    ]
  }
];
