import english from 'date-fns/locale/en-US';
import { DayPickerProps } from 'types';

import { Caption } from '../Caption/Caption';
import { Day } from '../Day/Day';
import { Navigation } from '../Navigation';
import { NextIcon } from '../NextIcon';
import { PrevIcon } from '../PrevIcon';
import { Week } from '../Week';
import classNames from './defaultClassNames';
import { defaultLabels } from './defaultLabels';
import { formatCaption } from './formatters/formatCaption';
import { formatDay } from './formatters/formatDay';
import { formatWeekdayName } from './formatters/formatWeekdayName';
import { formatWeekNumber } from './formatters/formatWeekNumber';

export const defaultProps: DayPickerProps = {
  labelsFormatters: defaultLabels,
  enableOutsideDaysClick: false,
  classNames,
  className: '',
  components: {
    Caption,
    Day,
    Navigation,
    NextIcon,
    PrevIcon,
    Week
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  initialMonth: new Date(),
  locale: english,
  modifiersClassNames: {},
  month: new Date(),
  numberOfMonths: 1,
  pagedNavigation: false,
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  today: new Date()
};
