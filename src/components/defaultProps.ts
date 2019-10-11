import locale from 'date-fns/locale/en-US';
import { startOfMonth, format } from 'date-fns';

import { Caption } from './Caption';
import { Day } from './Day';
import { Head } from './Head';
import { Month } from './Month';
import { Navigation } from './Navigation';
import { Week } from './Week';
import { DayPicker } from 'types/DayPicker';
import { defaultClassNames } from './defaultClassNames';

interface FormatOptions {
  locale?: Locale;
}

function formatDay(day: Date, formatOptions?: FormatOptions): React.ReactNode {
  return format(day, 'd', formatOptions);
}

function formatCaption(
  month: Date,
  formatOptions: FormatOptions
): React.ReactNode {
  return format(month, 'LLLL yyyy', formatOptions);
}

function formatWeekdayName(
  day: Date,
  formatOptions: FormatOptions
): React.ReactNode {
  return format(day, 'E', formatOptions);
}

function formatWeekNumber(weekNumber: Number): React.ReactNode {
  return weekNumber;
}

const defaultProps: DayPicker = {
  enableOutsideDaysClick: false,
  classNames: defaultClassNames,
  className: '',
  style: {},
  components: {
    Caption,
    Day,
    Head,
    Month,
    Navigation,
    Week,
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  locale,
  month: startOfMonth(new Date()),
  nextLabel: '▶',
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: '◀',
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  startDay: new Date(),
  startLabel: '●',
  styles: {},
};

export default defaultProps;
