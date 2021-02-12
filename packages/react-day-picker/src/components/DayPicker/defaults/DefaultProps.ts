import english from 'date-fns/locale/en-US';

import { Caption } from '../../Caption/Caption';
import { Day } from '../../Day';
import { Navigation } from '../../Navigation';
import { NextIcon } from '../../NextIcon';
import { PrevIcon } from '../../PrevIcon';
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
export const defaultNumberOfMonths = 1;

export const DefaultProps: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: DefaultClassNames,
  className: '',
  style: {},
  styles: {},
  components: {
    Caption,
    Day,
    Navigation,
    WeekNumber,
    NextIcon,
    PrevIcon
  },
  fixedWeeks: false,
  formatCaption: defaultFormatCaption,
  formatDay: defaultFormatDay,
  formatWeekdayName: defaultFormatWeekdayName,
  formatWeekNumber: defaultFormatWeekNumber,
  locale: defaultLocale,
  modifiersClassNames: {},
  modifiersStyles: {},
  numberOfMonths: defaultNumberOfMonths,
  pagedNavigation: false,
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  today: new Date()
};
