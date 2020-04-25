import { startOfMonth } from 'date-fns';
import english from 'date-fns/locale/en-US';

import { DayPickerProps } from '../types';

import { MonthCaption } from '../../MonthCaption/MonthCaption';
import { Day } from '../../Day';
import { WeekNumber } from '../../WeekNumber';
import { Navigation } from '../../Navigation';

import { defaultClassNames } from './defaultClassNames';
import { defaultFormatCaption } from './defaultFormatCaption';
import { defaultFormatDay } from './defaultFormatDay';
import { defaultFormatWeekNumber } from './defaultFormatWeekNumber';
import { defaultFormatWeekdayName } from './defaultFormatWeekdayName';

/**
 * List the default props used by the [[DayPicker]] component.
 */
export const defaultProps: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: defaultClassNames,
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
  locale: english,
  nextLabel: '▶',
  daysClassNames: {},
  daysStyles: {},
  month: startOfMonth(new Date()),
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: '◀',
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false
};
