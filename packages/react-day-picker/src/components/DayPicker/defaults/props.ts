import { startOfMonth } from 'date-fns';
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
import { DEFAULT_CLASSNAMES } from './classNames';

export const defaultLocale = english;
export const defaultFormatCaption = formatCaption;
export const defaultFormatDay = formatDay;
export const defaultFormatWeekdayName = formatWeekdayName;
export const defaultFormatWeekNumber = formatWeekNumber;

/**
 * List the default props used by the [[DayPicker]] component.
 */
export const DEFAULT_PROPS: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: DEFAULT_CLASSNAMES,
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
  today: new Date()
};
