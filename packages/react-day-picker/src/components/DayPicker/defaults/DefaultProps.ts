import english from 'date-fns/locale/en-US';

import { Day } from '../../Day';
import { MonthCaption } from '../../MonthCaption/MonthCaption';
import { Navigation } from '../../Navigation';
import { WeekNumber } from '../../WeekNumber';
import { formatCaption } from '../formatters/formatCaption';
import { formatDay } from '../formatters/formatDay';
import { formatWeekdayName } from '../formatters/formatWeekdayName';
import { formatWeekNumber } from '../formatters/formatWeekNumber';
import { DayPickerProps } from '../types';
import { DefaultClassNames } from './DefaultClassNames';

export const defaultLocale = english;
export const defaultFormatCaption = formatCaption;
export const defaultFormatDay = formatDay;
export const defaultFormatWeekdayName = formatWeekdayName;
export const defaultFormatWeekNumber = formatWeekNumber;

export const DefaultProps: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: DefaultClassNames,
  className: '',
  style: {},
  styles: {},
  components: {
    MonthCaption,
    Day,
    Navigation,
    WeekNumber
  },
  fixedWeeks: false,
  formatCaption: defaultFormatCaption,
  formatDay: defaultFormatDay,
  formatWeekdayName: defaultFormatWeekdayName,
  formatWeekNumber: defaultFormatWeekNumber,
  locale: defaultLocale,
  nextLabel: '▶',
  modifiersClassNames: {},
  modifiersStyles: {},
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: '◀',
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  today: new Date()
};
