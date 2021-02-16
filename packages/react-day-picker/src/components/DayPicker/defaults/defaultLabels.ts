import { format, Locale } from 'date-fns';

import { Labels } from '../../../types';

export const defaultLabels: Required<Labels> = {
  nextLabel: (month, options?: { locale?: Locale }) => {
    return `Go to next month: ${format(month, 'LLLL Y', options)}`;
  },
  prevLabel: (month, options?: { locale?: Locale }) => {
    return `Go to previous month: ${format(month, 'LLLL Y', options)}`;
  },
  dayLabel: (day, _, options?: { locale?: Locale }) => {
    return format(day, 'PPPP', options);
  },
  weekdayLabel: (day, options?: { locale?: Locale }) => {
    return format(day, 'ccc', options);
  },
  weekNumberLabel: (n) => {
    return `Week n. ${n}`;
  }
};
