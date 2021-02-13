import english from 'date-fns/locale/en-US';
import { DayPickerProps } from 'types';

import { Caption } from '../../Caption/Caption';
import { Day } from '../../Day/Day';
import { Navigation } from '../../Navigation';
import { NextIcon } from '../../NextIcon';
import { PrevIcon } from '../../PrevIcon';
import { Row } from '../../Row';
import { defaultClassNames } from './defaultClassNames';
import { defaultLabels } from './defaultLabels';
import { defaultModifiersClassNames } from './defaultModifiersClassNames';
import { formatCaption } from '../utils/formatCaption';
import { formatDay } from '../utils/formatDay';
import { formatWeekdayName } from '../utils/formatWeekdayName';
import { formatWeekNumber } from '../utils/formatWeekNumber';

export const defaultProps: DayPickerProps = {
  labelsFormatters: defaultLabels,
  enableOutsideDaysClick: false,
  classNames: defaultClassNames,
  className: '',
  components: {
    Caption,
    Day,
    Navigation,
    NextIcon,
    PrevIcon,
    Week: Row
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  initialMonth: undefined,
  locale: english,
  modifiersClassNames: defaultModifiersClassNames,
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
