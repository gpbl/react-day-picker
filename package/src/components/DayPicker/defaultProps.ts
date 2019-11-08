import locale from 'date-fns/locale/en-US';
import { startOfMonth, format } from 'date-fns';

import { FormatOptions, DayPickerProps } from 'types';
import { Caption } from 'components/Caption/Caption';
import { Day } from 'components/Day/Day';
import { WeekNumber } from 'components/WeekNumber/WeekNumber';
import { Navigation } from 'components/Navigation/Navigation';

import { defaultClassNames } from './defaultClassNames';

function formatDay(day: Date, formatOptions?: FormatOptions): string {
  return format(day, 'd', formatOptions);
}

function formatCaption(month: Date, formatOptions?: FormatOptions): string {
  return format(month, 'LLLL Y', formatOptions);
}

function formatWeekdayName(day: Date, formatOptions?: FormatOptions): string {
  return format(day, 'E', formatOptions);
}

function formatWeekNumber(weekNumber: number): string {
  return `${weekNumber}`;
}

export const defaultProps: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: defaultClassNames,
  className: '',
  style: {},
  styles: {},
  components: {
    Caption,
    Day,
    Navigation,
    WeekNumber,
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  locale,
  nextLabel: '▶',
  modifiersClassNames: {},
  modifiersStyles: {},
  month: startOfMonth(new Date()),
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: '◀',
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
};
